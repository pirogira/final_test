import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-2.5 sm:px-4 md:px-6">
      {children}
    </div>
  );
}
