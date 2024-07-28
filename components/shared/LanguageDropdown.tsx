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
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { lngs } from "@/constants";

const LanguageDropdown = () => {
  const { lng } = useParams();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Languages />
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
