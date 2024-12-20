import BackButton from "@/components/buttons/back-button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import ProfileMenu from "./_components/profile-menu";
import PageContent from "./_components/page-content";
import Footer from "@/components/globals/footer";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <div>
      <div className={cn("", ui.layoutPadding)}>
        <BackButton text="Back" />
        <PageContent />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
