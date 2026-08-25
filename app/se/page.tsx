import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — Bygg AI som fungerar som ert företag',
  description: 'Gör er egen kunskap, era beslut och arbetsflöden till ett kontrollerat AI-system som företaget behåller.',
  alternates: {
    canonical: '/se',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — Bygg AI som fungerar som ert företag',
    description: 'Gör er egen kunskap, era beslut och arbetsflöden till ett kontrollerat AI-system som företaget behåller.',
    url: '/se',
    siteName: 'Works Like Us',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — Bygg AI som fungerar som ert företag',
    description: 'Gör er egen kunskap, era beslut och arbetsflöden till ett kontrollerat AI-system som företaget behåller.',
    images: ['/og.png'],
  },
};

const systems = [
  {
    number: '01',
    title: 'Försäljning som minns',
    text: 'Gör år av samtal, offerter och CRM-historik till ett system som hjälper teamet att förbereda, följa upp och offerera på ert sätt.',
  },
  {
    number: '02',
    title: 'Service som kan jobbet',
    text: 'Ge supportteamet svar förankrade i era produkter, regler och lösta ärenden—med tydliga källor och överlämning till en människa.',
  },
  {
    number: '03',
    title: 'Drift som blir bättre',
    text: 'Fånga omdömet bakom återkommande beslut, koppla ihop verktygen ni redan använder och lär av varje godkänt resultat.',
  },
];

const controls = [
  'Er data och era affärsregler',
  'Era arbetsflöden, tester och skyddsräcken',
  'Er modell eller era modellanpassningar där de behövs',
  'En tydlig väg att byta leverantör eller köra privat',
];

export default function SwedishHome() {
  return (
    <main lang="sv">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Works Like Us startsida">
          <span className="brand-mark" aria-hidden="true">W</span><span>Works Like Us</span>
        </a>
        <nav aria-label="Huvudmeny">
          <a href="#work">Vad vi bygger</a><a href="#approach">Så fungerar det</a><a href="#privacy">Integritet</a>
          <a href="/en" className="language-link" aria-label="Switch to English">EN</a>
          <a href="#contact" className="nav-cta">Diskutera ett system</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Suverän AI för företag</p>
          <h1>Bygg AI som fungerar som ert företag—inte som alla andras.</h1>
          <p className="hero-lede">Vi gör er egen kunskap, era beslut och arbetsflöden till ett kontrollerat AI-system. Börja med en värdefull process, bevisa affärsresultatet och behåll intelligensen som företaget skapar.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Hitta det första systemet värt att bygga <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#approach">Se hur det fungerar <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Våra principer">
            <span>Fungerar med era nuvarande verktyg</span><span>En väg ut ur leverantörslåsning</span><span>Mänskligt godkännande där det behövs</span>
          </div>
        </div>

        <div className="system-map" aria-label="Ett företagsägt AI-system kopplar företagets kunskap till egen intelligens och fungerande arbetsflöden">
          <div className="map-label">Er fördel, inbyggd</div>
          <div className="map-row map-row-data"><span className="map-index">INPUT</span><strong>Företagets kunskap</strong><small>CRM · dokument · beslut</small></div>
          <div className="map-connector"><span>strukturera + skydda</span></div>
          <div className="map-row map-row-core"><span className="map-index">KÄRNA</span><strong>Egen intelligens</strong><small>modeller · regler · tester</small></div>
          <div className="map-connector"><span>driftsätt + förbättra</span></div>
          <div className="map-row map-row-output"><span className="map-index">RESULTAT</span><strong>Fungerande system</strong><small>försäljning · service · drift</small></div>
          <div className="learning-loop"><span className="pulse" aria-hidden="true" /><span>Varje godkänt resultat gör systemet mer användbart.</span></div>
        </div>
      </section>

      <section className="thesis-band" aria-label="Vår utgångspunkt">
        <p>De bästa modellerna blir billigare och mer tillgängliga.</p>
        <strong>Er fördel kommer från vad de lär sig om ert företag—och systemet ni bygger runt dem.</strong>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Vad vi bygger</p><h2>Ett värdefullt arbetsflöde först. En företagsförmåga över tid.</h2>
          <p>Vi börjar där kunskap är utspridd, omdöme spelar roll och ett bättre beslut påverkar intäkter, kostnader eller risk.</p>
        </div>
        <div className="system-cards">{systems.map((system) => <article className="system-card" key={system.number}><span>{system.number}</span><h3>{system.title}</h3><p>{system.text}</p></article>)}</div>
        <div className="stack-line"><span>Byggt kring verktygen som redan finns i verksamheten</span><strong>HubSpot</strong><strong>Salesforce</strong><strong>Pipedrive</strong><strong>Microsoft 365</strong><strong>Era egna system</strong></div>
      </section>

      <section className="section split-section" id="approach">
        <div className="split-copy">
          <p className="eyebrow">Så fungerar det</p><h2>Använd den bästa tillgängliga modellen. Äg det som får den att fungera för er.</h2>
          <p>Att äga sin intelligens betyder inte att träna en jättemodell från grunden. Det betyder att behålla kontrollen över företagets kunskap, regler, arbetsflöde och lärande som gör modellen värdefull.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Välj beslutet</strong><p>Hitta ett arbetsflöde med ett synligt affärsresultat.</p></div></li>
            <li><span>02</span><div><strong>Bygg systemet</strong><p>Koppla ihop rätt data, modell, kontroller och mänskliga godkännanden.</p></div></li>
            <li><span>03</span><div><strong>Bevisa och förbättra</strong><p>Mät riktigt arbete, lär av korrigeringar och bygg vidare först när systemet har förtjänat förtroendet.</p></div></li>
          </ol>
        </div>
        <aside className="control-card">
          <div className="control-card-top"><span>KONTROLLAGER</span><span className="status-dot">Bestäms före byggstart</span></div>
          <h3>Ni behåller kontrollen över:</h3><ul>{controls.map((control) => <li key={control}>{control}</li>)}</ul>
          <p className="control-note">Kör i ert moln, en privat miljö eller en annan lösning vald för arbetet. Åtkomst, lagringstid och spårbarhet bestäms uttryckligen—de antas inte.</p>
        </aside>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-heading">
          <p className="eyebrow">Inbyggd integritet</p>
          <h2>Integritet måste sitta i arkitekturen—inte läggas till som ett löfte i efterhand.</h2>
          <p>Innan någon företagsdata kopplas in bestämmer vi gränsen: vad systemet får använda, vilka leverantörer som får behandla informationen, var den får köras och hur varje känslig åtgärd kontrolleras.</p>
        </div>
        <div className="privacy-controls">
          <article><span>01</span><div><h3>Välj var det körs</h3><p>Ert moln, en privat miljö eller en annan godkänd lösning—vald efter arbetets faktiska behov av säkerhet och prestanda.</p></div></article>
          <article><span>02</span><div><h3>Begränsa vad som lämnar</h3><p>Leverantörer, lagringstid, cache och regiongränser dokumenteras. Träning på företagsdata sker bara när den är avsiktligt utformad och godkänd.</p></div></article>
          <article><span>03</span><div><h3>Styr vem som får agera</h3><p>Människor och system får bara den åtkomst de behöver. Åtgärder med stor konsekvens kan kräva godkännande av en namngiven person.</p></div></article>
          <article><span>04</span><div><h3>Behåll ett granskningsspår</h3><p>Underlag, svar, beslut och korrigeringar kan sparas så att företaget kan se vad som hände och förbättra systemet på ett säkert sätt.</p></div></article>
        </div>
      </section>

      <section className="section ownership-section" id="why">
        <div className="section-heading"><p className="eyebrow">Varför äga företagslagret</p><h2>Använd ledande modeller. Bygg och äg intelligensen som blir ert försprång.</h2><p>Börja med den starkaste modellen för arbetet. När företagsdata och återkoppling växer kan ni äga eller träna modellvikter och adaptrar där de gör förmågan mer privat, effektiv eller svår att kopiera. Behåll kunskapen, arbetsflödet och lärandet runt varje modell.</p></div>
        <div className="ownership-grid">
          <article><span>Bara tillgång</span><h3>En kapabel modell som alla kan använda</h3><ul><li>Allmän kunskap</li><li>Generellt beteende</li><li>Företagsanpassningen kan bli fast i verktyget</li></ul></article>
          <article className="owned-column"><span>Företagsförmåga</span><h3>Ett system som blir bättre på ert arbete</h3><ul><li>Er verksamhetskunskap</li><li>Era beslut och skyddsräcken</li><li>Exempel, korrigeringar och tester som företaget behåller</li></ul></article>
        </div>
      </section>

      <section className="first-system-section">
        <div><p className="eyebrow">Det första uppdraget</p><h2>Bevisa ett användbart system innan ni åtar er en transformation.</h2></div>
        <ol><li><span>Först</span><strong>Kartlägg arbetet och affärsresultatet</strong></li><li><span>Sedan</span><strong>Bygg med en liten, kontrollerad mängd riktig företagsdata</strong></li><li><span>Före nästa steg</span><strong>Låt människorna som gör jobbet testa och avgör vad som har förtjänat rätten att fortsätta</strong></li></ol>
      </section>

      <section className="section founder-section">
        <div className="founder-kicker">Byggt från operatörens sida</div>
        <blockquote>“Företag behöver inte ännu en imponerande demo. De behöver ett system som passar arbetet, förtjänar förtroende och lämnar dem starkare efter varje användning.”</blockquote>
        <div className="founder-note"><strong>Yusuf Young</strong><p>Grundare av <a href="https://www.funnelbud.com/om-oss/" target="_blank" rel="noreferrer">FunnelBud</a>, ett svenskt CRM-företag som har hjälpt hundratals kunder. Han startade det efter att ha implementerat HubSpot- och Salesforce-system och sett hur mycket värde som försvann mellan kraftfull mjukvara och verkligt arbete.</p></div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><p className="eyebrow">Raka svar</p><h2>Frågorna värda att ställa innan ni bygger.</h2></div>
        <div className="faq-list">
          <details open><summary>Varför inte bara använda ChatGPT, Copilot eller ett annat färdigt verktyg?</summary><p>Använd de starkaste generella verktygen där de löser problemet. Vi bygger företagslagret som de inte ger er automatiskt: rätt intern kontext, arbetsflöde, behörigheter, kontroller, återkoppling och en väg att byta modell.</p></details>
          <details><summary>Måste vi träna en jättemodell från grunden?</summary><p>Nej. De flesta nyttiga system börjar med en befintlig modell. Beroende på arbetet kan ägandet ligga i er datakedja, kunskapshämtning, regler, tester och arbetsflöde—eller i en mindre modell som tränats för en specifik uppgift.</p></details>
          <details><summary>Ersätter ni vårt CRM eller andra kärnsystem?</summary><p>Vanligtvis inte. Vi kopplar till system som HubSpot, Salesforce eller Pipedrive och gör kunskapen i dem mer användbar. Ett byte är ett separat beslut, inte ett dolt krav.</p></details>
          <details><summary>Vart tar vår data vägen?</summary><p>Det bestäms innan bygget. Vi kan arbeta i ert moln, en privat miljö eller en annan godkänd lösning. Åtkomst, lagringstid, modellleverantörer, regionkrav och spårbarhet görs tydliga för det aktuella systemet.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Börja med ett system</p><h2>Vad borde ert företag kunna göra bättre?</h2><p>Berätta var arbetet går långsamt, blir ojämnt eller sitter fast i några få personers huvuden. Vi svarar med det första systemet vi skulle testa och vad det behöver bevisa.</p></div>
        <LeadForm language="sv" />
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">W</span><span>Works Like Us</span></a><p>Drivs av Yusuf Young AB.</p><span><a href="/en">English</a> · <a href="/se">Svenska</a></span></footer>
    </main>
  );
}
