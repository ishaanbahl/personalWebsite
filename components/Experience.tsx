"use client";

import { useRef } from "react";
import Image from "next/image";
import SubPoint from "@/components/ui/SubPoint";

function CompanyLogo({ company }: { company: string }) {
  const src = company === "Shopify" ? "/shopify_glyph.png" : "/IAMB_logo.png";
  return (
    <div className="w-10 h-10 flex items-center justify-center shrink-0">
      <Image src={src} alt={company} width={40} height={40} className="object-contain w-10 h-10" />
    </div>
  );
}

const entries = [
  {
    company: "Shopify",
    role: "Incoming Mobile App Team",
    link: "https://www.shopify.com/ca",
    bullets: [] as string[],
    tags: ["React Native", "TypeScript", "GraphQL"],
  },
  {
    company: "Shopify",
    role: "Customer Account & Login Team",
    link: "https://www.shopify.com/ca",
    bullets: [
      "Made impactful design changes for millions of customer account profiles that use Shopify built stores.",
      "Designed webhooks used by popular email marketing providers.",
    ],
    tags: ["React", "TypeScript", "Ruby on Rails", "GraphQL"],
  },
  {
    company: "IAMB Games",
    role: "Founder",
    link: "https://www.fiverr.com/s/2KVgbjk",
    bullets: [
      "Professional Game Design Studio",
      "Have an international team of contractors",
      "Worked with 50+ clients",
    ],
    tags: ["Unity", "C#"],
  },
]

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="px-6 md:px-16 pt-8 pb-24 max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 uppercase"> My Journey</h2>

      <div ref={timelineRef} className="relative">
        {/* Line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-black" />

        {/* Ending circle at the bottom */}
        <div className="absolute w-3 h-3 rounded-full bg-gray-900 z-15" style={{ left: "15px", bottom: "-6px" }} />

        <div className="flex flex-col gap-10">
          {entries.map((entry, i) => (
            <div key={i} className="relative flex items-start gap-5">
              {/* Logo sits on the line */}
              <div className="shrink-0 z-10">
                <CompanyLogo company={entry.company} />
              </div>

              {/* Card */}
              <div className="flex-1 py-1">
                <p className="text-gray-500 font-normal text-base">
                  {entry.role} @{" "}
                  {entry.link ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium underline"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    <span className="text-gray-900 font-medium">{entry.company}</span>
                  )}
                </p>

                {entry.bullets.length > 0 && (
                  <ul className="flex flex-col gap-1.5 mt-3">
                    {entry.bullets.map((b, j) => (
                      <SubPoint key={j}>{b}</SubPoint>
                    ))}
                  </ul>
                )}

                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
