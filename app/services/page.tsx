import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites web, web apps et applications mobiles — conception, développement et maintenance.",
};

const services = [
  {
    title: "Sites & landing pages",
    body: "Sites vitrines performants, SEO propre, déploiement rapide.",
  },
  {
    title: "Web apps",
    body: "Produits SaaS et outils internes, de l'idée à la mise en production.",
  },
  {
    title: "Applications mobiles",
    body: "Applications cross-platform (React Native) pour iOS et Android.",
  },
  {
    title: "Conseil & renfort technique",
    body: "Audit, architecture, accompagnement d'équipes produit.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          Un partenaire technique unique pour passer de l&apos;idée au produit livré.
        </p>
      </header>
      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.12]"
          >
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {service.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
