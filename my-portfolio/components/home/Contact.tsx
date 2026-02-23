'use client';

import { useState } from 'react';

export default function ContactSection() {
  const FORMSPREE_URL = 'https://formspree.io/f/mykdnbal'; // ✅ replace

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });

      if (!res.ok) throw new Error('Failed');

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-xl font-semibold mb-6">Contact</h2>

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

              {/* Optional subject for your inbox */}
              <input type="hidden" name="_subject" value="New portfolio message" />

              <div className="flex items-center gap-4 pt-2">
                <button className="btn btn-warning" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && <span className="text-sm text-success">Sent!</span>}
                {status === 'error' && (
                  <span className="text-sm text-error">Failed. Try again.</span>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}