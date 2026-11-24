import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./SchemaScripts";

export interface BreadcrumbCrumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbCrumb[] }) {
  const schemaItems = [
    { name: "Home", item: "https://websitelink.cc.cd" },
    ...items.map((i) => ({
      name: i.name,
      item: `https://websitelink.cc.cd${i.href}`,
    })),
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs font-mono text-zinc-400">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
          <Home className="w-3.5 h-3.5 text-zinc-400" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.href}>
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              {isLast ? (
                <span className="text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors truncate max-w-[150px]">
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
