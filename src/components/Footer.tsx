import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-brown-deeper border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/logo_sem_fundo.png"
              alt="DaNatureza"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm italic font-serif">
              Um brinde DaNatureza!
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-serif text-lg text-primary mb-1">Contato</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} className="text-primary flex-shrink-0" />
              <span>Delfinópolis/MG — Serra da Canastra</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail size={16} className="text-primary flex-shrink-0" />
              <span>contato@danatureza.com.br</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <span>(34) 99999-0000</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-serif text-lg text-primary mb-1">Navegação</h3>
            {["Home", "Sobre", "Fotos", "Contato"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs tracking-wider uppercase">
            Beba com moderação · DaNatureza © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
