import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 100" className="fill-primary">
                <path d="M50 0L93.3 25v50L50 100L6.7 75V25L50 0z"/>
              </svg>
            </div>
            <span className="text-xl font-semibold">abide</span>
          </a>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Articles
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Shop
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Help
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost">Login</Button>
          <Button className="bg-primary hover:bg-primary/90">Try for Free</Button>
        </div>
      </div>
    </div>
  );
}
