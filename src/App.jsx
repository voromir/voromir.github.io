import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import gsap from "gsap";

hljs.registerLanguage("js", javascript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

const markdownModules = import.meta.glob("../blog-articles/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

const paragraphs = [
  "It all began in 2011, when at my grandparents' house I read in the newspaper that the Programming degree was opening at UTN in Resistencia, Chaco. It was not an easy stage: while I was studying, I was also working to cover the costs of a paid degree that promised to be 'the future.'",
  "Along that path I met Rodrigo Miro, who shared my passion for video game development. We met at a Java workshop and, thanks to his invitation to join a venture he was starting with friends, I took my first professional steps and joined Tecspro, formerly Mi Web Simple. As strange as it may sound, that was where my disorder began.",
  "At that company Gonzalo Alonso worked alongside several members of Tecspro. With him I began a healthy competition for professional growth: he was my reference point, my teacher, and over time also my nemesis. For years I sensed a certain discomfort with my progress, small obstacles I would only fully understand much later.",
  "After two years at Tecspro I joined the Professional Council of Economic Sciences, my first experience as a salaried employee. I stayed there for eight years. When Gonzalo resigned, I took charge of the area, built teams, and supported the growth of several people. To this day I deeply regret leaving; it is one of those decisions that teaches you something, but leaves a mark that is hard to erase.",
  "I left the Council to take on a highly relevant role at Crombie. However, after a year I found a deeply disorganized structure and leadership that was excessively influenced by Human Resources and one of the partners. I had no personal conflicts, but I began noticing differences and obstacles similar to past experiences, though this time at an organizational level.",
  "I decided to investigate and discovered that they were using attitudinal evaluations to condition performance, limit growth, and adjust internal metrics. I verified it myself: I paid for the professional version of the same tool, answered the tests with identical responses, and got a score of 9, while internally I had been evaluated with a 6. We had several meetings, but we never reached an agreement. In their view, I did not fit the company's mission and values. So I decided to close that chapter.",
  "Soon after, I arrived at the company I believed, with all my heart, was the place I had always been looking for. Thanks to Fernando Bugliot, former CEO of Ceibus, I arrived indirectly at Pronto Pago. There I experienced almost three years of exponential growth.",
  "Everything changed with the arrival of Exequiel Ledezma. I was working together with Felipe Azcoaga, a colleague and friend whom I had first supported at the Council and later at Ceibus. During a sprint, a conflict arose over missed deadlines; from my perspective, it was not due to a lack of commitment on our side, but to disorganization in the technical leadership.",
  "We had a tense but necessary meeting with Fernando, where I presented evidence and, apparently, the situation was resolved in our favor. However, that was not well received. I still have messages in which I was criticized for speaking directly with leadership and told never again to 'go over' the technical leadership.",
  "In the middle of all this I started a family, moved in with my partner, rented an apartment, and began building my own house. I must have done something right.",
  "I had never had personal conflicts; I always prioritized work, transparency, and realistic outcomes. Later we had another meeting with everyone and agreed to put the episode behind us. I made it clear that my only intention was to protect my work, Felipe's work, and the company's interests, not to create enemies. But revenge would come later.",
  "Months after taking over as general manager of Pronto Pago, Fernando resigned from both the company and Ceibus. His departure left an important void, and I sensed my days there were numbered. Four months later, Exequiel terminated my contract.",
  "I left the apartment and part of the life that had been growing steadily. I moved into my house, which I had managed to finish with my savings, and opened a neighborhood kiosk.",
  "The experiences that followed were not particularly relevant to my professional development: most of them were contractor roles focused on features rather than real growth. However, the last two had a major impact on my health.",
  "The second to last was WeTak. I arrived again through contact with former Tecspro colleagues to cover Fabián's departure. The company had its lights and shadows, even some similarities with Crombie. This time my relationship with Gonzalo was not good, which limited my real contribution and put my relationship with the CEO, my reputation, and my professional confidence at risk.",
  "Finally, I decided to resign to stay with an opportunity at Galicia, my second experience as a salaried employee, though this time through a consultancy: OneInfo Consulting. I was betting on stability and projection. However, after six months I was dismissed under the argument of being in a 'trial period.' There had never been clear signs or transparency from the beginning; had there been, I would not have made previous decisions, because I had the chance to choose.",
  "Since then I have not managed to re-enter the job market in the middle of the AI bubble. I tried several personal projects and, so far, the only thing truly sustaining me is a market system I developed to manage my own kiosk. Thanks to it I have been surviving for months, and it is what I plan to dedicate my full time to now.",
  "While going through all this, my loyal friend Martín, my rabbit, was always by my side. I set out to give him everything I could, everything he deserved, and I am convinced that I did, until today. Today I had to make a devastating decision: use the money I had left for my daughter's studies or take him to the vet, knowing I could not postpone it any longer. And I lost him.",
  "I feel that I failed. I feel that, at some point, I made the wrong decisions. That maybe, instead of continuing to try to re-enter the industry, I should have gone out to drive Uber or do anything else so I would not have had to choose.",
  "I know many people will say: 'it's just a pet.' But that is not what this is about. It is about the commitments one takes on in life. About the quiet promise you make to yourself when you commit to care, support, and be there.",
  "Today I feel I failed at that. That I am failing myself. That, in some way, I am also failing those who depend on me.",
  "That is why I make this decision. I am stepping away from something I loved, not out of resentment, but out of responsibility. To rebuild myself. To build something better.",
  "And if someday you find me again, it will be in another role, from another perspective, with another initiative."
];

const sectionBreaks = {
  4: "And from there, everything started to fall apart.",
  17: "Today is a very difficult day for me."
};

const blogEntry = {
  slug: "my-story",
  title: "My Story",
  headline: "I have decided to stop programming…",
  category: "Personal Chronicle",
  summary:
    "A personal chronicle about work, difficult decisions, and rebuilding a new stage.",
  date: "27 Feb, 2026",
  readTime: "15 min read"
};

const blogSections = [
  "AI development",
  "Frontend development",
  "CLA tricks",
];

const projects = [
  "Learn Russian Efficiently",
  "Tenis Table Finder",
  "Visualize your strava",
  "Music Projects"
];

const certifications = [
  {
    id: "java-programming",
    image: "/Certificates/cert1.png",
    title: "Java Programming",
    teacher: "La Salle",
    platform: "La Salle",
    summary: "Core Java foundations, object-oriented programming, and backend-oriented problem solving.",
    notes: [
      "I reinforced Java syntax, classes, inheritance, interfaces, and structured backend-oriented thinking.",
      "It gave me a stronger base to understand how services are organized and how to write maintainable logic.",
      "This course supported my transition into broader backend contribution work later on."
    ]
  },
  {
    id: "cybersecurity-management",
    image: "/Certificates/cert2.png",
    title: "Cybersecurity Management",
    teacher: "UPF and CISCO",
    platform: "Universitat Pompeu Fabra",
    summary: "Security fundamentals, operational thinking, and practical awareness of cyber risk and response.",
    notes: [
      "I improved my understanding of security management, risk analysis, and incident-oriented thinking.",
      "It helped me reason more clearly about vulnerabilities, observability, and security posture.",
      "That knowledge later influenced my work around Snyk fixes, logging, and safer frontend practices."
    ]
  },
  {
    id: "frontend-masters-path",
    image: "/Certificates/cert3.png",
    title: "Professional Frontend Path",
    teacher: "Multiple instructors",
    platform: "Frontend Masters",
    summary: "Advanced frontend engineering across React, JavaScript, architecture, and performance topics.",
    notes: [
      "I deepened my frontend engineering foundations through a broad path of advanced specialized courses.",
      "It improved my understanding of architecture, maintainability, performance, and better technical decisions.",
      "A lot of the implementation quality I aim for in production work was shaped by this path."
    ]
  },
  {
    id: "advanced-react",
    image: "/Certificates/cert4.png",
    title: "Advanced React",
    teacher: "Udemy instructors",
    platform: "Udemy",
    summary: "Advanced React composition, state design, patterns, and scalable UI thinking.",
    notes: [
      "I focused on deeper React concepts beyond day-to-day component building.",
      "It helped me think better about state boundaries, composition patterns, and reusable abstractions.",
      "That translated into cleaner component design and better long-term maintainability."
    ]
  },
  {
    id: "continuous-learning",
    image: "/Certificates/cert5.png",
    title: "Continuous Learning",
    teacher: "Various instructors",
    platform: "LinkedIn Learning",
    summary: "Supplementary continuous training across tooling, frontend practice, and software development skills.",
    notes: [
      "These shorter focused courses helped me keep learning continuously between larger formal programs.",
      "They were useful to reinforce practical topics quickly and apply improvements in day-to-day work.",
      "This habit of constant learning supports the way I adapt to new tools and technologies."
    ]
  }
];

const ocadoContributionSections = [
  {
    title: "Aligned Autonomy",
    items: [
      "Led the Java 21 migration rollout by helping prepare the new Docker image, piloting the first migration, and supporting the move of the remaining applications from Java 17.",
      "Spotted the urgency of the ALDI migration before pipelines stopped working, investigated the path, migrated the first project, and helped the team complete the rest within a week.",
      "Improved security posture by monitoring and remediating Snyk vulnerabilities, including difficult upgrades on React Router and the internationalization stack.",
      "Created scripts, automation, and documentation to simplify translation pulls and merges while reducing duplication and team friction.",
      "Improved error handling in Subscriptions UI and Receipts UI with better boundaries, better user feedback, and clearer failure management."
    ]
  },
  {
    title: "Learn Fast",
    items: [
      "Expanded beyond frontend by contributing to backend services and growing practical knowledge in Java, Spring Boot, and full system architecture.",
      "Invested in continuous education across frontend, backend, and security through formal courses and specialized training.",
      "Led technical discovery for Contentful-related work, quickly learning GraphQL, Contentful Apps, and dashboard tooling while delivering implementation, ADRs, testing, and documentation.",
      "Conducted discovery for the Logged Out Delivery Pass Page, analysing frontend and backend needs and translating them into ADRs and delivery tickets.",
      "Proactively learned theming and asset-update processes end to end, implemented production changes, and documented the process for future reuse."
    ]
  },
  {
    title: "Build Trust",
    items: [
      "Mentored engineers and managers joining the team, improved onboarding documentation, and supported internship onboarding across consecutive years.",
      "Shared knowledge through presentations, demo sessions, lunch and learn talks, and practical documentation for multiple features and team processes.",
      "Enabled the mobile team with onboarding materials, API documentation, delivery pass flows, demos, and ongoing support.",
      "Actively helped resolve support tickets and provided technical guidance across frontend issues and broader system behavior."
    ]
  },
  {
    title: "Craft Smart",
    items: [
      "Improved observability by integrating Sentry alerts into Slack and expanding logging coverage so issues became visible much earlier.",
      "Standardized Zod usage and validation to reduce duplicated types, improve data integrity, and move the frontend toward a fail-fast model."
    ]
  },
  {
    title: "Collective Potential",
    items: [
      "Worked closely with UX, Translation, and Tech Writing teams to deliver features, polish user-facing content, and improve release communication.",
      "Collaborated with the frontend chapter to improve standards and maintainability, including SCSS Modules adoption and CODEOWNERS clarity.",
      "Supported recruitment by helping with candidate assessment and CV selection.",
      "Improved team delivery processes by documenting epic expectations and leading internal testing sessions with structured test cases and bug reporting resources."
    ]
  }
];

const ocadoContributionSummary =
  "Delivery across migrations, security, translations, observability, mentoring, discovery, and process improvement during my time at Ocado.";

const homeBlogFilters = [
  { label: "AI development", tag: "AI" },
  { label: "Frontend development", tag: "FE" },
  { label: "CLA tricks", tag: "CLA" }
];

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function estimateReadTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { attributes: {}, body: raw };
  }

  const end = raw.indexOf("\n---", 3);

  if (end === -1) {
    return { attributes: {}, body: raw };
  }

  const frontmatter = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();
  const attributes = {};

  frontmatter.split("\n").forEach((line) => {
    const separator = line.indexOf(":");

    if (separator === -1) {
      return;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    attributes[key] = parseFrontmatterValue(value);
  });

  return { attributes, body };
}

function parseFrontmatterValue(value) {
  const trimmed = value.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const inner = trimmed.slice(1, -1).trim();

    if (!inner) {
      return [];
    }

    return inner
      .split(",")
      .map((item) => item.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }

  return trimmed.replace(/^["']|["']$/g, "");
}

function extractSummary(markdown) {
  return (
    markdown
      .split(/\n\s*\n/)
      .map((chunk) => chunk.trim())
      .find(
        (chunk) =>
          chunk &&
          !chunk.startsWith("#") &&
          !chunk.startsWith(">") &&
          !chunk.startsWith("```") &&
          !chunk.startsWith("import ")
      ) || "Markdown article."
  );
}

function parseMarkdownBlocks(markdown) {
  const lines = markdown.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("import ") || trimmed.startsWith("export ")) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim();
      const codeLines = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: "code", language, text: codeLines.join("\n") });
      index += 1;
      continue;
    }

    if (/^#{1,3}\s/.test(trimmed)) {
      const level = trimmed.match(/^#+/)[0].length;
      blocks.push({ type: "heading", level, text: trimmed.replace(/^#{1,3}\s/, "") });
      index += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quoteLines = [];

      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }

      blocks.push({ type: "quote", text: quoteLines.join(" ") });
      continue;
    }

    if (/^[-*]\s/.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
      const ordered = /^\d+\.\s/.test(trimmed);
      const items = [];

      while (
        index < lines.length &&
        (ordered ? /^\d+\.\s/.test(lines[index].trim()) : /^[-*]\s/.test(lines[index].trim()))
      ) {
        items.push(lines[index].trim().replace(ordered ? /^\d+\.\s/ : /^[-*]\s/, ""));
        index += 1;
      }

      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const imageMatch = trimmed.match(/^!\[(.*)\]\((.*)\)$/);

    if (imageMatch) {
      blocks.push({ type: "image", alt: imageMatch[1], src: imageMatch[2] });
      index += 1;
      continue;
    }

    const paragraphLines = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,3}\s/.test(lines[index].trim()) &&
      !/^>\s?/.test(lines[index].trim()) &&
      !/^[-*]\s/.test(lines[index].trim()) &&
      !/^\d+\.\s/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith("```")
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function highlightCodeBlock(text, language) {
  if (language && hljs.getLanguage(language)) {
    return hljs.highlight(text, { language }).value;
  }

  return hljs.highlightAuto(text).value;
}

function getMarkdownEntries() {
  return Object.entries(markdownModules)
    .map(([path, raw]) => {
      const fileName = path.split("/").pop();
      const fileStem = fileName.replace(/\.md$/, "");
      const dateMatch = fileStem.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/);
      const isoDate = dateMatch ? dateMatch[1] : "1970-01-01";
      const slug = dateMatch ? dateMatch[2] : fileStem;
      const { attributes, body } = parseFrontmatter(raw);
      const headingMatch = body.match(/^#\s+(.*)$/m);
      const title = attributes.title || (headingMatch ? headingMatch[1].trim() : titleFromSlug(slug));
      const summary = attributes.summary || extractSummary(body);

      return {
        slug,
        title,
        headline: title,
        category: "Blog Entry",
        summary,
        isoDate,
        date: formatDate(isoDate),
        readTime: estimateReadTime(body),
        author: "Dani Voro",
        role: "Software Developer",
        tags: Array.isArray(attributes.tags) ? attributes.tags : [],
        blocks: parseMarkdownBlocks(body),
        source: "markdown"
      };
    })
    .sort((left, right) => right.isoDate.localeCompare(left.isoDate));
}

function buildStoryBlocks() {
  const blocks = [{ type: "lead", text: "My tragic story" }];

  paragraphs.forEach((paragraph, index) => {
    if (sectionBreaks[index]) {
      blocks.push({ type: "heading", level: 2, text: sectionBreaks[index] });
    }

    blocks.push({ type: "paragraph", text: paragraph });
  });

  blocks.push({
    type: "note",
    text: "This post will be deleted automatically on April 1st, 2026..."
  });

  return blocks;
}

const manualStoryEntry = {
  ...blogEntry,
  isoDate: "2026-02-27",
  author: "Maximiliano Sh.",
  role: "Developer",
  tags: [],
  blocks: buildStoryBlocks(),
  source: "manual"
};

const blogEntries = [manualStoryEntry, ...getMarkdownEntries()].sort((left, right) =>
  right.isoDate.localeCompare(left.isoDate)
);

function getArticleBySlug(slug) {
  return blogEntries.find((entry) => entry.slug === slug) || null;
}

function getCertificationById(id) {
  return certifications.find((certificate) => certificate.id === id) || null;
}

function getRouteFromHash(hashValue = window.location.hash) {
  const hash = hashValue.replace(/^#/, "");

  if (hash === "" || hash === "/" || hash === "inicio") {
    return { page: "home" };
  }

  if (hash === "blog") {
    return { page: "blog" };
  }

  if (hash === "about") {
    return { page: "about" };
  }

  if (hash === "projects") {
    return { page: "projects" };
  }

  if (hash.startsWith("certifications/")) {
    return { page: "certification", certificateId: decodeURIComponent(hash.slice(15)) };
  }

  if (hash === "music") {
    return { page: "music" };
  }

  if (hash === "about/ocado-contributions") {
    return { page: "ocado-contributions" };
  }

  if (hash.startsWith("blog/")) {
    return { page: "article", slug: decodeURIComponent(hash.slice(5)) };
  }

  return { page: "home" };
}

function getHashForPage(page, slug) {
  if (page === "home") {
    return "#inicio";
  }

  if (page === "blog") {
    return "#blog";
  }

  if (page === "about") {
    return "#about";
  }

  if (page === "projects") {
    return "#projects";
  }

  if (page === "certification") {
    return `#certifications/${slug}`;
  }

  if (page === "music") {
    return "#music";
  }

  if (page === "ocado-contributions") {
    return "#about/ocado-contributions";
  }

  if (page === "article") {
    return `#blog/${slug || blogEntry.slug}`;
  }

  return "#inicio";
}

function getBrowserTint(uiStyle, theme) {
  if (uiStyle === "classic" && theme === "silk") {
    return "#e8e2cf";
  }

  if (uiStyle === "classic" && theme === "dim") {
    return "#355d97";
  }

  if (theme === "silk") {
    return "#e9e2dc";
  }

  return "#1d232a";
}

function getAppleStatusBarStyle(theme) {
  return theme === "silk" ? "default" : "black-translucent";
}

function Icon({ children, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

function CrumbLink({ href, children, current = false, onClick }) {
  if (current) {
    return <span className="current">{children}</span>;
  }

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
}

function Breadcrumbs({ route, navigate }) {
  const items = [{ label: "Inicio", page: "home", icon: "home", current: route.page === "home" }];

  if (route.page === "blog" || route.page === "article") {
    items.push({ label: "Blog", page: "blog", icon: "news", current: route.page === "blog" });
  }

  if (route.page === "article") {
    const currentArticle = getArticleBySlug(route.slug);
    items.push({ label: currentArticle ? currentArticle.title : "Article", current: true });
  }

  if (route.page === "about") {
    items.push({ label: "About Me", page: "about", icon: "user", current: true });
  }

  if (route.page === "ocado-contributions") {
    items.push({ label: "About Me", page: "about", icon: "user", current: false });
    items.push({ label: "Ocado contributions", page: "ocado-contributions", current: true });
  }

  if (route.page === "projects") {
    items.push({ label: "Projects", page: "projects", icon: "wrench", current: true });
  }

  if (route.page === "certification") {
    items.push({ label: "About Me", page: "about", icon: "user", current: false });
    items.push({ label: "Certification", page: "certification", current: true });
  }

  if (route.page === "music") {
    items.push({ label: "Create some music!", page: "music", current: true });
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            {index > 0 ? (
              <li className="separator">
                <Icon className="icon-xs">
                  <path d="m9 18 6-6-6-6" />
                </Icon>
              </li>
            ) : null}
            <li>
              <CrumbLink
                current={item.current}
                href={getHashForPage(item.page)}
                onClick={(event) => {
                  if (item.current || !item.page) {
                    return;
                  }

                  event.preventDefault();
                  navigate(item.page);
                }}
              >
                {item.icon === "home" ? (
                  <Icon className="icon-sm">
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </Icon>
                ) : null}
                {item.icon === "news" ? (
                  <Icon className="icon-sm">
                    <path d="M15 18h-5" />
                    <path d="M18 14h-8" />
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                    <rect height="4" rx="1" width="8" x="10" y="6" />
                  </Icon>
                ) : null}
                {item.icon === "user" ? (
                  <Icon className="icon-sm">
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="8" r="4" />
                  </Icon>
                ) : null}
                {item.icon === "wrench" ? (
                  <Icon className="icon-sm">
                    <rect height="18" rx="2" width="18" x="3" y="3" />
                    <path d="m8 9 3 3-3 3" />
                    <path d="M13 15h3" />
                  </Icon>
                ) : null}
                {childrenOrLabel(item)}
              </CrumbLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

function childrenOrLabel(item) {
  return item.label;
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <button
        aria-label={theme === "dim" ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={theme === "silk"}
        className={`theme-slider ${theme === "silk" ? "light" : "dark"}`}
        onClick={() => setTheme(theme === "dim" ? "silk" : "dim")}
        type="button"
      >
        <span className="theme-slider-track">
          <span className="theme-icon moon-icon">
            <Icon className="icon-sm">
              <path d="M21 12.79A9 9 0 1 1 11.21 3c0 3 2 5.5 5 6.5 1.28.43 2.71.48 4.79.29" />
            </Icon>
          </span>
          <span className="theme-icon sun-icon">
            <Icon className="icon-sm">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </Icon>
          </span>
          <span className="theme-thumb" />
        </span>
      </button>
    </div>
  );
}

function ThemeControls({ theme, setTheme, uiStyle, setUiStyle }) {
  const [open, setOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!panelRef.current || panelRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
      setTerminalOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setTerminalOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="theme-controls" ref={panelRef}>
      <ThemeToggle setTheme={setTheme} theme={theme} />
      <div className="settings-panel-wrap">
        <button
          aria-expanded={open}
          aria-label="Open theme settings"
          className={`settings-button ${open ? "active" : ""}`}
          onClick={() => {
            setOpen((value) => !value);
            setTerminalOpen(false);
          }}
          type="button"
        >
          <Icon className="icon-sm">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 9.91 3H10a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </Icon>
        </button>

        {open ? (
          <div className="settings-menu">
            <p className="settings-title">Visual style</p>
            <button
              className={`settings-option ${uiStyle === "modern" ? "selected" : ""}`}
              onClick={() => {
                setUiStyle("modern");
                setOpen(false);
              }}
              type="button"
            >
              <span>Modern</span>
              <small>Current clean theme</small>
            </button>
            <button
              className={`settings-option ${uiStyle === "classic" ? "selected" : ""}`}
              onClick={() => {
                setUiStyle("classic");
                setOpen(false);
              }}
              type="button"
            >
              <span>Classic</span>
              <small>Windows XP inspired</small>
            </button>
          </div>
        ) : null}
      </div>
      <button
        aria-expanded={terminalOpen}
        aria-label="Open Reader's corner"
        className={`settings-button terminal-trigger ${terminalOpen ? "active" : ""}`}
        onClick={() => {
          setTerminalOpen((value) => !value);
          setOpen(false);
        }}
        type="button"
      >
        <Icon className="icon-sm">
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v16H6.5A2.5 2.5 0 0 0 4 22z" />
          <path d="M20 20H6.5A2.5 2.5 0 0 0 4 22" />
          <path d="M12 8h4" />
          <path d="M12 12h4" />
        </Icon>
      </button>
      <aside className={`terminal-drawer ${terminalOpen ? "open" : ""}`}>
        <div className="terminal-drawer-header">
          <div>
            <p className="settings-title">Library</p>
            <h2>Reader&apos;s corner</h2>
          </div>
          <button
            aria-label="Close Reader's corner"
            className="settings-button"
            onClick={() => setTerminalOpen(false)}
            type="button"
          >
            <Icon className="icon-sm">
              <path d="M6 6 18 18" />
              <path d="M6 18 18 6" />
            </Icon>
          </button>
        </div>
        <p className="feature-text terminal-copy">
          A space for programming-book articles and reading notes.
        </p>
        <div className="terminal-command-block">
          <p className="terminal-command-label">Clean Code</p>
          <code>Empty for now</code>
        </div>
        <div className="terminal-command-block">
          <p className="terminal-command-label">Refactoring</p>
          <code>Empty for now</code>
        </div>
        <div className="terminal-command-block">
          <p className="terminal-command-label">Designing Data-Intensive Applications</p>
          <code>Empty for now</code>
        </div>
        <p className="terminal-hint">
          More reading notes and book breakdowns can be added here later.
        </p>
      </aside>
    </div>
  );
}

function ExperienceModal({ onSelect }) {
  return (
    <div className="experience-modal-backdrop">
      <div className="experience-modal">
        <p className="feature-kicker">Welcome</p>
        <h2>Select your experience</h2>
        <p className="feature-text">
          Choose the visual style you want to use across the site.
        </p>
        <div className="experience-actions">
          <button className="cta-secondary experience-button" onClick={() => onSelect("classic")} type="button">
            Classic
          </button>
          <button className="cta-primary experience-button" onClick={() => onSelect("modern")} type="button">
            Modern
          </button>
        </div>
      </div>
    </div>
  );
}

function HeaderControls({
  canGoBack,
  canGoForward,
  navigate,
  onBack,
  onForward,
  route,
  setTheme,
  setUiStyle,
  scrolled,
  theme,
  uiStyle
}) {
  return (
    <div className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
      <div className="breadcrumb-row">
        <HistoryNav
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          onBack={onBack}
          onForward={onForward}
        />
        <Breadcrumbs navigate={navigate} route={route} />
      </div>
      <ThemeControls
        setTheme={setTheme}
        setUiStyle={setUiStyle}
        theme={theme}
        uiStyle={uiStyle}
      />
    </div>
  );
}

function HistoryNav({ canGoBack, canGoForward, onBack, onForward }) {
  return (
    <div className="history-nav" aria-label="Navigation history">
      <button
        aria-label="Go back"
        className="history-button"
        disabled={!canGoBack}
        onClick={onBack}
        type="button"
      >
        <Icon className="icon-sm">
          <path d="m15 18-6-6 6-6" />
        </Icon>
      </button>
      <button
        aria-label="Go forward"
        className="history-button"
        disabled={!canGoForward}
        onClick={onForward}
        type="button"
      >
        <Icon className="icon-sm">
          <path d="m9 18 6-6-6-6" />
        </Icon>
      </button>
    </div>
  );
}

function NavLink({ children, className, page, navigate, slug }) {
  return (
    <a
      className={className}
      href={getHashForPage(page, slug)}
      onClick={(event) => {
        event.preventDefault();
        navigate(page, "push", slug);
      }}
    >
      {children}
    </a>
  );
}

function HomePage({ navigate }) {
  const [selectedFilter, setSelectedFilter] = useState("AI");
  const previewEntries = blogEntries
    .filter((entry) => entry.source === "markdown")
    .filter((entry) => !selectedFilter || entry.tags.some((tag) => tag.toUpperCase() === selectedFilter))
    .slice(0, 3);

  return (
    <section className="landing-grid">
      <article className="feature-card hero-feature">
        <div className="hero-feature-body">
          <p className="feature-kicker">Blog</p>
          <h1>Blog</h1>
          <p className="feature-text">
            Notes, interesting finds, and lessons learned during my engineering journey.
          </p>
          <div className="blog-preview-filters">
            {homeBlogFilters.map((filter) => (
              <button
                className={selectedFilter === filter.tag ? "active" : ""}
                key={filter.tag}
                onClick={() => setSelectedFilter(filter.tag)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
            <button
              className={!selectedFilter ? "active" : ""}
              onClick={() => setSelectedFilter(null)}
              type="button"
            >
              All
            </button>
          </div>
          <div className="blog-preview-list">
            {previewEntries.length > 0 ? (
              previewEntries.map((entry) => (
                <button
                  className="blog-preview-card"
                  key={entry.slug}
                  onClick={() => navigate("article", "push", entry.slug)}
                  type="button"
                >
                  <div className="blog-preview-meta">
                    <span>{entry.date}</span>
                    <span>{entry.readTime}</span>
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.summary}</p>
                </button>
              ))
            ) : (
              <div className="blog-preview-empty">No entries found for this filter yet.</div>
            )}
          </div>
        </div>
        <div className="cta-row">
          <NavLink className="cta-primary" navigate={navigate} page="blog">
            See all entries
          </NavLink>
          <NavLink className="cta-secondary" navigate={navigate} page="about">
            About me
          </NavLink>
        </div>
      </article>

      <article className="feature-card compact-card">
        <p className="feature-kicker">About Me</p>
        <h2>Introduction</h2>
        <div className="compact-profile-row">
          <div className="compact-profile-avatar">
            <img alt="Dani Voro" src="/Voro-profile.png" />
          </div>
          <p className="feature-text compact-profile-text">
            Quick access point to a short personal introduction inside the site.
          </p>
        </div>
        <NavLink className="cta-secondary compact-cta" navigate={navigate} page="about">
          Open profile
        </NavLink>
      </article>

      <article className="feature-card compact-card">
        <p className="feature-kicker">Projects</p>
        <h2>Cool projects</h2>
        <p className="feature-text">
          A selection of personal projects and experiments, organized on a
          separate page.
        </p>
        <NavLink className="cta-secondary compact-cta" navigate={navigate} page="projects">
          Open projects
        </NavLink>
      </article>

      <article className="feature-card compact-card">
        <p className="feature-kicker">Music</p>
        <h2>Create some music!</h2>
        <p className="feature-text">
          A small playful corner for rhythm, experimentation, and future audio tools.
        </p>
        <NavLink className="cta-secondary compact-cta" navigate={navigate} page="music">
          Open synth
        </NavLink>
      </article>
    </section>
  );
}

function BlogPage({ navigate }) {
  return (
    <section className="list-card">
      <div className="section-heading">
        <p className="feature-kicker">Blog</p>
        <h1>Entries</h1>
        <p className="feature-text">
          Every Markdown file placed in `blog-articles` is automatically added here.
        </p>
      </div>

      {blogEntries.map((entry) => (
        <article className="post-row" key={entry.slug}>
          <div>
            <p className="post-category">{entry.category}</p>
            <h2>{entry.title}</h2>
            <p className="feature-text">{entry.summary}</p>
          </div>
          <div className="post-meta">
            <span>{entry.date}</span>
            <span>{entry.readTime}</span>
            <NavLink
              className="cta-primary"
              navigate={navigate}
              page="article"
              slug={entry.slug}
            >
              Open
            </NavLink>
          </div>
        </article>
      ))}
    </section>
  );
}

function AboutPage({ navigate }) {
  return (
    <section className="list-card">
      <div className="section-heading">
        <p className="feature-kicker">About Me</p>
        <h1>Dani Vorobiev</h1>
      </div>

      <div className="about-layout">
        <div className="about-avatar">
          <img alt="Dani Voro" src="/Voro-profile.png" />
        </div>
        <div className="about-copy">
          <p>
            This page works as the personal introduction area of the site and as
            the second main destination from Home.
          </p>
          <p>
            From here you can go back to the blog, check the available entry, and
            keep a clear navigation flow between the three main areas of the site.
          </p>
          <div className="cta-row">
            <a className="cta-primary cta-with-icon download-cta" download href="/voro-cv.pdf">
              <Icon className="icon-sm">
                <path d="M12 3v11" />
                <path d="m7 11 5 5 5-5" />
                <path d="M5 21h14" />
              </Icon>
              <span>
                Download CV
              </span>
            </a>
            <a
              className="cta-secondary cta-with-icon"
              href="https://www.linkedin.com/in/daniil-vorobiev/"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="" aria-hidden="true" className="cta-logo" src="/linkedin-logo-transparent.png" />
              <span>LinkedIn</span>
            </a>
            <a
              className="cta-secondary cta-with-icon"
              href="https://github.com/voromir"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="" aria-hidden="true" className="cta-logo cta-logo-github" src="/github-logo-transparent.png" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="console-note">
            <span>Or download my CV from the console:</span>
            <code className="typing-command">
              <span className="typing-command-text">curl https://voro.blog/cv.txt</span>
              <span aria-hidden="true" className="typing-cursor" />
            </code>
          </p>
        </div>
      </div>

      <div className="about-cards">
        <article className="feature-card compact-card detail-card">
        <p className="feature-kicker">Ocado</p>
        <h2>My contributions at Ocado</h2>
        <p className="feature-text">{ocadoContributionSummary}</p>
          <NavLink
            className="text-link"
            navigate={navigate}
            page="ocado-contributions"
          >
            Read full details
          </NavLink>
        </article>

        <article className="feature-card compact-card detail-card">
        <p className="feature-kicker">Work Style</p>
        <h2>Ownership, learning, collaboration</h2>
          <p className="feature-text">
            I usually contribute by spotting risks early, learning fast across
            domains, documenting clearly, and making systems easier for others
            to work with.
          </p>
        </article>
      </div>

      <section className="certifications-section">
        <div className="section-heading">
          <p className="feature-kicker">Certifications</p>
          <h2>Learning and formal training</h2>
          <p className="feature-text">
            A visual overview of the certifications currently stored in the
            project.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article className="certificate-card" key={certificate.id}>
              <img
                alt={certificate.title}
                className="certificate-image"
                src={certificate.image}
              />
              <div className="certificate-copy">
                <h3>{certificate.title}</h3>
                <p><strong>Teacher:</strong> {certificate.teacher}</p>
                <p><strong>Platform:</strong> {certificate.platform}</p>
                <p><strong>Summary:</strong> {certificate.summary}</p>
                <div className="certificate-actions">
                  <NavLink
                    className="cta-secondary compact-cta"
                    navigate={navigate}
                    page="certification"
                    slug={certificate.id}
                  >
                    See my notes
                  </NavLink>
                  <button className="cta-secondary compact-cta cta-with-icon" type="button">
                    <span>Implementation</span>
                    <Icon className="icon-sm">
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </Icon>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function CertificationPage({ certificate }) {
  if (!certificate) {
    return (
      <section className="list-card">
        <div className="section-heading">
          <p className="feature-kicker">Certifications</p>
          <h1>Certificate not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="list-card">
      <div className="section-heading">
        <p className="feature-kicker">Certifications</p>
        <h1>{certificate.title}</h1>
        <p className="feature-text">{certificate.summary}</p>
      </div>

      <div className="certificate-notes-layout">
        <div className="certificate-notes-image-wrap">
          <img alt={certificate.title} className="certificate-image" src={certificate.image} />
        </div>
        <div className="contribution-card">
          <p><strong>Teacher:</strong> {certificate.teacher}</p>
          <p><strong>Platform:</strong> {certificate.platform}</p>
          <h2>What I learned</h2>
          <ul className="contribution-list">
            {certificate.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OcadoContributionsPage() {
  return (
    <section className="list-card">
      <div className="section-heading">
        <p className="feature-kicker">Ocado</p>
        <h1>My contributions at Ocado</h1>
        <p className="feature-text">{ocadoContributionSummary}</p>
      </div>

      <div className="contribution-sections">
        {ocadoContributionSections.map((section) => (
          <section className="contribution-card" key={section.title}>
            <h2>{section.title}</h2>
            <ul className="contribution-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="list-card">
      <div className="section-heading">
        <p className="feature-kicker">Projects</p>
        <h1>Selected projects</h1>
        <p className="feature-text">
          Mocked project tiles for now. Later these can link to detailed pages or
          case studies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-tile" key={project}>
            <p className="post-category">Project</p>
            <h2>{project}</h2>
            <p className="feature-text">
              Placeholder card ready to be replaced with the real project
              content.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MusicPage() {
  return (
    <section className="list-card">
      <div className="section-heading">
        <p className="feature-kicker">Music</p>
        <h1>Create some music!</h1>
        <p className="feature-text">Use my online synth to create some rythm</p>
      </div>
    </section>
  );
}

function renderInlineContent(text) {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    if (!part) {
      return null;
    }

    if (/^`[^`]+`$/.test(part)) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      return (
        <a href={linkMatch[2]} key={`${part}-${index}`} rel="noreferrer" target="_blank">
          {linkMatch[1]}
        </a>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
}

function ArticleContent({ entry }) {
  return (
    <div className="content">
      {entry.blocks.map((block, index) => {
        if (block.type === "lead") {
          return (
            <p className="intro" key={`${block.type}-${index}`}>
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          if (block.level === 1) {
            return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
          }

          if (block.level === 3) {
            return <h3 key={`${block.type}-${index}`}>{block.text}</h3>;
          }

          return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
        }

        if (block.type === "quote") {
          return <blockquote key={`${block.type}-${index}`}>{renderInlineContent(block.text)}</blockquote>;
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag className="article-list" key={`${block.type}-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineContent(item)}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "code") {
          return (
            <pre className="article-code" key={`${block.type}-${index}`}>
              <code
                className={`hljs${block.language ? ` language-${block.language}` : ""}`}
                dangerouslySetInnerHTML={{ __html: highlightCodeBlock(block.text, block.language) }}
              />
            </pre>
          );
        }

        if (block.type === "image") {
          return <img alt={block.alt} className="article-image" key={`${block.type}-${index}`} src={block.src} />;
        }

        if (block.type === "note") {
          return (
            <div className="expiration-note" key={`${block.type}-${index}`}>
              <span>{block.text}</span>
            </div>
          );
        }

        return (
          <p key={`${block.type}-${index}`}>{renderInlineContent(block.text)}</p>
        );
      })}
    </div>
  );
}

function ArticlePage({ entry }) {
  if (!entry) {
    return (
      <section className="list-card">
        <div className="section-heading">
          <p className="feature-kicker">Blog</p>
          <h1>Article not found</h1>
          <p className="feature-text">The requested blog entry could not be found.</p>
        </div>
      </section>
    );
  }

  return (
    <article className="article-card">
      <div className="article-inner">
        <header className="article-header">
          <div className="badge">{entry.category}</div>
          <h1>{entry.headline}</h1>

          <div className="meta-row">
            <div className="author">
              <div className="avatar-frame">
                <img alt="Author" src="/avatar.jpg" />
              </div>
              <div className="author-copy">
                <p className="author-name">{entry.author}</p>
                <p className="author-role">{entry.role}</p>
              </div>
            </div>

            <div className="meta-list">
              <span>
                <Icon className="icon-sm primary-text">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect height="18" rx="2" width="18" x="3" y="4" />
                  <path d="M3 10h18" />
                </Icon>
                {entry.date}
              </span>
              <span>
                <Icon className="icon-sm primary-text">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </Icon>
                {entry.readTime}
              </span>
            </div>
          </div>
        </header>
        <ArticleContent entry={entry} />
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <aside>
        <div className="brand-block">
          <div>
            <p className="brand-name">Dani Voro</p>
            <p>Software Developer</p>
          </div>
        </div>
        <p>Copyright © 2026 - All rights reserved</p>
      </aside>
    </footer>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("voro-color-theme") || "dim");
  const [uiStyle, setUiStyle] = useState(() => localStorage.getItem("voro-ui-style") || "modern");
  const [showExperienceModal, setShowExperienceModal] = useState(
    () => !localStorage.getItem("voro-ui-style")
  );
  const [route, setRoute] = useState(() => getRouteFromHash());
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [historyState, setHistoryState] = useState(() => ({
    entries: [window.location.hash || "#inicio"],
    index: 0
  }));
  const skipHashSyncRef = useRef(false);

  useEffect(() => {
    const onHashChange = () => {
      if (skipHashSyncRef.current) {
        skipHashSyncRef.current = false;
        return;
      }

      const nextRoute = getRouteFromHash();
      setRoute(nextRoute);
      setHistoryState((current) => {
        const nextHash = window.location.hash || "#inicio";

        if (current.entries[current.index] === nextHash) {
          return current;
        }

        const entries = current.entries.slice(0, current.index + 1);
        entries.push(nextHash);
        return {
          entries,
          index: entries.length - 1
        };
      });
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = "#inicio";
    }

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyHeader(window.scrollY > 96);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("voro-ui-style", uiStyle);
  }, [uiStyle]);

  useEffect(() => {
    localStorage.setItem("voro-color-theme", theme);
  }, [theme]);

  useEffect(() => {
    const tint = getBrowserTint(uiStyle, theme);
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const appleStatusBarMeta = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

    if (themeMeta) {
      themeMeta.setAttribute("content", tint);
    }

    if (appleStatusBarMeta) {
      appleStatusBarMeta.setAttribute("content", getAppleStatusBarStyle(theme));
    }

    document.documentElement.style.backgroundColor = tint;
    document.body.style.backgroundColor = tint;
  }, [theme, uiStyle]);

  const navigate = (page, mode = "push", slug) => {
    const nextHash = getHashForPage(page, slug);
    setRoute(getRouteFromHash(nextHash));

    setHistoryState((current) => {
      if (mode === "back") {
        return { ...current, index: Math.max(0, current.index - 1) };
      }

      if (mode === "forward") {
        return {
          ...current,
          index: Math.min(current.entries.length - 1, current.index + 1)
        };
      }

      if (current.entries[current.index] === nextHash) {
        return current;
      }

      const entries = current.entries.slice(0, current.index + 1);
      entries.push(nextHash);
      return {
        entries,
        index: entries.length - 1
      };
    });

    skipHashSyncRef.current = true;
    window.location.hash = nextHash;
  };

  let content = <HomePage navigate={navigate} />;

  if (route.page === "blog") {
    content = <BlogPage navigate={navigate} />;
  } else if (route.page === "about") {
    content = <AboutPage navigate={navigate} />;
  } else if (route.page === "certification") {
    content = <CertificationPage certificate={getCertificationById(route.certificateId)} />;
  } else if (route.page === "ocado-contributions") {
    content = <OcadoContributionsPage />;
  } else if (route.page === "projects") {
    content = <ProjectsPage />;
  } else if (route.page === "music") {
    content = <MusicPage />;
  } else if (route.page === "article") {
    content = <ArticlePage entry={getArticleBySlug(route.slug)} />;
  }

  const canGoBack = historyState.index > 0;
  const canGoForward = historyState.index < historyState.entries.length - 1;
  const handleBack = () => {
    if (!canGoBack) {
      return;
    }

    const previousHash = historyState.entries[historyState.index - 1];
    const previousRoute = getRouteFromHash(previousHash);
    navigate(previousRoute.page, "back", previousRoute.slug);
  };
  const handleForward = () => {
    if (!canGoForward) {
      return;
    }

    const nextHash = historyState.entries[historyState.index + 1];
    const nextRoute = getRouteFromHash(nextHash);
    navigate(nextRoute.page, "forward", nextRoute.slug);
  };

  return (
    <div className={`app theme-${theme} skin-${uiStyle}`}>
      {showExperienceModal ? (
        <ExperienceModal
          onSelect={(style) => {
            setUiStyle(style);
            setShowExperienceModal(false);
          }}
        />
      ) : null}
      <main className="page">
        <HeaderControls
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          navigate={navigate}
          onBack={handleBack}
          onForward={handleForward}
          route={route}
          scrolled={showStickyHeader}
          setTheme={setTheme}
          setUiStyle={setUiStyle}
          theme={theme}
          uiStyle={uiStyle}
        />
        {content}
        <Footer />
      </main>
    </div>
  );
}

export default App;
