# Protocol Guide

## Overview

TradeCycle coordinates SME onboarding, USDC working capital, milestone evidence, verifier quorum, transferable cycle-share positions, settlement, recovery, and reusable operator history on Arc Testnet.

## Actors and roles

### Operators

Operators submit business information and participate according to the factory's onboarding mode. Approval permits protocol participation; it is not a regulated underwriting decision, credit guarantee, or endorsement.

### Investors

Investors fund cycles with USDC and receive cycle-share tokens. Token ownership determines settlement and recovery rights. Positions can be held or listed on the marketplace where counterparties exist.

### Verifiers

Verifiers stake USDC and independently review milestone evidence. A configured quorum must approve a milestone before the corresponding release can proceed.

### Protocol administrators

The owner-gated Admin interface supports onboarding policy, operator review, treasury operations, reserve compensation, transparent oracle inputs, marketplace configuration visibility, and optional advanced liquidity infrastructure. These operations do not bypass cycle state or verifier quorum.

## Operator onboarding

The factory supports manual review, open entry, and collateral-gated entry policies. In manual mode, applications can be approved or rejected by the configured owner. Operator approval is separate from verifier approval of milestone evidence.

## Cycle creation

An approved operator defines capital required, collateral, expected revenue, duration, fees, business context, and milestone information. A dedicated ProductionCycle contract and CycleShareToken are created for the cycle.

## Funding and escrow

During FUNDING, investors approve and transfer USDC to the ProductionCycle. The cycle contract holds funding and mints an equivalent quantity of cycle shares. Funding cannot exceed the configured capital target.

## Cycle-share tokens and marketplace trading

Cycle shares are transferable ERC-20 tokens. A seller can approve CycleTokenMarketplaceV2 and escrow part of a position in a sell order. Buyers can partially or fully fill active orders with USDC. The seller receives gross cost minus the trading fee, and ProtocolTreasury receives the fee.

Liquidity depends on listings and counterparties. An ask is a seller price, not fair value, NAV, or a guaranteed return. The frontend disables new buy/list actions after distribution or default, but the deployed marketplace does not enforce cycle state itself. Existing escrow can be cancelled so shares return to the seller.

## Milestone evidence and releases

Operators submit evidence references for milestones. Staked verifiers review that evidence and approve through VerifierRegistry. Once quorum is reached, the operator can release the configured tranche. Administration does not substitute for verifier approval.

## Repayment and redemption

After final evidence and harvest approval, the operator repays the exact expected revenue required by the cycle. Distribution calculates the per-token settlement entitlement. Current holders burn their shares to redeem; original investors cannot redeem shares they sold.

## Defaults and recovery

An expired active cycle can enter DEFAULTED. Remaining cycle funds, slashed collateral, and any authorized reserve compensation contribute to proportional token-holder recovery. Current holders use the default-recovery function. Reserve compensation is an exceptional risk-management operation rather than ordinary yield support.

## Credit Passport

Credit Passport pages summarize readable onchain cycle creation, funding, milestones, repayment, and default outcomes for an operator. They are demonstration profiles, not regulated credit ratings, lending decisions, or investment recommendations.

## Trust assumptions

Some configuration and operational functions remain owner-controlled. Cycle funding and settlement are enforced by ProductionCycle contracts, and milestone approval is bounded by verifier quorum. Marketplace lifecycle restrictions after settlement are currently frontend policy. This release does not claim decentralized governance or guaranteed liquidity.