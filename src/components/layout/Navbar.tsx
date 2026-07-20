"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { appUrl, company, leadManagementAppUrl, products } from "@/lib/data";
import { clearAuthUser } from "@/lib/auth";
import { useAuthUser } from "@/hooks/useAuthUser";

const primaryLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const accountLinks = {
  login: [
    { label: "Elyra SEO+AEO Agent", href: "/login", external: false },
    { label: "Elyra AI Lead Management", href: `${leadManagementAppUrl}/login`, external: true },
  ],
  getStarted: [
    { label: "Elyra SEO+AEO Agent", sub: "Start 14-day free trial", href: "/signup", external: false },
    { label: "Elyra AI Lead Management", sub: "Subscribe now", href: `${leadManagementAppUrl}/subscribe`, external: true },
  ],
  dashboard: [
    { label: "Elyra SEO+AEO Agent", href: appUrl, external: true },
    { label: "Elyra AI Lead Management", href: `${leadManagementAppUrl}/dashboard`, external: true },
  ],
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const user = useAuthUser();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
          <Image
            src="/logo.jpg"
            alt="Elyra AI Solutions logo"
            width={160}
            height={160}
            className="h-11 w-11 shrink-0 object-contain mix-blend-multiply"
            priority
          />
          {company.shortName}
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-1 p-3">
                    {products.map((product) => (
                      <li key={product.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={product.status === "live" ? `/products/${product.slug}` : "/products"}
                            className="block rounded-md p-3 transition-colors hover:bg-accent"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-medium text-foreground">{product.name}</span>
                              <span
                                className={cn(
                                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                                  product.status === "live"
                                    ? "bg-brand-emerald/10 text-brand-emerald"
                                    : "bg-brand-amber/10 text-brand-amber"
                                )}
                              >
                                {product.status === "live" ? "Live" : "Coming soon"}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">{product.tagline}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products"
                          className="flex items-center justify-between rounded-md p-3 text-sm font-medium text-primary transition-colors hover:bg-accent"
                        >
                          View all products
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {primaryLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {user ? (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-3">
                      {accountLinks.dashboard.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noreferrer noopener" : undefined}
                              className="block rounded-md p-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                            >
                              {item.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Login</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-3">
                      {accountLinks.login.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            {item.external ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="block rounded-md p-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link
                                href={item.href}
                                className="block rounded-md p-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                              >
                                {item.label}
                              </Link>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <Button variant="outline" onClick={() => clearAuthUser()}>
              Logout
            </Button>
          ) : (
            <div className="relative">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground focus:bg-primary/90 focus:text-primary-foreground data-[state=open]:bg-primary/90 data-[state=open]:text-primary-foreground"
                      )}
                    >
                      Get started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] gap-1 p-3">
                        {accountLinks.getStarted.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              {item.external ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="block rounded-md p-3 transition-colors hover:bg-accent"
                                >
                                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                                  <p className="mt-0.5 text-xs text-muted-foreground">{item.sub}</p>
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="block rounded-md p-3 transition-colors hover:bg-accent"
                                >
                                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                                  <p className="mt-0.5 text-xs text-muted-foreground">{item.sub}</p>
                                </Link>
                              )}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[85vw] flex-col sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-heading">{company.shortName}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-1 flex-col gap-1 overflow-y-auto">
              <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Products
              </p>
              {products.map((product) => (
                <SheetClose asChild key={product.slug}>
                  <Link
                    href={product.status === "live" ? `/products/${product.slug}` : "/products"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {product.name}
                  </Link>
                </SheetClose>
              ))}
              <div className="my-3 h-px bg-border" />
              {primaryLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              {!user && (
                <>
                  <div className="my-3 h-px bg-border" />
                  <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Login
                  </p>
                  {accountLinks.login.map((item) =>
                    item.external ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <SheetClose asChild key={item.label}>
                        <Link href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </>
              )}
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              {user ? (
                <>
                  {accountLinks.dashboard.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Button asChild variant="outline" className="w-full">
                        <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer noopener" : undefined}>
                          {item.label}
                        </a>
                      </Button>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className="w-full" onClick={() => clearAuthUser()}>
                      Logout
                    </Button>
                  </SheetClose>
                </>
              ) : (
                accountLinks.getStarted.map((item, index) => (
                  <SheetClose asChild key={item.label}>
                    <Button asChild variant={index === 0 ? "default" : "outline"} className="w-full">
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer noopener" : undefined}
                      >
                        {item.label}
                        {index === 0 && <ArrowRight className="h-4 w-4" />}
                      </a>
                    </Button>
                  </SheetClose>
                ))
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
