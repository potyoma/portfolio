import clsx from "clsx"

type Props = {
  children: string | JSX.Element | JSX.Element[]
  outline?: boolean
  color?: string
  hoverColor?: string
}

const Badge: React.FC<Props> = ({ children, outline, color, hoverColor }) => (
  <div
    className={clsx(
      "rounded-full text-white border-2 cursor-pointer py-1 px-2",
      outline && "border-blue-500 bg-slate-500 bg-opacity-60",
      color || "bg-slate-500 border-slate-500",
      hoverColor ||
        "hover:text-blue-400 hover:bg-opacity-0 hover:border-blue-500"
    )}
  >
    {children}
  </div>
)

export default Badge
