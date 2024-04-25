interface ProjectsSVGProps {
  width: number;
  height: number;
  color: string;
}
export const ProjectsSVG = ({ width, height, color }: ProjectsSVGProps) => {
  return (
    <svg
      fill={color}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 492.308 492.308"
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M0,0.764v490.779h492.308V0.764H0z M472.615,471.851H19.692V20.457h452.923V471.851z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <polygon points="92.019,246.534 78.096,260.457 152.769,335.13 78.096,409.803 92.019,423.726 180.615,335.13 "></polygon>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <rect x="166.695" y="406.942" width="120.044" height="19.692"></rect>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
