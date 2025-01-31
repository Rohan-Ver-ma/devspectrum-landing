import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Github from "@/components/logos/github";
import Twitter from "@/components/logos/twitter";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              DevSpectrum             
              </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
        <Github className="mr-2 h-6 w-6 cursor-pointer" />
          </a>
          <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="mr-2 h-6 w-6 cursor-pointer" />          
          </a>
          <ModeToggle  />
            <Button variant="default" asChild>
              <a href={siteConfig.url}>Get Started</a>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={siteConfig.url}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Launch UI</span>
                  </a>
                  <a
                    href={siteConfig.url}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </a>
                  <a
                    href={siteConfig.url}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Components
                  </a>
                  <a
                    href={siteConfig.url}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
