import React from "react";

import "./styles.scss";

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="header">
      {title && <h1>{title}</h1>}
      {children}
    </header>
  );
};

export default Header;
