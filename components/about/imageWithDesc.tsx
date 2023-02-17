import Image from "next/image"

type Props = {
  position?: "left" | "right"
  src: string
  headers: string[]
  alt: string
  children: string | JSX.Element | JSX.Element[]
}

const ImageWithDesc: React.FC<Props> = ({
  src,
  alt,
  position = "left",
  children,
  headers,
}) => (
  <div className="grid grid-cols-6 p-6 items-center">
    {position === "left" && (
      <div className="relative h-40 md:h-80 col-span-2">
        <Image className="object-contain" src={src} fill alt={alt} />
      </div>
    )}
    <div className="border rounded-lg p-4 m-4 col-span-4">
      <h1 className="text-3xl font-semibold">{headers[0]}</h1>
      {headers.slice(1).map((text, index) => (
        <h2 key={index} className="text-xl font-semibold">
          {text}
        </h2>
      ))}
      {children}
    </div>
    {position === "right" && (
      <div className="relative h-40 md:h-80 col-span-2">
        <Image className="object-contain" src={src} fill alt={alt} />
      </div>
    )}
  </div>
)

export default ImageWithDesc
