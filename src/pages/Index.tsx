import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/hero-rahim.jpg";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const contact = {
  name: "Muhammad Abdur Rahim",
  title: "Senior Java & Spring Boot Developer",
  location: "Islamabad, Pakistan",
  phone: "+923235470566",
  email: "abdurrahim7566@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-abdur-rahim",
  github: "https://github.com/rahim7566",
};

const skills: Record<string, string[]> = {
  "Programming Languages": ["Java", "JPQL", "SQL"],
  "Frameworks & Libraries": ["Spring Boot", "Spring MVC", "Spring Web", "Hibernate", "JUnit"],
  "Tools & Platforms": ["Docker", "Git", "Maven", "RabbitMQ", "WebSockets", "Twilio", "Azure DevOps", "IntelliJ IDEA", "VS Code"],
  Databases: ["MySQL", "PostgreSQL", "Microsoft SQL Server"],
  APIs: ["RESTful Web Services", "Swagger", "Postman"],
  "Development Methodologies": ["Agile", "Scrum", "TDD"],
  Security: ["Spring Security", "JWT"],
};

const projects = [
  {
    title: "Patient and Practice Management System",
    period: "Nov 2023 – Present",
    bullets: [
      "Comprehensive healthcare platform for patient records, claims, and diagnoses.",
      "CRUD operations, secure data handling; integrated with third‑party services.",
      "Scalable MVC design with Spring Data JPA and SQL Server."
    ],
    link: "https://hmspsms.azurewebsites.net/pms-app/",
  },
  {
    title: "Real‑time Patient Monitoring & Payment Integration",
    period: "Jul 2024 – Present",
    bullets: [
      "Real‑time vitals dashboard; Spring Boot backend and Angular frontend.",
      "Integrated Apple Pay, Google Pay, and Stripe for compliant payments.",
      "End‑to‑end API integration with tokenized payment handling and HIPAA compliance."
    ],
    link: "https://ircmapp.com/login",
  },
  {
    title: "Electronic Health Record (EHR) System",
    period: "Jul 2023 – Oct 2024",
    bullets: [
      "EHR management with FHIR‑friendly features and secure data management.",
      "Advanced reporting: diagnoses, treatments, prescriptions, medication history.",
      "Built with Java, REST APIs, and Spring Security for reliability and compliance."
    ],
    link: "https://ircm.azurewebsites.net/ircm-app//auth/login",
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
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-lg gradient-text" aria-label="Go to home">
          {contact.name}
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: "#projects", label: "Projects" },
            { href: "#experience", label: "Experience" },
            { href: "#skills", label: "Skills" },
            { href: "#education", label: "Education" },
            { href: "#contact", label: "Contact" },
          ].map((i) => (
            <a key={i.href} href={i.href} className="hover:text-primary transition-colors">
              {i.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={contact.github} aria-label="GitHub" className="hover:text-primary"><Github /></a>
          <a href={contact.linkedin} aria-label="LinkedIn" className="hover:text-primary"><Linkedin /></a>
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
    const mail = `mailto:${contact.email}?subject=${encodeURIComponent("Portfolio contact from " + name)}&body=${encodeURIComponent(String(message || ""))}`;
    window.location.href = mail;
    toast("Thanks! I will get back to you shortly.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="home" className="container mx-auto px-4">
        {/* Hero */}
        <section className="py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              <span className="block">{contact.name}</span>
              <span className="gradient-text">{contact.title}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-6">
              Innovative and detail‑oriented Java developer specializing in Spring Boot, microservices, secure payments, and advanced reporting. Passionate about building reliable healthcare platforms.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {contact.location}</span>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> {contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> {contact.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#projects"><Button variant="hero" size="lg">View Projects</Button></a>
              <a href="#contact"><Button variant="outline" size="lg">Contact Me</Button></a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img src={heroImg} alt="Abstract tech hero with teal accents representing Java & Spring Boot development" loading="lazy" className="w-full rounded-xl border object-cover aspect-video shadow-[var(--shadow-glow)]" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="card-elevated p-6">
                <header className="mb-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.period}</p>
                </header>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4 list-disc pl-5">
                  {p.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
                <a href={p.link} className="inline-flex items-center gap-2 text-primary" target="_blank" rel="noreferrer">
                  Live demo <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((e) => (
              <article key={e.role} className="card-elevated p-6">
                <header className="mb-2">
                  <h3 className="text-xl font-semibold">{e.role} <span className="text-muted-foreground">/ {e.company}</span></h3>
                  <p className="text-xs text-muted-foreground">{e.period}</p>
                </header>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {e.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([k, v]) => (
              <article key={k} className="card-elevated p-6">
                <h3 className="font-semibold mb-3">{k}</h3>
                <div className="flex flex-wrap gap-2">
                  {v.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
          <article className="card-elevated p-6">
            <h3 className="text-xl font-semibold">{education.degree} <span className="text-muted-foreground">/ {education.institution}</span></h3>
            <p className="text-sm text-muted-foreground mt-1">{education.period} • CGPA: {education.cgpa}</p>
          </article>
        </section>

        {/* Activities */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="card-elevated p-6">
              <h3 className="font-semibold mb-2">Languages</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {activities.languages.map((l) => (<li key={l}>{l}</li>))}
              </ul>
            </article>
            <article className="card-elevated p-6 md:col-span-1">
              <h3 className="font-semibold mb-2">Volunteer / Leadership</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {activities.volunteer.map((l) => (<li key={l}>{l}</li>))}
              </ul>
            </article>
            <article className="card-elevated p-6 md:col-span-1">
              <h3 className="font-semibold mb-2">Personal Projects & Interests</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {activities.interests.map((l) => (<li key={l}>{l}</li>))}
              </ul>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="card-elevated p-6">
              <h3 className="font-semibold mb-2">Get in touch</h3>
              <form onSubmit={onContact} className="space-y-3">
                <input required name="name" placeholder="Your name" className="w-full rounded-md border bg-background px-3 py-2" />
                <textarea required name="message" placeholder="Your message" className="w-full rounded-md border bg-background px-3 py-2 h-28" />
                <Button variant="hero" className="w-full">Send via Email</Button>
              </form>
            </article>
            <article className="card-elevated p-6">
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a></li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={`tel:${contact.phone}`} className="hover:text-primary">{contact.phone}</a></li>
                <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></li>
                <li className="flex items-center gap-2"><Github className="h-4 w-4" /> <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a></li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {contact.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
};

export default Index;
