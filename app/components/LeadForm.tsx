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
    stack: 'Main software (optional)',
    stackPlaceholder: 'Select one',
    problem: 'What work do you want to make faster or better?',
    problemPlaceholder: 'Tell us what happens today and what should improve.',
    button: 'Tell us what to improve',
    sending: 'Sending…',
    successTitle: 'Thank you. We’ll review the work and reply.',
    successText: 'We’ll suggest the first AI system we would test and the result it should improve.',
    error: 'That did not go through. Please try again.',
  },
  sv: {
    name: 'Ditt namn',
    email: 'Jobbmejl',
    company: 'Företag',
    stack: 'Viktigaste programmet (valfritt)',
    stackPlaceholder: 'Välj ett',
    problem: 'Vilket arbete vill ni göra snabbare eller bättre?',
    problemPlaceholder: 'Berätta hur det fungerar idag och vad som ska bli bättre.',
    button: 'Berätta vad ni vill förbättra',
    sending: 'Skickar…',
    successTitle: 'Tack. Vi går igenom arbetet och återkommer.',
    successText: 'Vi föreslår det första AI-system vi skulle testa och vilket resultat det ska förbättra.',
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
        <p>{language === 'sv' ? 'Yusuf Young AB använder bara uppgifterna för att läsa och svara på din förfrågan. Skriv “Integritetsbegäran” i meddelandet om du vill få ut, rätta eller radera dina uppgifter.' : 'Yusuf Young AB uses these details only to review and reply to your request. Write “Privacy request” in the message if you want us to send, correct or delete your data.'}</p>
        <button className="button button-light" type="submit" disabled={state === 'sending'}>{state === 'sending' ? t.sending : t.button}<span aria-hidden="true">↗</span></button>
      </div>
      {state === 'error' && <p className="form-error" role="alert">{t.error}</p>}
    </form>
  );
}
