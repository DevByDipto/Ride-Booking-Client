interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "Ride Booking Logo",
    title: "RideNest",
    url: "/",
  },
  tagline = "Fast, Reliable, and Safe Rides for Everyone",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Ride Booking", url: "/services" },
        { text: "Pricing", url: "/pricing" },
        { text: "Features", url: "/features" },
        { text: "Testimonials", url: "/testimonials" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Team", url: "/team" },
        { text: "Blog", url: "/blog" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", url: "/faq" },
        { text: "Customer Support", url: "/contact" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { text: "Twitter", url: "https://twitter.com/" },
        { text: "Instagram", url: "https://instagram.com/" },
        { text: "LinkedIn", url: "https://linkedin.com/" },
      ],
    },
  ],
  copyright = "© 2025 RideNest. All rights reserved.",
  bottomLinks = [
    { text: "Terms of Service", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: Footer2Props) => {
  return (
    <section
      className="py-20"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <a href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} alt={logo.alt} className="h-10" />
                <span className="text-xl font-bold">{logo.title}</span>
              </a>
              <p className="mt-4 font-medium">{tagline}</p>
            </div>

            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3" style={{ color: "var(--muted-foreground)" }}>
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary font-medium">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-16 flex flex-col justify-between gap-4 border-t pt-6 text-sm font-medium md:flex-row md:items-center"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
