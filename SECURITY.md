# Security Policy

## Status and scope

TradeCycle is unaudited Arc Testnet software. It is provided for development, review, and demonstration and must not be used with real funds.

Security reports may cover Solidity contracts, deployment and verification scripts, the Next.js frontend, wallet/network handling, authorization boundaries, and documentation that could cause unsafe operation. Reports should describe the affected component, reproduction conditions, impact, and a minimal proof of concept without exploiting public infrastructure or other users.

Report suspected vulnerabilities privately through the repository owner's GitHub security contact or a private GitHub security advisory. Do not publish exploitable details before maintainers have had a reasonable opportunity to investigate.

## Trust assumptions

- ProductionCycle contracts enforce funding, state transitions, milestone release conditions, repayment, and redemption.
- VerifierRegistry quorum controls milestone approval; the Admin UI does not replace quorum.
- Owner-controlled functions include operator-entry policy and review, treasury operations, reserve compensation, YieldOracle inputs, marketplace configuration, and optional liquidity infrastructure according to deployed permissions.
- The release does not claim decentralized governance. Multisig, timelock, monitoring, and broader governance are production-hardening paths.
- Marketplace restrictions after distribution or default are frontend policy; CycleTokenMarketplaceV2 does not inspect cycle state.
- Liquidity, counterparties, exit timing, and seller asks are not guaranteed.
- Credit Passport data is a testnet onchain activity summary, not a regulated credit rating, lending decision, or investment recommendation.

## Dependency and frontend risk

Wallet connectors, RPC services, package dependencies, browser behavior, and public infrastructure can fail independently of the contracts. Dependency updates require review and release testing. A successful build or automated test run is not an audit.

## Production hardening

Before any production use, the system would require professional contract and frontend security review, hardened key management, multisig or timelock administration, incident response, dependency monitoring, production-grade RPC redundancy, legal and compliance review, and explicit marketplace lifecycle enforcement decisions.

All development and testnet wallets are disposable test identities and must not be reused for production or funded with real assets.