# Website decision notes

## Round 1 — the idea was interesting but the offer was still abstract

1. A managing director using Pipedrive would ask what we actually build and whether the CRM must be replaced. The first draft named broad areas but did not show the work. We added sales, service and operations examples and stated that the system is designed around HubSpot, Salesforce, Pipedrive, Microsoft 365 and the company’s own tools.
2. An operations leader would ask what happens after clicking the button. A generic contact link created uncertainty. We changed the offer to a focused first system: map one business result, build with a controlled set of real data, then let the people doing the work decide whether it earned the right to continue.
3. A technical leader would object that training and owning a giant model is often wasteful. We changed the claim from owning every model to using the strongest available model while the company keeps the knowledge, rules, tests, workflow and learning record that make it useful.
4. A security or legal buyer would not accept “private” as an unexplained promise. We now say that the actual architecture must specify where data runs, who can access it, how long it is retained, which model providers see it, which regions are permitted and what is audited.
5. A serious buyer would look for evidence that the founder understands enterprise software in practice. We added Yusuf’s public record: founding FunnelBud after implementing HubSpot and Salesforce systems, and helping hundreds of CRM customers. We did not invent client logos, testimonials or AI results.

The most material lead blocker was uncertainty about the first engagement. The revised page now gives the visitor a concrete, low-commitment next step and a structured enquiry form.

## Round 2 — the page needed to survive informed objections

1. A buyer who already knows that major AI providers offer business data protections would reject a fear-based privacy pitch. The page does not claim that every hosted provider trains on customer data. It explains the separate value of company-specific context, workflow ownership, model portability and explicit deployment controls.
2. A chief technology officer would ask why the company should not simply use ChatGPT or Copilot. The first open question answers this directly: use the best general tools where they solve the problem, then build the company layer they do not provide automatically.
3. A finance-minded buyer would ask whether this starts a long transformation before value is visible. The four-week shape makes the first decision small: prove one useful system before expanding. Commercial terms remain intentionally absent until real delivery capacity and pricing are set.
4. A cold visitor might not understand the brand. “First Party Works” means that the valuable context and learning begin with the company itself; the hero immediately explains the category as company-owned AI systems. It is less political than “Sovereign Works” and does not lock the business to owning model weights in every case.
5. A buyer ready to talk should not have to compose an email. The form asks for the minimum information needed to propose the first test: person, work email, company, optional current system and the work that needs to improve. It states that the details are used only to answer the enquiry.

The most material remaining blocker is legal identity. Before public launch, the privacy notice and footer must name the company that operates First Party Works and the address or contact route for privacy requests.

## Round 3 — privacy needed to stand on its own

The page answered privacy questions in the control card and FAQ, but a buyer scanning for security could miss them. The original brief also asked for a privacy section explicitly. We added a dedicated section in English and Swedish that makes the four practical decisions visible: where the system runs, what may leave the company boundary, who may act and what can be audited. It avoids the false claim that every hosted provider trains on customer data and instead says that provider use, retention, caching, regions and any training must be deliberately agreed.

## Round 4 — no further copy change is more valuable than real market evidence

The page now answers what is built, why a ready-made assistant is not the whole answer, whether the CRM stays, what the company owns, how the first engagement works, how privacy is enforced, where data may run and why the founder understands this market. It gives both English and Swedish visitors a direct lead path. The brand and domain remain a real downstream choice, so they require owner confirmation before purchase. Beyond the legal notice and final domain, further polishing would be lower value than showing the page to qualified buyers and learning which workflow they would actually pay to improve.

## Round 5 — First Party Works explained the thesis but did not stick

Yusuf rejected First Party Works because it was not easy enough to remember. We compared three genuinely different replacements before changing the live page:

1. **Works Like Us** leads with the buyer's desired experience: AI that understands how this company actually works. The words are short, familiar in both the English and Swedish markets, and the exact `workslikeus.com` domain was available when checked on 24 August 2026. A search did not surface an obvious AI company using the exact name, although this is not formal trademark clearance.
2. **House Rules AI** makes governance and company-specific rules memorable. It is narrower than the offer, however: the work also captures knowledge, judgment, tests, workflows and learning, and “house rules” can sound like hospitality or consumer software.
3. **Uncopyable AI** states the competitive promise most boldly. The word is already widely used in branding and AI-moat discussions, including an established business-book and consulting theme, so it would be harder to own and risks sounding like a marketing consultancy.

Yusuf chose **Works Like Us**. It is the easiest to repeat after one hearing and gives the page room to explain the deeper ownership, privacy and model-portability thesis. Both `workslikeus.com` and `workslikeus.ai` returned as unregistered in the registry lookup on 24 August 2026; availability can change until purchase. The English and Swedish preview now use the chosen name.

## Round 6 — preserve the own-model belief, but lead with the business consequence

The Business Builder method was adopted as the governing website workflow. Yusuf’s belief that companies will need their own LLM weights remains the fixed strategic thesis. The website must still distinguish that belief from claims already proven about buyers or delivery.

We compared three narratives within the settled positioning:

1. **Competitive advantage first:** generally available models become common infrastructure; the company must build intelligence around its own knowledge, decisions and workflows. This is the strongest direction for the managing director because it explains why the work matters beyond saving labour.
2. **One useful workflow first:** lead with a narrow operational problem, the four-week first system and a measurable result. This makes the next action easier but understates the larger reason to build a company capability rather than buy another automation.
3. **Sovereignty and privacy first:** lead with private deployment, owned weights and control over data and providers. This is strongest for the technical and security reviewer but risks making the business sound like infrastructure consulting and excludes buyers whose best architecture legitimately uses selected hosted models.

The selected journey keeps competitive advantage as the opening argument, uses one useful workflow as the offer and next step, and places privacy and model control where technical and security doubts arise. The own-weights belief remains visible as a possible and strategically important destination, but the website does not falsely say that every useful first system requires training a model from scratch.

## Round 7 — the evidence supports the argument, not the unqualified claims

The Karp interview, Box's enterprise-AI research, the Box/AWS discussion and Aaron Levie's public writing converge on a useful initial argument: strong models are becoming broadly available, while company context, workflow integration, permissions, evaluation and operational learning remain difficult and valuable. They also show why the architecture should remain open to better frontier models while a company trains or owns weights only where that creates a real advantage.

The same review exposed two claims that were stronger than the evidence. The page no longer implies that a control layer is already operational, and the first engagement no longer promises a four-week delivery schedule that has not been tested. Deployment is described as an explicit boundary agreed for the work instead of an unlimited “run anywhere” promise. The page retains the strategic belief in company-owned weights while separating it from what every first project must do.

Local verification now covers the English and Swedish routes, root redirect, metadata, social card, favicon, form validation, successful D1 storage and cleanup, lint and production build. Keyboard focus styling, reduced-motion behavior and a usable mobile language switch were added before the production-like review. The largest remaining issue is verifying the rendered owner-only deployment on desktop and mobile, then identifying the legal operator before any public enquiry collection or domain launch.

## Round 8 — the private deployment works end to end

The owner-only Works Like Us deployment was reviewed at 1440×1000 and 390×844 in both English and Swedish. The headline, offer, company-system diagram, privacy explanation and enquiry form remain clear without horizontal overflow. The language switch and main enquiry action stay available in the mobile header. The production root redirects to English, the custom 404 page returns visitors to either language, interactive elements expose visible keyboard focus and reduced-motion visitors do not receive smooth scrolling.

A clearly labelled synthetic enquiry was submitted through the rendered English form. The success message appeared and the exact record reached the live `leads` table, proving the critical visitor journey from page entry through durable storage. The row is named “Preview Verification 2026-08-25” and is not a customer enquiry. The only defect found in this pass was that the favicon asset worked at its URL but had not been declared in page metadata; that declaration was added before the final deployment. Browser logs contained no Works Like Us application errors.

A fresh cold-reading and challenge pass found no remaining material copy, hierarchy, privacy, mobile, language or functional issue. The two unresolved items are external decisions rather than site defects: the public privacy notice must name the legal operator, and the `.com` plus `.ai` purchase and public launch still require Yusuf's fresh approval. Real visitor response and conversion remain unvalidated.

## Round 9 — the chosen name passes a preliminary collision screen

Fresh registry lookups on 24 August 2026 again returned no registration object for `workslikeus.com` or `workslikeus.ai`. Both domains therefore still appeared available at the time of the check, but neither is reserved until a purchase succeeds.

TMview's exact-name search returned no trademark row for **Works Like Us** across its participating national, EU and international offices. Exact-name public-web searches and searches aimed at Swedish company listings also surfaced no obvious AI business or Swedish company using the name. This narrows the risk of an immediate exact-name collision; it is not legal clearance. TMview itself says it is not an official register, exact searches do not rule out confusingly similar marks, and public search can miss unindexed trading names.

No site change followed from this check. The remaining material decision is still the legal operator that must be named in the footer and privacy notice. Domain purchase and public launch remain separate actions requiring Yusuf's fresh approval.

## Round 10 — lead with the buyer's frustration, then explain sovereignty

The previous opening began with the strategic consequence: “Build the intelligence your competitors can’t rent.” Yusuf liked the site but did not fully recognize the enterprise buyer's immediate job in that line. The primary champion is more likely to be a COO, business-unit leader, transformation lead or functional executive trying to improve a costly or inconsistent operation; the CIO, security and legal roles then decide whether the approach is technically and institutionally safe.

The revised opening is **“Build AI that works like your company—not like everyone else’s.”** It names the frustration with generic assistants before asking the visitor to accept the larger ownership thesis, and it makes the Works Like Us name explain itself. “Sovereign AI for enterprise” remains the category label. The supporting copy connects the immediate job to one valuable process and a business result, then states the long-term advantage: the company keeps the intelligence it creates.

This remains a pre-user positioning hypothesis. No real buyer has validated the revised line. Yusuf also confirmed that Yusuf Young AB will initially operate Works Like Us, so the footer and enquiry notice now name the company without implying any Works Like Us delivery history.
