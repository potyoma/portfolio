import clsx from "clsx"

type Props = {
  children: string | JSX.Element | JSX.Element[]
  outline: boolean
}

const Badge: React.FC<Props> = ({ children, outline }) => (
  <div
    className={clsx(
      "rounded-full bg-slate-500 border-slate-500 border-2 hover:bg-opacity-0 hover:border-blue-500 cursor-pointer hover:text-blue-400 py-1 px-2",
      outline && "border-blue-500 bg-slate-500 bg-opacity-60"
    )}
  >
    {children}
  </div>
)

export default Badge
