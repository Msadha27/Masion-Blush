import { Send } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">
          Stay in the loop
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Join the Blush List
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Get exclusive deals, new picks, and aesthetic inspo delivered to your inbox every week.
        </p>
        <form
          className="flex gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 rounded-full border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
