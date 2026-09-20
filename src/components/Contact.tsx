import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, Edit3 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>(PERSONAL_INFO.email);
  const [isEditingEmail, setIsEditingEmail] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Quick inquiry state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formProjectType, setFormProjectType] = useState('E-Commerce Website');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with prefilled details
    const subject = encodeURIComponent(`Project Inquiry: ${formProjectType} - ${formName || 'New Client'}`);
    const body = encodeURIComponent(
      `Hi Martim,\n\nI am reaching out regarding a ${formProjectType}.\n\nProject details:\n${formMessage}\n\nBest regards,\n${formName} (${formEmail})`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#E2E2DC]">
      <div className="border border-[#121212] bg-[#121212] text-[#F6F6F3] rounded-3xl p-8 sm:p-14 lg:p-20 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#A1A1AA] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>06 / GET IN TOUCH</span>
            <span>—</span>
            <span className="text-emerald-400">READY FOR 2026 ENGAGEMENTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[0.95] text-white uppercase">
            LET'S BUILD
            <br />
            SOMETHING GREAT.
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-[#D4D4D8] font-sans font-normal leading-relaxed">
            “Have a project in mind? I’d love to hear about it.”
          </p>

          {/* Primary CTA & Direct Email Interaction */}
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`mailto:${emailAddress}?subject=Project%20Inquiry%20for%20Martim`}
              className="px-8 py-4 rounded-xl bg-[#F6F6F3] text-[#121212] text-sm font-bold tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-[#E14924]" />
              <span>EMAIL ME</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-mono-code transition-all flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="truncate">{emailAddress}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsEditingEmail(!isEditingEmail)}
              className="text-[11px] font-mono-code text-zinc-400 hover:text-white flex items-center gap-1 self-center sm:self-auto underline py-2 cursor-pointer"
              title="Change email address"
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isEditingEmail ? 'Done' : 'Customize Email'}
            </button>
          </div>

          {/* Editable Email Bar */}
          {isEditingEmail && (
            <div className="mt-4 p-4 bg-zinc-900 border border-zinc-700 rounded-xl max-w-md animate-in fade-in duration-200">
              <label className="text-[11px] font-mono-code text-zinc-400 block mb-2">
                SET CONTACT RECIPIENT EMAIL (DEFAULT: YOUR_EMAIL_HERE):
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="YOUR_EMAIL_HERE"
                  className="w-full px-3 py-1.5 bg-black border border-zinc-600 rounded text-xs font-mono-code text-white focus:outline-none focus:border-white"
                />
                <button
                  type="button"
                  onClick={() => setIsEditingEmail(false)}
                  className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Direct Project Inquiry Form */}
          <div className="mt-16 pt-12 border-t border-zinc-800">
            <h3 className="text-sm font-mono-code font-bold uppercase tracking-wider text-zinc-400 mb-6">
              QUICK PROJECT INQUIRY
            </h3>

            <form onSubmit={handleSendForm} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono-code text-zinc-400 block mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono-code text-zinc-400 block mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[11px] font-mono-code text-zinc-400 block mb-1.5">
                  PROJECT CATEGORY
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['E-Commerce Website', 'Product Brand / DTC', 'Local Business / Portfolio'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormProjectType(cat)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-mono-code text-left border transition-colors ${
                        formProjectType === cat
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-[11px] font-mono-code text-zinc-400 block mb-1.5">
                  PROJECT BRIEF &amp; TIMELINE
                </label>
                <textarea
                  rows={3}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell me a bit about your brand, goals, and what you would like to build..."
                  className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs font-mono-code text-zinc-500 text-center sm:text-left">
                  Direct reply within 24 hours to your email.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold text-xs font-mono-code tracking-wider uppercase rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#E14924]" />
                  <span>SEND INQUIRY</span>
                </button>
              </div>

              {formSent && (
                <div className="sm:col-span-2 p-3 bg-emerald-950/80 border border-emerald-800 rounded-lg text-emerald-300 text-xs font-mono-code text-center">
                  Inquiry opened in your mail client. Looking forward to speaking!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
