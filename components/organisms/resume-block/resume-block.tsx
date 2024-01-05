import { PropsWithChildren, ReactNode } from "react";

type ResumeBlockProps<T> = PropsWithChildren & {
  id?: string;
  heading: string;
  items: T[];
  transform: (item: T) => ReactNode;
};

export function ResumeBlock<T>({
  id,
  heading,
  items,
  transform,
}: ResumeBlockProps<T>) {
  return (
    <div
      className="content-block text-typography w-100 p-3 md:py-7 flex flex-col gap-12 md:px-5 sm:grid sm:grid-cols-5"
      id={id}
    >
      <h2 className="uppercase text-lg">{heading}</h2>
      <ul className="sm:col-span-4 flex flex-col gap-6">
        {items.map((item, i) => (
          <li key={i}>{transform(item)}</li>
        ))}
      </ul>
    </div>
  );
}
