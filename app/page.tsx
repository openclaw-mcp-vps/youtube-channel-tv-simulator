export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Linear TV from YouTube Playlists
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Turn Your YouTube Playlists into{" "}
          <span className="text-[#58a6ff]">Live TV Channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Schedule programming blocks, insert commercial breaks, and host synchronized viewing sessions with live chat — all from your existing YouTube playlists.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Broadcasting — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📺</div>
            <h3 className="font-semibold text-white mb-1">Scheduled Programming</h3>
            <p className="text-sm text-[#8b949e]">Build time-based schedules with your playlist videos, just like a real TV network.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💬</div>
            <h3 className="font-semibold text-white mb-1">Live Viewer Chat</h3>
            <p className="text-sm text-[#8b949e]">Synchronized chat so your audience watches and reacts together in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-semibold text-white mb-1">Commercial Breaks</h3>
            <p className="text-sm text-[#8b949e]">Insert sponsor clips or promos between segments for a true broadcast feel.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Channel</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited YouTube playlists as channels",
              "Synchronized viewer sessions",
              "Live chat with emoji reactions",
              "Custom commercial break slots",
              "Channel analytics dashboard",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need a YouTube API key?</h3>
            <p className="text-sm text-[#8b949e]">Yes. After signing up you'll connect your YouTube account via OAuth — we handle the API setup automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How many viewers can watch simultaneously?</h3>
            <p className="text-sm text-[#8b949e]">The Pro plan supports up to 500 concurrent viewers per channel with WebRTC-powered sync.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel from your dashboard with one click — no questions asked, no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} TV Channel Simulator. All rights reserved.
      </footer>
    </main>
  );
}
