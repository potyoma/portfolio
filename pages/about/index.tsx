import ImageWithDesc from "@/components/about/imageWithDesc"

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
        description="have to come up with something"
      />
      <ImageWithDesc
        src="/img/clouds.webp"
        alt="Artem's picture"
        headers={["I mostly work with", "Something about my stack"]}
        description="list of technologies i use"
        position="right"
      />
    </div>
  </div>
)

export default About
