import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import CarvanLogo from "@public/assets/svgs/logo.svg";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="w-full">
      <header className={cn("w-full", ui.layoutPadding)}>
        <CarvanLogo />
      </header>
      {children}
    </main>
  );
};

export default AuthLayout;
