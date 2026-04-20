# deveosys-com

Site vitrine de **DeveoSys** — `deveosys.com`.

Ce repo est scaffoldé depuis l'issue DEV-3 (choix de stack + scaffold initial). Le brief produit est validé sous DEV-2.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **ESLint** (config `next/core-web-vitals`)
- Cible de déploiement : **Vercel** (free-tier), HTTPS géré par la plateforme.

Stack validée par le board le 2026-04-20 : Next.js pour les projets simples, alternative PayloadCMS laissée ouverte pour une future évolution éditoriale.

## Prérequis

- Node.js 22+
- npm 10+

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement avec HMR. |
| `npm run build` | Build de production. |
| `npm run start` | Sert le build de production en local. |
| `npm run lint` | Lint ESLint. |
| `npm run typecheck` | Vérification TypeScript (`tsc --noEmit`). |

## Structure

```
app/
├── layout.tsx           # header/footer/metadata globaux
├── page.tsx             # accueil
├── services/page.tsx    # /services
├── about/page.tsx       # /about
└── contact/page.tsx     # /contact
```

## CI

GitHub Actions exécute `lint`, `typecheck` et `build` sur chaque push et PR vers `main` (voir `.github/workflows/ci.yml`).

## Déploiement

Cible : Vercel, projet connecté à ce repo, branche `main` = production.

DNS `deveosys.com` à brancher manuellement — suivi via l'issue Paperclip DEV-4.

## Roadmap court terme

- **v1 (MVP, deadline mercredi 2026-04-22)** : les 4 pages, formulaire de contact fonctionnel, déploiement + DNS, SEO minimal (meta/sitemap/robots).
- **v1.1** : formulaire → fournisseur email (Resend) ; démonstrateur interactif si demandé par le board.
- **v2** : blog/études de cas, i18n FR/EN, PayloadCMS si le contenu dépasse quelques pages statiques.
