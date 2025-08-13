import * as React from "react";

// Lightweight logo grid using brand SVGs from Simple Icons CDN
// This avoids bundling heavy icon libs and keeps assets cached on CDN

const categories: { title: string; items: { name: string; src: string }[] }[] =
  [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", src: "./images/java.png" },
        { name: "Python", src: "./images/python.png" },
        { name: "SQL", src: "https://cdn.simpleicons.org/sqlite" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "Spring", src: "https://cdn.simpleicons.org/spring" },
        { name: "Spring Boot", src: "https://cdn.simpleicons.org/springboot" },
        { name: "Hibernate", src: "https://cdn.simpleicons.org/hibernate" },
        { name: "JUnit 5", src: "https://cdn.simpleicons.org/junit5" },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
        { name: "Git", src: "https://cdn.simpleicons.org/git" },
        { name: "Maven", src: "https://cdn.simpleicons.org/apachemaven" },
        { name: "RabbitMQ", src: "https://cdn.simpleicons.org/rabbitmq" },
        { name: "Twilio", src: "https://cdn.simpleicons.org/twilio" },
        {
          name: "Azure DevOps",
          src: "./images/azure.png",
        },
        {
          name: "IntelliJ IDEA",
          src: "./images/intellij.png",
        },
        {
          name: "Pycharm",
          src: "./images/pycharm.png",
        },
        {
          name: "VS Code",
          src: "./images/vs.png",
        },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
        { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
        {
          name: "SQL Server",
          src: "./images/sql-server.png",
        },
      ],
    },
    {
      title: "APIs & Testing",
      items: [
        { name: "Swagger", src: "https://cdn.simpleicons.org/swagger" },
        { name: "Postman", src: "https://cdn.simpleicons.org/postman" },
      ],
    },
    {
      title: "Security",
      items: [
        { name: "Spring Security", src: "./images/security.png" },
        { name: "JWT", src: "./images/jwt.png" },
      ],
    },
  ];

export default function TechLogos() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((cat) => (
        <article key={cat.title} className="card-elevated p-6">
          <h3 className="font-semibold mb-3">{cat.title}</h3>
          <ul className="flex flex-wrap items-center gap-4">
            {cat.items.map((it) => (
              <li key={it.name} className="flex items-center gap-2">
                <img
                  src={it.src}
                  alt={`${it.name} logo`}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <span className="text-sm text-muted-foreground">{it.name}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
