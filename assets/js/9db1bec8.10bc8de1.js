"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3129],{1085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var s=t(4848),i=t(8453);const o={authors:["dani"],tags:["Terminal","MacOS","Environment"]},a="Terminal customization",r={permalink:"/blog/2024/05/29/setting-up",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-29-setting-up.md",source:"@site/blog/2024-05-29-setting-up.md",title:"Terminal customization",description:"You will need a terminal.",date:"2024-05-29T00:00:00.000Z",tags:[{label:"Terminal",permalink:"/blog/tags/terminal"},{label:"MacOS",permalink:"/blog/tags/mac-os"},{label:"Environment",permalink:"/blog/tags/environment"}],readingTime:16.32,hasTruncateMarker:!1,authors:[{name:"Dani Vorobiev",title:"Front End Engineer",url:"https://voromir.github.io/about/",imageURL:"https://i.ibb.co/YTPxvhW/voro-profile.png",key:"dani"}],frontMatter:{authors:["dani"],tags:["Terminal","MacOS","Environment"]},unlisted:!1,nextItem:{title:"What is and MDX file?",permalink:"/blog/2024/05/26/mdx-trial"}},l={authorsImageUrls:[void 0]},h=[{value:"You will need a terminal.",id:"you-will-need-a-terminal",level:2},{value:"Terminal or Shell?",id:"terminal-or-shell",level:2},{value:"What&#39;s the shell?",id:"whats-the-shell",level:2},{value:"Shell communication flow",id:"shell-communication-flow",level:2},{value:"Installing terminal emulator",id:"installing-terminal-emulator",level:2},{value:"Terminal Comparison table",id:"terminal-comparison-table",level:2},{value:"Tips for using iTerm2",id:"tips-for-using-iterm2",level:2},{value:"UNIX based systems",id:"unix-based-systems",level:2},{value:"Other types of shells:",id:"other-types-of-shells",level:2},{value:"Unleash your terminal",id:"unleash-your-terminal",level:2},{value:"OMZ themes",id:"omz-themes",level:3},{value:"Autocomplete fix",id:"autocomplete-fix",level:2},{value:"Further personalization",id:"further-personalization",level:2},{value:"Aliases",id:"aliases",level:2},{value:"Alias Precedence",id:"alias-precedence",level:3},{value:"A Gotcha with Oh My Zsh and AUTO_CD",id:"a-gotcha-with-oh-my-zsh-and-auto_cd",level:3},{value:"Don&#39;t repeat yourself: automate it!",id:"dont-repeat-yourself-automate-it",level:2},{value:"Bonus",id:"bonus",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"you-will-need-a-terminal",children:"You will need a terminal."}),"\n",(0,s.jsx)(n.p,{children:"As a developer, you gonna spend some time with your terminal. Even if you like GUI. You will run tests, install packages and use Git, for exaple. Terminal is one of our main tools and it's nice to have a visually pleasant and powerful terminal instead of borring and limited default one. In this post I will explain how I like to configure and personalize my Terminal and the main concepts thet we need to know about: what is the shell, what is the terminal, what is a CLI, what different kinds of shells do we have and how to take the better advantage of our terminal and shell configuration. You can think about it like this:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Your environment is your workshop and it is more logical to adapt your workshop to your need rather than the countrary."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"terminal-or-shell",children:"Terminal or Shell?"}),"\n",(0,s.jsx)(n.p,{children:"There are a lot of terms that usually are used to refer to the same thing: Terminal, Shell, Command Line, CLI, Console... But not everything is the same. To better understand what we're about to do we need to understand the difference between Shell and Terminal."}),"\n",(0,s.jsx)(n.p,{children:"The terminal was a device that permitted transciption and entering data in the early computer era. It was an elecromechanical device that sended and recieved data form the host, which was called the mainframe. Similarly, nowaday a terminal emulator is a program that provides a text-based interface for the human-computer interaction. Different terminal emulators can be GNOME Terminal, Konsole, xterm, Kitty o Warp (an AI enhanced terminal emulator). Operating systems come with default terminar emulator, but it's easy to install whatever terminal emulator you like."}),"\n",(0,s.jsx)(n.p,{children:"You have tmux as well, which is an abbreviation of Terminal MUltipleXer. With tmux you can create a session in a machine, run some commands, deattach from it, start another session to run other processes and then attach back to the first one. You can even detach from an SSH session and attach to it from somwhere else using another machine. This is very useful if you are usually using SSH (Secure Shell protocol) to connect to remote machines. iTerm integrates tmux and you can find the details going to Settings > General > Tmux."}),"\n",(0,s.jsx)(n.p,{children:"You can use TMux as a Tiling Window Manager, but there's a lot of other options."}),"\n",(0,s.jsx)(n.h2,{id:"whats-the-shell",children:"What's the shell?"}),"\n",(0,s.jsx)(n.p,{children:"A shell is an interface to interact with the kernel. As any other interface, it hides the internal function of the kernel and only brings the user what is needed. The shell can be a GUI (Graphical User Interface) or a command line interpreter. In both cases the intend is the same: to expose the operating system services to the human or to other programs, being the shell the outmost layer of the operating system. In other words, the shell encapsulates the operating system kernel and isolates it from the user space. That's why it's called a shell."}),"\n",(0,s.jsx)(n.p,{children:"The command-line shell is the interpreter that runs inside the terminal. We can change our terminal emulator, for example from the MacOs terminal to iTerm2, but as long as we don't change the Shell, we will be able to interact in the same way with the new terminal. The terminal is only and interface for the Shell which is what you are interacting with. Indeed, Sh Shell was run on the physical terminals, providing the same core functionality that modern shells and terminal emulators carry forward today. Sh Shell was a great improvement and gave a grat power to UNIX introducing Scripting, Redirection, Variables and Control Structures."}),"\n",(0,s.jsx)(n.p,{children:"What happens when you run a utility like nano:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"nano (the user application) doesn\u2019t interact directly with the hardware."}),"\n",(0,s.jsx)(n.li,{children:"It sends system calls (like open() or read()) to the kernel."}),"\n",(0,s.jsx)(n.li,{children:"The kernel translates these system calls into lower-level instructions and interacts with the file system and the hardware (such as the hard drive or SSD) to retrieve or modify data."}),"\n",(0,s.jsx)(n.li,{children:"The device driver specific to the storage hardware manages the communication between the kernel and the physical storage device."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here we can see the general schema of the linux architecture here:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Linux_architecture_preview",src:t(7279).A+"",width:"2128",height:"1224"})}),"\n",(0,s.jsx)(n.p,{children:"The shell does not communicate directly with the kernel. Instead, it interacts with the kernel through the kernel API or system calls. System calls act as a bridge between the user-space (where the shell runs) and the kernel-space (where the kernel operates)."}),"\n",(0,s.jsxs)(n.p,{children:["The shell is defined by the environment variable ",(0,s.jsx)(n.code,{children:"SHELL"}),". This variable specifies the path to the binary of the default shell. Typically, this binary is located in the binary directory ",(0,s.jsx)(n.code,{children:"/bin"}),", so it could be, for example, ",(0,s.jsx)(n.code,{children:"/bin/bash"})," or /bin/zsh. Since the shell it's an application, it can be easly replaced by another one."]}),"\n",(0,s.jsx)(n.p,{children:"To find out which shell you are currently using, you can execute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo $SHELL\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to change your shell to another one, you can run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export SHELL=/bin/bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SHELL"})," variable is temporal and session scoped, which means that it's deleted when you terminate the session. Typically, the system sets the ",(0,s.jsx)(n.code,{children:"SHELL"})," environment variable based on the default shell specified in your ",(0,s.jsx)(n.code,{children:"/etc/passwd"})," file. But this setup can be overwritten by the other configurations, like your terminal emulator configuration."]}),"\n",(0,s.jsx)(n.p,{children:"If you want to persist your shell configuration you can use this command instead:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chsh -s /bin/zsh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And you allways can run ",(0,s.jsx)(n.code,{children:"bash"})," to switch to bash and run ",(0,s.jsx)(n.code,{children:"zsh"})," or ",(0,s.jsx)(n.code,{children:"exit"})," to switch to zsh again."]}),"\n",(0,s.jsxs)(n.p,{children:["Shell evolutioned from really basic interpreter to a very powerful tool. There are many shells thet you can use in a UNIX-like system, but the most used are bash and zsh. If you're interested in the evolution of the shells, please, check out this ",(0,s.jsx)(n.a,{href:"https://developer.ibm.com/tutorials/l-linux-shells/",children:"IBM site"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"shell-communication-flow",children:"Shell communication flow"}),"\n",(0,s.jsx)(n.p,{children:"To summarise it, a terminal emulator is a program that provides a text-based user interface. It sends user inputs to the shell and displays the shell\u2019s outputs. The shell is a command-line interpreter that translates high-level commands into system calls to interact with the kernel (the core of the operating system). The kernel manages system resources, including the CPU, memory, and file system. When a command is executed, the kernel performs the requested operations and returns the result to the shell, which then outputs the result to the terminal emulator for the user to see."}),"\n",(0,s.jsx)(n.h2,{id:"installing-terminal-emulator",children:"Installing terminal emulator"}),"\n",(0,s.jsxs)(n.p,{children:["On macOS, ",(0,s.jsx)(n.a,{href:"https://iterm2.com/features.html",children:"iTerm"})," is the most popular terminal emulator. While it resembles a classic console, it offers powerful features like split views, multiple tabs, customizable hotkeys, and extensive configuration options. Accessing the Preferences menu in iTerm reveals a wide range of settings you can adjust to personalize your experience."]}),"\n",(0,s.jsx)(n.p,{children:"iTerm key features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Multiple tabs (with color options), split views."}),"\n",(0,s.jsx)(n.li,{children:"Find and filter content in the terminal"}),"\n",(0,s.jsx)(n.li,{children:"Session Managment. Reopen all the tabs exactly as they were."}),"\n",(0,s.jsx)(n.li,{children:"Good theming and customization options."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"terminal-comparison-table",children:"Terminal Comparison table"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Search"}),(0,s.jsx)(n.th,{children:"Mouse support"}),(0,s.jsx)(n.th,{children:"Theming"}),(0,s.jsx)(n.th,{children:"Autosuggest"}),(0,s.jsx)(n.th,{children:"History"}),(0,s.jsx)(n.th,{children:"O.Source"}),(0,s.jsx)(n.th,{children:"Stability"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"MacOS"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Basic"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"Basic"}),", no TUI"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Basic"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"No"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Basic"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"no"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Great"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"iTerm2"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Great"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Full"}),", tmux"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Good"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"Add-on"})," Shell Integration"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Good"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"yes"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Great"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Warp"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Great"}),", block"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Full"}),", Multiline"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Great"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Great"}),", AI powered"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Great"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"no"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Good"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"tips-for-using-iterm2",children:"Tips for using iTerm2"}),"\n",(0,s.jsxs)(n.p,{children:["When you open a new pane in iTem2 you probably se something like: Last login: ",(0,s.jsx)(n.code,{children:"Fri Sep 27 20:11:13 on ttys006"}),". To know all the sessions you are running, use ",(0,s.jsx)(n.code,{children:"who"})," or ",(0,s.jsx)(n.code,{children:"w"})," commands. In the output you will se al your terminal sessions runnins and your system process with the uptime, so at least you will have two results."]}),"\n",(0,s.jsx)(n.p,{children:'Depending on your default permission settings you can experience the "operation not permitted error". If this happens to you, you need to go to your MacOS setting, select Privacy and Security and give Full disk acess to iTerm2.'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["WARNING: Modifying the iTerm color scheme may prevent text colors from displaying correctly. If you encounter this issue, check the ",(0,s.jsx)(n.code,{children:"Minimum contrast"})," property in your profile settings and reduce its value."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The terminal in Linux is very powerful. There are even linux distros without Desktop Manager, like Arch Linux."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CMD + Shift + Enter"})," to maximize the current pane in iTerm2.\n",(0,s.jsx)(n.code,{children:"CMD + Option + Arrows"})," or ",(0,s.jsx)(n.code,{children:"CMD + [ or ]"})," to switch between the panes."]}),"\n",(0,s.jsx)(n.h2,{id:"unix-based-systems",children:"UNIX based systems"}),"\n",(0,s.jsx)(n.p,{children:"We often hear about UNIX based systems and we know that MacOS and Linux are UNIX based systems. But what is really a UNIX system? Indeed, UNIX has a lot of history behind"}),"\n",(0,s.jsx)(n.p,{children:"As of macOS Catalina (10.15), the default shell for macOS was changed from Bash to Zsh. This change was due to the release of the GPLv3 license, which explicitly disallows the use of GPL-licensed software in a closed system that does not allow the user to modify the software and run it on the machine."}),"\n",(0,s.jsx)(n.h2,{id:"other-types-of-shells",children:"Other types of shells:"}),"\n",(0,s.jsx)(n.p,{children:"Cloud shell: is a browser-based command-line interface provided by cloud service providers to manage cloud resources, run scripts, debug code, and experiment with new tools or technologies. It's common to use cloud shell to interact with services like DynamoDB, S3, and BigQuery."}),"\n",(0,s.jsx)(n.p,{children:"Reverse Shell: A reverse shell is a type of cyberattack technique where an attacker establishes a connection back to a compromised victim's machine. This connection allows the attacker to gain remote access and execute commands on the victim's system, essentially taking control of the machine. It's not a technology in itself but rather a method used by attackers to exploit vulnerabilities and gain unauthorized access."}),"\n",(0,s.jsx)(n.h2,{id:"unleash-your-terminal",children:"Unleash your terminal"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Unleash your terminal"})," is the slogan of ",(0,s.jsx)(n.a,{href:"https://ohmyz.sh/",children:"Oh My Zsh"}),", an open source community driven Zsh manager. This is one of the quickest an easiest ways to get a powerful yet beautiful terminal in a few steps. They promise you:\n",(0,s.jsx)(n.em,{children:"Once installed, your terminal shell will become the talk of the town or your money back!"})]}),"\n",(0,s.jsx)(n.p,{children:"To install Oh My Zsh you can:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Some of OMZ themes require special fonts to show icons and special characters in the terminal. To install the fonts you can go to ",(0,s.jsx)(n.a,{href:"https://www.nerdfonts.com",children:"https://www.nerdfonts.com"})," or just use:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install fonts-powerline\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install --cask font-hack-nerd-font\n"})}),"\n",(0,s.jsx)(n.p,{children:"The great thing about ZSH is that the support is great and the community is very active, so you can file lots of documentation, cofigurations and interesting stuff about it online."}),"\n",(0,s.jsxs)(n.p,{children:["The only problem is that out of the box ZSH is poorly configured and it's even worse than bash (reverse search, command history, completion system). But, we have ",(0,s.jsx)(n.a,{href:"https://github.com/ohmyzsh/ohmyzsh",children:"Oh My Zsh"}),", a community configuration that enables all the most useful functionalities to ZSH and gives it a nicer aspect. Oh My Zsh includes aliases, themes and acts like a plugin manager."]}),"\n",(0,s.jsx)(n.h3,{id:"omz-themes",children:"OMZ themes"}),"\n",(0,s.jsxs)(n.p,{children:["Your theme, as many of your other configurations is stored in ",(0,s.jsx)(n.code,{children:".zshrc"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["You can check the actual theme by printing by ",(0,s.jsx)(n.code,{children:"ZSH_THEME"})," variable."]}),"\n",(0,s.jsx)(n.p,{children:"To switch between themes you can:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"omz theme list"})}),"\n",(0,s.jsx)(n.p,{children:"and set theme by:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"omz theme set THEME_NAME"})}),"\n",(0,s.jsxs)(n.p,{children:["Yo can preview all the different themes at ",(0,s.jsx)(n.a,{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes",children:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Be aware: Oh My Zsh (OMZ) modifies your ",(0,s.jsx)(n.code,{children:".zshrc"}),", so there's a chance of losing some of your configurations that use this file (for example, SDKMAN!). Luckily, you can find your previous configuration at ",(0,s.jsx)(n.code,{children:"~/.zshrc.pre-oh-my-zsh"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you do some mods to you terminal and add some icons and fonts in the iTerm, you won't see this changes in your VSCode terminal. You will need to specify the fonts for this terminal and all other terminals you use as well."}),"\n",(0,s.jsxs)(n.p,{children:["Once you select a theme that you like, you can adjust the colors to your preference. Alternatively, you can visit ",(0,s.jsx)(n.a,{href:"https://catppuccin.com",children:"https://catppuccin.com"})," to download a well-built color scheme that you can use across your other code editors."]}),"\n",(0,s.jsx)(n.p,{children:"Install Imgcat:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -O https://iterm2.com/utilities/imgcat\nchmod +x imgcat\n"})}),"\n",(0,s.jsx)(n.p,{children:"move it to your path"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo mv imgcat /usr/local/bin/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install Yazi"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"brew install yazi\n"})}),"\n",(0,s.jsx)(n.p,{children:"and allow to show hidden files by creating"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# yazi.toml\n[manager]\nshow_hidden = true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["in ",(0,s.jsx)(n.code,{children:"~/.config/yazi/"})]}),"\n",(0,s.jsx)(n.h2,{id:"autocomplete-fix",children:"Autocomplete fix"}),"\n",(0,s.jsx)(n.p,{children:"Download zsh plugins:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting\ngit clone https://github.com/zsh-users/zsh-completions.git ~/.oh-my-zsh/custom/plugins/zsh-completions\ngit clone https://github.com/zsh-users/zsh-history-substring-search.git ~/.oh-my-zsh/custom/plugins/zsh-history-substring-search\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add this plugins to .zshrc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"autoload -Uz compinit && compinit\n\nplugins=(\n    git\n    docker\n    asdf\n    zsh-autosuggestions\n    zsh-completions\n    zsh-history-substring-search\n    zsh-syntax-highlighting\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"you also can edit the editor section:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# Preferred editor for local and remote sessions\nif [[ -n $SSH_CONNECTION ]]; then\n   export EDITOR='vim'\nelse\n   export EDITOR='mvim'\nfi\n"})}),"\n",(0,s.jsx)(n.h2,{id:"further-personalization",children:"Further personalization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fuzzy Finder: You can install FZF by brew install fzf. This allows you to fuzzy find in all your documents. But if you use Warp, you don't need it because it comes out of the box with the same functionality, allowing you to easily search through files with fuzzy matching."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Zoxyde: Zoxyde is a powerful tool designed to streamline your workflow with customizable, fast, and interactive search and file navigation. It integrates well with your shell, enhancing productivity by providing intuitive fuzzy searching and file management."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Yazi: Yazi is a tool that simplifies and enhances the way you work with CLI applications, providing features such as advanced autocomplete, custom shortcuts, and efficient command navigation. It's designed to boost productivity and reduce friction in terminal-based workflows."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Starship: Starship is a fast and customizable prompt for any shell. It allows you to configure your prompt to display information like Git status, system performance, time, and much more in a clean and minimalistic style, without slowing down your terminal. It's highly modular, making it easy to add and adjust functionality."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aliases",children:"Aliases"}),"\n",(0,s.jsx)(n.p,{children:"You can set alias like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"alias ll='ls -alF'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to persist your aliases over the current session, you need to store them in your shell config file, e.g.:",(0,s.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,s.jsx)(n.code,{children:"~/.zshrc"}),". This file loads every time you open a new terminal session and it modifies your $PATH variable in the runtime."]}),"\n",(0,s.jsxs)(n.p,{children:["If you edit your ",(0,s.jsx)(n.code,{children:".zshrc"})," file you will need to open a new terminal or do ",(0,s.jsx)(n.code,{children:"source ~/.zshrc"})," to reload the shell cofiguration. If you are using OMZsh you can do it by running ",(0,s.jsx)(n.code,{children:"omz reload"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to change the location of ",(0,s.jsx)(n.code,{children:".zshrc"})," you need to set it up in ",(0,s.jsx)(n.code,{children:".zprofile"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't want to use an already cluttered ",(0,s.jsx)(n.code,{children:".zshrc"})," file and prefer to keep your aliases in a separate file, you can place them in the directory stored in your ",(0,s.jsx)(n.code,{children:"ZSH_CUSTOM"})," system variable. Typically, this variable stores ",(0,s.jsx)(n.code,{children:".oh-my-zsh/custom"}),", so you can create a Zsh file there and name it as you prefer (e.g., custom_aliases.zsh). You can store all your aliases in this file just as you would in .zshrc, and your system will load them when ",(0,s.jsx)(n.code,{children:".zshrc"})," is sourced."]}),"\n",(0,s.jsx)(n.p,{children:"You can list all currently defined aliases using the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"alias\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or you can check a specific alias:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"alias ll\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can use ",(0,s.jsx)(n.code,{children:"type ll"})," to know which command will be run. This command shows you if it's a shell built in, an alias or a binary."]}),"\n",(0,s.jsx)(n.p,{children:"Unsetting an Alias\nYou can remove an alias with the unalias command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bsh",children:"unalias ll\n"})}),"\n",(0,s.jsx)(n.p,{children:"How alias work?\nAlias expansion:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Tockenization"}),"\n",(0,s.jsx)(n.li,{children:"Alias lookup: The shell first checks if the first word of your command matches an alias in some of your configuration files. If it does, it replaces that word with the alias's definition. This process is known as alias expansion."}),"\n",(0,s.jsx)(n.li,{children:"Command execution"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"alias-precedence",children:"Alias Precedence"}),"\n",(0,s.jsx)(n.p,{children:"By default, alias expansion is disabled in non-interactive shells (like scripts) to avoid unexpected behavior. However, if you have both a shell function and an alias with the same name, the alias will take precedence over the function."}),"\n",(0,s.jsx)(n.p,{children:"The order of precedence is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aliases (highest precedence)"}),"\n",(0,s.jsx)(n.li,{children:"Shell functions"}),"\n",(0,s.jsx)(n.li,{children:"Built-in commands (like echo, cd, etc.)"}),"\n",(0,s.jsx)(n.li,{children:"Programs in PATH (executables)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"a-gotcha-with-oh-my-zsh-and-auto_cd",children:"A Gotcha with Oh My Zsh and AUTO_CD"}),"\n",(0,s.jsx)(n.p,{children:"If you are using Oh My Zsh or Zsh with AUTO_CD enabled, and you try to enter a directory by typing its name (e.g., git), but there is a program with the same name (e.g., /opt/homebrew/bin/git), the program will be executed instead of changing directories."}),"\n",(0,s.jsxs)(n.p,{children:["This happens because Zsh prioritizes executables in your PATH over the auto-cd feature. To access a directory that shares a name with a program in your PATH, you must use the cd command explicitly. Alternatively, you can disable the AUTO_CD feature by running ",(0,s.jsx)(n.code,{children:"unsetopt AUTO_CD"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"dont-repeat-yourself-automate-it",children:"Don't repeat yourself: automate it!"}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, it's a long process. But, if you have a configuration that you really like, you can automate it. One way to do it is to use a script. There are multiple scripts on the internet for personalization, like this one for Parrot Linux with bspwm: ",(0,s.jsx)(n.a,{href:"https://github.com/xJackSx/BSPWMparrot",children:"https://github.com/xJackSx/BSPWMparrot"}),". Another idea is using ansible to automate the installation. This is out of the scope of this article, but there's something easier we can do to organise and save all our configuration files."]}),"\n",(0,s.jsxs)(n.p,{children:["Files like ",(0,s.jsx)(n.code,{children:".zshrc"}),", .",(0,s.jsx)(n.code,{children:"oh-my-zsh"}),", .",(0,s.jsx)(n.code,{children:"gitconfig"}),", and .c",(0,s.jsx)(n.code,{children:"onfig/nvim/"}),", also known as dotfiles, reside in your home directory, and over time, you accumulate quite a lot of them. However, when setting up a new machine, you don\u2019t have all the configurations you've built over the years."]}),"\n",(0,s.jsx)(n.p,{children:'To transfer this configuration to a new machine, you can create a dotfiles repository. To do this, create a new folder in your home directory (for example, called "Dotfiles"), move the files you want to track into it, and then create symbolic links back to the home directory so that programs can read them. The sequence of commands can look something like this:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"mkdir -p ~/dotfiles\nmv ~/.zshrc ~/dotfiles/\nln -s ~/dotfiles/.zshrc ~/.zshrc\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you don\u2019t want to create all the symlinks one by one, you can use (GNU Stow)[",(0,s.jsx)(n.a,{href:"https://www.gnu.org/software/stow/",children:"https://www.gnu.org/software/stow/"}),"]"," to automate the process. Once you have stored all the necessary configuration files in your dotfiles directory and created the links, you can add this directory to a Git repository to keep track of your configuration files."]}),"\n",(0,s.jsx)(n.p,{children:"When you modify any configuration in the files within your home directory, the actual linked files in your dotfiles directory will be updated as well, allowing you to commit and push these changes to the remote repository. Now, anytime you got a new machine to setup, you can just pull the files from the remote repository and create the symlinks in your new system."}),"\n",(0,s.jsx)(n.p,{children:"One more thing you can add to this directory are all the packets that you have in Brew. For that, use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"brew bundle dump --describe\n"})}),"\n",(0,s.jsx)(n.p,{children:"and this will generate a dump file with all your packages in your working directory. Keeping track of this file will help you to reinstall al the needed software in your new machine."}),"\n",(0,s.jsx)(n.h2,{id:"bonus",children:"Bonus"}),"\n",(0,s.jsxs)(n.p,{children:["Neofetch and lolcat. Now that you setted up a nice terminal with your custom prompot and your favourite shell is time to show-off. Neofetch is a improved screenfetch that displays system information in a esthetic way and customizable format. You can use it if you don't remember your machine's specs or just to showcase your terminal configuration. You can edit the config in ",(0,s.jsx)(n.code,{children:".config/neofetch/config.conf."})," Lolcat, on the other hand, is a modified cat that displays text in playful rainbow color. You can pipe your neofetch into it or any other thext output."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7279:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/linux_architecture_preview-e67ee046c2ee4534aa24f10a0c1fa975.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);