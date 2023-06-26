import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>About Navbar</nav>
      {children}
    </div>
  );
}
