import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          DeveoSys
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Développement logiciel sur mesure — web, mobile, sur-mesure.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Nous concevons et livrons des sites, web apps et applications mobiles
          pour des équipes qui ont besoin de résultats, pas de promesses.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
        >
          Démarrer un projet
        </Link>
        <Link
          href="/services"
          className="inline-flex h-11 items-center rounded-full border border-black/[.12] px-5 text-sm font-medium hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
        >
          Voir nos services
        </Link>
      </div>
    </section>
  );
}
