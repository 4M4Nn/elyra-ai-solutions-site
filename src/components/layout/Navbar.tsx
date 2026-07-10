"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, Sparkles } from "lucide-react";

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
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { appUrl, company, products } from "@/lib/data";

const primaryLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <Sparkles className="h-4 w-4" />
          </span>
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
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost">
            <a href={`${appUrl}/login`}>Login</a>
          </Button>
          <Button asChild variant="default">
            <Link href="/contact">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
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
            <nav className="mt-6 flex flex-1 flex-col gap-1">
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
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Button asChild variant="outline" className="w-full">
                  <a href={`${appUrl}/login`}>Login</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
