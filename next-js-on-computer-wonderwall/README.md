Dette er en [Next.js](https://nextjs.org/) prosjekt opprettet med [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Formålet er å bruke den som en mal for utvikling.

I dette prosjektet benyttes Docker for å kjøre avhengigheter mens applikasjonen kjører på maskinen din.

## Bruksanvisning

Sørg for at Docker (eller noe lignende) er installert å kjører. Sørg for at du har følgende i ditt `etc/hosts` fil:

```
127.0.0.1 host.docker.internal
```

Du starter applikasjoner og avhengigheter med `docker-compose`.

```bash
docker-compose up
```

Nå bør du ha:

- en Wonderwall instans som lytter på port 3000
- en Mock Oauth2 Server som lytter på port 8080
- en Redis instans på port 6379

Åpne nytt terminal vindu og kjør:

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i din nettleser for å aksessere applikasjonen. Hvis du bruker [http://localhost:4000](http://localhost:4000) vil Wonderwall omgås.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
