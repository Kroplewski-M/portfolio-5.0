interface ExperienceSVGProps {
  width: number;
  height: number;
  color: string;
}

export const ExperienceSVG = ({ width, height, color }: ExperienceSVGProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>work-case</title>{" "}
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          {" "}
          <g id="Combined-Shape" fill={color} transform="translate(42.666667, 64.000000)">
            {" "}
            <path d="M277.333333,1.42108547e-14 L298.666667,21.3333333 L298.666,64 L426.666667,64 L426.666667,362.666667 L3.55271368e-14,362.666667 L3.55271368e-14,64 L128,64 L128,21.3333333 L149.333333,1.42108547e-14 L277.333333,1.42108547e-14 Z M42.6664912,220.935181 L42.6666667,320 L384,320 L384.000468,220.935097 C341.375319,233.130501 298.701692,240.759085 256.000479,243.809455 L256,277.333333 L170.666667,277.333333 L170.666323,243.809465 C127.965163,240.759108 85.2915887,233.130549 42.6664912,220.935181 Z M384,106.666667 L42.6666667,106.666667 L42.6668606,176.433085 C99.6386775,193.933257 156.507113,202.666667 213.333333,202.666667 C270.159803,202.666667 327.028489,193.933181 384.000558,176.432854 L384,106.666667 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z">
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
