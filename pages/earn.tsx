"use Client";

import Card from "@/app/components/common/card";
import Link from "next/link";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EuroIcon from "@mui/icons-material/Euro";
import { useEffect, useState } from "react";

function Earn() {
  const [user, setUser] = useState<string | null>("");
  const [loading, setLoading] = useState(true);

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
        <div className="px-2  flex py-3 bg-[#453209] items-center">
          <img
            src="/images/avatar.png"
            alt="AvatarImg"
            className=" w-10 h-10"
            onLoad={handleImageLoad}
          ></img>
          <div className=" text-sm font-medium text-white ml-3">
            @{user}
          </div>
          <Button
            variant="contained"
            sx={{
              paddingY: "8px",
              fontSize: "12px",
              paddingX: "8px",
              marginLeft: "auto",
              borderRadius: "20px",
              textTransform: "none",
              background: "#4C432D",
            }}
          >
            Choose exchange
          </Button>
        </div>
        <div className="mt-7 mb-20 px-2 text-white">
          <div className="text-xl font-medium ">Tasks list</div>
          {/* <Card
            title="Telegram Channel"
            price="1000"
            link="https://t.me/MagicVipClub"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mexc"
            price="1000"
            link="https://www.mexc.com/ru-RU/register?inviteCode=mexc-Magik"
            img="/images/mexc-logo-big.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate"
            price="1000"
            link="https://www.gate.io/signup/11024473"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Bitmart"
            price="1000"
            link="https://www.bitmart.com/register-referral/en?r=TxcR8r"
            img="/images/bitmart.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Bingc"
            price="1000"
            link="https://bingx.com/invite/E5RZZM"
            img="/images/bingx.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Getgems"
            price="1000"
            link="http://getgems.io/virtualsworlds"
            img="/images/getgem.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Twitter"
            price="1000"
            link="http://x.com/VirtualsWorlds"
            img="/images/twitter.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Youtube"
            price="1000"
            link="http://youtube.com/@magicnft"
            img="/images/youtube.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Github"
            price="1000"
            link="http://github.com/MagicVipPeople"
            img="/images/github.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Facebook"
            price="1000"
            link="http://www.facebook.com/MagicVipClub"
            img="/images/facebook.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Instagram"
            price="1000"
            link="http://www.instagram.com/magiknft"
            img="/images/instagram.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ticktok"
            price="1000"
            link=" http://www.tiktok.com/@spacetickets"
            img="/images/ticktok.png"
            onLoad={handleImageLoad}
          ></Card> */}
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
            title="Telegram VirtualWorld Channel"
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
            title="Gate Magic-Game"
            price="1000"
            link="http://gate.io/nft/collection/11879/Magic-Game"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate Mystic-Collection"
            price="1000"
            link="http://gate.io/nft/collection/11875/Mystic-Collections"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate Virtual-Worlds"
            price="1000"
            link="http://gate.io/nft/collection/11910/Virtual-Worlds"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate BTC-Dragons"
            price="1000"
            link="http://gate.io/en/nft/collection/19896/BTC-Dragons"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate BTC-Cards"
            price="1000"
            link="http://gate.io/en/nft/collection/19897/Cryptocurrency-BTC-cards"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate BTC-Pandas"
            price="1000"
            link="http://gate.io/en/nft/collection/19895/BTC-Pandas"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate Earths"
            price="1000"
            link="http://gate.io/en/nft/collection/18106/Earths"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate Lions"
            price="1000"
            link="http://gate.io/en/nft/collection/19995/Lions"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate Crypto-Dragons"
            price="1000"
            link="http://gate.io/en/nft/collection/20025/Crypto-Dragons"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Gate Crypto-Dragons"
            price="1000"
            link="http://gate.io/en/nft/collection/20025/Crypto-Dragons"
            img="/images/gate-io.webp"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Rarible"
            price="1000"
            link="http://rarible.com/magicnftcollections"
            img="/images/rarible.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Opensea"
            price="1000"
            link="http://opensea.io/MagicNFTcollections"
            img="/images/opensea-logo.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Tonresear"
            price="1000"
            link="https://tonresear.ch/t/tma-clicker-token-vws-game-mining-pool-vws-ton-dedust-io-mining-nfts-buidls-dorahacks-io/18457/3"
            img="/images/tonresear-logo.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ton Jetttons"
            price="1000"
            link="https://ton.app/ru/jettons/EQBfX9KO5yIFprHWPpJp3OsX-6cjLjEJF-h5uIQE3eLJY8_h"
            img="/images/tonapp.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ton Mining-Nft"
            price="1000"
            link="https://ton.app/nft/mining-nft?id=1534"
            img="/images/tonapp.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ton Utilities"
            price="1000"
            link="https://ton.app/utilities/vws-utilities?id=1531"
            img="/images/tonapp.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ton Magic-vip-People"
            price="1000"
            link="https://ton.app/channels/magic-vip-people?id=1530"
            img="/images/tonapp.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ton Mining-Vws"
            price="1000"
            link="https://ton.app/chats/mining-vws-and-mvp?id=1529"
            img="/images/tonapp.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Ton Vws-games"
            price="1000"
            link="https://ton.app/games/vws-games?id=1532"
            img="/images/tonapp.svg"
            onLoad={handleImageLoad}
          ></Card>
        </div>
        <div className="fixed bottom-0 w-full flex justify-center">
          <div
            className="flex justify-center mt-5 bg-[rgba(39,42,47,0.8)] px-2 py-2 space-x-4 w-full backdrop-blur-sm"
          >
            <Link href={`/?user=${user}`}>
              <div className="text-xs p-3 text-white text-center rounded-lg space-x-2 items-center flex">
                <CurrencyExchangeIcon></CurrencyExchangeIcon>
                <span>Exchange</span>
              </div>
            </Link>
            <Link href={"/earn"}>
              <div className="bg-[#1C1F24] text-xs p-3 text-white text-center rounded-lg flex items-center space-x-1">
                <EuroIcon></EuroIcon>
                <span>Earn</span>
              </div>
            </Link>
          </div>
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

export default Earn;
