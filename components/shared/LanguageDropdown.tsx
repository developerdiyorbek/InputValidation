"use client";

import { Languages } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { cn, getCurrentLng } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { lngs } from "@/constants";

interface Props {
  isMobile?: boolean;
}

const LanguageDropdown = ({ isMobile = false }: Props) => {
  const { lng } = useParams();
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={"icon"}
          className={cn(
            isMobile &&
              "w-full bg-primary hover:bg-primary/80 transition-colors h-12"
          )}
        >
          <Languages />
          {isMobile && (
            <span className="ml-2 font-space-grotesk text-base font-medium">
              {getCurrentLng(lng as string)}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" aria-label="language-dropdown">
        <DropdownMenuGroup>
          {lngs.map((lan) => (
            <Link key={lan.route} href={`/${lan.route}/${pathname.slice(4)}`}>
              <DropdownMenuItem
                className={cn(
                  "cursor-pointer",
                  lng === lan.route && "bg-secondary"
                )}
              >
                <Image
                  src={`/assets/${lan.route}.png`}
                  alt={lan.label}
                  width={30}
                  height={30}
                />
                <span className="ml-2 font-space-grotesk font-medium">
                  {lan.label}
                </span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
