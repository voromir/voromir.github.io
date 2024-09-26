"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9630],{8607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var s=t(4848),i=t(8453);const a={authors:["dani"],tags:["Terminal","MacOS","Environment"]},r="Environment setup",l={permalink:"/blog/2024/05/29/setting-up",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-29-setting-up.md",source:"@site/blog/2024-05-29-setting-up.md",title:"Environment setup",description:"You will need a terminal.",date:"2024-05-29T00:00:00.000Z",tags:[{label:"Terminal",permalink:"/blog/tags/terminal"},{label:"MacOS",permalink:"/blog/tags/mac-os"},{label:"Environment",permalink:"/blog/tags/environment"}],readingTime:3.635,hasTruncateMarker:!1,authors:[{name:"Dani Vorobiev",title:"Front End Engineer",url:"https://voromir.github.io/about/",imageURL:"https://i.ibb.co/YTPxvhW/voro-profile.png",key:"dani"}],frontMatter:{authors:["dani"],tags:["Terminal","MacOS","Environment"]},unlisted:!1,nextItem:{title:"What is and MDX file?",permalink:"/blog/2024/05/26/mdx-trial"}},o={authorsImageUrls:[void 0]},h=[{value:"You will need a terminal.",id:"you-will-need-a-terminal",level:2},{value:"Terminal or Shell?",id:"terminal-or-shell",level:2},{value:"UNIX based systems",id:"unix-based-systems",level:2},{value:"Other types of shells:",id:"other-types-of-shells",level:2},{value:"Unleash your terminal",id:"unleash-your-terminal",level:2},{value:"Chrome plugins",id:"chrome-plugins",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"you-will-need-a-terminal",children:"You will need a terminal."}),"\n",(0,s.jsx)(n.p,{children:"As a developer, you gonna spend some time with your terminal. Even if you like GUI. You will run tests, install packages and use Git, for exaple. Terminal is one of our main tools and it's nice to have a visually pleasant and powerful terminal instead of borring and limited default one. In this post I gonna explain how I like to configure and personalize my Terminal and the main concepts thet we need to know: what is the shell, what is the terminal, what is a CLI, what different kinds of shelld do we have and how to take the better advantage of our terminal and shell configuration."}),"\n",(0,s.jsx)(n.h2,{id:"terminal-or-shell",children:"Terminal or Shell?"}),"\n",(0,s.jsx)(n.p,{children:"There are a lot of terms that usually are used to refer to the same thing: Terminal, Shell, CLI and Console. But not everything is the same. To better understand what we're about to do we need to understand the difference between Shell and Terminal."}),"\n",(0,s.jsx)(n.p,{children:"Differences between terminal and shell. Different shells:\n-sh (Bourne Shell)\n-bash (Bourne Again Shell)\n-zsh (Z Shell)\n-csh (C Shell)\n-ksh (Korn Shell)"}),"\n",(0,s.jsx)(n.p,{children:"Different terminals:\n-GNOME Terminal\n-Konsole\n-xterm\n-iTerm2\n-Kitty\n-Warp (with AI)"}),"\n",(0,s.jsxs)(n.p,{children:["On macOS, ",(0,s.jsx)(n.a,{href:"https://iterm2.com/features.html",children:"iTerm"})," is the most popular terminal emulator. While it resembles a classic console, it offers powerful features like split views, multiple tabs, customizable hotkeys, and extensive configuration options. Accessing the Preferences menu in iTerm reveals a wide range of settings you can adjust to personalize your experience."]}),"\n",(0,s.jsx)(n.p,{children:"iTerm key features:"}),"\n",(0,s.jsx)(n.p,{children:"-Multiple tabs (with color options), split views.\n-Find and filter content in the terminal"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Session Managment. Reopen all the tabs exactly as they were."}),"\n",(0,s.jsx)(n.li,{children:"BONUS: broadcast inputs"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Tip: depending on your default permission settings you can experience the "operation not permitted error". If this happens to you, you need to go to your MacOS setting, select Privacy and Security and give Full disk acess to iTerm2.'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["WARNING: Modifying the iTerm color scheme may prevent text colors from displaying correctly. If you encounter this issue, check the ",(0,s.jsx)(n.code,{children:"Minimum contrast"})," property in your profile settings and reduce its value."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Shell: Interprets and executes commands.\nTerminal: Provides the interface for interacting with the shell."}),"\n",(0,s.jsx)(n.p,{children:"Commands are programs stored on the disk. When a user types a command, the shell searches for it in the directories specified by the PATH environment variable. If found, the shell attempts to execute the command."}),"\n",(0,s.jsx)(n.p,{children:"The PATH variable is a list of directories that the shell searches for commands. Users can modify the PATH variable to add or remove directories from the search path. This allows users to customize the commands that are available to them."}),"\n",(0,s.jsx)(n.p,{children:"The terminal in Linux is very powerful. There are even linux distros without Desktop Manager, like Arch Linux."}),"\n",(0,s.jsx)(n.h2,{id:"unix-based-systems",children:"UNIX based systems"}),"\n",(0,s.jsx)(n.p,{children:"We often hear about UNIX based systems and we know that MacOS and Linux are UNIX based systems. But what is really a UNIX system? Indeed, UNIX has a lot of history behind"}),"\n",(0,s.jsx)(n.p,{children:"What shell am I using?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo $SHELL\n"})}),"\n",(0,s.jsx)(n.p,{children:"As of macOS Catalina (10.15), the default shell for macOS was changed from Bash to Zsh due to licensing reasons (GPLv3)."}),"\n",(0,s.jsx)(n.h2,{id:"other-types-of-shells",children:"Other types of shells:"}),"\n",(0,s.jsx)(n.p,{children:"Cloud shell: is a browser-based command-line interface provided by cloud service providers to manage cloud resources, run scripts, debug code, and experiment with new tools or technologies. It's common to use cloud shell to interact with services like DynamoDB, S3, and BigQuery."}),"\n",(0,s.jsx)(n.p,{children:"Reverse Shell: A reverse shell is a type of cyberattack technique where an attacker establishes a connection back to a compromised victim's machine. This connection allows the attacker to gain remote access and execute commands on the victim's system, essentially taking control of the machine. It's not a technology in itself but rather a method used by attackers to exploit vulnerabilities and gain unauthorized access."}),"\n",(0,s.jsx)(n.h2,{id:"unleash-your-terminal",children:"Unleash your terminal"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Unleash your terminal"})," is the slogan of ",(0,s.jsx)(n.a,{href:"https://ohmyz.sh/",children:"Oh My Zsh"}),", an open source community driven Zsh manager. This is one of the quickest an easiest ways to get a powerful yet beautiful terminal in a few steps. They promise you:\n",(0,s.jsx)(n.em,{children:"Once installed, your terminal shell will become the talk of the town or your money back!"})]}),"\n",(0,s.jsx)(n.p,{children:"-MY ZSH + Fonts + iTerm\n-Aliases with custom scripts"}),"\n",(0,s.jsx)(n.p,{children:"-Mac plugins: Alfred, Rectangle"}),"\n",(0,s.jsx)(n.h2,{id:"chrome-plugins",children:"Chrome plugins"}),"\n",(0,s.jsx)(n.p,{children:"-Chrome plugins: JSON, CSS Outline, DarkMode, ShewTabNumbers, React DeveloprTools, ModHeader, Redux DevTools."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);