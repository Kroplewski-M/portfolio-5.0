interface BurgerMenuSVGProps {
  width: number;
  height: number;
  color: string;
}
export const BurgerMenuSVG = ({ width, height, color }: BurgerMenuSVGProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M4 18L20 18" stroke={color} strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke={color} strokeWidth="2" strokeLinecap="round"></path>{" "}
        <path d="M4 6L20 6" stroke={color} strokeWidth="2" strokeLinecap="round"></path>{" "}
      </g>
    </svg>
  );
};
