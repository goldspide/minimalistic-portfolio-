import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import TwitterIcon from "./icons/TwitterIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/50 transition-colors text-primary border-accent p-1 ",
        className
      )}
      {...props}
    />
  );
};

const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">Bonsso Raoul</h2>
        <h3 className="text-3xl font-caption">
          Software developer and creator
        </h3>
        <p className="text-base ">
          I love creating content on{" "}
          <Link
          href="">
          <Code className="inline-flex items-center gap-1">
            <TwitterIcon size={16} className="inline" /> Twitter
          </Code>
          </Link> , currnetly working for me. Living in {" "}
          <Link
          href="">
          <Code className="inline-flex items-center gap-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/110px-Flag_of_Cameroon.svg.png" style={{width: 16, height: "auto"}} alt="cameroon flag"/> Cameroon
          </Code>
          </Link>
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/107584715?s=400&u=032c67194dbd8495c9df430734988cdda6a6b68d&v=4"
          className="w-full h-auto max-w-sm max-md:w-56  rounded-full "
          alt="Bonsso Raoul"
        />
      </div>
    </Section>
  );
};

export default Hero;
