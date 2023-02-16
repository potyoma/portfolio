import Image from "next/image"

const About = () => (
  <div className="flex flex-col justify-center content-center py-58">
    <div className="grid grid-cols-6 p-6 items-center">
      <div className="relative h-40 md:h-80 col-span-2">
        <Image
          className="object-contain"
          src="/img/wave.webp"
          fill
          alt="Artem's picture"
        />
      </div>
      <div className="border rounded-lg p-4 m-4 col-span-4">
        <h1 className="text-3xl font-semibold">Hi 👋</h1>
        <h2 className="text-xl font-semibold">
          My name is Artem and I am the software developer you have been looking
          for.
        </h2>
        <p>have to come up with something</p>
      </div>
    </div>
    <div className="grid grid-cols-6 p-6 items-center">
      <div className="border rounded-lg p-4 m-4 col-span-4">
        <h1 className="text-3xl font-semibold">I mostly work with</h1>
        <h2 className="text-xl font-semibold">Something about my stack</h2>
        <p>list of technologies i use</p>
      </div>
      <div className="relative h-40 md:h-80 col-span-2">
        <Image
          className="object-contain"
          src="/img/clouds.webp"
          fill
          alt="Artem's picture"
        />
      </div>
    </div>
  </div>
)

export default About
