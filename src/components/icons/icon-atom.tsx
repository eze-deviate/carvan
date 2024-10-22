import React from "react";
import Twitter from "@public/assets/svgs/twitter.svg";
type Props = {
  name: string;
  props: React.SVGAttributes<SVGElement>;
};
const IconAtom = ({ name, props }: Props) => {
  if (name == "twiter") {
    return <Twitter {...props} />;
  }
};

export default IconAtom;
