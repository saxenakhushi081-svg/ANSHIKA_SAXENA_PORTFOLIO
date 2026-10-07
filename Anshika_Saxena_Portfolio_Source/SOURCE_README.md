# Anshika Saxena Portfolio — Source

This archive contains the portfolio web app, API service, shared workspace packages, source assets, and the current resume PDF. Generated build folders, installed dependencies, environment files, and credentials are not included.

## Run locally

1. Install pnpm, then run `pnpm install` from this directory.
2. In one terminal, run `pnpm --filter @workspace/api-server run dev`.
3. In another terminal, run `pnpm --filter @workspace/anshika-portfolio run dev`.

The portfolio-specific OpenAI key can be configured as the `OPENAI_API_KEY_PORTFOLIO` environment secret. Do not commit API keys. If the provider is unavailable or throttles requests, the chatbot answers with its server-side verified-facts fallback.

## Updating chatbot facts

Edit `artifacts/api-server/src/data/anshika-profile.ts` and add only details verified by Anshika or her current resume. The client does not send the profile as prompt text.
