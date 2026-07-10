import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request early access to Elyra SEO+AEO Agent or get in touch with the ${company.name} team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-foreground">Let&apos;s talk</h1>
          <p className="mt-4 text-muted-foreground">
            Request early access to Elyra SEO+AEO Agent, ask about pricing for your agency, or register
            interest in an upcoming product. We read every message.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <a href={`mailto:${company.email}`} className="hover:underline">
                {company.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              {company.address}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
