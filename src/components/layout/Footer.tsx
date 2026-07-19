import Link from "next/link";
import Image from "next/image";

import { company, products, socialLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/SocialIcons";

const iconMap = {
  linkedin: LinkedinIcon,
  x: XIcon,
  github: GithubIcon,
};

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="Elyra AI Solutions"
                width={640}
                height={640}
                className="h-36 w-36 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{company.description}</p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.platform as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.platform}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Products</p>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.status === "live" ? `/products/${product.slug}` : "/products"}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {product.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>{company.address}</p>
        </div>
      </div>
    </footer>
  );
}
