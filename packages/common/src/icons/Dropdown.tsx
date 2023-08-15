import React from "react";

type Direction = "up" | "down";

type Props = React.SVGProps<SVGSVGElement> & {
  direction: Direction;
};

export function Dropdown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      transform={`rotate(${props.direction == "up" ? "180" : "0"})`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.292893 0.292893C0.683417 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
        fill="#111827"
      />
    </svg>
  );
}
