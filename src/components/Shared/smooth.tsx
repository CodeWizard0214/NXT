import { useRouter } from "next/router";
import React, { useRef } from "react";

type SmoothScrollLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  linkClicked?: () => void;
};

const SmoothScrollLink = ({
  href,
  children,
  className,
  linkClicked = () => {},
}: SmoothScrollLinkProps) => {
  const router = useRouter();
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const { current } = ref;
    if (current) {
      const scrollOffset = document
        .querySelector(href)
        ?.getBoundingClientRect().top;
      const scrollElement =
        document.scrollingElement || document.documentElement;
      if (scrollOffset != null) {
        const duration = 500;
        const startingY = scrollElement.scrollTop;
        const diff = scrollOffset - startingY;
        let start: number | null = null;

        window.requestAnimationFrame(function step(timestamp) {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;
          const percentage = elapsed > duration ? 1 : elapsed / duration;
          scrollElement.scrollTop = startingY + diff * percentage;
          if (elapsed < duration) {
            window.requestAnimationFrame(step);
            linkClicked();
          } else {
            router.push(href);
          }
        });
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} ref={ref} className={className}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;