import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — AI som fungerar på ert sätt',
  description: 'Vi bygger AI-system kring ert företags kunskap, regler och verktyg. Börja med en del av verksamheten och behåll kontrollen över er data och det systemet lär sig.',
  alternates: {
    canonical: '/se',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — AI som fungerar på ert sätt',
    description: 'Vi bygger AI-system kring ert företags kunskap, regler och verktyg. Börja med en del av verksamheten och behåll kontrollen över er data och det systemet lär sig.',
    url: '/se',
    siteName: 'Works Like Us',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — AI som fungerar på ert sätt',
    description: 'Vi bygger AI-system kring ert företags kunskap, regler och verktyg. Börja med en del av verksamheten och behåll kontrollen över er data och det systemet lär sig.',
    images: ['/og.png'],
  },
};

const systems = [
  {
    number: '01',
    title: 'Hjälp säljarna att förbereda och följa upp',
    text: 'Använd tidigare samtal, offerter och CRM-data för att hjälpa säljarna att förbereda möten, följa upp och skriva offerter.',
  },
  {
    number: '02',
    title: 'Ge supporten bättre svar',
    text: 'Ge svar från era produkter, regler och lösta ärenden. Visa källan och lämna över till en person när det behövs.',
  },
  {
    number: '03',
    title: 'Gör återkommande beslut mer enhetliga',
    text: 'Gör era mest erfarna medarbetares sätt att fatta beslut till tydliga regler som teamet kan använda och förbättra.',
  },
];

const controls = [
  'Vilken företagsdata systemet får använda',
  'Vad det får göra på egen hand',
  'Vilka AI-modeller och externa tjänster det använder',
  'Var det körs och hur ni kan byta senare',
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
          <a href="#contact" className="nav-cta">Berätta vad ni vill förbättra</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI byggd kring ert företag</p>
          <h1>Bygg AI som fungerar på ert sätt.</h1>
          <p className="hero-lede">Vi använder er kunskap, era regler och era verktyg för att bygga AI för en verklig del av verksamheten. Börja med ett problem. Testa i det dagliga arbetet. Behåll kontrollen över er data och det systemet lär sig.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Berätta vad ni vill förbättra <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#approach">Se hur vi börjar <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Våra principer">
            <span>Fungerar med verktygen ni redan använder</span><span>Ni behåller kontrollen över er data</span><span>Människor godkänner viktiga åtgärder</span>
          </div>
        </div>

        <div className="system-map" aria-label="Företagets kunskap och regler styr ett AI-system som hjälper till i det dagliga arbetet">
          <div className="map-label">Så fungerar ert system</div>
          <div className="map-row map-row-data"><span className="map-index">UNDERLAG</span><strong>Det ert företag vet</strong><small>dokument · CRM · tidigare beslut</small></div>
          <div className="map-connector"><span>ordna + skydda</span></div>
          <div className="map-row map-row-core"><span className="map-index">AI</span><strong>Ert AI-system</strong><small>AI-modell · företagsregler · kontroller</small></div>
          <div className="map-connector"><span>använd i arbetet</span></div>
          <div className="map-row map-row-output"><span className="map-index">RESULTAT</span><strong>Bättre arbete</strong><small>försäljning · support · drift</small></div>
          <div className="learning-loop"><span className="pulse" aria-hidden="true" /><span>Era rättelser hjälper systemet att bli bättre.</span></div>
        </div>
      </section>

      <section className="thesis-band" aria-label="Vår utgångspunkt">
        <p>Alla kan använda samma AI-modeller.</p>
        <strong>Er fördel är att lära AI hur ert företag arbetar—och behålla den kunskapen.</strong>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Vad vi bygger</p><h2>Börja där AI kan få en del av verksamheten att fungera bättre.</h2>
          <p>Vi letar efter arbete som går långsamt, blir ojämnt eller beror på några få erfarna personer. Det första systemet ska spara tid, sänka kostnader, öka intäkter eller minska risk.</p>
        </div>
        <div className="system-cards">{systems.map((system) => <article className="system-card" key={system.number}><span>{system.number}</span><h3>{system.title}</h3><p>{system.text}</p></article>)}</div>
        <div className="stack-line"><span>Vi arbetar med verktygen ni redan använder</span><strong>HubSpot</strong><strong>Salesforce</strong><strong>Pipedrive</strong><strong>Microsoft 365</strong><strong>Era egna system</strong></div>
      </section>

      <section className="section split-section" id="approach">
        <div className="split-copy">
          <p className="eyebrow">Så börjar vi</p><h2>Bygg ett litet system. Testa det i verkligt arbete. Bestäm sedan om ni ska bygga vidare.</h2>
          <p>Ni behöver inte träna en stor AI-modell från grunden. Vi kan börja med en ledande modell och lägga till er kunskap, era regler och kontroller. De delarna behåller ni, och ni kan byta modell senare.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Välj problemet</strong><p>Välj en del av verksamheten där ett bättre resultat kan mätas.</p></div></li>
            <li><span>02</span><div><strong>Bygg en fungerande version</strong><p>Koppla bara in den data och de verktyg som behövs. Bestäm vilka åtgärder en person måste godkänna.</p></div></li>
            <li><span>03</span><div><strong>Testa med teamet</strong><p>Mät resultatet, rätta det som inte fungerar och bygg vidare bara om systemet fungerar.</p></div></li>
          </ol>
        </div>
        <aside className="control-card">
          <div className="control-card-top"><span>BESTÄMS INNAN VI BYGGER</span><span className="status-dot">Skrivs ner först</span></div>
          <h3>Ni bestämmer:</h3><ul>{controls.map((control) => <li key={control}>{control}</li>)}</ul>
          <p className="control-note">Vi bestämmer också vem som får använda systemet, hur länge data sparas och vilka händelser som ska sparas.</p>
        </aside>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-heading">
          <p className="eyebrow">Integritet</p>
          <h2>Bestäm vart er data går innan systemet använder den.</h2>
          <p>Vi bestämmer vilken data som behövs, vem som får se den, var den får behandlas och vilka åtgärder som kräver godkännande.</p>
        </div>
        <div className="privacy-controls">
          <article><span>01</span><div><h3>Välj var det körs</h3><p>Använd ert moln, en privat lösning eller en annan godkänd tjänst. Valet beror på datan och arbetet.</p></div></article>
          <article><span>02</span><div><h3>Skicka bara det som behövs</h3><p>Vi begränsar vad externa AI-tjänster får se. Vi bestämmer också hur länge data sparas och var den behandlas.</p></div></article>
          <article><span>03</span><div><h3>Begränsa vem som får agera</h3><p>Människor och system får bara den åtkomst de behöver. Viktiga åtgärder kan vänta på en namngiven person.</p></div></article>
          <article><span>04</span><div><h3>Se vad som hände</h3><p>Spara de frågor, svar, åtgärder och rättelser som behövs för att granska vad som hände.</p></div></article>
        </div>
      </section>

      <section className="section ownership-section" id="why">
        <div className="section-heading"><p className="eyebrow">Varför bygga ett eget system</p><h2>Era konkurrenter kan använda samma AI-modeller. De har inte ert företags kunskap.</h2><p>Vi börjar med den bästa modellen för jobbet. Vi lägger till er kunskap, era regler, exempel och återkoppling. Om det hjälper kan vi senare träna en modell för en av era uppgifter. Ni behåller de delar som får systemet att fungera för ert företag.</p></div>
        <div className="ownership-grid">
          <article><span>Generell AI</span><h3>Ett allmänt verktyg som alla kan använda</h3><ul><li>Samma allmänna kunskap</li><li>Byggt för många olika företag</li><li>Er anpassning kan bli låst i ett verktyg</li></ul></article>
          <article className="owned-column"><span>Ert AI-system</span><h3>AI byggd för sättet ert företag arbetar</h3><ul><li>Använder företagets egen kunskap</li><li>Följer era regler och godkännanden</li><li>Ni behåller era exempel, rättelser och tester</li></ul></article>
        </div>
      </section>

      <section className="first-system-section">
        <div><p className="eyebrow">Det första projektet</p><h2>Testa ett användbart system innan ni gör en stor satsning.</h2></div>
        <ol><li><span>Först</span><strong>Bestäm uppgiften och resultatet</strong></li><li><span>Sedan</span><strong>Bygg med en liten, godkänd mängd företagsdata</strong></li><li><span>Före nästa steg</span><strong>Låt teamet använda det. Fortsätt bara om det fungerar.</strong></li></ol>
      </section>

      <section className="section founder-section">
        <div className="founder-kicker">Varför Works Like Us</div>
        <blockquote>“De flesta företag behöver inte ännu en AI-demo. De behöver ett användbart system som passar arbetet och blir bättre när medarbetarna rättar det.”</blockquote>
        <div className="founder-note"><strong>Yusuf Young</strong><p>Yusuf grundade <a href="https://www.funnelbud.com/om-oss/" target="_blank" rel="noreferrer">FunnelBud</a>, ett svenskt CRM-företag som har hjälpt hundratals kunder. Innan dess byggde han HubSpot- och Salesforce-system. Han startade Works Like Us eftersom bra program ofta ger för lite värde när de inte passar det dagliga arbetet.</p></div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><p className="eyebrow">Vanliga frågor</p><h2>Det här bör ni veta innan vi börjar.</h2></div>
        <div className="faq-list">
          <details open><summary>Varför inte bara använda ChatGPT, Copilot eller ett annat färdigt verktyg?</summary><p>Använd dem när de redan löser problemet. Vi bygger något eget när AI måste använda er kunskap, följa era regler, arbeta i era system eller ge er mer kontroll över känslig data.</p></details>
          <details><summary>Måste vi träna vår egen AI-modell?</summary><p>Nej. Vi börjar oftast med en befintlig modell. Om en mindre modell tränad för en uppgift skulle fungera bättre eller ge er mer kontroll kan vi lägga till den senare.</p></details>
          <details><summary>Kommer ni att ersätta vårt CRM eller andra viktiga system?</summary><p>Vanligtvis inte. Vi kan koppla AI-systemet till HubSpot, Salesforce, Pipedrive eller andra program ni redan använder. Ett byte är ett separat beslut.</p></details>
          <details><summary>Vart går vår data?</summary><p>Det bestämmer vi tillsammans innan vi bygger. Vi bestämmer var data behandlas, vilka AI-tjänster som får se den, vem som har åtkomst, hur länge den sparas och vilka händelser som ska sparas.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Hitta det första nyttiga systemet</p><h2>Vilket arbete vill ni göra snabbare eller bättre?</h2><p>Berätta vad som går långsamt, upprepas, blir ojämnt eller beror på en enda person. Vi svarar med det första AI-system vi skulle testa och vilket resultat det ska förbättra.</p></div>
        <LeadForm language="sv" />
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">W</span><span>Works Like Us</span></a><p>Drivs av Yusuf Young AB.</p><span><a href="/en">English</a> · <a href="/se">Svenska</a></span></footer>
    </main>
  );
}
