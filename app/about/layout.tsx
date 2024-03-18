import React from "react";
import Link from "next/link";
const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href={"/mission"}>Mission</Link>
      </nav>
        {children}
    </div>
  );
};

export default AboutLayout;
