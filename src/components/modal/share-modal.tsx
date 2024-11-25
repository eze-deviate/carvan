"use client";

import ShareIcon from "@public/assets/svgs/share.svg";
import LinkIcon from "@public/assets/svgs/link.svg";
import { CopyIcon } from "@radix-ui/react-icons";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  FacebookShareButton,
  FacebookIcon,
  XIcon,
  TwitterShareButton,
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

type Props = {
  link: string;
};

const ShareModal = ({ link }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLParagraphElement>(null);
  const closeDialog = () => setIsOpen(false);

  const handleCopyLink = () => {
    if (linkRef.current) {
      const linkText = linkRef.current.textContent;
      navigator.clipboard
        .writeText(linkText as string)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
        });
    }
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-x-2"
          onClick={() => setIsOpen(true)}
        >
          <ShareIcon />
          Share Scorecard
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-sm p-8" showClose={false}>
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeDialog}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-3xl text-gray-800 font-semibold text-left">
            Share
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-y-8">
          <p className="text-base text-gray-600">
            Share with friends and among your socials.
          </p>

          <div className="flex justify-between flex-nowrap">
            <FacebookShareButton url={link}>
              <FacebookIcon />
            </FacebookShareButton>
            <TwitterShareButton url={link}>
              <XIcon />
            </TwitterShareButton>
            <LinkedinShareButton url={link}>
              <LinkedinIcon />
            </LinkedinShareButton>
            <InstapaperShareButton url={link}>
              <InstapaperIcon />
            </InstapaperShareButton>
          </div>

          <div className="bg-[#F4F4F6] p-[0.875rem] items-center gap-x-2 flex rounded w-full relative justify-start">
            <LinkIcon />
            <p
              className="text-gray-600 text-sm font-normal flex-1 w-full line-clamp-1"
              ref={linkRef}
            >
              {link}
            </p>
            <Button onClick={handleCopyLink} variant="transparent" className="">
              <CopyIcon />
            </Button>
            {copied && (
              <span className="absolute right-3 -top-full bg-gray-100 rounded p-2">
                Copied!
              </span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
