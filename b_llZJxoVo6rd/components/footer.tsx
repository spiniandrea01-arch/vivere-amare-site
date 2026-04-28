import { Instagram, Facebook, Mail, Phone } from "lucide-react";

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
];

const contactInfo = [
  { icon: Mail, text: "spiniandrea01@gmail.com", href: "mailto:spiniandrea01@gmail.com" },
  { icon: Phone, text: "+39 335 546 7680", href: "tel:+393355467680" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Vivere <span className="italic">aMare</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              Il tuo rifugio vista mare a Castelsardo, Sardegna. Dove ogni
              risveglio profuma di vacanza.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-white/80">Contatti</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium mb-4 text-white/80">Seguici</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Vivere aMare. Tutti i diritti
              riservati.
            </p>
            <p className="text-white/40 text-sm">
              Castelsardo, Sardegna, Italia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
