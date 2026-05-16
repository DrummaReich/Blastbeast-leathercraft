export default function BlastbeastLanding() {
  const twoLayer = {
    grained: ["Black", "Brown"],
    natural: [
      "Natural",
      "Dark Natural",
      "Orange",
      "Brown",
      "Dark Brown",
      "Bordeaux Red",
      "Purple",
      "Black",
    ],
    custom: ["Custom Engraved Patterns", "Band Logos", "Personal Designs"],
  };

  const threeLayer = {
    suede: ["Brown", "Black", "Red"],
    smooth: [
      "Black",
      "Brown",
      "Thuya Green",
      "Green",
      "Red",
      "Purple",
      "Yellow",
      "White",
      "Lagoon Blue",
      "Turquoise",
      "Ocean Blue",
    ],
    custom: [
      "Leather Combination",
      "Custom Thread Color",
      "Logo Embossing",
      "Engraved Artwork",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-cyan-900 to-emerald-900 opacity-80" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      <main className="relative z-10">
        <section className="px-6 py-24 md:px-16 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="uppercase tracking-[0.4em] text-cyan-300 text-sm mb-6">
              Handcrafted Leather Accessories For Musicians
            </p>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent mb-8">
              BLASTBEAST
            </h1>

            <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed max-w-3xl mx-auto">
              Premium handmade leather guitar straps created by a musician.
              Cosmic aesthetics, durable craftsmanship, and custom designs
              made for stage performance and everyday inspiration.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-purple-200 mb-6">
                2-Layer Guitar Straps
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-200 mb-4">
                    Grained Leather
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {twoLayer.grained.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 rounded-full bg-black/30 border border-white/10"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-emerald-200 mb-4">
                    Natural Leather
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {twoLayer.natural.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 rounded-full bg-black/30 border border-white/10"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-cyan-200 mb-6">
                3-Layer Guitar Straps
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-rose-200 mb-4">
                    Suede / Nubuck
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {threeLayer.suede.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 rounded-full bg-black/30 border border-white/10"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-200 mb-4">
                    Smooth Finish
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {threeLayer.smooth.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 rounded-full bg-black/30 border border-white/10"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
