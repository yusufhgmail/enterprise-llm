# Website And Marketing Decision

_Last updated: 2026-06-01_

## Status

Final recommendation after research. This document preserves the preliminary decision first, then records the research findings and the revised decision.

## Preliminary Decision

Before research, the proposed website direction was:

- Build a content-first marketing website, not a product web app.
- Use Astro, TypeScript, MDX, Astro Content Collections, and Tailwind CSS.
- Use GitHub as the source of truth for content and code.
- Deploy as a fast static site on Vercel or Cloudflare Pages.
- Start without a headless CMS; add Sanity or Payload later only if non-technical editorial workflows become important.
- Structure the main website around the first commercial wedge: helping mid-sized companies get their own internal, company-owned LLM.
- Put the long-term mission under an About or Mission section instead of leading the homepage with the civilizational argument.
- Prepare for a future content machine: blog, essays, research, video pages, podcast pages, case studies, and conversion pages.
- Prepare for a future marketing Aether instance that can safely create drafts, propose edits, analyze engagement, and support publishing through controlled GitHub workflows.

The preliminary site map was:

- `/` - main customer-facing homepage selling the company-owned LLM offer.
- `/solution` - what we deploy and how it works.
- `/problems` - shadow AI, sensitive data leakage, provider dependency, high costs, generic AI shaping employee behavior.
- `/mission` - long-term mission and why the company exists.
- `/writing` - essays, blog posts, research, and market commentary.
- `/company` - about, principles, and contact.

The preliminary LLM-readability requirements were:

- Static HTML first.
- Clear semantic headings.
- MDX as the source of truth.
- Structured metadata and JSON-LD.
- Dedicated answer pages for important questions.
- `/llms.txt`.
- `sitemap.xml` and `robots.txt`.
- Canonical summaries and FAQ sections.
- Glossary/explainer pages for category language.

## Why We Made The Preliminary Decision

The company is at the website-and-positioning stage, not the product-application stage. The immediate need is to explain a new category clearly, earn trust, produce useful content, and convert early customers into conversations.

Astro looked like the best first choice because it is content-native, static by default, fast, simple, and well suited for MDX publishing. A GitHub-first workflow also matches the future goal of letting a marketing Aether instance contribute safely: the agent can make branches, write drafts, open pull requests, update metadata, and analyze content without directly mutating production.

The homepage should sell the concrete customer outcome first because companies buy an immediate business result before they buy the long-term mission. The mission still matters, but it should strengthen trust and differentiation after the buyer understands the practical offer.

## Research Findings

Research date: 2026-06-01.

### 1. Generative search still depends on crawlable, high-quality web content

Google's Search Central guidance says AI Overviews and AI Mode still use the same core SEO foundations: pages must be crawlable, indexable, eligible for snippets, internally linked, helpful, reliable, people-first, and available as textual content. Google explicitly says there are no special technical requirements for AI features and no special AI-specific schema required.

Source: [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)

Implication: We should not build the site around "AI SEO hacks." We should build a technically excellent, static, text-first website with strong information architecture, clear pages, internal links, structured data that matches visible content, sitemap, robots.txt, and analytics.

### 2. ChatGPT search visibility is controlled separately from training

OpenAI documents separate crawlers and controls:

- `OAI-SearchBot` is used to surface websites in ChatGPT search features.
- `GPTBot` is used for content that may be used to train OpenAI foundation models.
- A site can allow search visibility while disallowing training.

OpenAI's publisher FAQ also says publishers should make sure they are not blocking `OAI-SearchBot` if they want content included in ChatGPT summaries and snippets, and that ChatGPT referrals include `utm_source=chatgpt.com`.

Sources:

- [OpenAI: Overview of OpenAI Crawlers](https://platform.openai.com/docs/bots)
- [OpenAI Help: Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)

Implication: The site should deliberately configure robots.txt for AI crawlers. The default recommendation is to allow `OAI-SearchBot` for discoverability and decide separately whether to allow or disallow `GPTBot` for training.

### 3. GEO is real, but the reliable parts are evidence, structure, and domain authority

The KDD 2024 paper "GEO: Generative Engine Optimization" formalized generative engine optimization and found that content optimization can improve visibility in generative engine responses by up to 40%, with effects varying by domain.

Source: [Princeton publication page: GEO: Generative Engine Optimization](https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/)

Implication: We should optimize for being useful and citeable in answer engines: clear claims, definitions, direct answers, supporting evidence, statistics, examples, comparison pages, and authoritative source references. The goal is not keyword stuffing. The goal is to become the best source for a category.

### 4. `/llms.txt` is useful but not yet a standard

The `/llms.txt` proposal is a low-cost convention for giving LLMs a curated Markdown map of the most important site content. However, it is not a ratified standard and no major model vendor has publicly committed to consuming it.

Source: [Website Specification: /llms.txt](https://specification.website/spec/agent-readiness/llms-txt/)

Implication: We should ship `/llms.txt` because it is cheap and strategically aligned, but we should not treat it as the foundation of LLM discoverability. It is a useful supplement to strong HTML pages, sitemap, metadata, and source authority.

### 5. B2B buyers now use AI, digital self-service, and human validation together

Gartner reports that B2B buyers increasingly use digital channels, AI, and human interaction together. In a 2025 survey of 645 B2B buyers, buyers used an average of seven information sources during a purchase, 45% used GenAI to gather vendor and product information, 69% preferred validating AI-generated insights with sales reps, 67% preferred a sales-rep-free experience, and 70% preferred a completely digital self-service buying experience.

Source: [Gartner: B2B buyers validate AI-generated insights with sales reps](https://www.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-survey-finds-sixty-nine-percent-of-b-two-b-buyers-turn-to-sales-reps-to-validate-ai-generated-insights)

Implication: The website needs to support self-directed research and conversion to a human conversation. It should not be a brochure. It should help a buyer understand the problem, validate the approach, share internally, estimate fit, and book a call when they need confidence.

### 6. B2B trust is increasingly people-led

LinkedIn's 2026 B2B marketing analysis emphasizes people-powered thought leadership. It cites LinkedIn/Edelman research that nearly three in four decision-makers say thought leadership is more trustworthy for assessing company capabilities than product sheets or marketing materials. LinkedIn also frames B2B as increasingly buying from trusted human voices, not just company logos.

Source: [LinkedIn: 6 B2B Marketing Insights for 2026](https://www.linkedin.com/business/marketing/blog/trends-tips/b2b-marketing-insights-creators-thought-leadership)

Implication: The website should be the canonical home for the company, but organic distribution should include founder-led and expert-led content, especially on LinkedIn, with the site acting as the durable source of truth.

## Revised Decision

After research, the core technical decision remains the same, but the marketing architecture becomes more specific.

### Final Tech Recommendation

Use:

- Astro
- TypeScript
- MDX
- Astro Content Collections
- Tailwind CSS
- GitHub-first content workflow
- Static deployment on Cloudflare Pages or Vercel
- Plausible, PostHog, or similar privacy-conscious analytics

Do not add a full CMS yet. Add Sanity or Payload later only if the editorial workflow outgrows GitHub/MDX.

Why this still stands:

- The site needs fast static HTML, not an app runtime.
- The content needs to be readable by humans, search engines, and LLMs.
- MDX gives us long-form content plus reusable components.
- Astro Content Collections give typed frontmatter and content structure.
- GitHub gives the future marketing Aether instance a controlled workflow: drafts, branches, pull requests, reviews, and deploy previews.

### Final Website Shape

The website should have two jobs:

1. Sell the first commercial wedge: company-owned internal LLMs for mid-sized companies.
2. Build long-term authority for the broader mission of owned, sovereign, distributed agents.

Recommended first site map:

- `/` - homepage selling the practical offer: "Give your company its own LLM."
- `/company-owned-llm` - main solution page explaining the offer in detail.
- `/problems/shadow-ai` - employees are already using public AI with sensitive data.
- `/problems/provider-dependency` - why betting on one frontier model provider is risky.
- `/problems/ai-costs` - why usage costs rise and how local/open models change the economics.
- `/problems/generic-ai-strategy` - generic LLMs shape employee behavior without company strategy.
- `/mission` - long-term mission: owned, local, sovereign, distributed agents.
- `/writing` - content hub for essays, explainers, research notes, and market commentary.
- `/resources` - buyer enablement assets: internal LLM checklist, security questions, model-independence guide, cost calculator.
- `/contact` - book a call or request an assessment.

The mission belongs on `/mission` and in the About/company story, with selective references on the homepage. The homepage should lead with the customer pain and outcome.

### Final Content Machine Shape

The content system should support these content types from the beginning:

- `pages` - core website pages.
- `writing` - essays, thought leadership, market commentary.
- `explainers` - answer pages for LLM/search visibility.
- `resources` - checklists, templates, calculators, guides.
- `case-studies` - future customer proof.
- `media` - future video and podcast episode pages.

Each content item should include structured frontmatter:

```yaml
title:
description:
status: draft | review | published
author:
publishedAt:
updatedAt:
canonical:
tags:
audience:
funnelStage: awareness | consideration | decision
sourceType: page | essay | explainer | resource | case-study | video | podcast
channels:
  - website
  - linkedin
  - youtube
  - podcast
  - newsletter
llmSummary:
keyQuestions:
relatedPages:
```

### Final LLM Discoverability Requirements

Build for LLMs by building clear, authoritative, crawlable content.

Required:

- Static HTML for all important content.
- Textual content visible without client-side JavaScript.
- Semantic headings and one clear H1 per page.
- Clear answer blocks for key questions.
- Canonical summaries on important pages.
- FAQ sections where they genuinely help users.
- Descriptive metadata and OpenGraph tags.
- JSON-LD for Organization, Article, FAQPage where appropriate, and BreadcrumbList.
- Sitemap and robots.txt.
- Allow Googlebot and other normal search crawlers.
- Decide crawler policy explicitly:
  - Allow `OAI-SearchBot` for ChatGPT search discoverability.
  - Decide separately whether to allow or disallow `GPTBot` for training.
- Ship `/llms.txt` as a curated site map for agents, but treat it as supplementary.
- Consider `.md` representations of major pages later if useful for agent consumption.

Do not:

- Depend on `/llms.txt` as the main strategy.
- Create thin pages just to target keywords.
- Hide important content behind JavaScript interactions.
- Produce generic AI-written SEO content.
- Over-optimize for one search engine or model.

### Final Organic Marketing Strategy

The website should be the canonical knowledge base, but organic distribution should be multi-channel.

Recommended first channels:

1. **Founder-led LinkedIn**
   - Publish strong points of view about shadow AI, company-owned LLMs, strategic alignment, model independence, and sovereign agents.
   - Link back to canonical site pages.
   - Use posts to test which pain resonates.

2. **Search and LLM-answer pages**
   - Create pages that directly answer buyer questions:
     - "What is a company-owned LLM?"
     - "How can a company stop employees from pasting sensitive data into ChatGPT?"
     - "Private ChatGPT alternative for mid-sized companies"
     - "Local LLM vs ChatGPT Enterprise"
     - "How to reduce company AI costs with open-source models"
     - "How AI chat tools shape employee behavior"

3. **Buyer enablement resources**
   - Build assets that help internal champions sell the idea:
     - Internal LLM security checklist.
     - Shadow AI risk assessment.
     - Model-independence scorecard.
     - AI usage cost calculator.
     - Executive one-pager.

4. **Original POV essays**
   - The category will not be won by generic SEO posts.
   - Publish distinctive essays around the core insight: AI chat systems are becoming the behavioral layer of the company.

5. **Lightweight video and podcast readiness**
   - Do not start with a heavy media operation.
   - Structure content so each essay can later become:
     - LinkedIn posts.
     - Short video scripts.
     - Podcast episode notes.
     - Newsletter issues.

### Marketing Aether Workflow

The future marketing Aether instance should interact with the website through a controlled workflow:

1. Read analytics, Search Console, and referral data.
2. Identify topics, pages, and questions worth addressing.
3. Draft MDX content in a branch.
4. Add structured frontmatter.
5. Generate proposed LinkedIn/video/newsletter derivatives.
6. Open a pull request.
7. Wait for human review before publishing.
8. After publishing, monitor engagement and propose updates.

No direct production publishing at first.

This matches the company mission: the company uses its own agent to operate its own marketing, but the agent works through explicit ownership, review, and control boundaries.

## What Changed After Research

The preliminary decision mostly held.

What stayed the same:

- Astro + MDX + TypeScript + Tailwind remains the recommended stack.
- GitHub-first publishing remains the right controlled workflow.
- The homepage should sell the company-owned LLM offer.
- The mission should live under `/mission` or About, not dominate the homepage.
- The site should be prepared for future blog, video, podcast, and agent-assisted publishing.

What changed:

- LLM SEO is now framed as **crawlable authority architecture**, not as a separate magic optimization layer.
- `/llms.txt` is downgraded from "important requirement" to "cheap supplementary bet."
- AI crawler policy is now explicit: allow `OAI-SearchBot` for ChatGPT search visibility, decide separately on `GPTBot`.
- The content plan now includes buyer enablement resources, because B2B buyers use digital self-service and AI research but still need human validation.
- Organic marketing now explicitly includes founder-led LinkedIn and people-led thought leadership, not only website content.
- The site map now includes answer/explainer pages and resources designed for both human buyers and LLM retrieval.

## Final Decision Summary

Build the website with Astro, TypeScript, MDX, Astro Content Collections, Tailwind CSS, and a GitHub-first workflow.

Make the homepage a focused sales page for company-owned LLMs for mid-sized companies.

Put the broader mission under `/mission`, connected to the homepage but not competing with the commercial offer.

Design the content system as a long-term content machine for essays, explainers, resources, case studies, videos, podcasts, and future marketing Aether workflows.

Optimize for LLM-era discoverability by becoming the clearest, most authoritative, most crawlable source for the category: company-owned LLMs, shadow AI risk, model independence, local/open-source enterprise AI, and AI as the behavioral layer of the company.
