import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Parler d'un projet avec l'équipe DeveoSys.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Un projet à discuter ? Écrivez-nous, nous répondons sous 48 h ouvrées.
      </p>
      <a
        href="mailto:contact@deveosys.com"
        className="inline-flex h-11 w-fit items-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
      >
        contact@deveosys.com
      </a>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Un formulaire de contact est en cours d&apos;intégration — en attendant,
        le mail ci-dessus fonctionne.
      </p>
    </section>
  );
}
