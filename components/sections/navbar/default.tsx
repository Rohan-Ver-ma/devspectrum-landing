import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import DevSpectrum from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Github from "@/components/logos/github";
import Twitter from "@/components/logos/twitter";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4 xs:w-1/4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              className="flex items-center gap-2 text-xl font-bold"
            >
              <DevSpectrum />
              DevSpectrum             
              </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
          <a  href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
        <Github className="h-6 w-6 cursor-pointer ml-2" />
          </a>
          {/* <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="mr-2 h-6 w-6 cursor-pointer" />          
          </a> */}
          <ModeToggle  />
            <Button  variant="default" asChild>
              <a href={siteConfig.url}>Get Started</a>
            </Button>
            
    
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
