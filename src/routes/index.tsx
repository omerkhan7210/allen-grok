import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const areas = [
  {
    name: "Tsawwassen",
    line: "Beach Grove, Boundary Bay, and the ferry side of the peninsula.",
    photo: "/photos/coast.jpg",
    note: "Waterfront, downsizers, families who want the ferry and the dike trail.",
  },
  {
    name: "Ladner",
    line: "Village streets, harbour light, and character homes.",
    photo: "/photos/house-white.jpg",
    note: "People who want a main street, not a mall, and a house with some age to it.",
  },
  {
    name: "North Delta",
    line: "Established streets and more room for the money.",
    photo: "/photos/suburb.jpg",
    note: "First homes, growing families, and moves that have to work on a real budget.",
  },
];

const homes = [
  {
    area: "Beach Grove",
    type: "Detached",
    beds: "3 bed · 4 bath",
    size: "2,500+ sq ft",
    photo: "/photos/villa.jpg",
    caption: "Quiet street, mature trees, a short walk to the dike.",
  },
  {
    area: "Tsawwassen Central",
    type: "Apartment",
    beds: "2 bed · 2 bath",
    size: "about 1,000 sq ft",
    photo: "/photos/interior.jpg",
    caption: "Lock-and-leave living near shops, without giving up the peninsula.",
  },
  {
    area: "Pebble Hill",
    type: "Detached",
    beds: "3 bed · 3 bath",
    size: "about 2,700 sq ft",
    photo: "/photos/bungalow.jpg",
    caption: "Family layout on a real lot, close to schools and the golf course.",
  },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="leading-none">
            <span className="type-display block text-xl font-medium tracking-tight">
              Allen Schwabe
            </span>
            <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Sutton Seafair · Delta
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#place" className="hover:text-ink">
              The place
            </a>
            <a href="#work" className="hover:text-ink">
              How it works
            </a>
            <a href="#homes" className="hover:text-ink">
              Homes
            </a>
            <a
              href="#talk"
              className="bg-pine px-4 py-2.5 text-paper hover:bg-pine-deep"
            >
              Talk to Allen
            </a>
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-line px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-base font-medium">
              <a href="#place" onClick={() => setOpen(false)}>
                The place
              </a>
              <a href="#work" onClick={() => setOpen(false)}>
                How it works
              </a>
              <a href="#homes" onClick={() => setOpen(false)}>
                Homes
              </a>
              <a href="#talk" onClick={() => setOpen(false)}>
                Talk to Allen
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-0 px-5 pt-8 md:grid-cols-12 md:pt-12">
          <div className="md:col-span-5 md:pr-10 md:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              Delta · Tsawwassen · Ladner
            </p>
            <h1 className="type-display mt-4 text-[2.6rem] leading-[1.05] font-medium md:text-6xl">
              A realtor who actually lives where you want to buy.
            </h1>
            <p className="mt-6 max-w-md text-muted">
              Allen Schwabe has spent his life in South Delta and more than a
              decade with Sutton Group Seafair Realty. He helps people buy and
              sell without the hard sell.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#talk"
                className="inline-flex min-h-11 items-center bg-pine px-5 text-sm font-semibold text-paper hover:bg-pine-deep"
              >
                Get a straight home value
              </a>
              <a
                href="#homes"
                className="inline-flex min-h-11 items-center border border-ink px-5 text-sm font-semibold hover:bg-ink hover:text-paper"
              >
                See the kind of homes
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="text-muted">With Seafair</dt>
                <dd className="type-display mt-1 text-2xl">12 yrs</dd>
              </div>
              <div>
                <dt className="text-muted">In Delta</dt>
                <dd className="type-display mt-1 text-2xl">Lifelong</dd>
              </div>
              <div>
                <dt className="text-muted">Focus</dt>
                <dd className="type-display mt-1 text-2xl">South Delta</dd>
              </div>
            </dl>
          </div>
          <div className="relative mt-8 md:col-span-7 md:mt-0">
            <img
              src="/photos/hero.jpg"
              alt="A modern house with a wide front garden, the kind of home common in South Delta"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
            <p className="mt-2 text-xs tracking-wide text-muted">
              Photography is stock, used to show the finished site. Not a
              current listing photo.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:mt-24" id="place">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <h2 className="type-display text-4xl leading-tight md:col-span-5 md:text-5xl">
              Three Deltas. They do not behave like one market.
            </h2>
            <p className="text-muted md:col-span-6 md:col-start-7">
              Tsawwassen prices water and the ferry. Ladner prices the village.
              North Delta prices schools and commute. Allen works all three,
              and he will tell you when a street is wrong for what you actually
              want.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {areas.map((area) => (
              <article key={area.name}>
                <img
                  src={area.photo}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
                <h3 className="type-display mt-4 text-2xl">{area.name}</h3>
                <p className="mt-1 text-sm font-medium">{area.line}</p>
                <p className="mt-2 text-sm text-muted">{area.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 px-5 md:mt-28 md:grid-cols-12">
          <img
            src="/photos/pnw.jpg"
            alt="A forest path in coastal British Columbia light"
            className="aspect-[4/5] w-full object-cover md:col-span-5"
          />
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              About Allen
            </p>
            <blockquote className="type-display mt-4 text-3xl leading-snug md:text-4xl">
              “I look forward to making my home, your home.”
            </blockquote>
            <p className="mt-6 text-muted">
              That line is from his own site, and it is the useful part. He
              grew up here. He has been a licensed REALTOR® at Sutton Group
              Seafair Realty since 2014, working out of the Tsawwassen office
              on 56th Street.
            </p>
            <p className="mt-4 text-muted">
              Outside real estate he has spent decades as an entrepreneur in
              the Lower Mainland, including board work with public mining
              companies. Clients get someone who has negotiated deals for a
              long time, not a script.
            </p>
            <p className="mt-6 text-sm">
              Office · 1625 56th Street, Delta
              <br />
              Phone · 604-644-5664
              <br />
              Email · aschwabe@sutton.com
            </p>
          </div>
        </section>

        <section className="mt-20 bg-pine text-paper md:mt-28" id="work">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="type-display text-4xl">If you are buying</h2>
              <ol className="mt-8 space-y-6">
                {[
                  ["Listen first", "Budget, commute, schools, and what you will not compromise on. Then the search gets smaller."],
                  ["Walk the right streets", "Private viewings in Tsawwassen, Ladner, and North Delta — not a tour of everything listed this week."],
                  ["Negotiate the conditions", "Offer, inspection, financing, subject removal. Allen stays in it until keys change hands."],
                ].map(([title, body], i) => (
                  <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span className="type-display text-2xl text-paper/60">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-paper/80">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="type-display text-4xl">If you are selling</h2>
              <ol className="mt-8 space-y-6">
                {[
                  ["Price it like a local", "Comparables from the actual pocket of Delta, not a city-wide average that flatters nobody."],
                  ["Present it properly", "Photos, copy, and timing. A listing should look like the house, not a template."],
                  ["Hold the number", "Offers get answered with a plan. The goal is a clean sale at a price you can defend."],
                ].map(([title, body], i) => (
                  <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span className="type-display text-2xl text-paper/60">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-paper/80">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-5 md:mt-28" id="homes">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="type-display max-w-xl text-4xl leading-tight md:text-5xl">
              What a finished listing can look like.
            </h2>
            <p className="max-w-sm text-sm text-muted">
              These are example cards for the prototype. Photos are stock.
              Neighbourhoods match the work Allen already does.
            </p>
          </div>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {homes.map((home) => (
              <article
                key={home.area}
                className="grid gap-5 py-8 md:grid-cols-12 md:items-center"
              >
                <img
                  src={home.photo}
                  alt=""
                  className="aspect-[16/10] w-full object-cover md:col-span-5"
                />
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    {home.type}
                  </p>
                  <h3 className="type-display mt-2 text-3xl">{home.area}</h3>
                  <p className="mt-3 text-muted">{home.caption}</p>
                  <p className="mt-4 text-sm font-medium">
                    {home.beds}
                    <span className="mx-2 text-line">/</span>
                    {home.size}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <img
            src="/photos/living.jpg"
            alt="A bright living room with large windows"
            className="mt-8 aspect-[16/7] w-full object-cover"
          />
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-5 pb-20 md:mt-28" id="talk">
          <div className="grid overflow-hidden bg-paper-deep md:grid-cols-2">
            <img
              src="/photos/modern.jpg"
              alt="A light-filled modern home interior"
              className="aspect-[4/3] h-full w-full object-cover md:aspect-auto"
            />
            <div className="p-6 md:p-10">
              <h2 className="type-display text-4xl">Tell him what you are doing.</h2>
              <p className="mt-3 text-sm text-muted">
                Buying, selling, or you just want a number you can trust. He
                replies from the Sutton office.
              </p>
              {sent ? (
                <p className="mt-8 text-lg">
                  Message noted. In the live site this would go straight to
                  Allen. For this preview, nothing was sent.
                </p>
              ) : (
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm">
                      Name
                      <input
                        required
                        name="name"
                        className="mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
                      />
                    </label>
                    <label className="block text-sm">
                      Phone
                      <input
                        name="phone"
                        className="mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
                      />
                    </label>
                  </div>
                  <label className="block text-sm">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
                    />
                  </label>
                  <label className="block text-sm">
                    I am
                    <select
                      name="intent"
                      className="mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
                    >
                      <option>Thinking about selling</option>
                      <option>Looking to buy</option>
                      <option>Both</option>
                      <option>Just want a home value</option>
                    </select>
                  </label>
                  <label className="block text-sm">
                    A bit of context
                    <textarea
                      name="note"
                      rows={4}
                      className="mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
                    />
                  </label>
                  <button
                    type="submit"
                    className="min-h-11 w-full bg-clay px-5 text-sm font-semibold text-paper hover:bg-ink sm:w-auto"
                  >
                    Send to Allen
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:justify-between">
          <div>
            <p className="font-medium text-ink">Allen Schwabe, REALTOR®</p>
            <p>Sutton Group Seafair Realty · Delta, BC</p>
          </div>
          <p className="max-w-md">
            Listing data on a live site would come from MLS® reciprocity
            (Greater Vancouver REALTORS® / Fraser Valley Real Estate Board).
            This preview uses stock photography and example copy only.
          </p>
        </div>
      </footer>
    </div>
  );
}
