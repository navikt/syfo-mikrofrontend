# syfo-mikrofrontend

Mikrofrontend for sykefraværsoppfølging

# Tilpass repo-et

1. Legg til appen i [nais/frontend-plattform](https://github.com/nais/frontend-plattform/blob/main/teams.tfvars).
2. Sett inn riktig team navn i nais.yaml og under cdn-upload i workflowen.
3. Kommenter inn upload-dev og upload-prod i workflowen.

Mikfrontenden blir lastet opp til nav sin CDN ved push til main og har et manifest som deployes til Nais.

# Kom i gang

1. Bygg syfo-mikrofrontend ved å kjøre npm run build
2. Start appen lokalt ved å kjøre npm run dev
3. Appen nås på http://localhost:3000

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.
