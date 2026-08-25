'use client';

import { FormEvent, useState } from 'react';

type LeadFormProps = {
  language?: 'en' | 'sv';
};

const copy = {
  en: {
    name: 'Your name',
    email: 'Work email',
    company: 'Company',
    stack: 'Current setup (optional)',
    stackPlaceholder: 'Choose one',
    problem: 'Where is valuable work slow, inconsistent or stuck in people’s heads?',
    problemPlaceholder: 'A few sentences are enough.',
    button: 'Show us the opportunity',
    sending: 'Sending…',
    successTitle: 'Thank you. We’ll look at the work, not just the technology.',
    successText: 'We’ll reply with the first system we would test and what it would need to prove.',
    error: 'That did not go through. Please try again.',
  },
  sv: {
    name: 'Ditt namn',
    email: 'Jobbmejl',
    company: 'Företag',
    stack: 'Nuvarande system (valfritt)',
    stackPlaceholder: 'Välj ett',
    problem: 'Var går värdefullt arbete långsamt, ojämnt eller fastnar hos ett fåtal personer?',
    problemPlaceholder: 'Ett par meningar räcker.',
    button: 'Visa oss möjligheten',
    sending: 'Skickar…',
    successTitle: 'Tack. Vi tittar på arbetet, inte bara tekniken.',
    successText: 'Vi återkommer med det första systemet vi skulle testa och vad det behöver bevisa.',
    error: 'Det gick inte att skicka. Försök igen.',
  },
};

export default function LeadForm({ language = 'en' }: LeadFormProps) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const t = copy[language];
  const otherStack = language === 'sv' ? 'Annat / utvärderar alternativ' : 'Other / evaluating';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, language }),
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h3>{t.successTitle}</h3>
        <p>{t.successText}</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit} aria-busy={state === 'sending'}>
      <div className="field-row">
        <label><span>{t.name}</span><input name="name" autoComplete="name" required /></label>
        <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <div className="field-row">
        <label><span>{t.company}</span><input name="company" autoComplete="organization" required /></label>
        <label>
          <span>{t.stack}</span>
          <select name="stack" defaultValue="">
            <option value="" disabled>{t.stackPlaceholder}</option>
            <option>HubSpot</option><option>Salesforce</option><option>Pipedrive</option><option>Microsoft Dynamics</option><option>{otherStack}</option>
          </select>
        </label>
      </div>
      <label className="problem-field"><span>{t.problem}</span><textarea name="problem" rows={4} placeholder={t.problemPlaceholder} required /></label>
      <label className="company-site" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-submit">
        <p>{language === 'sv' ? 'Yusuf Young AB använder bara uppgifterna för att bedöma och besvara din förfrågan. Börja med “Integritetsbegäran” om du vill begära tillgång, rättelse eller radering.' : 'Yusuf Young AB uses these details only to assess and respond to your enquiry. Begin with “Privacy request” to request access, correction or deletion.'}</p>
        <button className="button button-light" type="submit" disabled={state === 'sending'}>{state === 'sending' ? t.sending : t.button}<span aria-hidden="true">↗</span></button>
      </div>
      {state === 'error' && <p className="form-error" role="alert">{t.error}</p>}
    </form>
  );
}
