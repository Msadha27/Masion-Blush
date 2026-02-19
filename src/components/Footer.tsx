import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="font-serif text-lg font-semibold text-foreground">
              Maison Blush
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-6 text-center text-xs text-muted-foreground max-w-3xl mx-auto">
          <p>
            This website contains affiliate links. As an Amazon Associate, we
            earn from qualifying purchases at no extra cost to you.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Maison Blush. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3 h-3 text-primary fill-primary" /> for aesthetic
            souls
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
