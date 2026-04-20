import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Qui sommes-nous, comment nous travaillons, ce que nous livrons.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">À propos</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        DeveoSys est un studio de développement logiciel qui accompagne ses
        clients de la conception à la mise en production. Nous privilégions des
        livraisons courtes, des stacks éprouvées, et un pilotage transparent.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Comment nous travaillons</h2>
      <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Périmètres courts, démos fréquentes, décisions documentées.</li>
        <li>Stacks standards (Next.js, React Native, Laravel) — pas de tour d&apos;ivoire.</li>
        <li>Un seul interlocuteur technique, responsable de la livraison.</li>
      </ul>
    </section>
  );
}
