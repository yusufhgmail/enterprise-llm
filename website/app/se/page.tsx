import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — Ert företags egen privata AI',
  description: 'Vi bygger, driftsätter och underhåller en privat AI-modell för ert företag, tränad på er verksamhet och körd i infrastruktur ni kontrollerar.',
  alternates: {
    canonical: '/se',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — Ert företags egen privata AI',
    description: 'Vi bygger, driftsätter och underhåller en privat AI-modell för ert företag, tränad på er verksamhet och körd i infrastruktur ni kontrollerar.',
    url: '/se',
    siteName: 'Works Like Us',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — Ert företags egen privata AI',
    description: 'Vi bygger, driftsätter och underhåller en privat AI-modell för ert företag, tränad på er verksamhet och körd i infrastruktur ni kontrollerar.',
    images: ['/og.png'],
  },
};

const systems = [
  {
    number: '01',
    title: 'Använd AI för känsligt arbete',
    text: 'Behåll godkänd data och modellkörning på era egna servrar eller i ert privata moln i stället för att skicka arbetet till en publik assistent.',
  },
  {
    number: '02',
    title: 'Slå generisk AI i utvalda företagsuppgifter',
    text: 'Finjustera den med godkända exempel på era produkter, ert språk, era beslut och krav och jämför sedan med det bästa tillåtna alternativet.',
  },
  {
    number: '03',
    title: 'Behåll en företagsfördel som växer',
    text: 'Den tränade modellen, minnet, utvärderingarna och rättelserna blir en företagstillgång som består när grundmodeller eller leverantörer förändras.',
  },
  {
    number: '04',
    title: 'Skapa mjukvara konkurrenterna inte kan hyra',
    text: 'Bygg agenter, arbetsflöden och applikationer kring den kunskap och bedömningsförmåga som gör ert företag annorlunda.',
  },
];

const controls = [
  'Den driftsatta modellen och företagsspecifika träningen',
  'Det godkända minnet, reglerna och utvärderingarna',
  'Agentlogiken och kopplingarna till era system',
  'Friheten att flytta företagslagret senare',
];

const visionStages = [
  { number: '01', label: 'ÄG', title: 'En privat företagsmodell', text: 'En öppen modell som körs i infrastruktur ni kontrollerar.' },
  { number: '02', label: 'LÄR', title: 'Intelligens som växer', text: 'Godkänd kunskap, beslut, rättelser och utvärderingar förbättrar den.' },
  { number: '03', label: 'AGERA', title: 'Agenter och arbetsflöden', text: 'Modellen arbetar i verktygen och processerna som driver företaget.' },
  { number: '04', label: 'ERSÄTT', title: 'Skräddarsydd AI-mjukvara', text: 'Generisk SaaS ersätts där mjukvara byggd för ett företag skapar en verklig fördel.' },
];

export default function SwedishHome() {
  return (
    <main lang="sv">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Works Like Us startsida">
          <span className="brand-mark" aria-hidden="true">W</span><span>Works Like Us</span>
        </a>
        <nav aria-label="Huvudmeny">
          <a href="#value">Varför äga den</a><a href="#approach">Vad vi levererar</a><a href="#vision">Visionen</a><a href="#privacy">Integritet</a>
          <a href="/en" className="language-link" aria-label="Switch to English">EN</a>
          <a href="#contact" className="nav-cta">Utforska en privat driftsättning</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Privat företags-AI · Under utveckling</p>
          <h1>Äg AI:n som tränats för ert företag.</h1>
          <p className="hero-lede">Works Like Us tar en öppen modell, tränar den på godkända exempel på hur ert företag kommunicerar och fattar beslut, kopplar den till era verktyg och kör den på hårdvara eller i ett privat moln ni kontrollerar. Målet är att slå generisk AI i utvalda företagsuppgifter utan att skicka arbetet – eller den intelligens ni bygger – till en publik leverantör.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Utforska ert första privata AI-system <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#why">Se vad ert företag äger <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Våra principer">
            <span>Känsligt arbete stannar inom den gräns ni väljer</span><span>Ni kontrollerar modellen, minnet och arbetsflödena</span><span>Ert företags omdöme kan finnas i modellen</span>
          </div>
        </div>

        <div className="system-map" aria-label="En öppen modell blir privat företagsintelligens som driver assistenter, agenter och skräddarsydd mjukvara">
          <div className="map-label">Inom er kontrollerade miljö</div>
          <div className="map-row map-row-data"><span className="map-index">GRUND</span><strong>En öppen modell ni kan behålla</strong><small>öppna vikter · inget beroende av en modell</small></div>
          <div className="map-connector"><span>träna + styr</span></div>
          <div className="map-row map-row-core"><span className="map-index">ERT</span><strong>Ert företag inbyggt i modellen</strong><small>tränat omdöme · minne · regler</small></div>
          <div className="map-connector"><span>koppla + agera</span></div>
          <div className="map-row map-row-output"><span className="map-index">ANVÄND</span><strong>Er privata AI</strong><small>assistenter · agenter · skräddarsydd mjukvara</small></div>
          <div className="learning-loop"><span className="pulse" aria-hidden="true" /><span>Varje godkänd rättelse kan förbättra det ert företag äger.</span></div>
        </div>
      </section>

      <section className="thesis-band" aria-label="Vår utgångspunkt">
        <p>Allmän AI blir något alla företag kan köpa.</p>
        <strong>Er fördel börjar när sättet ert företag arbetar på – besluten, språket och kunskapen – tränas in i en modell ni kontrollerar.</strong>
      </section>

      <section className="fit-strip" aria-label="Vilka företag det passar bäst">
        <span>Passar bäst</span><strong>Minst 100 anställda</strong><strong>Publik AI är begränsad</strong><strong>Känsligt eller unikt arbete</strong><strong>Börjar med svenska företag</strong>
      </section>

      <section className="section work-section" id="value">
        <div className="section-heading">
          <p className="eyebrow">Varför företag vill ha en egen AI</p><h2>Använd AI i privat arbete, gör den bättre på ert företag och behåll det den lär sig.</h2>
          <p>En företagsägd modell låter människor använda känslig kunskap inom en bestämd gräns. Träning på godkända företagsexempel kan lära den återkommande mönster som inte ryms i ett styrdokument eller en prompt. Den första driftsättningen måste visa att detta förbättrar ett verkligt arbete.</p>
        </div>
        <div className="system-cards">{systems.map((system) => <article className="system-card" key={system.number}><span>{system.number}</span><h3>{system.title}</h3><p>{system.text}</p></article>)}</div>
        <div className="stack-line"><span>Koppla verktygen ni redan använder</span><strong>Microsoft 365</strong><strong>Google Workspace</strong><strong>HubSpot</strong><strong>Salesforce</strong><strong>Era egna system</strong></div>
      </section>

      <section className="section split-section" id="approach">
        <div className="split-copy">
          <p className="eyebrow">Vad Works Like Us levererar</p><h2>En praktisk tjänst som bygger, driftsätter och underhåller ert företags egen LLM.</h2>
          <p>Det här är inte ännu en programlicens. Vi börjar med en öppen modell, kör den på er hårdvara eller i ert privata moln, tränar och anpassar den med godkänd företagsdata och kopplar den sedan till ett arbete där resultatet spelar roll.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Välj gränsen och arbetet</strong><p>Bestäm den känsliga datan, vilka som får använda den och ett resultat som är värt att förbättra.</p></div></li>
            <li><span>02</span><div><strong>Driftsätt den privata modellen</strong><p>Sätt upp en modell med öppna vikter i infrastruktur ert företag kontrollerar.</p></div></li>
            <li><span>03</span><div><strong>Träna den på hur ert företag arbetar</strong><p>Använd godkända exempel, beslut och återkoppling för att finjustera modellen och lägg sedan till det minne, de regler och verktyg som arbetet kräver.</p></div></li>
            <li><span>04</span><div><strong>Driv, mät och förbättra</strong><p>Låt teamet använda den, registrera fel och bygg vidare bara när den ger ett värdefullt resultat.</p></div></li>
          </ol>
        </div>
        <aside className="control-card">
          <div className="control-card-top"><span>FÖRETAGSLAGRET</span><span className="status-dot">Byggt för att kunna flyttas</span></div>
          <h3>Intelligensen stannar hos er.</h3><ul>{controls.map((control) => <li key={control}>{control}</li>)}</ul>
          <p className="control-note">Det exakta avtalet bestämmer ägande och flyttbarhet. Externa AI-tjänster används bara när ert företag uttryckligen godkänner dem.</p>
        </aside>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-heading">
          <p className="eyebrow">Privat genom arkitekturen</p>
          <h2>Använd AI utan att skicka känsligt arbete till ChatGPT.</h2>
          <p>En privat driftsättning kan hålla modellen och företagsdatan i er egen infrastruktur. Om en extern tjänst skulle förbättra en uppgift är användningen valfri, begränsad och överenskommen – aldrig dold i systemet.</p>
        </div>
        <div className="privacy-controls">
          <article><span>01</span><div><h3>Kör den där ni har kontroll</h3><p>Driftsätt på företagets hårdvara eller i ett privat molnkonto som valts för den verkliga datan och uppgiften.</p></div></article>
          <article><span>02</span><div><h3>Använd en modell ni kan behålla</h3><p>Börja med öppna vikter så att kärnsystemet inte försvinner när en modellleverantör ändrar tillgång, pris eller regler.</p></div></article>
          <article><span>03</span><div><h3>Ge varje person bara den åtkomst som behövs</h3><p>Företagets behörigheter styr vem som får använda vilken kunskap och vilka åtgärder som fortfarande kräver en namngiven person.</p></div></article>
          <article><span>04</span><div><h3>Registrera vad AI:n lär sig</h3><p>Behåll de utvärderingar, rättelser och händelser som behövs för att granska och medvetet förbättra systemet.</p></div></article>
        </div>
      </section>

      <section className="section ownership-section" id="why">
        <div className="section-heading"><p className="eyebrow">Det strategiska valet</p><h2>Hyr samma intelligens som alla andra – eller bygg en fördel ert företag behåller.</h2><p>Publik AI är användbar för allmänt arbete. Risken börjar när en leverantörs modell blir platsen där er känsliga kontext, verksamhetskunskap och samlade lärande finns.</p></div>
        <div className="ownership-grid">
          <article><span>Hyr publik AI</span><h3>Leverantören styr intelligensen ni blir beroende av.</h3><ul><li>Leverantören väljer modell, pris och tillgång</li><li>Känslig kontext kan passera er valda gräns</li><li>Konkurrenterna kan hyra samma allmänna förmåga</li><li>Ett leverantörsbyte kan kräva att företagslagret byggs om</li></ul></article>
          <article className="owned-column"><span>Äg företagets AI</span><h3>Ert företag styr intelligensen det skapar.</h3><ul><li>Ni väljer modellen och var den körs</li><li>Godkänd data och modellkörning kan stanna inom er gräns</li><li>Mönster från era beslut och exempel kan tränas in i vikter ni kontrollerar</li><li>Företagslagret kan bestå när grundmodellen byts</li></ul></article>
        </div>
      </section>

      <section className="first-system-section">
        <div><p className="eyebrow">Den första driftsättningen</p><h2>Börja med ett arbete som är värt att hålla privat.</h2></div>
        <ol><li><span>Välj</span><strong>Ett värdefullt arbetsflöde som publik AI inte kan hantera säkert eller tillförlitligt</strong></li><li><span>Bygg</span><strong>Den minsta privata modellen, datakopplingen och applikationen som behövs</strong></li><li><span>Bevisa</span><strong>En verklig förbättring innan mer data tränas eller fler arbetsflöden läggs till</strong></li></ol>
      </section>

      <section className="section vision-section" id="vision">
        <div className="section-heading">
          <p className="eyebrow">Enterprise LLM-visionen</p>
          <h2>Börja med en privat modell. Sluta med mjukvara ingen konkurrent kan hyra.</h2>
          <p>LLM:en blir företagets intelligenslager. Vi bygger minne, agenter, arbetsflöden och applikationer runt den. Med tiden kan ett företag ha flera specialistmodeller – för försäljning, juridik, support eller enskilda roller – och ersätta generisk mjukvara där företagstränad AI skapar en verklig fördel.</p>
        </div>
        <div className="vision-path">
          {visionStages.map((stage) => (
            <article key={stage.number}>
              <div><span>{stage.number}</span><strong>{stage.label}</strong></div>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
        <div className="business-model-note">
          <span>Så växer Works Like Us</span>
          <p><strong>Börja med praktiska företagsdriftsättningar.</strong> Gör det återkommande arbetet – modellinstallation, träning, styrning, kopplingar och underhåll – till en återanvändbar plattform. Kunddata hålls åtskild; driftsättningsmetoden blir bättre.</p>
        </div>
      </section>

      <section className="section founder-section">
        <div className="founder-kicker">Varför Works Like Us</div>
        <blockquote>“När allmän intelligens blir en handelsvara måste ett företag träna in sina egna processer, övertygelser och data i modeller det kontrollerar.”</blockquote>
        <div className="founder-note"><strong>Yusuf Young</strong><p>Yusuf grundade <a href="https://www.funnelbud.com/om-oss/" target="_blank" rel="noreferrer">FunnelBud</a>, ett svenskt CRM-företag som har hjälpt hundratals kunder. Innan dess byggde han HubSpot- och Salesforce-system. Works Like Us är under utveckling och har ännu ingen slutförd kunddriftsättning.</p></div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><p className="eyebrow">Vanliga frågor</p><h2>Det här bör ni veta innan vi börjar.</h2></div>
        <div className="faq-list">
          <details open><summary>Varför inte bara använda ChatGPT, Copilot eller ett annat färdigt verktyg?</summary><p>Använd publik AI för allmänt arbete när villkoren och kontrollerna passar. Bygg en egen när känslig data måste stanna inom er gräns, AI:n måste bli tydligt bättre på ert företag eller ett beroende av en leverantör skulle utsätta en central förmåga för risk.</p></details>
          <details><summary>Kommer inte Microsoft eller Google att erbjuda det här?</summary><p>De kommer att fortsätta lägga till företagskontext och starkare integritetskontroller. Använd deras produkter när de löser arbetet. Works Like Us behövs bara där ert företag vill ha en modell tränad på sina egna beslut, driftsatt under egen kontroll och kapabel att bli mjukvara som är unik för företaget. Den första driftsättningen testar om den skillnaden är värd att äga.</p></details>
          <details><summary>Är det här mjukvara eller konsultarbete?</summary><p>Det börjar som en praktisk tjänst. Works Like Us utformar, driftsätter och underhåller modellen och den första applikationen tillsammans med ert företag. Återkommande delar av arbetet kan bli en produkt över tid.</p></details>
          <details><summary>Tränar vi en modell från grunden?</summary><p>Nej. Vi börjar med en modell med öppna vikter och finjusterar eller fortsätter träna den bara där godkänd företagsdata och mätbara resultat motiverar arbetet. Minne och sökning kan hantera kunskap som ska kunna ändras utan ny träning av vikterna.</p></details>
          <details><summary>Måste den köras på hårdvara på kontoret?</summary><p>Nej. Den kan köras på företagets egna servrar eller i ett privat molnkonto som företaget kontrollerar. Poängen är att kärnmodellen, företagsdatan och lärandet inte behöver vara beroende av en publik AI-tjänst.</p></details>
          <details><summary>Blir en privat modell lika bra som den bästa publika modellen?</summary><p>Inte på varje allmän uppgift. Tesens kärna är att en modell som tränats på ett företags egna exempel och återkoppling kan slå en generisk modell i utvalda företagsuppgifter. Vi jämför med det bästa tillåtna alternativet och bygger inte vidare om det uppmätta resultatet inte är tillräckligt mycket bättre för att spela roll.</p></details>
          <details><summary>Vad kostar en första driftsättning?</summary><p>Det finns ännu inget fast offentligt pris. Hårdvara, dataförberedelse, träning, säkerhet och underhåll skiljer sig mellan företag. Det första samtalet definierar tillräckligt av arbetet och driftsättningsgränsen för att uppskatta kostnaden ärligt.</p></details>
          <details><summary>Kommer ni att ersätta vårt CRM eller andra viktiga system?</summary><p>Vanligtvis inte i början. Vi kopplar den privata AI:n till de program ni redan använder. Om ert CRM behöver bytas ut bygger vårt systerbolag <a href="https://companynative.com/se" target="_blank" rel="noreferrer">Company Native</a> CRM-system kring hur ert företag faktiskt arbetar.</p></details>
          <details><summary>Är Works Like Us redan i drift?</summary><p>Företaget är under utveckling. Det finns ännu inga slutförda Works Like Us-driftsättningar hos kunder. En förfrågan inleder en teknisk och affärsmässig diskussion; den lovar inte att det föreslagna systemet redan finns.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Utforska en första driftsättning</p><h2>Vilket arbete är för känsligt – eller för viktigt – för en publik AI?</h2><p>Berätta vad människor gör idag och vilken data som används. Vi svarar med det första privata AI-systemet vi skulle utforska, var det kan köras och vilket resultat som är värt att testa.</p></div>
        <LeadForm language="sv" />
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">W</span><span>Works Like Us</span></a><p>Drivs av Yusuf Young AB.</p><span><a href="/en">English</a> · <a href="/se">Svenska</a></span></footer>
    </main>
  );
}
