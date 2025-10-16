import type { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  return <h2 className="mb-4 text-center text-2xl font-bold">{children}</h2>;
};

export default Header;
