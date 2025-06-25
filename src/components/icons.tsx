import type { SVGProps } from "react";

export const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <circle cx="64" cy="64" r="64" fill="black" />
    <path
      d="M106.3,101.4l-42-72.7c-0.2-0.3-0.5-0.5-0.9-0.5h-0.1c-0.4,0-0.7,0.2-0.9,0.5l-21,36.4c-0.2,0.3-0.2,0.7,0,1l21,36.4c0.2,0.3,0.5,0.5,0.9,0.5h0.1c0.4,0,0.7-0.2,0.9-0.5l10.5-18.2c0.2-0.3,0.2-0.7,0-1l-10.5-18.2h21L106.3,101.4z"
      fill="url(#next-gradient)"
    />
    <path
      d="M85.3,101.4L64.3,65c-0.2-0.3-0.2-0.7,0-1l21-36.4c0.2-0.3,0.5-0.5,0.9-0.5h0.1c0.4,0,0.7,0.2,0.9,0.5l21,36.4c0.2,0.3,0.2,0.7,0,1L87.2,101.4c-0.2,0.3-0.5,0.5-0.9,0.5h-0.1C85.8,101.9,85.5,101.7,85.3,101.4z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="next-gradient"
        x1="64.3"
        y1="28.2"
        x2="64.3"
        y2="101.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const NodejsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M11.77,2.1,5.32,5.55V12l6.45-3.69V2.1m.46,0V12l-6.45,3.69v6.21l-2.73-1.57V7.12L12.23,2.1M19.14,7.12l-2.73,1.57v7.62l-2.73,1.57V10.69L19.14,7.12Z" />
  </svg>
);

export const TypescriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#3178c6" d="M37,42H11a4,4,0,0,1-4-4V10A4,4,0,0,1,11,6H37a4,4,0,0,1,4,4V38A4,4,0,0,1,37,42Z"/>
    <path fill="#fff" d="M22.06,27.18V25.75h4.13V22.56H19.22v1.44H22.1v3.18H18.05v1.44h4.05v4.52h1.53V28.62h4.16V27.18Z"/>
    <path fill="#fff" d="M28.42,22.75a4.34,4.34,0,0,0,.45-2.19,3.52,3.52,0,0,0-1.1-2.61,3.82,3.82,0,0,0-2.81-1,4,4,0,0,0-3,1.11,3.46,3.46,0,0,0-1.08,2.7,4.36,4.36,0,0,0,.43,2.15,14.58,14.58,0,0,0,1.23,2.5,23.57,23.57,0,0,0,1.93,3.21,1.2,1.2,0,0,0,.48.28.78.78,0,0,0,.55.08,1,1,0,0,0,.73-.42,27.4,27.4,0,0,0,2.13-3.83A11.39,11.39,0,0,0,28.42,22.75Zm-4.49-.39a2.6,2.6,0,0,1-.29-1.3,1.89,1.89,0,0,1,.6-1.47,2.13,2.13,0,0,1,1.55-.58,2.11,2.11,0,0,1,1.55.58,1.88,1.88,0,0,1,.6,1.47,2.54,2.54,0,0,1-.29,1.3,8.7,8.7,0,0,1-.83,1.55,17.82,17.82,0,0,1-1,1.49,15.2,15.2,0,0,1-1.2-1.89A7.26,7.26,0,0,1,23.93,22.36Z"/>
  </svg>
);

export const TailwindcssIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.334,13.382,8.973,12,6.001,12z" fill="#38bdf8"></path>
    </svg>
);


export const FirebaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.62 16.51l6.4-13.02a1.33 1.33 0 0 1 2.22-.26l8.83 8.83a2.38 2.38 0 0 1-1.34 3.96h-3.96L8.03 21.76a1.4 1.4 0 0 1-2.1-1.54l-1.3-3.71Z" fill="#ffc24a"/>
    <path d="M11.02 3.49l-6.4 13.02L18.66 2.45a1.2 1.2 0 0 0-1.8-1.28L4.62 16.51" fill="#f4812f"/>
    <path d="m11.16 12.83 7.42-7.42-3.95 12.35a1.3 1.3 0 0 1-2.4-.1L8.03 21.76l3.13-8.93Z" fill="#f6b333"/>
  </svg>
);
