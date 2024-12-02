import { cn } from "@/lib/utils";

interface StoreButtonsProps {
  className?: string;
}

export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <a
        href="#"
        className="transition-transform hover:scale-105"
        aria-label="Download on the App Store"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="App Store"
          className="h-12"
        />
      </a>
      <a
        href="#"
        className="transition-transform hover:scale-105"
        aria-label="Get it on Google Play"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12"
        />
      </a>
    </div>
  );
}
