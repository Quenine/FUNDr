"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"

const innovations = [
  ["Milestone finance", "USDC is released only after an assigned verifier approves documented delivery milestones."],
  ["Investor liquidity", "Eligible cycle positions can be listed and acquired through the onchain secondary marketplace."],
  ["Credit Passport", "Repayment history becomes a portable, contract-derived record for future underwriting."],
  ["Protocol controls", "Roles, pause controls, fees, exposure limits, and settlement accounting are explicit onchain."],
]

export default function SubmissionPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Arc challenge submission</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">TradeCycle turns verified SME trade milestones into investable USDC cycles.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The protocol combines escrowed working capital, verifier-gated releases, transparent repayment distribution, and an onchain USDC order book for eligible investor positions.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950" href="https://tradecycle-arc.vercel.app/">Open live app</a>
          <a className="rounded-full border border-slate-600 px-5 py-3 font-semibold" href="https://github.com/Quenine/tradecycle-arc">View repository</a>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {innovations.map(([title, detail]) => (
            <article key={title} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <h2 className="text-xl font-semibold text-cyan-200">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{detail}</p>
            </article>
          ))}
        </div>
        <section className="mt-16 rounded-3xl border border-slate-700 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold">Circle products on Arc</h2>
          <p className="mt-4 leading-7 text-slate-300"><strong className="text-white">Implemented:</strong> Arc Testnet provides the settlement layer and USDC is the asset used for funding, escrow, milestone releases, repayment, fees, and withdrawals.</p>
          <p className="mt-3 leading-7 text-slate-300"><strong className="text-white">Expansion path:</strong> Circle Gateway, CCTP and Bridge Kit, Circle Wallets, and USYC can extend liquidity routing, cross-chain funding, onboarding, and treasury management. They are not part of the current deployed MVP.</p>
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Explore the protocol</h2>
          <div className="mt-5 flex flex-wrap gap-3 text-cyan-200">
            <Link className="rounded-full border border-cyan-800 px-4 py-2" href="/demo">Guided demo</Link>
            <Link className="rounded-full border border-cyan-800 px-4 py-2" href="/market">Marketplace</Link>
            <Link className="rounded-full border border-cyan-800 px-4 py-2" href="/credit-passport">Credit Passport</Link>
            <Link className="rounded-full border border-cyan-800 px-4 py-2" href="/admin">Protocol operations</Link>
          </div>
        </section>
      </section>
    </main>
  )
}