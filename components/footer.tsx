import { Instagram, Facebook, Mail, Phone, type LucideIcon } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/_vivere_amare_/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61578512951441",
    label: "Facebook",
  },
] as const;

type ContactInfo = {
  icon?: LucideIcon;
  iconLabel?: string;
  text: string;
  href?: string;
};

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    text: "spiniandrea01@gmail.com",
    href: "mailto:spiniandrea01@gmail.com",
  },
  { iconLabel: "CIN", text: "IT090023C20000U1024" },
  { icon: Phone, text: "+39 335 546 7680", href: "tel:+393355467680" },
];

type FooterContent = {
  description: string;
  contactsTitle: string;
  followTitle: string;
  copyrightText: string;
  cityText: string;
};

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="bg-foreground py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-serif">
              Vivere <span className="italic">aMare</span>
            </h3>
            <p className="leading-relaxed text-white/60">{content.description}</p>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white/80">{content.contactsTitle}</h4>
            <div className="space-y-3">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                const content = (
                  <>
                    {Icon ? (
                      <Icon className="h-4 w-4 shrink-0" />
                    ) : contact.iconLabel ? (
                      <span className="w-8 shrink-0 text-xs font-semibold tracking-wide text-white/70">
                        {contact.iconLabel}
                      </span>
                    ) : (
                      <span className="h-4 w-4 shrink-0" />
                    )}
                    <span>{contact.text}</span>
                  </>
                );

                return contact.href ? (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={contact.text} className="flex items-center gap-3 text-white/60">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white/80">{content.followTitle}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              {`(c) ${new Date().getFullYear()} Vivere aMare. ${content.copyrightText}`}
            </p>
            <p className="text-sm text-white/40">{content.cityText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
