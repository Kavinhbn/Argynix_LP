
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, CircuitBoard, Phone, RadioTower, Wifi, Factory, Bot, Sprout, HomeIcon, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Add these imports for the new animated icons
import { RoboArm } from "@/components/animate-ui/icons/robo-arm"
import { Agri } from "@/components/animate-ui/icons/agri"
import { CircuitBoard as CircuitBoardIcon } from "@/components/animate-ui/icons/circuit-board"

const servicesLinks = [
  { href: "/services/iot-development", title: "IOT Development", description: "End-to-end IoT solutions.", icon: <Wifi className="h-6 w-6" /> },
  { href: "/services/industrial-automation", title: "Industrial Automation", description: "Advanced automation.", icon: <RoboArm className="h-6 w-6" /> },
  { href: "/services/robotics-ai", title: "Robotics & AI", description: "Streamline operations.", icon: <Bot className="h-6 w-6" /> },
  { href: "/services/electronics-rd", title: "Electronics R&D", description: "Custom electronics design.", icon: <CircuitBoardIcon className="h-6 w-6" /> },
  { href: "/services/smart-home", title: "Smart Home", description: "Solutions for modern living.", icon: <HomeIcon className="h-6 w-6" /> },
  { href: "/services/agri-tech", title: "Agriculture Tech", description: "Improve yield and sustainability.", icon: <Agri className="h-6 w-6" /> },
]

const productsLinks = [
  { href: "/products/argynix-iot", title: "Argynix IoT - V 4.1", description: "A powerful IoT platform.", icon: <RadioTower className="h-6 w-6" /> },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link
      href={href}
      className={cn("font-semibold text-base text-foreground/80 transition-colors hover:text-primary", className)}
      onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  )

  const MobileNavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link
      href={href}
      className={cn("py-2 text-lg font-medium transition-colors hover:text-primary", className)}
      onClick={() => setIsMobileMenuOpen(false)}>
      {children}
    </Link>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center gap-2" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
            <CircuitBoard className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">Argynix</span>
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services" passHref>
                  <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "font-semibold text-base flex items-center gap-1 bg-transparent")}>Our Services</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {servicesLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" passHref>
                  <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "font-semibold text-base flex items-center gap-1 bg-transparent")}>Our Products</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {productsLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavLink href="/documents">Documents</NavLink>
          <NavLink href="/innovations">Innovations</NavLink>

        </nav>

        <div className="flex items-center justify-end gap-4">
          <Button asChild variant="ghost" className="hidden lg:flex items-center gap-2">
            <Link href="/contact">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Contact</span>
            </Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <ScrollArea className="h-full">
                <div className="flex flex-col p-6">
                  <SheetHeader className="border-b pb-4 mb-4 text-left">
                    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center gap-2">
                        <CircuitBoard className="h-8 w-8 text-primary" />
                        <span className="font-bold text-2xl">Argynix</span>
                      </Link>
                    </SheetClose>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2">
                    <SheetClose asChild><MobileNavLink href="/">Home</MobileNavLink></SheetClose>
                    <SheetClose asChild><MobileNavLink href="/about">About</MobileNavLink></SheetClose>
                    <SheetClose asChild><MobileNavLink href="/portfolio">Portfolio</MobileNavLink></SheetClose>

                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="services">
                        <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                          <SheetClose asChild><Link href="/services">Our Services</Link></SheetClose>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          <nav className="flex flex-col gap-2">
                            {servicesLinks.map((link) => (
                              <SheetClose asChild key={link.href}>
                                <Link
                                  href={link.href}
                                  className="py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {link.title}
                                </Link>
                              </SheetClose>
                            ))}
                          </nav>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="products">
                        <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                          <SheetClose asChild><Link href="/products">Our Products</Link></SheetClose>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          <nav className="flex flex-col gap-2">
                            {productsLinks.map((link) => (
                              <SheetClose asChild key={link.href}>
                                <Link
                                  href={link.href}
                                  className="py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {link.title}
                                </Link>
                              </SheetClose>
                            ))}
                          </nav>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <SheetClose asChild><MobileNavLink href="/documents" className="mt-2">Documents</MobileNavLink></SheetClose>
                    <SheetClose asChild><MobileNavLink href="/innovations">Innovations</MobileNavLink></SheetClose>

                    <SheetClose asChild>
                      <Button asChild variant="outline" className="mt-4">
                        <Link href="/contact">
                          <Phone className="h-5 w-5" />
                          <span className="font-semibold">Contact</span>
                        </Link>
                      </Button>
                    </SheetClose>
                  </nav>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
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
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
