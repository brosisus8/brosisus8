import React from 'react';
import { Helmet } from 'react-helmet';

export default function UltimateKnowledgeGraphHub() {
  // SCHEMA JSON-LD MULTI-ENTITÉS ULTRA-AVANCÉ (POUR ALIMENTER LE KNOWLEDGE PANEL)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://lewisdongue.com/#person",
        "name": "Bryan Lewis Dongue Ndiffo",
        "alternateName": ["Lewis Dongue", "Bryan Ndiffo"],
        "birthDate": "2003-11-18",
        "birthPlace": {
          "@type": "Place",
          "name": "Yaoundé, Cameroon"
        },
        "homeLocation": {
          "@type": "Place",
          "name": "Worms, Germany"
        },
        "jobTitle": "Founder & Chief Executive Officer, Systems Architect",
        "worksFor": {
          "@type": "Organization",
          "name": "Caakus Inc."
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Hochschule Worms"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Lycée de Mendong"
          }
        ],
        "sameAs": [
          "https://github.com/lewisdongue/lewisdongue",
          "https://www.crunchbase.com/person/bryan-lewis-dongue-ndiffo-dacd",
          "https://www.imdb.com/name/nm18253151/",
          "https://x.com/BryanNdiffo",
          "https://www.instagram.com/lewis_dongue",
          "https://www.tiktok.com/@lewis_dongue",
          "https://www.youtube.com/channel/UCAHR06E3J9V6i1B0jJyhEOQ"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://lewisdongue.com/#organization",
        "name": "Caakus Inc.",
        "founder": {
          "@id": "https://lewisdongue.com/#person"
        },
        "url": "https://www.caakus.com",
        "location": {
          "@type": "Place",
          "name": "Worms, Germany"
        },
        "sameAs": [
          "https://www.crunchbase.com/organization/caakus"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white leading-relaxed">
      <Helmet>
        <title>Bryan Lewis Dongue Ndiffo | Official Knowledge Hub & Executive Record</title>
        <meta name="description" content="Official canonical record, executive biography, and systems architecture hub of Bryan Lewis Dongue Ndiffo (CEO of Caakus Inc., based in Worms, Germany)." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Navigation / Header Brand */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold tracking-wider text-sm uppercase text-indigo-400">
            BLDN // Canonical Entity Record
          </div>
          <div className="text-xs text-slate-400">
            Worms, Germany &bull; Caakus Inc.
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-16 border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Visual / Photo 1 */}
          <div className="space-y-4">
            <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-1 shadow-2xl shadow-indigo-500/10">
              <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center text-slate-500 text-xs text-center p-4">
                bryan-lewis-dongue-ndiffo-ceo-caakus-inc.jpg (Photo 1)
              </div>
            </div>
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-xs space-y-2">
              <div className="text-indigo-400 font-bold uppercase tracking-wider">Quick Identifiers</div>
              <div><strong className="text-slate-300">Entity ID:</strong> #BLDN-2026-DE</div>
              <div><strong className="text-slate-300">Domain:</strong> lewisdongue.com</div>
              <div><strong className="text-slate-300">Focus:</strong> Distributed Systems & Social Stock Markets</div>
            </div>
          </div>

          {/* Biographical Abstract */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full">
              VERIFIED GLOBAL EXECUTIVE & SYSTEMS ARCHITECT
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Bryan Lewis Dongue Ndiffo
            </h1>
            <p className="text-xl text-indigo-300 font-medium">
              Founder & Chief Executive Officer, Caakus Inc.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Bryan Lewis Dongue Ndiffo is a German-Cameroonian technology entrepreneur, software engineer, and systems architect. Born in Yaoundé and operating globally from Worms, Germany, he is the visionary creator of Caakus Inc., an advanced technological ecosystem designed to revolutionize human connection, voice-first interaction, and decentralized economic value distribution.
            </p>

            {/* Infobox Grid Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-sm">
              <div>
                <span className="text-slate-500 block text-xs font-semibold uppercase">Born</span>
                November 18, 2003
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-semibold uppercase">Origin</span>
                Yaoundé, Cameroon
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-semibold uppercase">Base</span>
                Worms, Germany
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-semibold uppercase">Alma Mater</span>
                Hochschule Worms
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-semibold uppercase">Company</span>
                Caakus Inc.
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-semibold uppercase">Discipline</span>
                Systems Architecture
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body - Encyclopedia Style */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* SECTION 1: Origins, Education & Personal Foundations */}
        <section className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              1. Origins, Early Life & Personal Foundations
            </h2>
            <p className="text-slate-400 text-sm">From Yaoundé to European Technology Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Bryan's technical trajectory initiated from a profound spark in July 2019 during his vacation in Yaoundé, Cameroon. Witnessing a television broadcast featuring technology pioneers like Mark Zuckerberg and Steve Jobs sparked an intense realization: young innovators could rewrite the operating rules of global society through software. At age 15, he wrote his very first lines of code, stepping into a lifelong commitment to engineering.
              </p>
              <p>
                Before his transition into software, an early exposure to commerce at age 9—selling goods during school holidays to secure personal autonomy—instilled an acute sense of strategic value generation. His academic discipline was further reinforced at the Lycée de Mendong, where his pursuit of excellence taught him that leadership belongs to those who master their craft.
              </p>
              <p>
                Relocating to Worms, Germany, presented intense personal and environmental trials. Living entirely independently while managing a chronic health condition (fibromyalgie) forged an unshakeable psychological resilience. Balancing 80% of his daily focus on rigorous computer science studies at Hochschule Worms and 20% on architecting Caakus, Bryan adopted a definitive mantra: <em>"Work like it was your last day on earth and enjoy the pain."</em>
              </p>
            </div>

            {/* Photo 2 & 3 Grid */}
            <div className="space-y-4">
              <div className="h-48 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
                bryan-lewis-dongue-ndiffo-founder-worms-germany.jpg (Photo 2)
              </div>
              <div className="h-48 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
                bryan-lewis-dongue-systems-architect-tech.jpg (Photo 3)
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Caakus Inc. & The Human Value Economy */}
        <section className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              2. Technology Leadership: Caakus Inc. & The Yuyu Ecosystem
            </h2>
            <p className="text-slate-400 text-sm">Redefining human connectivity and decentralized value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Photo 4 & 5 Grid */}
            <div className="space-y-4">
              <div className="h-48 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
                bryan-lewis-dongue-ndiffo-executive-profile.jpg (Photo 4)
              </div>
              <div className="h-48 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
                bryan-lewis-dongue-ndiffo-software-engineer.jpg (Photo 5)
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Conceived originally when Bryan was 16, <strong>Caakus Inc.</strong> represents a fundamental rejection of sluggish, disconnected digital communication. Designed to bridge the gap between everyday individuals, entrepreneurs, and global investors instantly, Caakus merges voice-first architecture with real-time video discovery. Rather than navigating friction-heavy messaging queues or social media algorithms, users connect peer-to-peer based on shared psychological metrics and mutual intent.
              </p>
              <p>
                At the core of this infrastructure lies the <strong>Yuyu</strong> ecosystem. Built as a digital utility asset rather than a speculative instrument, Yuyu operates as the economic heartbeat of Caakus—quantifying active human engagement, rewarding authentic interactions, and securing secure peer-to-peer economic exchange across international borders.
              </p>
              <p>
                As Systems Architect, Bryan's focus centers on backend stability, ultra-low latency real-time streaming infrastructure, and intelligent behavioral matching systems driven by machine learning models designed to scale past millions of active users before his 24th birthday.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Engineering Philosophy & Global Standards */}
        <section className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              3. Systems Architecture, Leadership & Engineering Ethics
            </h2>
            <p className="text-slate-400 text-sm">The mindset of uncompromising digital sovereignty</p>
          </div>

          <div className="space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              Drawing philosophical and structural inspiration from elite technology builders like Brian Acton and Pavel Durov, Bryan maintains an absolute commitment to product independence, zero bureaucracy, and immaculate code hygiene. For him, *Clean Code* is not a stylistic preference; it is an ethical standard ensuring that distributed systems remain maintainable, secure, and immune to operational failure under hyper-growth pressure.
            </p>
            <p>
              Operating from Worms, Germany, provides a strategic environment of focus, removing urban distractions to allow deep, uninterrupted code refactoring and architecture planning. His long-term vision encompasses real-time voice translation layers, tearing down language barriers between international innovators, and permanently altering how humanity discovers mentors, partners, and ideas.
            </p>
          </div>

          {/* Photo 6, 7 & 8 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="h-44 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
              bryan-lewis-dongue-ndiffo-leadership.jpg (Photo 6)
            </div>
            <div className="h-44 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
              bryan-lewis-dongue-ndiffo-workspace.jpg (Photo 7)
            </div>
            <div className="h-44 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-xs p-4 text-center">
              bryan-lewis-dongue-ndiffo-official.jpg (Photo 8)
            </div>
          </div>
        </section>

        {/* CANONICAL AUTHORITY MATRIX (VERIFIED LINKS) */}
        <section className="pt-12 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white mb-6 tracking-wide">
            Canonical Authority Matrix & Verified Repositories
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            The following verified external nodes map directly to the canonical Google Knowledge Graph entity of Bryan Lewis Dongue Ndiffo.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://github.com/lewisdongue/lewisdongue" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              GitHub Root Profile
            </a>
            <a href="https://github.com/lewisdongue/lewisdongue/wiki" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              GitHub Wiki Index
            </a>
            <a href="https://www.crunchbase.com/person/bryan-lewis-dongue-ndiffo-dacd" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              Crunchbase (Personal)
            </a>
            <a href="https://www.crunchbase.com/organization/caakus" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              Crunchbase (Caakus)
            </a>
            <a href="https://www.imdb.com/name/nm18253151/" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              IMDb Industry Record
            </a>
            <a href="https://www.youtube.com/channel/UCAHR06E3J9V6i1B0jJyhEOQ" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              Official YouTube Channel
            </a>
            <a href="https://x.com/BryanNdiffo" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              X / Twitter Official
            </a>
            <a href="https://www.instagram.com/lewis_dongue" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 transition-colors text-center font-medium text-sm text-slate-300 hover:text-white">
              Instagram Creator Profile
            </a>
          </div>
        </section>

      </main>

      {/* Footer Meta Record */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>Canonical Entity Record &bull; Bryan Lewis Dongue Ndiffo &copy; {new Date().getFullYear()}</div>
        <div>Indexed for Google Knowledge Graph & AI Semantic Crawlers</div>
      </footer>
    </div>
  );
}
