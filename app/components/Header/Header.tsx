import Image from "next/image";
import { RiGamepadLine, RiBuilding4Line } from "react-icons/ri";

import Logo from "@/public/logo.png";
export default function Header() {
  return (
    <header className="absolute z-10 bg-red-900 flex justify-between top-2 left-2 right-2 h-fit p-4 rounded-xl border border-white">
      <a href="#home" className="flex gap-2 items-center">
        <Image src={Logo} width={32} height={32} alt="Finituz's logo" />
        <strong>Finituz</strong>
      </a>
      <ul className="flex gap-5">
        <li>
          <a href="#games" className="flex items-center gap-2">
            <RiGamepadLine /> Our games
          </a>
        </li>
        <li>
          <a href="#about-us" className="flex items-center gap-2">
            <RiBuilding4Line />
            About us
          </a>
        </li>
      </ul>
    </header>
  );
}
