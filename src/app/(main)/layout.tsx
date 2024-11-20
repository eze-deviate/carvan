import Header from "@/components/globals/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
