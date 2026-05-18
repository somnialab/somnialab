import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] text-[#111111]">
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <h1 className="text-xl font-semibold tracking-[0.35em]">
          SOMNIALAB
        </h1>

        <a
          href="https://buy.stripe.com/test_28E5kD2C42kn1LO9959fW00"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-5 py-2 text-sm text-white transition hover:opacity-90"
        >
          Buy now
        </a>
      </nav>

      <section className="grid min-h-[80vh] items-center gap-10 px-8 py-10 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            3D Sleep Mask
          </p>

          <h2 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
            Sleep deeper.
            <br />
            Wake better.
          </h2>

          <p className="mb-8 max-w-md text-lg leading-8 text-neutral-700">
            A lightweight 3D sleep mask designed to block light,
            reduce eye pressure and help you rest anywhere.
          </p>

          <div className="flex items-center gap-4">
            <a
              id="buy"
              href="https://buy.stripe.com/test_28E5kD2C42kn1LO9959fW00"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Buy now — €24.95
            </a>

            <p className="text-sm text-neutral-500">
              Free shipping
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[2rem] shadow-sm">
            <Image
              src="/sleep-lifestyle.jpg"
              alt="Woman sleeping with sleep mask"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-sm">
              <Image
                src="/sleep-product.jpg"
                alt="Sleep mask product"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-sm">
              <Image
                src="/sleep-plane.jpg"
                alt="Travel sleep mask"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 border-y border-black/10 bg-white px-8 py-8 md:grid-cols-4 md:px-16">
        {[
          "Total blackout",
          "Zero eye pressure",
          "Breathable material",
          "Perfect for travel",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-[#f7f2eb] p-6"
          >
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </section>

      <section className="px-8 py-20 md:px-16">
        <h3 className="mb-10 max-w-2xl text-4xl font-semibold">
          Designed for better sleep, wherever you are.
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8">
            <h4 className="mb-3 text-xl font-medium">
              Blocks light
            </h4>

            <p className="text-neutral-600">
              Contoured 3D design helps create total darkness
              without touching your eyes.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <h4 className="mb-3 text-xl font-medium">
              Comfort fit
            </h4>

            <p className="text-neutral-600">
              Soft breathable material and an adjustable strap
              for all-night comfort.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <h4 className="mb-3 text-xl font-medium">
              Travel ready
            </h4>

            <p className="text-neutral-600">
              Lightweight, compact and easy to carry in your
              bag, suitcase or cabin luggage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-8 py-20 text-white md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
            SomniaLab
          </p>

          <h3 className="mb-6 text-4xl font-semibold">
            Upgrade your sleep tonight.
          </h3>

          <p className="mb-8 text-neutral-300">
            Minimal design. Maximum darkness. Built for daily
            rest, travel and recovery.
          </p>

          <a
            href="https://buy.stripe.com/test_28E5kD2C42kn1LO9959fW00"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-wide text-black transition hover:opacity-90"
          >
            Buy now — €24.95
          </a>
        </div>
      </section>

      <footer className="px-8 py-8 text-sm text-neutral-500 md:px-16">
        © 2026 SomniaLab. All rights reserved.
      </footer>
    </main>
  );
}