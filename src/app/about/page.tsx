import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";

export const metadata: Metadata = {
  title: "About",
  description: "Phoenix Creed Energy — Building the infrastructure for Africa's electric future.",
};

/* ─── Data ───────────────────────────────────────────────────── */
const team = [
  {
    initials: "OO",
    name: "Onyeka Obiugo",
    role: "Founder & CEO",
    bio: "Founder of Phoenix Creed Energy, building the infrastructure layer for Africa's transition to electric mobility.",
  },
  {
    initials: "VA",
    name: "Valentine Agodi",
    role: "Chief Technology Officer",
    bio: "Leading technology strategy, software platforms, and digital infrastructure across the PCE ecosystem.",
  },
  {
    initials: "MJ",
    name: "Mr John",
    role: "Chief Operating Officer",
    bio: "Overseeing operations, deployment execution, strategic partnerships, and organizational growth.",
  },
  {
    initials: "ES",
    name: "Engr Steven",
    role: "Lead Engineer",
    bio: "Leading charging infrastructure development, energy systems integration, and technical deployment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────── */}
      <section className="bg-white pt-40 pb-28 md:pt-52 md:pb-36">
        <div className="section-padding max-w-[1100px] mx-auto text-center">
          <h1
            className="font-bold text-pce-dark tracking-tight leading-[1.04] mb-8"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)" }}
          >
            Building the infrastructure for<br />
            Africa&apos;s electric future.
          </h1>
          <p
            className="text-pce-gray leading-relaxed mx-auto"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)", maxWidth: 600 }}
          >
            Phoenix Creed Energy is developing EV charging infrastructure,
            energy storage systems, and intelligent mobility software for Africa.
          </p>
        </div>
      </section>

      {/* ── Section 2: Cinematic full-width image ────────────── */}
      <section className="w-full overflow-hidden" style={{ height: "clamp(380px, 55vw, 780px)" }}>
        <div className="relative w-full h-full">
          <Image
            src="/about-us.png"
            alt="Phoenix Creed Energy — Africa's electric future"
            fill
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* ── Section 3: What we build ─────────────────────────── */}
      <WhatWeBuild />

      {/* ── Section 4: Leadership Team ────────────────────────── */}
      {/* scroll-mt-24 offsets the 72px fixed navbar so the anchor lands correctly */}
      <section
        id="leadership-team"
        className="scroll-mt-24 py-28 md:py-40"
        style={{ background: "#F5F7FA" }}
      >
        <div className="section-padding max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <p
              className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "rgba(0,0,0,0.32)" }}
            >
              Leadership Team
            </p>
            <h2
              className="font-bold text-pce-dark tracking-tight leading-tight mb-5"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}
            >
              The people building Africa&apos;s electric future.
            </h2>
            <p className="text-pce-gray mx-auto" style={{ maxWidth: 520, fontSize: "1.05rem", lineHeight: 1.7 }}>
              A multidisciplinary team focused on charging infrastructure, energy systems,
              and intelligent mobility technology.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 flex flex-col gap-6 transition-all duration-200"
                style={{ border: "1px solid #EAEEF4" }}
              >
                {/* Avatar */}
                <div
                  className="rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    maxWidth: 120,
                    background: "linear-gradient(135deg, #0058B3 0%, #30E7ED 100%)",
                  }}
                >
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
                  >
                    {member.initials}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <p
                    className="text-[10px] font-bold tracking-[0.14em] uppercase mb-2"
                    style={{ color: "#0058B3" }}
                  >
                    {member.role}
                  </p>
                  <h3
                    className="font-bold text-pce-dark mb-3 leading-tight"
                    style={{ fontSize: "1.05rem" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-pce-gray text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 5: Vision ────────────────────────────────── */}
      <section className="bg-white py-32 md:py-48">
        <div className="section-padding max-w-[860px] mx-auto text-center">
          <p
            className="text-[11px] font-bold tracking-[0.18em] uppercase mb-10"
            style={{ color: "rgba(0,0,0,0.32)" }}
          >
            Our Vision
          </p>
          <p
            className="font-bold text-pce-dark leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.4rem)" }}
          >
            To become Africa&apos;s leading electric
            mobility infrastructure company.
          </p>
        </div>
      </section>

      {/* ── Section 6: CTA ───────────────────────────────────── */}
      <section
        className="relative py-28 md:py-40"
        style={{ background: "linear-gradient(135deg, #060d1f 0%, #0a1628 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative section-padding max-w-[1100px] mx-auto text-center">
          <h2
            className="font-bold text-white leading-tight tracking-tight mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
          >
            Help build Africa&apos;s electric future.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/investors"
              className="inline-flex items-center gap-2.5 rounded-full font-semibold text-white"
              style={{ padding: "14px 36px", fontSize: 15, background: "#0058B3", boxShadow: "0 4px 28px rgba(0,88,179,0.50)" }}
            >
              Investor Relations <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full font-medium text-white"
              style={{ padding: "14px 36px", fontSize: 15, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
