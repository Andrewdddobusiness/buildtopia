import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerButtonClassNameStyle,
  navigationMenuTriggerClassNameStyle,
  navigationMenuTriggerDisabledClassNameStyle,
} from "@/components/ui/navigation-menu";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="z-40  absolute bottom-0 w-full flex items-center p-4 border-t border-gray-300 border-dotted">
      <NavigationMenu className="space-between">
        <NavigationMenuList className="flex space-x-2">
          <NavigationMenuItem>
            <Link
              href={"https://www.threads.net/@andrewdddo?hl=en"}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={navigationMenuTriggerButtonClassNameStyle}
              >
                <FaThreads className="text-2xl" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={"https://twitter.com/_buildtopia"}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={navigationMenuTriggerButtonClassNameStyle}
              >
                <FaXTwitter className="text-2xl" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

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
