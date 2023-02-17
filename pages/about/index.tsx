import ImageWithDesc from "@/components/about/imageWithDesc"
import Badge from "@/components/core/badge"

const About = () => (
  <div className="flex flex-col justify-center items-center content-center py-58">
    <div className="md:w-9/12 lg:w-6/12">
      <ImageWithDesc
        src="/img/wave.webp"
        alt="Artem's picture"
        headers={[
          "Hi 👋",
          "My name is Artem and I am the software developer you have been looking for.",
        ]}
      >
        <p>have to come up with something</p>
      </ImageWithDesc>
      <ImageWithDesc
        src="/img/clouds.webp"
        alt="Artem's picture"
        headers={["Stack", "I mostly work with React, .NET and Next.js"]}
        position="right"
      >
        <div className="flex flex-grow flex-wrap justify-start mt-3 gap-2">
          {[
            { name: "React", special: true },
            { name: ".NET", special: true },
            { name: "Next.js", special: true },
            { name: "SQL", special: true },
            { name: "PostgreSQL", special: false },
            { name: "Kafka", special: false },
            { name: "Kubernetes", special: false },
            { name: "HTML | CSS", special: true },
            { name: "JS | TS", special: true },
            { name: "TailwindCSS", special: true },
            { name: "Bootstrap", special: false },
            { name: "Node.js", special: false },
            { name: "Fastify", special: false },
          ].map(tech => (
            <Badge key={tech.name} outline={tech.special}>
              {tech.name}
            </Badge>
          ))}
        </div>
      </ImageWithDesc>
    </div>
  </div>
)

export default About
