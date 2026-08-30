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

## Round 11 — say what the business does without making the buyer translate it

Yusuf approved the direction but found the copy harder to understand than it needed to be. The site used strategic and technical labels before saying what they meant. Examples included “sovereign AI,” “company capability,” “control layer,” “model adapters,” “architecture,” “audit trail” and “provider exit path.” Those terms made the buyer decode the argument.

The complete English and Swedish journeys were rewritten around direct questions and actions:

1. The opening now says that Works Like Us uses the company’s knowledge, rules and tools to build AI for one real part of the business.
2. The first project now says exactly what happens: choose one problem, build a small working version, test it with the team and continue only if it works.
3. The privacy section now names the decisions directly: what data is used, where it goes, who may see it, what may happen without a person and what should be recorded.
4. The ownership argument now makes the comparison in ordinary language: competitors can use the same general AI models, but they do not have the company’s knowledge, rules, examples and corrections.
5. The path to a company-trained model remains visible without leading with model weights. The site says that Works Like Us can later train a model for one company task when that works better or gives the company more control.
6. The enquiry form now asks what work the visitor wants to make faster or better and says plainly what Works Like Us will send back.

This is a language change, not a change in strategy or offer. The visual design, English and Swedish routes, privacy boundary, founder evidence and first-system action remain the same. Real buyer response is still untested.

The owner-only rewritten site was then checked at 1440×1000 and 390×844 in both languages. The longer English and Swedish buttons fit the header and form, the main headings and company-system diagram did not create horizontal scrolling, and the full enquiry path still had the correct links, language switches and required fields. A fresh cold reading could answer what Works Like Us builds, who it helps, why a company would build instead of only using a general AI tool, how the first project works, how data is controlled and what happens after the visitor submits the form. A separate challenge from the operations, technical, security and user perspectives found no remaining language problem large enough to cause a likely misunderstanding. Real buyer response and conversion remain unvalidated.

## Round 12 — both domains are registered and the verified site is public

Yusuf approved the rewritten site and asked to buy both domains through GoDaddy. The completed order on 26 August 2026 contained only `workslikeus.com` and `workslikeus.ai`. The `.com` cost MXN229.99 for one year, the `.ai` cost MXN3,558.98 for two years, and tax and fees were MXN3.47. GoDaddy charged MXN3,792.44 in total.

Both new domains inherited the GoDaddy account's old SiteGround nameserver default. Because neither domain had an existing website or email setup to preserve, both were switched to GoDaddy DNS. Each zone now contains the two exact Sites A records and the required ownership and certificate TXT records. Sites reports both domains, their routing and their HTTPS certificates as active.

The owner-only access rule was changed to public after Yusuf's launch approval. The English and Swedish pages return HTTP 200 on both domains, and each root redirects to `/en`. The live browser check confirmed the correct English and Swedish titles and headings, the enquiry action and fields, the privacy notice and the Yusuf Young AB footer. The earlier private end-to-end enquiry proved that the submission reaches durable storage; no second synthetic enquiry was added during the domain launch. The website is technically live, but no real buyer has yet validated the positioning or submitted a qualified enquiry.

## Round 13 — use one public address

Yusuf chose `workslikeus.com` as the single public address and asked for `workslikeus.ai` to redirect permanently. The `.com` is easier to remember and is already the canonical address in the site's metadata.

The site now checks the requested domain before serving a page. Requests for `workslikeus.ai` receive an HTTP 301 redirect to the same path and query on `workslikeus.com`; requests for the `.com` continue normally. A local production build and server check confirmed that `/se?source=test` redirects to `https://workslikeus.com/se?source=test`, while `https://workslikeus.com/en` continues to serve the page.

The seventh version was then published. Production checks confirmed HTTP 301 from the `.ai` English page, Swedish page with a query and root to the matching `.com` addresses. The `.com` English and Swedish pages continued to return HTTP 200, and its root continued to send visitors to `/en`.

## Round 14 — send CRM replacement work to Company Native

The CRM question previously said only that replacing a main system was a separate decision. Yusuf clarified that this work belongs to the sister company, Company Native.

The English and Swedish answers now make the boundary clear: Works Like Us connects AI to the software a company already uses, while Company Native can replace the CRM when that is the real need. Each language links directly to the matching Company Native page. Both destinations returned HTTP 200, and the Works Like Us production build and local rendered pages preserved the wording, links and `.ai` domain redirect. The eighth version was published and the same wording and links were confirmed on both live `.com` pages; the `.ai` redirect still returned HTTP 301 to the matching `.com` address.

## Round 15 — restore the Enterprise LLM proposition

Yusuf found that the live page was understandable sentence by sentence but still left a cold visitor unable to say what Works Like Us actually was. The site had turned the original Enterprise LLM idea into a generic custom-AI consultancy: it led with knowledge, rules and workflows, treated private deployment as one choice and said company-specific model training might happen later.

The governing source records now agree on a sharper proposition. The 2026 business-ideas sheet names the initial offer as a forward-deployed Enterprise LLM for companies with 100 or more employees that restrict public LLM use: deploy a local open-source model on company-controlled infrastructure, fine-tune it on approved company data, charge for the first hands-on setup and productise the repeated work. The Hosted LLM and July 2026 market-opportunity documents add the wider vision: every company should have its own model, keep sensitive inference out of public AI services, accumulate company intelligence in weights and systems it controls, and build agents, workflows and eventually custom software around that model.

The English and Swedish pages were rebuilt around that proposition while preserving the approved visual design and enquiry flow. The first viewport now says that Works Like Us builds a private company model, trains it on approved company knowledge, connects it to existing tools and runs it in infrastructure the company controls. The four benefits stay together near the top: use AI on sensitive work, make it better at the company, keep what it learns and build software competitors cannot rent. Later sections distinguish public rented AI from company-owned AI, explain the service-led first deployment, show the path from model to custom software and explain how repeated deployment work can become a platform. The page also states that Works Like Us is in development, has no completed customer deployment and has no settled public price.

### Cold-review score after the final challenge pass

The score covers the four things Yusuf asked the page to communicate: what it is, its value, its unique advantage and the desire to act because of the benefits or the risk of doing nothing. Each dimension is worth 2.5 points. This is an internal cold review of the rendered page, not customer or investor validation.

| Perspective | What it is | Value and benefits | Unique advantage and risk otherwise | Desire and next step | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Customer | 2.4 | 2.2 | 2.3 | 1.9 | **8.8/10** |
| Investor | 2.3 | 2.1 | 2.3 | 1.8 | **8.5/10** |

The customer score remains below 10 because there is no delivery proof, case study or fixed price. The investor score remains below 10 because there is no customer traction and the size of the initial restricted-public-AI segment is still untested. The final challenge pass added the missing Swedish entry point, made the service-to-platform path visible and answered whether a private model can match the best public model: not on every general task, so the first deployment must beat the best permitted alternative on one valuable company-specific job before expansion.

The final local build and lint pass succeeded. The rendered English desktop journey and both 390×844 mobile journeys showed no horizontal overflow. English and Swedish retained the language switch, enquiry action and form labels, and every header link resolved to a real section below the sticky navigation. Publication is not included in this round; the public site remains on the earlier version until Yusuf approves the new public deployment.

## Round 16 — make company-trained weights the unmistakable USP

Yusuf supplied a second reading of the two Enterprise LLM documents. It clarified that privacy and provider independence are important benefits, but not the whole proposition. The harder claim—and the reason this could become more than a private-AI consultancy—is that recurring company judgment can be learned from approved decisions, language and examples and encoded in model weights the company controls. The hoped-for result is a lighter specialist model that beats generic AI on selected company work, while the accumulated training, evaluations, memory and applications become difficult for a competitor to copy.

The opening now says **“Own the AI trained for your company.”** It explains the literal service in the next sentence: take an open model, train it on approved company examples, connect it to company tools and run it on controlled hardware or private cloud. The four near-top benefits now include beating generic AI on selected work and keeping a compounding company asset. The model diagram says that the company is encoded in the model, the deployment steps explicitly name fine-tuning, and the long-term vision allows several specialist models for different functions or roles.

The stronger claim remains honest. The page describes outperforming generic AI as the aim and says the first deployment must compare the private model with the best permitted alternative on one real job. It does not promise that a private model wins at general tasks. A new question addresses the strongest strategic objection directly: Microsoft and Google will keep adding company context and privacy controls, so Works Like Us is useful only where company-trained weights, independent deployment and unique software create enough extra value to own.

### Cold-review score after restoring the fine-tuning moat

| Perspective | What it is | Value and benefits | Unique advantage and risk otherwise | Desire and next step | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Customer | 2.5 | 2.3 | 2.4 | 1.9 | **9.1/10** |
| Investor | 2.5 | 2.2 | 2.5 | 1.8 | **9.0/10** |

The revised headline, literal service description, company-training mechanism and direct Microsoft/Google objection make the category, USP and strategic risk easier to repeat after one reading. The scores remain internal messaging reviews rather than real customer or investor evidence. Customers still lack delivery proof, a case study and settled commercial terms. Investors still lack customer traction and evidence that the initial Swedish segment is large enough.

The final production build and lint checks succeeded. The revised English desktop hero keeps both actions in the first viewport. At 390×844, the English and Swedish headings, primary action and opening explanation remain legible with a 390-pixel document width and no horizontal overflow. Publication is still a separate step and has not occurred in this round.

## Round 17 — lead with the cost of renting the same intelligence

Yusuf supplied the final concise business thesis: **“Why rent intelligence your competitor also rents?”** The previous version explained ownership and fine-tuning clearly, but it made the visitor assemble the urgency from several later sections. The refined version puts the competitive question first and immediately answers what Works Like Us does: build the company’s own AI model by fine-tuning an open model on approved examples of how the company works, connecting it to tools and operating it in controlled infrastructure.

The three costs of relying only on rented intelligence now appear together immediately after the first viewport: the same general model cannot be a unique advantage by itself; a provider controls a capability the company may depend on; and experienced people can take unwritten institutional judgment with them when they leave. The existing four benefits remain together directly afterward, so the page shows both the risk of doing nothing and what the company gains by acting.

The business moat is now explained as an activity system rather than a vague service-to-platform promise. Works Like Us aims to identify proprietary work, turn measured outcomes into approved training feedback and reuse hosting and operating methods across deployments without mixing customer data or trained models. This is still a business hypothesis, so the page says shared infrastructure use *can* lower cost rather than claiming already-proven economies.

### The evidence supports the direction, with narrower claims than the source summary

The new market-evidence section uses three primary company sources and states what each example does and does not prove:

- Thomson Reuters invested $40 million in a proprietary model built from an open-source foundation. It used less than 10% of Thomson Reuters' legal content, ranked first on one difficult legal benchmark and was competitive on others. The public source does not identify Qwen as the base model, so the page does not repeat that attribution.
- Kirkland & Ellis set aside $500 million for proprietary AI technology, with 180 technology professionals and input from 250 lawyers. Its public material supports the institutional-knowledge thesis, but not the supplied claim that the system uses on-premise GPUs or fine-tuned open-source models.
- FIS and Anthropic co-developed a financial-crimes agent around FIS-controlled data and infrastructure. FIS owns the agent while Claude supplies reasoning, making this evidence for the proprietary system layer rather than model independence.

Microsoft and Google both publicly state that enterprise customer content is not used to train shared foundation models without permission. The site now says those privacy promises are real. It distinguishes Works Like Us on model ownership, company-specific training and portability instead of repeating an outdated privacy accusation. Their native AI products did not end investment in proprietary systems, so the original “Microsoft or Google will make this dead” objection is partly answered by the market—but not yet by Works Like Us customer demand.

### Cold-review score after the final refined thesis

| Perspective | What it is | Value and benefits | Unique advantage and risk otherwise | Desire and next step | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Customer | 2.5 | 2.4 | 2.5 | 1.9 | **9.3/10** |
| Investor | 2.5 | 2.3 | 2.5 | 2.1 | **9.4/10** |

The customer score is held back by the absence of a Works Like Us delivery, case study, fixed price or demonstrated result. The investor score is held back by the absence of traction, a measured Swedish market and proven hosting economies. The rendered site nevertheless exceeds the requested 8/10 messaging threshold because a cold visitor can now state the category, service, advantage, three risks, business activity system, market evidence, counterargument and next step without relying on the source documents.

The English desktop and English and Swedish 390×844 journeys were checked after the revision. Both mobile pages remained exactly 390 pixels wide with no horizontal overflow. The headline, literal service description and primary action appear in the first mobile viewport after fonts settle; the three-risk sequence and evidence cards collapse to one readable column. The production build, lint and React review found no issue. Yusuf gave standing authorization on 30 August 2026 to publish future verified Works Like Us improvements without asking again.

The ninth version was published under that authorization. Production checks confirmed that the English and Swedish pages return HTTP 200 with the revised headline and evidence, while the `.ai` English page still redirects once to the matching `.com` address. The live browser also showed the revised English page on `workslikeus.com`.

## Round 18 — route CRM work to CRM From Within

Yusuf approved the final three-business naming split on 30 August 2026: Works Like Us for company-trained AI, CRM From Within for the CRM business and Company Native for migration from generic SaaS to company-owned software. The English and Swedish CRM answers now link to `crmfromwithin.com` and name CRM From Within. The older Company Native wording in Round 14 remains as history and is superseded by this decision.
