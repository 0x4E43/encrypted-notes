import Landing from "@/components/landing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-10">
      <div className="flex items-center justify-between w-3/5  mx-10 lg:mx-30">
        <div className="text-4xl font-bold"> Vault</div>
        <div className="text-right">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Changelogs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className="my-5 mt-5"></div>
      <div className="mt-10">
        <Landing />
      </div>
    </main>
  );
}
