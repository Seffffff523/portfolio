'use client';

import { useState } from 'react';

export default function ContactSection() {
  const API_URL =
  process.env.NEXT_PUBLIC_CONTACT_API_URL || 'http://localhost:8788/api/contact';

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
    };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed');

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-10 mb-24">
      <h2 className="text-xl font-semibold mb-6 pt-10">Contact</h2>

      <div className="w-full flex justify-center px-6">
        <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-5">
          <div className="rounded-2xl bg-base-200 border border-base-300 p-6 sm:p-8 shadow">
            <div className="space-y-4">
              <input
                name="name"
                className="input input-bordered w-full bg-base-100 text-base-content"
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                type="email"
                className="input input-bordered w-full bg-base-100 text-base-content"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                className="textarea textarea-bordered w-full min-h-[180px] bg-base-100 text-base-content"
                placeholder="Your Message"
                required
              />

              <div className="flex items-center gap-4 pt-2">
                <button className="btn btn-warning" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && <span className="text-sm text-success">Sent!</span>}
                {status === 'error' && <span className="text-sm text-error">Failed. Try again.</span>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}