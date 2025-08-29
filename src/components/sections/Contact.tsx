"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Contact() {
  const [activeSelection, setActiveSelection] = useState("say-hi"); // Default to 'say-hi' which corresponds to 'account' tab

  // Function to handle the change
  const handleSelectionChange = (value: string) => {
    setActiveSelection(value);
  };

  return (
    <section className="container">
      <div className=" relative rounded-[45px] bg-accent px-[30px] lg:px-[100px] py-[40px] md:py-[60px] flex flex-col lg:flex-row items-center gap-2 lg:gap-24 xl:gap-[275px] overflow-visible">
        {/* Left Content */}

        <div className="flex w-full lg:w-[50%]  flex-col gap-6">
          <Tabs
            value={
              activeSelection === "say-hi" ? "say-hi-tab" : "get-a-quote-tab"
            } // <--- Map radio selection to new tab values
            onValueChange={(tabValue) => {
              if (tabValue === "say-hi-tab") {
                handleSelectionChange("say-hi");
              } else if (tabValue === "get-a-quote-tab") {
                handleSelectionChange("get-a-quote");
              }
            }}
            className="border-0 gap-8"
          >
            <TabsList className="bg-transparent shadow-none p-0 h-auto gap-7">
              <TabsTrigger
                value="say-hi-tab" // <--- Updated tab value
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-current bg-transparent shadow-none p-0 h-auto"
              >
                <RadioGroup
                  value={activeSelection}
                  onValueChange={handleSelectionChange}
                  className="flex items-center gap-1"
                >
                  <RadioGroupItem
                    value="say-hi"
                    id="say-hi"
                    className="w-7 h-7 bg-background border border-foreground text-foreground
                                 focus-visible:ring-primary focus-visible:ring-offset-background
                                 [&>span]:data-[state=checked]:bg-primary
                                 data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="say-hi" className="text-[16px] md:text-lg">
                    Say Hi
                  </Label>
                </RadioGroup>
              </TabsTrigger>

              <TabsTrigger
                value="get-a-quote-tab" // <--- Updated tab value
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-current bg-transparent shadow-none p-0 h-auto"
              >
                <RadioGroup
                  value={activeSelection}
                  onValueChange={handleSelectionChange}
                  className="flex items-center gap-1"
                >
                  <RadioGroupItem
                    value="get-a-quote"
                    id="get-a-quote"
                    className="w-7 h-7 bg-background border border-foreground text-foreground
                                 focus-visible:ring-primary focus-visible:ring-offset-background
                                 [&>span]:data-[state=checked]:bg-primary
                                 data-[state=checked]:border-primary"
                  />
                  <Label
                    htmlFor="get-a-quote"
                    className="text-[16px] md:text-lg"
                  >
                    Get a Quote
                  </Label>
                </RadioGroup>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="say-hi-tab" className="">
              {" "}
              {/* <--- Updated value */}
              <Card className=" p-0 border-0 shadow-none">
                <CardContent className="grid gap-7 p-0">
                  <div className="grid gap-3">
                    <Label
                      htmlFor="tabs-demo-name"
                      className="text-[16px] md:text-lg"
                    >
                      Name
                    </Label>
                    <Input
                      id="tabs-demo-name"
                      className="border-foreground px-[30px] py-[24px] text-[16px] leading-[100%] tracking-[0] md:text-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-emil">Email*</Label>
                    <Input
                      id="tabs-demo-emil"
                      className="border-foreground px-[30px] py-[24px] text-[16px] leading-[100%] tracking-[0] md:text-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-message">Message*</Label>
                    <Textarea
                      id="tabs-demo-message"
                      className="border-foreground h-[190px] px-[30px] py-[24px] text-[16px] leading-[100%] tracking-[0] md:text-lg"
                      placeholder="Message"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button variant="secondary" className="w-full">
                    Send a Message
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="get-a-quote-tab">
              {" "}
              {/* <--- Updated value */}
              <Card className="p-0 border-0 shadow-none">
                <CardContent className="grid gap-6 p-0">
                  <div className="grid gap-3">
                    <Label
                      htmlFor="project-type"
                      className="text-[16px] md:text-lg"
                    >
                      Service/Project Type*
                    </Label>
                    <Select>
                      <SelectTrigger className="border-foreground px-[30px] py-[24px] text-[16px] leading-[100%] tracking-[0] md:text-lg">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="mobile-dev">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label
                      htmlFor="project-description"
                      className="text-[16px] md:text-lg"
                    >
                      Project Description*
                    </Label>
                    <Textarea
                      id="project-description"
                      className="border-foreground h-[190px] px-[30px] py-[24px] text-[16px] leading-[100%] tracking-[0] md:text-lg"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="budget" className="text-[16px] md:text-lg">
                      Estimated Budget
                    </Label>
                    <Input
                      id="budget"
                      type="text" // Can be number, but text allows for currency symbols
                      className="border-foreground px-[30px] py-[24px] text-[16px] leading-[100%] tracking-[0] md:text-lg"
                      placeholder="$5,000 - $10,000 (optional)"
                    />
                  </div>
                  {/* If you also need name/email here, you can add them,
                        or assume they fill it in the "Say Hi" form if that's a separate step.
                        For simplicity, I'm omitting them if "Say Hi" is the main contact.
                    */}
                </CardContent>
                <CardFooter className="p-0">
                  <Button variant="secondary" className="w-full">
                    Request a Quote
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Illustration (only on lg+) */}
        <div className="hidden  lg:flex  justify-center items-center  absolute right-[-315px] top-[3rem]">
          <Image
            src="/images/contact.png"
            alt="CTA Illustration"
            width={690}
            height={600}
            className="w-[670px] h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
