import React from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";

const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
        
      <Card className="flex-[3] w-full p-4 flex flex-col gap-2"> Side Projects</Card>
      <div className="flex-[2.2] w-full flex flex-col  gap-4">
        <Card className="p-4 flex-1">work</Card>
        <Card className="p-4 flex-1">contact me</Card>
      </div>
    </Section>
  );
};

export default Status;
