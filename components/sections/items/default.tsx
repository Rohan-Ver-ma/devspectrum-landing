import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ScanFaceIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Built for developers 
            </ItemTitle>
            <ItemDescription>
            Stay ahead with real-time updates on blockchain and developer news.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MonitorSmartphoneIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Responsive design
            </ItemTitle>
            <ItemDescription>
              Looks and works great on any device and screen size
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <EclipseIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Light and dark mode
            </ItemTitle>
            <ItemDescription>
            Switch seamlessly between themes for an optimal reading experience.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <BlocksIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Market & tech trend analysis
            </ItemTitle>
            <ItemDescription>
            Detailed insights on crypto prices, developer tools, and tech trends.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <FastForwardIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Real time breaking news
            </ItemTitle>
            <ItemDescription>
            Stay updated with instant alerts on major developer and crypto stories.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <RocketIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Blazing fast performance
            </ItemTitle>
            <ItemDescription>
            Optimized for quick load times and effortless navigation.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LanguagesIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Global news coverage
            </ItemTitle>
            <ItemDescription>
            Bringing you the latest insights from top sources worldwide.
          </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <SquarePenIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Category based news
            </ItemTitle>
            <ItemDescription>
            Browse news by category Programming,Crypto,AI and more.
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
