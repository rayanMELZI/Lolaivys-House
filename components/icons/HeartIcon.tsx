import React from "react";

export const HeartIcon = ({
  filled,
  ...props
}: { filled?: boolean } & React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    role="presentation"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    {...props}
  >
    <path
      d="M12 20s-7.5-4.35-10-8.5C.5 8.5 2 5 5.5 5 7.5 5 9 6.2 12 9c3-2.8 4.5-4 6.5-4C22 5 23.5 8.5 22 11.5 19.5 15.65 12 20 12 20z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
