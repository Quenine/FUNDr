# Arc Testnet Deployment

The deployment JSON at `deployments/arcTestnet.json` is the source of truth for contract addresses.

## Network

| Field | Value |
| --- | --- |
| Network | Arc Testnet |
| Chain ID | `5042002` |
| RPC | `https://rpc.testnet.arc.network` |
| Explorer | https://testnet.arcscan.app |
| Stablecoin | Arc Testnet USDC, 6 ERC-20 decimals |

## Contracts

| Contract | Address | Role |
| --- | --- | --- |
| USDC | `0x3600000000000000000000000000000000000000` | Funding, escrow, payment, fees, repayment, and redemption |
| ProductionCycleFactoryV2 | `0xB60522F3A62a1a092019E615722788F1C4af6319` | Operator policy and cycle creation |
| VerifierRegistry | `0x22Fbd143994612b24B4FEC5f2282736d12CC74AF` | Verifier staking and quorum |
| CollateralVault | `0xcF13420d6677aAF055E4D7B346F9c16747e41DA5` | Operator collateral |
| ReservePool | `0xb0f77421a574ec2509632EAa6a87804a2Ed44476` | Exceptional recovery support |
| ProtocolTreasury | `0xAE901377C440be567BcbDB6C0C8e910a18Fd6803` | Protocol and marketplace fee revenue |
| YieldOracle | `0xB47ad3B29b420fD32C77e39AFeAC55b045B5e441` | Optional estimate and risk inputs |
| CycleTokenMarketplaceV2 | `0x7063938d47A0bB7f9f1CC305c82450715266b1D5` | Escrowed USDC cycle-share order book |
| LiquidityVault | `0xFC2CE1a6206d3e8Fd4F2C8bC3649f303AC2459B9` | Configuration-gated liquidity capital |
| LiquidityManager | `0x2BDF6D2D3bcc1DA32D02c3771030AE176C3bAFF6` | Optional DEX routing and liquidity launch |

ProductionCycle and CycleShareToken instances are created per cycle by the factory.

## Core and gated components

The factory, cycles, cycle-share tokens, verifier registry, collateral vault, reserve pool, treasury, oracle, and marketplace form the implemented protocol. LiquidityManager and LiquidityVault are separately gated advanced DEX infrastructure; they are not required for order-book trading and do not guarantee liquidity or a functioning pair.

## Verification

```bash
npm run verify:arc
```

The script checks bytecode, stablecoin and treasury wiring, owner relationships, factory relationships, marketplace metrics, and the marketplace fee cap without modifying state in verification mode.

All addresses in this document are testnet-only and must not be assumed valid on another network.