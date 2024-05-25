"use Client";

import Card from "@/app/components/common/card";
import Link from "next/link";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ConstructionIcon from '@mui/icons-material/Construction';
import EuroIcon from "@mui/icons-material/Euro";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

function Mine() {
  const [user, setUser] = useState<string | null>("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleImageLoad = () => {
    // setImagesLoaded((prev) => {
    //     console.log(prev)
    //     const newCount = prev + 1;
    //     console.log(newCount)
    //     if (newCount === totalImages) {
    //         setLoading(false);
    //     }
    //     return newCount;
    // });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <div></div>
      )}

      <div hidden={loading}>
        <div className="pt-7 mb-[90px] px-5 text-white rounded-t-3xl bg-[#1C1F24] border-t-2 border-[rgb(243,186,47)] shadow-km">
          <div className="text-xl font-medium ">Tasks list</div>
          <Card
            title="Telegram MagicVipClub Channel"
            price="10000"
            link="https://t.me/MagicVipClub"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MiningVws Channel"
            price="10000"
            link="https://t.me/miningvws"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram VirtualsWorlds Channel"
            price="10000"
            link="https://t.me/VirtualsWorlds"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicNFTcollection Channel"
            price="10000"
            link="https://t.me/MagicNFTcollections"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicVipPeople Channel"
            price="10000"
            link="https://t.me/MagicVipPeople"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram P2PExchange Channel"
            price="10000"
            link="https://t.me/p2pExchenges"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram AirdropNftOpensea Channel"
            price="10000"
            link="https://t.me/AirdropNftOpensea"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicNftClub Channel"
            price="10000"
            link="https://t.me/MagicNftClub"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Swap VWS"
            price="10000"
            link="https://dedust.io/swap/TON/VWS"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mining Pool VWS/TON"
            price="10000"
            link="https://dedust.io/pools/EQCCa6jA_VzoQi76cAHmumoJfZbglVtY-DL-k8-f9h3vUOy2"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Swap bot"
            price="10000"
            link="https://t.me/tonRocketBot/cex?startapp=trade-VWS-TON"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mining NFTs"
            price="10000"
            link="http://getgems.io/virtualsworlds"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Mine;
