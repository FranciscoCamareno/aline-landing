import type { PagesCopy } from "./index";

/**
 * Copy for the Install, About, Terms and Privacy pages (English).
 * Written from the system documentation (README, user guide, operations, brand and licenses).
 * The legal texts are a draft: have someone with legal training review them before publishing.
 */
export const pagesEn: PagesCopy = {
  back: "Back to home",
  updated: "Last updated",
  tocTitle: "On this page",
  highlightsTitle: "In short",
  contact: {
    title: "Contact",
    body: "Questions, or want to ask for a permission? Message us on LinkedIn.",
    cta: "Message on LinkedIn",
  },

  install: {
    title: "Install aline",
    intro:
      "aline runs right in your browser and can be installed like an app, without downloading any file. Installed, it gets its own icon, opens offline and keeps your data safer.",
    tabsLabel: "Pick your device",
    tabs: { chrome: "Chrome (computer)", edge: "Edge (computer)", ipad: "iPad (Safari)" },
    steps: {
      chrome: [
        "Open aline in Chrome.",
        "Click the install icon on the right side of the address bar.",
        "Confirm with “Install”.",
      ],
      edge: ["Open aline in Edge.", "Click the “App available” icon in the address bar.", "Confirm with “Install”."],
      ipad: ["Open aline in Safari.", "Tap “Share” (or the three dots, then “Share”).", "Choose “Add to Home Screen”."],
    },
    alt: {
      chrome: "To install aline, click the install icon in the address bar and confirm with Install.",
      edge: "To install aline, click the “App available” icon in the address bar and confirm with Install.",
      ipad: "To install aline on the iPad, tap Share and choose Add to Home Screen.",
    },
    supported: "aline works in Chrome and Edge on a computer, and in Safari on the iPad.",
    exeTitle: "What about a Windows installer (.exe)?",
    exeBody: [
      "It doesn’t exist yet, but we’re working on it.",
      "For Windows to let you install a program without security warnings, the file has to carry a digital signature that proves who made it. That signature needs a certificate, and we’re applying for the one offered to open-source projects.",
      "In the meantime, installing from the browser is the official way: it’s the same app, and you don’t have to download or run anything.",
    ],
    open: "Open aline",
  },

  about: {
    title: "About us",
    intro:
      "aline is a place to think things through: notes, docs, diagrams and your calendar on one canvas, all linked together. It has the warmth of paper, ink and highlighter, and one simple idea: what you write and draw is yours.",
    sections: [
      {
        title: "What aline is",
        paragraphs: [
          "aline is a personal system of mind maps and connected notes. You can write notes, draft documents, draw diagrams on an endless canvas and plan your week in a calendar. Everything links to everything, so every idea knows where it came from and when it is due.",
          "It runs in your computer’s browser (Chrome or Edge) and on the iPad (Safari, with Apple Pencil support). It can be installed like an app and keeps working offline.",
        ],
        link: { text: "How to install it", to: "install" },
      },
      {
        title: "What we care about",
        items: [
          "Your data is yours. Everything is stored on your own device and you don’t need an account.",
          "No hidden fine print: no ads, no analytics, no tracking.",
          "Open formats. Your notes are Markdown files and your canvases are .excalidraw files: you can open them in other tools, always.",
          "Nothing gets lost without warning. Every save goes into a history, what you delete goes to a trash, and conflicts between devices are kept instead of overwritten.",
        ],
      },
      {
        title: "How it works under the hood",
        paragraphs: [
          "aline is a web app that runs on your device: there is no server storing your notes. If you want to use it on several computers, you can sync with a folder on your computer or with your own Google Drive, with optional end-to-end encryption.",
        ],
        link: { text: "Read the privacy policy", to: "privacy" },
      },
      {
        title: "Built on free software",
        paragraphs: [
          "aline’s canvas is built on Excalidraw and other open-source libraries, each with its own license. aline is an independent project and is not affiliated with or endorsed by Excalidraw or Google.",
          "aline’s code is licensed under the GNU AGPLv3. The name, the logo and the stickers are aline’s trademark and property.",
        ],
        link: { text: "See the terms", to: "terms" },
      },
      {
        title: "Who is behind it",
        paragraphs: [
          "aline is an independent project created and maintained by Francisco Camareno. It is under active development: some features are still beta and we keep improving it.",
        ],
        items: [
          "It installs from the browser, on computers and on the iPad.",
          "A Windows installer (.exe) is on its way: we’re applying for the digital signature it needs.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms",
    intro:
      "These terms explain the basic rules for using aline. We wrote them in plain language. By using the website or the app, you accept these terms.",
    highlights: [
      "Your content is yours and stays on your device.",
      "Backups are your responsibility.",
      "The code is free (AGPLv3); the name, logo and stickers are not.",
      "aline is provided as is, without warranties.",
    ],
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "aline (“we”) is an independent project created and maintained by Francisco Camareno. If you don’t agree with these terms, please don’t use aline.",
        ],
      },
      {
        title: "What we offer",
        paragraphs: [
          "aline is an installable web app for taking notes, writing documents, drawing diagrams and organizing a calendar. It runs on your device and doesn’t require an account.",
          "It is under active development: some features are beta and may change, improve or go away.",
        ],
      },
      {
        title: "Your content is yours",
        paragraphs: [
          "Everything you create in aline (notes, documents, canvases, images, events) is yours. We don’t receive it, we can’t see it and we don’t ask for any license over it, because it is stored on your device and, only if you turn it on, in your own folder or your own Google Drive.",
          "You are responsible for what you write and store, and you can export it whenever you like in open formats.",
        ],
      },
      {
        title: "Backups",
        paragraphs: [
          "aline stores your information in your browser’s storage. The browser may delete it if you clear the site’s data or, on the iPad, if it runs out of space. That is why backups are your responsibility.",
        ],
        items: [
          "Download a full backup (ZIP) regularly and keep it outside your computer.",
          "If you use Google Drive with encryption, keep your password and your recovery code: without them nobody, including us, can recover that copy.",
          "Keep aline up to date on all your devices: an older version may not recognize documents created with a newer one.",
        ],
      },
      {
        title: "Google Drive and other services",
        paragraphs: [
          "Connecting Google Drive or a folder on your computer is optional. If you use Drive, your content is stored in your Google account and is governed by Google’s terms and privacy policy; we don’t control that service.",
          "Before connecting it, aline asks you to choose between syncing unencrypted (Google could read the content) or with end-to-end encryption.",
        ],
      },
      {
        title: "Code, brand and visual assets",
        paragraphs: [
          "aline’s code is licensed under the GNU AGPLv3: you can use it, study it, modify it and redistribute it under that license. The name “aline”, the logo, the icons, the stickers, the sticky notes, the illustrations and the color schemes belong to aline and are outside the AGPLv3 (all rights reserved).",
        ],
        items: [
          "You can use the stickers, sticky notes and icons inside your own documents made with aline, and share, print or export them, including commercially.",
          "You can’t redistribute those assets on their own, as a collection, or inside a fork or a third-party product.",
          "If you publish a modified version of aline, you must rename it and replace the logo, icons and stickers with your own.",
          "You can mention the name “aline” to truthfully refer to the original project (for example, “based on aline”), without implying endorsement or affiliation.",
        ],
      },
      {
        title: "Third-party software",
        paragraphs: [
          "aline uses Excalidraw and other open-source libraries and fonts, each with its own license. Their full notices are inside the app, under “Status and diagnostics → Licenses”. aline is not affiliated with Excalidraw or Google; third-party names and logos belong to their owners.",
        ],
      },
      {
        title: "Responsible use",
        paragraphs: [
          "Use aline responsibly: don’t use it for illegal activities, don’t try to harm, overload or break into the website or other people, and don’t extract or redistribute the visual assets beyond what is allowed.",
        ],
      },
      {
        title: "No warranties and limit of liability",
        paragraphs: [
          "aline is provided “as is” and “as available”, without warranties of any kind, express or implied, including that it is fit for a particular purpose or will run without interruptions or errors.",
          "To the extent the law allows, we are not liable for loss of data, income or other damages arising from using (or being unable to use) aline. This does not limit rights that the law doesn’t allow to be limited.",
        ],
      },
      {
        title: "Changes to these terms",
        paragraphs: [
          "We may update these terms. We will publish the new version on this page with its date. If you keep using aline after a change, we understand you accept it.",
        ],
        link: { text: "Read the privacy policy", to: "privacy" },
      },
    ],
  },

  privacy: {
    title: "Privacy",
    intro:
      "In short: aline has no accounts, uses no analytics and doesn’t receive your notes. Here we explain what happens with your information, without jargon.",
    highlights: [
      "Your notes, docs and canvases are stored on your device, not on our servers.",
      "No accounts, no ads, no analytics, no tracking.",
      "Google Drive is optional and you decide whether it is encrypted.",
      "You can take or delete everything whenever you like.",
    ],
    sections: [
      {
        title: "What aline stores and where",
        paragraphs: [
          "What you create in aline is stored in your browser’s storage, on your device. aline has no server where your notes are kept and no database with your data.",
        ],
        items: [
          "Your content: notes, documents, canvases, images, calendars, version history and trash.",
          "Your preferences: language, color theme and the last document you opened.",
          "A local technical log, used to diagnose problems, which never includes the text of your notes or access keys and only leaves your device if you export it.",
        ],
      },
      {
        title: "What we don’t do",
        items: [
          "We don’t ask you to create an account.",
          "We don’t use analytics, telemetry or advertising cookies.",
          "We don’t sell or share your data, or use it for ads.",
          "We don’t automatically load external images that appear in your notes: they are shown as links.",
          "Fonts are served from the site itself, not from external services.",
        ],
      },
      {
        title: "This website",
        paragraphs: ["The presentation site stores only two things in your browser, solely so it works as you expect:"],
        items: [
          "A cookie called “lang”, lasting one year, with your preferred language, to take you to the right version.",
          "A local value with the position of the decorative stickers, if you move them, to remember where you left them.",
        ],
        after: ["We don’t use tracking cookies or analytics tools."],
      },
      {
        title: "Google Drive (optional)",
        paragraphs: [
          "If you decide to sync with Google Drive, aline first asks you to choose how, and doesn’t connect to Google until you do.",
        ],
        items: [
          "Unencrypted: your content is stored in your Drive in a readable format and Google can read it, under its policy.",
          "With end-to-end encryption: your content is encrypted on your device before it is uploaded and Google can’t read it. If you lose the password and the recovery code, that copy can’t be recovered.",
          "aline only asks for permission to see and manage the files it creates itself (the “drive.file” permission), not the rest of your Drive.",
          "The authorization lasts only while the page is open: after a reload you need to authorize again.",
          "Your data travels directly between your browser and Google; it doesn’t go through our servers.",
        ],
        after: [
          "The information aline gets from your Google account is used only to save and retrieve your content; it is not transferred to third parties or used for advertising. You can withdraw access at any time from your Google account settings. How Google uses your data is governed by its own privacy policy.",
        ],
      },
      {
        title: "Hosting",
        paragraphs: [
          "The site and the app are served through Cloudflare. Like any hosting service, Cloudflare may log technical connection data (such as the IP address and browser type) to deliver the files and protect the service, under its own privacy policy. We don’t use that data to identify you or to build profiles.",
        ],
      },
      {
        title: "Your control",
        items: [
          "Take what’s yours: export your content in open formats (Markdown, .excalidraw, PNG, SVG, PDF, Word and a full ZIP backup).",
          "Delete what you want: what you remove goes to the trash and you can delete it for good whenever you like. To erase everything, clear the site’s data in your browser.",
          "Copies you saved in Google Drive or in a folder on your computer are deleted from there.",
          "You can withdraw the Google Drive permission from your Google account.",
        ],
        after: ["Since we don’t receive your data, we can’t access, correct or delete it for you: you are in control."],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "If this policy changes, we will update it here with its date. If we ever add something that changes the above, such as accounts or services of our own, we will explain it on this page.",
        ],
        link: { text: "Read the terms", to: "terms" },
      },
    ],
  },
};
