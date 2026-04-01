import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";

const KEY_GROUPS = [
  {
    white: { id: "play-do", key: "A", label: "C", note: "C4" },
    black: { id: "play-do-sharp", key: "W", label: "C#", note: "C#4" }
  },
  {
    white: { id: "play-re", key: "S", label: "D", note: "D4" },
    black: { id: "play-re-sharp", key: "E", label: "D#", note: "D#4" }
  },
  {
    white: { id: "play-mi", key: "D", label: "E", note: "E4" }
  },
  {
    white: { id: "play-fa", key: "F", label: "F", note: "F4" },
    black: { id: "play-fa-sharp", key: "T", label: "F#", note: "F#4" }
  },
  {
    white: { id: "play-sol", key: "G", label: "G", note: "G4" },
    black: { id: "play-sol-sharp", key: "Y", label: "G#", note: "G#4" }
  },
  {
    white: { id: "play-la", key: "H", label: "A", note: "A4" },
    black: { id: "play-la-sharp", key: "U", label: "A#", note: "A#4" }
  },
  {
    white: { id: "play-ti", key: "J", label: "B", note: "B4" }
  },
  {
    white: { id: "play-do-2", key: "K", label: "C", note: "C5" }
  }
];

const KEYBOARD_NOTE_MAP = KEY_GROUPS.flatMap((group) => [group.white, group.black].filter(Boolean)).reduce(
  (map, keyData) => ({ ...map, [keyData.key.toLowerCase()]: keyData.note }),
  {}
);

const DEFAULT_ENVELOPE = {
  attack: 0.1,
  decay: 0.2,
  sustain: 0.5,
  release: 0.5
};

function noteFromMidi(midiNoteNumber) {
  if (midiNoteNumber < 21 || midiNoteNumber > 108) {
    return null;
  }

  return Tone.Frequency(midiNoteNumber, "midi").toNote();
}

export default function WebSynth() {
  const shellRef = useRef(null);
  const synthRef = useRef(null);
  const masterGainRef = useRef(null);
  const vibratoRef = useRef(null);
  const activeKeyboardKeysRef = useRef(new Set());
  const midiAccessRef = useRef(null);

  const [waveform, setWaveform] = useState("sine");
  const [attack, setAttack] = useState(DEFAULT_ENVELOPE.attack);
  const [decay, setDecay] = useState(DEFAULT_ENVELOPE.decay);
  const [sustain, setSustain] = useState(DEFAULT_ENVELOPE.sustain);
  const [release, setRelease] = useState(DEFAULT_ENVELOPE.release);
  const [detune, setDetune] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [velocityEnabled, setVelocityEnabled] = useState(true);
  const [vibratoEnabled, setVibratoEnabled] = useState(false);
  const [currentNote, setCurrentNote] = useState("Ready");
  const [midiConnected, setMidiConnected] = useState(false);
  const [activeNotes, setActiveNotes] = useState([]);

  useEffect(() => {
    const masterGain = new Tone.Gain(volume).toDestination();
    const compressor = new Tone.Compressor({
      threshold: -24,
      ratio: 12,
      attack: 0.003,
      release: 0.1
    });
    const vibrato = new Tone.Vibrato({
      frequency: 2,
      depth: 0.4,
      wet: vibratoEnabled ? 1 : 0
    });

    const synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: waveform },
      envelope: DEFAULT_ENVELOPE,
      volume: -4,
      detune
    }).connect(vibrato.connect(compressor.connect(masterGain)));

    synthRef.current = synth;
    masterGainRef.current = masterGain;
    vibratoRef.current = vibrato;

    const startAudio = async () => {
      if (Tone.context.state !== "running") {
        await Tone.start();
      }
    };

    const shell = shellRef.current;
    shell?.addEventListener("pointerdown", startAudio, { once: true });

    return () => {
      shell?.removeEventListener("pointerdown", startAudio);
      synth.dispose();
      vibrato.dispose();
      compressor.dispose();
      masterGain.dispose();
    };
  }, []);

  useEffect(() => {
    if (!synthRef.current) {
      return;
    }

    synthRef.current.set({
      oscillator: { type: waveform },
      envelope: {
        attack,
        decay,
        sustain,
        release
      },
      detune
    });
  }, [attack, decay, detune, release, sustain, waveform]);

  useEffect(() => {
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (vibratoRef.current) {
      vibratoRef.current.wet.value = vibratoEnabled ? 1 : 0;
    }
  }, [vibratoEnabled]);

  useEffect(() => {
    const activateNote = (note) => {
      setCurrentNote(note);
      setActiveNotes((current) => (current.includes(note) ? current : [...current, note]));
    };

    const releaseNote = (note) => {
      setActiveNotes((current) => current.filter((entry) => entry !== note));
      setCurrentNote((current) => (current === note ? "Ready" : current));
    };

    const handleKeyDown = async (event) => {
      const note = KEYBOARD_NOTE_MAP[event.key.toLowerCase()];

      if (!note || activeKeyboardKeysRef.current.has(event.key.toLowerCase()) || !synthRef.current) {
        return;
      }

      if (Tone.context.state !== "running") {
        await Tone.start();
      }

      activeKeyboardKeysRef.current.add(event.key.toLowerCase());
      synthRef.current.triggerAttack(note, undefined, velocityEnabled ? 0.7 : 1);
      activateNote(note);
    };

    const handleKeyUp = (event) => {
      const lowerKey = event.key.toLowerCase();
      const note = KEYBOARD_NOTE_MAP[lowerKey];

      if (!note || !synthRef.current) {
        return;
      }

      activeKeyboardKeysRef.current.delete(lowerKey);
      synthRef.current.triggerRelease(note);
      releaseNote(note);
    };

    const handleMIDIMessage = (event) => {
      if (!synthRef.current) {
        return;
      }

      const [status, midiNoteNumber, midiVelocity] = event.data;
      const note = noteFromMidi(midiNoteNumber);

      if (!note) {
        return;
      }

      if ((status & 0xf0) === 0x90 && midiVelocity > 0) {
        synthRef.current.triggerAttack(note, undefined, velocityEnabled ? midiVelocity / 127 : 0.8);
        activateNote(note);
        return;
      }

      if ((status & 0xf0) === 0x80 || ((status & 0xf0) === 0x90 && midiVelocity === 0)) {
        synthRef.current.triggerRelease(note);
        releaseNote(note);
      }
    };

    const attachMidiInputs = (access) => {
      let connectedInputs = 0;

      access.inputs.forEach((input) => {
        if (input.state === "connected") {
          input.onmidimessage = handleMIDIMessage;
          connectedInputs += 1;
        }
      });

      setMidiConnected(connectedInputs > 0);
    };

    const setupMIDI = async () => {
      if (!navigator.requestMIDIAccess) {
        return;
      }

      try {
        const access = await navigator.requestMIDIAccess();
        midiAccessRef.current = access;
        attachMidiInputs(access);
        access.onstatechange = () => attachMidiInputs(access);
      } catch {
        setMidiConnected(false);
      }
    };

    setupMIDI();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      if (midiAccessRef.current) {
        midiAccessRef.current.inputs.forEach((input) => {
          input.onmidimessage = null;
        });
        midiAccessRef.current.onstatechange = null;
      }
    };
  }, [velocityEnabled]);

  const handlePointerDown = async (note) => {
    if (!synthRef.current) {
      return;
    }

    if (Tone.context.state !== "running") {
      await Tone.start();
    }

    synthRef.current.triggerAttack(note, undefined, velocityEnabled ? 0.8 : 1);
    setCurrentNote(note);
    setActiveNotes((current) => (current.includes(note) ? current : [...current, note]));
  };

  const handlePointerUp = (note) => {
    if (!synthRef.current) {
      return;
    }

    synthRef.current.triggerRelease(note);
    setActiveNotes((current) => current.filter((entry) => entry !== note));
    setCurrentNote((current) => (current === note ? "Ready" : current));
  };

  return (
    <section className="music-synth-shell" ref={shellRef}>
      <div className="music-synth-panel">
        <div className="music-synth-header">
          <div>
            <p className="music-synth-kicker">Integrated Web Synth</p>
            <h2>Play with mouse, keyboard, or MIDI</h2>
          </div>
          <div className="music-midi-status">
            <span>MIDI</span>
            <span className={`music-midi-led${midiConnected ? " connected" : ""}`} />
          </div>
        </div>

        <div className="music-control-card">
          <div className="music-waveforms">
            {["sine", "square", "sawtooth", "triangle"].map((type) => (
              <label className={`music-waveform-option${waveform === type ? " active" : ""}`} key={type}>
                <input
                  checked={waveform === type}
                  name="waveform"
                  onChange={() => setWaveform(type)}
                  type="radio"
                  value={type}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>

          <div className="music-toggle-row">
            <label className="music-slider-control">
              <span>Volume</span>
              <input
                max="1"
                min="0"
                onChange={(event) => setVolume(parseFloat(event.target.value))}
                step="0.01"
                type="range"
                value={volume}
              />
            </label>
            <label className="music-toggle-control">
              <span>Velocity</span>
              <input
                checked={velocityEnabled}
                onChange={(event) => setVelocityEnabled(event.target.checked)}
                type="checkbox"
              />
              <strong>{velocityEnabled ? "ON" : "OFF"}</strong>
            </label>
            <label className="music-toggle-control">
              <span>Vibrato</span>
              <input
                checked={vibratoEnabled}
                onChange={(event) => setVibratoEnabled(event.target.checked)}
                type="checkbox"
              />
              <strong>{vibratoEnabled ? "ON" : "OFF"}</strong>
            </label>
          </div>
        </div>

        <div className="music-display-row">
          <div className="music-note-display">
            <span>Current note</span>
            <strong>{currentNote}</strong>
          </div>
          <label className="music-slider-control compact">
            <span>Pitch</span>
            <input
              max="1200"
              min="-1200"
              onChange={(event) => setDetune(parseInt(event.target.value, 10))}
              step="1"
              type="range"
              value={detune}
            />
            <em>{detune}</em>
          </label>
        </div>

        <div className="music-keyboard">
          {KEY_GROUPS.map((group) => (
            <div className="music-key-group" key={group.white.id}>
              <button
                className={`music-key white${activeNotes.includes(group.white.note) ? " active" : ""}`}
                onMouseDown={() => handlePointerDown(group.white.note)}
                onMouseLeave={() => handlePointerUp(group.white.note)}
                onMouseUp={() => handlePointerUp(group.white.note)}
                onTouchEnd={() => handlePointerUp(group.white.note)}
                onTouchStart={() => handlePointerDown(group.white.note)}
                type="button"
              >
                <span>{group.white.label}</span>
                <small>{group.white.key}</small>
              </button>
              {group.black ? (
                <button
                  className={`music-key black${activeNotes.includes(group.black.note) ? " active" : ""}`}
                  onMouseDown={() => handlePointerDown(group.black.note)}
                  onMouseLeave={() => handlePointerUp(group.black.note)}
                  onMouseUp={() => handlePointerUp(group.black.note)}
                  onTouchEnd={() => handlePointerUp(group.black.note)}
                  onTouchStart={() => handlePointerDown(group.black.note)}
                  type="button"
                >
                  <span>{group.black.label}</span>
                  <small>{group.black.key}</small>
                </button>
              ) : null}
            </div>
          ))}
        </div>

        <div className="music-envelope-card">
          <p className="music-synth-kicker">Envelope</p>
          <div className="music-envelope-grid">
            <label className="music-slider-control">
              <span>Attack</span>
              <input
                max="2"
                min="0.01"
                onChange={(event) => setAttack(parseFloat(event.target.value))}
                step="0.01"
                type="range"
                value={attack}
              />
              <em>{attack.toFixed(2)}s</em>
            </label>
            <label className="music-slider-control">
              <span>Decay</span>
              <input
                max="2"
                min="0.01"
                onChange={(event) => setDecay(parseFloat(event.target.value))}
                step="0.01"
                type="range"
                value={decay}
              />
              <em>{decay.toFixed(2)}s</em>
            </label>
            <label className="music-slider-control">
              <span>Sustain</span>
              <input
                max="1"
                min="0"
                onChange={(event) => setSustain(parseFloat(event.target.value))}
                step="0.01"
                type="range"
                value={sustain}
              />
              <em>{sustain.toFixed(2)}</em>
            </label>
            <label className="music-slider-control">
              <span>Release</span>
              <input
                max="3"
                min="0.01"
                onChange={(event) => setRelease(parseFloat(event.target.value))}
                step="0.01"
                type="range"
                value={release}
              />
              <em>{release.toFixed(2)}s</em>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
