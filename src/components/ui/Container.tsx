import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {children}
    </div>
  );
}
