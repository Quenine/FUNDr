# Testing

## Contract tests

```bash
npm run compile
npm test
```

The Hardhat suite covers ProductionCycle settlement and default recovery, verifier rewards and quorum boundaries, liquidity retry behavior, and marketplace escrow, partial/full fills, fees, cancellation, validation, and current-holder redemption.

## Deployment and text verification

```bash
npm run check:text
npm run verify:arc
```

The text check detects known mojibake and legacy branding in tracked source content. Arc verification performs read-only bytecode and wiring checks in its standard mode.

## Frontend gates

```bash
cd rwa-ui
npm run lint -- --max-warnings=0
npm run build
npm run test:e2e:install
npm run test:e2e:local
```

The local Playwright suite starts a fresh production build at `http://127.0.0.1:3010`. It covers the route inventory, known dynamic cycle, invalid and no-bytecode states, responsive viewports, navigation, text integrity, required resources, disconnected Admin behavior, and marketplace positioning. Generated reports and browser binaries are not committed.

For a deployed frontend, set `PLAYWRIGHT_BASE_URL` and run `npm run test:e2e` only after the matching code is deployed.

## Manual two-wallet marketplace rehearsal

Use small Arc Testnet amounts and disposable test identities only.

1. Wallet A funds a live cycle and receives cycle-share tokens.
2. Wallet A selects the cycle in the marketplace, reviews gross proceeds, fee, and estimated net proceeds, then approves and lists part of the position.
3. Confirm the listing is active and shares are escrowed. A listing is not a completed trade.
4. Wallet B reviews the ask, approves USDC, and partially fills the order.
5. Verify Wallet B received shares, Wallet A received USDC less the fee, ProtocolTreasury received the fee, and the remaining order amount decreased.
6. Wallet A cancels the remainder and verifies the remaining shares returned.
7. Confirm Portfolio distinguishes wallet-held and marketplace-escrowed positions.
8. After eventual distribution or default, verify that current holders redeem their own shares. Sold shares belong to the buyer for settlement purposes.

Never include private keys in scripts, screenshots, logs, or documentation. Marketplace liquidity and exit timing depend on active listings and counterparties.

## Result interpretation

Commands and test scope are stable documentation; individual pass counts describe only the revision on which they were run and are not permanent guarantees. Warnings from optional third-party wallet or speculative prefetch traffic are non-fatal only when the release suite classifies them precisely and visible functionality remains intact.