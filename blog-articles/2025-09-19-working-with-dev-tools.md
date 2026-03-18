---
title: "Working with Dev Tools"
date: 2025-09-19
authors: [dani]
tags: [AI]
---

# What are the DevTools

## Before dev tools?

There was a time before devtools were a thing. But websites and web development were simpler as well. As the web grows in complexity, devtools appear as a necessary tool.

When you are just a user, a browser is just a window that allows you to access the internet and maybe do other things like keeping cookies or saving your navigation history. But when you're a web developer, your browser is one of your primary tools. Modern browsers are packed with a plethora of features, APIs, and tools. Console, Cookie, and the Network section probably are the most used tools from the devtools set. But there's so much more. Indeed, there are so many tools in the dev panel that we ignore most of them.

## Settings

At the top right you have the gear icon for the DevTools settings. There you can select some stuff, like theme or language. For me, the most useful here is `preserve logs` and `enable local overrides`. You can also disable JavaScript for the page. You can also enable your settings sync in your profile, so this way you have the same setting across all your devices or, if you get a new machine. You can Also edit the devices and throttling from here. You can also edit the locations to debug apps that use Geolocation API (used in Sensors Tab).

## Navigation

Pressing CMD + Shift + P opens the command box. You can run commands (similar to VS Code). This makes it easy to access any tab from there. Using commands you can also toggle light or dark mode(emulate), take screenshots, enable or disable JavaScript, clear site data, search for files, and much more.

## Preserving and sending logs

You can preserve logs in the Console tab and in the Network tab. Maybe the most useful is the network tab. This is useful if you want to check what happens when you reload the page and compare different logs. Also, exporting HAR files can help you to debug sending the logs to someone or just saving them or even attaching to a JIRA ticket.

## Switching devices and viewports

This is very useful tool that allows you simulate different screen sizes and devices. This comes in handy while building or debugging responsive apps. Yo can select from the existing devices or define your own wiewport. Once you toggle the Device Toolbar, you can go to device list and cselect one or create one according to your needs. The `Responsive` device allows you to easly check all the breakpoints and transformations while resizing. You can rotate your device and also apply the throttling.

## Network

Use filter to filter some responses that you may know the name or have some clue. You can invert the filter to filter out something, like annoying repetitive logs. You can use the Find icon at the left to look for a specifica value inside all the assets that the browser has downloaded.

Filter: Lets you narrow down results to only show responses that match certain criteria. You can also invert the filter to hide results, which is useful for ignoring noisy or repetitive logs.

Find: Searches for a specific value or keyword across all loaded assets (HTML, JS, CSS, etc.) that the browser has downloaded, making it easier to locate where something is coming from.

## Debugging CSS

## Debugging JS

Minified and not minified code. Pretty printing the minified code.
