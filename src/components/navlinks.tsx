"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/tops",
    description:
      "Trendy and stylish tops for every occasion, designed to keep you comfortable and fashionable.",
  },
  {
    title: "Pants",
    href: "/pants",
    description:
    "Versatile and sleek pants that offer both style and comfort, perfect for any outfit.",
  },
  {
    title: "Accessories/Jewelry",
    href: "/accessories",
    description:
      "Elegant jewelry and accessories to add a touch of glamour and sophistication to your look.",
  },
  {
    title: "Footwear",
    href: "/footwear",
    description: "Step into comfort and style with our collection of chic and durable footwear options.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px
             bg-mygrey ">
              {/**ismain pehlay link tag nhi tha sirf listitem tha menay link tag main phir listitem
               * ko wrap kiya takay links pay click honay pr page reload na hoo*/}
              {components.map((component) => ( 
                <Link key={component.title}
                      href={component.href}>

                <ListItem title={component.title}> {/**title heading hai tbhi issay listitem kay opening tag main add kiya */}
                  {component.description}
                </ListItem>
              </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem> 
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem> {/**menay add kiya about wala copy krkay*/}
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

{/**Is code ka main goal hai ke aap menu items ko visually appealing aur interactive bana sakein
    using Tailwind CSS classes, taake aapka navigation menu user-friendly aur attractive dikhe.
    ListItem component ka main purpose aapke menu items ko Tailwind CSS ke through stylish aur responsive
    design dena hai. Is code ka goal yeh hai ke aap apne navigation menu items ko dynamically, interactive,
    aur consistent design ke saath render kar sakein. */}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm hover:text-[#4B70F5] duration-300 font-medium leading-none">{title}</div>
          <p className="line-clamp-2 hover:text-gray-500 duration-300 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
