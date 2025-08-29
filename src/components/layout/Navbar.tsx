"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../common/Logo";

const links = ["about-us", "services", "use-cases", "pricing", "blog"];

export function Navbar() {
  return (
    <header className="left-0 right-0 top-0 z-10 py-6 py-lg-[68px] bg-background">
      <div className="container flex items-center justify-between">
        {/* Logo (left side) */}
        <Link href="#" className="flex items-center" prefetch={false}>
          <Logo />
        </Link>

        {/* Right side: nav items + button */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {links.map((link) => (
                <NavigationMenuItem key={link}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={`#${link}`}>
                      {link
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Action Button with same gap as items */}
          <Button variant="outline" className="w-auto ">
            Request a quote
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden border-0"
            >
              <Menu size={20} className="h-8 w-8" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-6">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="flex w-full items-center text-lg"
                  prefetch={false}
                >
                  {link
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              ))}

              <Button variant="outline" className="w-full ">
                Request a quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
