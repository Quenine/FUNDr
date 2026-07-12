# Development

## Prerequisites

- Node.js 20 or later
- npm
- Git
- An EVM wallet for optional Arc Testnet interaction

## Install dependencies

From the repository root:

```bash
npm install
```

For the frontend:

```bash
cd rwa-ui
npm install
```

## Configuration names

Local configuration files are intentionally ignored. Configure only the values needed for the chosen workflow.

Root contract tooling may use:

- `ARC_RPC`
- `PRIVATE_KEY` for explicit deployment or repair workflows only

Frontend public configuration may use:

- `NEXT_PUBLIC_PROTOCOL_OWNER`
- `NEXT_PUBLIC_FACTORY_ADDRESS`
- `NEXT_PUBLIC_STABLECOIN_ADDRESS`
- `NEXT_PUBLIC_TREASURY_ADDRESS`
- `NEXT_PUBLIC_RESERVE_POOL_ADDRESS`
- `NEXT_PUBLIC_VERIFIER_REGISTRY_ADDRESS`
- `NEXT_PUBLIC_COLLATERAL_VAULT_ADDRESS`
- `NEXT_PUBLIC_YIELD_ORACLE_ADDRESS`
- `NEXT_PUBLIC_LIQUIDITY_VAULT_ADDRESS`
- `NEXT_PUBLIC_LIQUIDITY_MANAGER_ADDRESS`
- `NEXT_PUBLIC_TOKEN_MARKETPLACE_ADDRESS`
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`

Never commit secret values or reuse test identities for production.

## Contract commands

```bash
npm run compile
npm test
npm run check:text
npm run verify:arc
```

`verify:arc` is read-only unless the separate repair workflow is deliberately invoked.

## Frontend commands

```bash
cd rwa-ui
npm run dev
npm run lint -- --max-warnings=0
npm run build
npm run test:e2e:install
npm run test:e2e:local
```

Local Playwright QA builds and starts the production Next.js application on `http://127.0.0.1:3010`.

## Windows command locations

Run root commands from the repository root and frontend commands from the `rwa-ui` directory. PowerShell and Command Prompt do not interpret `cd` and chained commands identically; changing directories before running a command avoids ambiguity. No absolute machine-specific path is required.

## Deployment overview

Contract deployments are recorded in `deployments/`. The frontend is deployed separately with `rwa-ui` as the Vercel root directory. Public contract addresses must match the deployment JSON. Contract deployment or repair commands can modify testnet state and should not be part of ordinary development or automated QA. See [DEPLOYMENTS.md](DEPLOYMENTS.md).