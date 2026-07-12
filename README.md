# TradeCycle

TradeCycle is a testnet protocol for milestone-controlled USDC working capital for SME production and trade cycles on Arc. Operators create financing cycles, investors receive transferable cycle-share tokens, independent verifiers approve milestone releases, and settlement follows current token ownership. Completed activity contributes to an onchain SME Credit Passport.

- **Live application:** https://tradecycle-arc.vercel.app/
- **Repository:** https://github.com/Quenine/tradecycle-arc
- **Challenge track:** Best SME Trade Finance & Working Capital Workflow
- **Network:** Arc Testnet

![TradeCycle architecture](docs/assets/tradecycle-simplified-architecture.png)

## Problem

SME working-capital finance is often opaque, slow, and difficult to monitor after funding. Capital providers may lack verifiable evidence of production progress, while successful operators cannot easily reuse their repayment history.

## Solution

TradeCycle places USDC funding, milestone evidence, verifier quorum, settlement, transferable financing positions, and operator history in a single onchain workflow. Capital remains in cycle contracts and is released by approved tranche rather than through an offchain platform account.

## Core workflow

1. An operator applies under the configured onboarding policy; manual mode uses owner-gated review.
2. An approved operator creates a production or trade cycle.
3. Investors fund the cycle with USDC held by the cycle contract.
4. Funding mints transferable ERC-20 cycle-share tokens.
5. Holders may keep their position or use the onchain USDC order book where listings and counterparties exist.
6. Verifiers review evidence and quorum approves milestone releases.
7. The operator repays the cycle's configured settlement amount.
8. Current token holders redeem settlement or default recovery.
9. Completed outcomes contribute to the operator's Credit Passport.

## Core features

- Policy-gated operator onboarding and owner-gated protocol operations
- USDC escrow in per-cycle contracts
- Evidence-backed, verifier-approved milestone releases
- Transferable cycle-share positions
- Partial-fill USDC order book with treasury trading fees
- Current-holder settlement and default recovery
- Operator collateral and reserve recovery paths
- Onchain Credit Passport profiles
- Responsive Next.js application with automated release QA

Liquidity is market-dependent. TradeCycle does not provide guaranteed exits, fair-value pricing, an AMM for every cycle, or guaranteed market making.

## Actors

- **Operators** apply, provide business information, deposit collateral where required, create cycles, submit evidence, and repay.
- **Investors** fund cycles, receive cycle shares, hold or trade positions, and redeem as current holders.
- **Verifiers** stake USDC, review evidence, and approve milestones through quorum.
- **Protocol administrators** manage operator-entry policy, treasury and reserve operations, marketplace configuration, risk inputs, and separately gated liquidity infrastructure within deployed permissions.

Administration does not replace cycle-state enforcement or verifier quorum. This testnet release does not claim decentralized governance.

## Arc and Circle products

Implemented:

- **Arc Testnet** for contract execution and settlement
- **USDC** for funding, escrow, marketplace payment, fees, repayment, reserve capital, and redemption

Future or not implemented:

- Circle Gateway
- CCTP / Bridge Kit
- Circle Wallets
- USYC

StableFX and Nanopayments are not used by the current protocol.

## Deployed contracts

Core Arc Testnet addresses include:

| Contract | Address |
| --- | --- |
| ProductionCycleFactoryV2 | `0xB60522F3A62a1a092019E615722788F1C4af6319` |
| CycleTokenMarketplaceV2 | `0x7063938d47A0bB7f9f1CC305c82450715266b1D5` |
| USDC | `0x3600000000000000000000000000000000000000` |

The complete deployment table and verification instructions are in [docs/DEPLOYMENTS.md](docs/DEPLOYMENTS.md).

## Local development

```bash
npm install
npm run compile

cd rwa-ui
npm install
npm run dev
```

See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for prerequisites, configuration names, Windows notes, and production-build commands.

## Testing and verification

```bash
npm test
npm run check:text
npm run verify:arc

cd rwa-ui
npm run lint -- --max-warnings=0
npm run build
npm run test:e2e:local
```

See [docs/TESTING.md](docs/TESTING.md) for test scope and safe manual testnet rehearsal guidance.

## Documentation

- [Protocol guide](docs/PROTOCOL_GUIDE.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Development](docs/DEVELOPMENT.md)
- [Deployments](docs/DEPLOYMENTS.md)
- [Testing](docs/TESTING.md)
- [Security](SECURITY.md)
- [Submission document](docs/submission/SUBMISSION_DOCUMENT.md)
- [Circle Product Feedback](docs/submission/CIRCLE_PRODUCT_FEEDBACK.md)

## Security and testnet status

TradeCycle is unaudited testnet software. It must not be used with real funds. Owner-controlled operations, frontend lifecycle policy, dependency risk, marketplace liquidity limitations, and production-hardening requirements are documented in [SECURITY.md](SECURITY.md).

## License

This repository is licensed under the [MIT License](LICENSE).