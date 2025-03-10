import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterBottom,
} from "../../ui/footer";
import Twitter from "@/components/logos/twitter";
import Github from "@/components/logos/github";
// import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
    <div className="mx-auto max-w-container">
      <Footer className="pt-0">
        <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
          <div>© 2025 DevSpectrum. All rights reserved</div>
          <div className="flex items-center gap-4">
            <a href={siteConfig.links.github} target="_blank"><Github/></a> 
            <a href={siteConfig.links.twitter} target="_blank"><Twitter/> </a>|
            <ModeToggle />
          </div>
        </FooterBottom>
      </Footer>
    </div>
  </footer>
  );
}
