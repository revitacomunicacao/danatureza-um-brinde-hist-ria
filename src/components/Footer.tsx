import { MapPin, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/images/logo_sem_fundo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-brown-deeper border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logoImg}
              alt="DaNatureza"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm italic font-serif">
              Um brinde DaNatureza!
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-serif text-lg text-primary mb-1">Contato</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} className="text-primary flex-shrink-0" />
              <span>Uberaba/MG</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail size={16} className="text-primary flex-shrink-0" />
              <a
                href="mailto:contato@danatureza.com.br"
                className="hover:text-primary transition-colors"
              >
                contato@danatureza.com.br
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <a
                href="https://wa.me/5534992693333"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                (34) 9.9269-3333
              </a>
            </div>
          </div>

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
            Produto destinado a adultos 18+ - Beba com moderação · Um brinde DaNatureza © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
