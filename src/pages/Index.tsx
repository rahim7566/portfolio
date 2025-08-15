import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/hero-rahim.png";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";
import useScrollSpy from "@/hooks/use-scroll-spy";
import TechLogos from "@/components/TechLogos";

const contact = {
  name: "Muhammad Abdur Rahim",
  title: "Software Developer",
  location: "Islamabad, Pakistan",
  phone: "+923325407566",
  email: "abdurrahim7566@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-abdur-rahim",
  github: "https://github.com/rahim7566",
};

const projects = [
  {
    title: "Patient and Practice Management System",
    period: "Nov 2023 – Present",
    bullets: [
      "Comprehensive healthcare platform for patient records, claims, and diagnoses.",
      "CRUD operations, secure data handling; integrated with third‑party services.",
      "Scalable MVC design with Spring Data JPA and SQL Server.",
    ],
    link: "https://hcmsus.com/",
  },
  {
    title: "Real‑time Patient Monitoring & Payment Integration",
    period: "Jul 2024 – Present",
    bullets: [
      "Real‑time vitals dashboard; Spring Boot backend and Angular frontend.",
      "Integrated Apple Pay, Google Pay, and Stripe for compliant payments.",
      "End‑to‑end API integration with tokenized payment handling and HIPAA compliance.",
    ],
    link: "https://ircmpay.com/login",
  },
  {
    title: "Electronic Health Record (EHR) System",
    period: "Jul 2023 – Oct 2024",
    bullets: [
      "EHR management with FHIR‑friendly features and secure data management.",
      "Advanced reporting: diagnoses, treatments, prescriptions, medication history.",
      "Built with Java, REST APIs, and Spring Security for reliability and compliance.",
    ],
    link: "https://ircm.com/",
  },
];

const experience = [
  {
    role: "Senior Java Developer",
    company: "Pmtac Private Limited, Rawalpindi",
    period: "Nov 2023 – Present",
    bullets: [
      "Designed a healthcare management system using Java, Spring Boot, RESTful APIs.",
      "Built scalable microservices architecture with high availability and performance.",
      "Implemented Spring Security (authN/authZ), secure patient data & HIPAA compliance.",
      "Collaborated with cross‑functional teams (QA, DevOps, UI/UX) in Agile Scrum.",
    ],
  },
  {
    role: "Junior Java Developer",
    company: "Pmtac Private Limited, Rawalpindi",
    period: "Dec 2022 – Nov 2023",
    bullets: [
      "Maintained Java apps with Spring Boot, enforcing standards and functional requirements.",
      "Debugged, tested, and implemented new features ensuring code quality and maintainability.",
    ],
  },
];

const education = {
  degree: "Bachelors in Information Technology (BS‑IT)",
  institution: "Quaid‑i‑Azam University, Islamabad",
  period: "Jul 2017 – Aug 2021",
  cgpa: "3.3 / 4.0",
};

const activities = {
  languages: ["English – Fluent", "Urdu – Native"],
  volunteer: [
    "Volunteer Java Mentor helping beginners with Java fundamentals and projects.",
    "Final year project team member in food catering domain (architecture & core dev).",
  ],
  interests: [
    "Open‑source Java projects and community contributions.",
    "AI/ML enthusiasm; Python with FastAPI for REST services.",
    "Automation, data science, and innovative problem solving.",
  ],
};

function Header() {
  const sections = [
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#education", id: "education", label: "Education" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];
  const activeId = useScrollSpy(
    sections.map((s) => s.id),
    100
  );
  const [manualActive, setManualActive] = React.useState<string | null>(null);
  const current = manualActive ?? activeId;

  React.useEffect(() => {
    if (manualActive) {
      const t = setTimeout(() => setManualActive(null), 600);
      return () => clearTimeout(t);
    }
  }, [manualActive]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-extrabold text-medium md:text-lg gradient-text"
          aria-label="Go to home"
        >
          {contact.name}
        </a>
        <div className="hidden md:flex items-center gap-2 md:gap-6 text-sm">
          {sections.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setManualActive(i.id)}
              className={cn(
                "transition-colors",
                current === i.id
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              )}
            >
              {i.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={contact.github}
            aria-label="GitHub"
            className="hover:text-primary"
          >
            <Github />
          </a>
          <a
            href={contact.linkedin}
            aria-label="LinkedIn"
            className="hover:text-primary ml-2"
          >
            <Linkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}

const Index = () => {
  const onContact: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const message = form.get("message");
    const mail = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Portfolio contact from " + name
    )}&body=${encodeURIComponent(String(message || ""))}`;
    window.location.href = mail;
    toast("Thanks! I will get back to you shortly.");
    e.currentTarget.reset();
  };

  const onDownloadCV = async () => {
    try {
      const res = await fetch("/AbdurRahim_resume.pdf");
      if (!res.ok) {
        toast("CV not found. Please upload cv.pdf to the public folder.");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "AbdurRahim_resume.pdf"; // Name for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      toast("Unable to download CV right now.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="home" className="container mx-auto px-4">
        {/* Hero */}
        <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* text column */}
          <div className="min-w-0 order-2 md:order-1">
            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
              <span className="block">{contact.name}</span>
              <span className="gradient-text">{contact.title}</span>
            </h1>

            <p className="text-muted-foreground max-w-prose leading-relaxed mb-6">
              Innovative and detail-oriented Java and Spring Boot developer with
              expertise in building robust applications, microservices, secure
              payment solutions, and advanced reporting systems, complemented by
              experience in developing dynamic and responsive front-end
              interfaces with React. Dedicated to delivering high-quality,
              reliable software platforms.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {contact.location}
              </span>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 hover:text-primary break-all"
              >
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
            </div>

            {/* buttons: stack on mobile, inline on ≥sm */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch gap-3">
              <a href="#projects" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Me
                </Button>
              </a>
              <Button
                variant="secondary"
                size="lg"
                onClick={onDownloadCV}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* image column */}
          <div className="min-w-0 order-1 md:order-2">
            <img
              src={heroImg}
              alt="Abstract tech hero with teal accents representing Java & Spring Boot development"
              loading="lazy"
              className="w-full rounded-xl border object-cover aspect-video shadow-[var(--shadow-glow)]"
            />
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="scroll-mt-28 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="card-elevated p-6">
                <header className="mb-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.period}</p>
                </header>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4 list-disc pl-5">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>
        {/* Experience */}
        <section id="experience" className="scroll-mt-28 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((e) => (
              <article key={e.role} className="card-elevated p-6">
                <header className="mb-2">
                  <h3 className="text-xl font-semibold">
                    {e.role}{" "}
                    <p>
                      <span className="text-muted-foreground">{e.company}</span>
                    </p>
                  </h3>
                  <p className="text-xs text-muted-foreground">{e.period}</p>
                </header>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack Logos */}
        <section id="tech" className="scroll-mt-28 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Tech Stack</h2>
          <TechLogos />
        </section>
        {/* Education */}
        <section id="education" className="scroll-mt-28 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
          <article className="card-elevated p-6">
            <h3 className="text-xl font-semibold">
              {education.degree}{" "}
              <span className="block text-muted-foreground">
                {education.institution}
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {education.period}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              CGPA: {education.cgpa}
            </p>
          </article>
        </section>
        {/* Activities */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="card-elevated p-6">
              <h3 className="font-semibold mb-2">Languages</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {activities.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </article>
            <article className="card-elevated p-6 md:col-span-1">
              <h3 className="font-semibold mb-2">Volunteer / Leadership</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {activities.volunteer.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </article>
            <article className="card-elevated p-6 md:col-span-1">
              <h3 className="font-semibold mb-2">
                Personal Projects & Interests
              </h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {activities.interests.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="scroll-mt-28 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="card-elevated p-6">
              <h3 className="font-semibold mb-2">Get in touch</h3>
              <form onSubmit={onContact} className="space-y-3">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-md border bg-background px-3 py-2"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Your message"
                  className="w-full rounded-md border bg-background px-3 py-2 h-28"
                />
                <Button variant="hero" className="w-full">
                  Send via Email
                </Button>
              </form>
            </article>
            <article className="card-elevated p-6">
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />{" "}
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />{" "}
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="h-4 w-4" />{" "}
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {contact.name}. Built with React &
        Tailwind.
      </footer>
    </div>
  );
};

export default Index;
