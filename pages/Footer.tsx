import EuroIcon from "@mui/icons-material/Euro";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ConstructionIcon from '@mui/icons-material/Construction';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer=()=>{
  const router = useRouter();
  const [user, setUser] = useState<string | null>("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  });
  return (
    <div className="fixed bottom-0 w-full flex justify-center shadow-1xl">
      <div className="grid grid-cols-5 justify-center mt-auto bg-[#272A2F] py-2 px-2 gap-1 w-full">
        <Link href={`/?user=${user}`}>
          <div className={"text-xs py-2 text-center rounded-lg items-center "+(router.pathname==="/"?"bg-[#1C1F24] text-white":"text-[#777]")}>
            <img src="/images/astronaut.png" alt="astronaut" className="w-[30px] h-[30px] m-auto"></img>
            <div className="text-center">Exchange</div>
          </div>
        </Link>
        <Link href={"/mine"}>
          <div className={"text-xs py-2 text-center rounded-lg items-center "+(router.pathname==="/mine"?"bg-[#1C1F24] text-white":"text-[#777]")}>
            <ConstructionIcon sx={{width: '30px', height: '30px'}}></ConstructionIcon>
            <div>Mine</div>
          </div>
        </Link>
        <Link href={"/friend"}>
          <div className={"text-xs py-2 text-center rounded-lg items-center "+(router.pathname==="/friend"?"bg-[#1C1F24] text-white":"text-[#777]")}>
            <Diversity3Icon sx={{width: '30px', height: '30px'}}></Diversity3Icon>
            <div>Friends</div>
          </div>
        </Link>
        <Link href={"/earn"}>
          <div className={"text-xs py-2 text-center rounded-lg items-center "+(router.pathname==="/earn"?"bg-[#1C1F24] text-white":"text-[#777]")}>
            <EuroIcon sx={{width: '30px', height: '30px'}}></EuroIcon>
            <div>Earn</div>
          </div>
        </Link>
        <Link href={"/airdrop"}>
          <div className={"text-xs py-2 text-center rounded-lg items-center "+(router.pathname==="/airdrop"?"bg-[#1C1F24] text-white":"text-[#777]")}>
            <img src="/images/dollar-icon.svg" alt="astronaut" className="w-[30px] h-[30px] m-auto"></img>
            <div>Airdrop</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer