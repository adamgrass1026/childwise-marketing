import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 no-underline mb-6">
            <div className="w-[34px] h-[34px] bg-navy rounded-[9px] flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="none" className="w-[19px] h-[19px]">
                <path d="M10 2C7.5 2 5.5 3.8 5.5 6c0 1.4.8 2.6 1.9 3.3C5.5 10 4 11.8 4 14h12c0-2.2-1.5-4-3.4-4.7C13.7 8.6 14.5 7.4 14.5 6 14.5 3.8 12.5 2 10 2z" fill="white" />
                <circle cx="16" cy="15" r="3" fill="#0D8FAB" />
              </svg>
            </div>
            <span className="font-heading text-[19px] font-semibold text-navy tracking-tight">
              Child<span className="text-teal">Wise</span>
            </span>
          </Link>
          <h1 className="font-heading text-3xl font-semibold text-navy mb-2">Contact sales</h1>
          <p className="text-t2 text-sm">For multi-site organizations and enterprise plans</p>
        </div>
        <div className="bg-white border border-border rounded-2xl p-8 shadow-s2">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Full name</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Work email</label>
              <input type="email" placeholder="you@organization.com" className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Organization</label>
              <input type="text" placeholder="Organization name" className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Number of centers</label>
              <input type="text" placeholder="e.g. 5" className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
              <textarea placeholder="Tell us about your needs..." rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal resize-none" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-teal text-white font-semibold text-sm border-2 border-teal hover:bg-teal-lt transition-all duration-200 mt-2">
              Contact Sales
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
