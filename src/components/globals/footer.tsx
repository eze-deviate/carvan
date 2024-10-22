import { ui, uiValues } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import TelegramLogoIcon from "@public/assets/svgs/telegram.svg";
import FacebookLogoIcon from "@public/assets/svgs/facebook.svg";

const footerLinks = [
  { title: "About", link: "/about" },
  { title: "Support", link: "/support" },
  { title: "Community", link: "/community" },
];
const Footer = () => {
  return (
    <footer
      className={cn(
        `w-full my-24 h-auto pt-[6.375rem] px-[6.375rem] bg-gray-25 border-gray-200 border border-solid`,
        ui.layoutPadding,
        // `pt-[${uiValues.layoutMargin}]`,
        `pb-10`
      )}
    >
      <div className={cn("flex flex-col gap-y-16 w-full")}>
        <div className="flex justify-between w-full">
          <div className="flex gap-x-[3.3125rem] items-center">
            <div className="flex gap-x-2 items-center">
              <Image
                src={"/assets/images/logo.png"}
                width={100}
                height={200}
                alt="logo"
                className="w-[2.375rem] h-[2.75rem]"
                // layout="responsive"
              />
              <p className="font-oswald font-bold leading-6 text-2xl">Carvan</p>
            </div>
            <div className="flex gap-x-6">
              {footerLinks.map((item, index) => (
                <Link
                  href={item.link}
                  className="text-sm text-gray-700"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          {/* handles */}
          <div className="flex gap-x-8 items-center">
            <p className="text-sm text-gray-800 font-medium ">Connect</p>
            <div className="flex items-center gap-x-6">
              <a target="_blank" href="#">
                <TwitterLogoIcon />
              </a>
              <a target="_blank" href="#">
                <FacebookLogoIcon />
              </a>
              <a target="_blank" href="#">
                <InstagramLogoIcon />
              </a>
              <a target="_blank" href="#">
                <TelegramLogoIcon />
              </a>
            </div>
          </div>
        </div>
        {/* copy right */}
        <div className="flex gap-x-6 text-[#808391] text-sm font-normal">
          <p>© 2024 Caravan Inc.</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
