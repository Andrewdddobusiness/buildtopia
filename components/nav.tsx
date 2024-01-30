import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerClassNameStyle,
  navigationMenuTriggerDisabledClassNameStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="z-40 absolute top-0 w-full flex items-center p-4 border-b border-gray-300 border-dotted">
      <div className="flex items-center justify-center sm:justify-start w-full">
        <div className="max-w-[100px] cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300">
          <Link href="/" legacyBehavior passHref>
            <Image
              src="/logo-full-black-no-logo.png"
              alt="Buildtopia Logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
      </div>
      <NavigationMenu className="ml-auto hidden sm:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/s1-cohort" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerClassNameStyle}
              >
                <div>s1 cohort</div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/q&a" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerClassNameStyle}
              >
                q&a
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
