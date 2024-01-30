import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerButtonClassNameStyle,
  navigationMenuTriggerDisabledClassNameStyle,
} from "@/components/ui/navigation-menu";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full flex items-center p-4 border-t border-gray-300 border-dotted">
      <NavigationMenu>
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
          {/* <NavigationMenuItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <NavigationMenuLink
                    className={navigationMenuTriggerDisabledClassNameStyle}
                  >
                    <FaXTwitter className="text-2xl" />
                  </NavigationMenuLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>coming soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
