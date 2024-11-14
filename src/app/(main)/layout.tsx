import Header from "@/components/globals/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <Header />
      <main className="mt-12">{children}</main>
    </div>
  );
};

export default MainLayout;
