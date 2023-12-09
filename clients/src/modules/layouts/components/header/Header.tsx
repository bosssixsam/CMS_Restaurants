import React from "react";

export interface IHeader {
  className?: string;
  open?: boolean;
}

const Header = (props: IHeader) => {
  return <header>Header</header>;
};

export default Header;
