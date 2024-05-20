import Link from "next/link";
import { useState, useEffect } from 'react';

import { useSnackbar } from 'notistack';
import axios from 'axios';

import { Button } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EuroIcon from "@mui/icons-material/Euro";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Friend() {
    const [user, setUser] = useState<string | null>("");
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
      const user = localStorage.getItem("user");
      setUser(user);
    });

    const handleInviteClick = async () => {
        // Generate the invite link
        const inviteLink = `https://t.me/vws_smart_bot?ref=${user}`;
        console.log(inviteLink);

        // Show the invite link in a snackbar or modal
        enqueueSnackbar('Invite link copied to clipboard!', { variant: 'success' });

        // Copy the link to the clipboard
        const shareLink = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}`;

        // Open the share link in a new window
        window.open(shareLink, '_blank');
        
    }

    return(
        <>
            <div className="px-2  flex py-3 bg-[#453209] items-center">
                <img
                    src="/images/avatar.png"
                    alt="AvatarImg"
                    className=" w-10 h-10"
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
            <div className="text-white text-3xl font-semibold text-center mt-5">Invite Friends!</div>
            <div className="text-white text-lg font-medium text-center mt-5">You and your friend will receive bonuses</div>
            <div className="flex mt-5 px-4 w-full space-x-2">            
                <Button variant="contained" sx={{paddingY: '10px', fontSize: '18px', paddingX: '24px', borderRadius: '10px', textTransform: 'none', width: "100%" }} onClick={handleInviteClick}>
                    Invite a friend
                </Button>
                <Button variant="contained"  sx={{paddingY: '10px', fontSize: '18px', paddingX: '24px', borderRadius: '10px', textTransform: 'none', }}>
                    <ContentCopyIcon></ContentCopyIcon>
                </Button>
            </div>
            <div className="fixed bottom-0 w-full flex justify-center">
                <div className="flex justify-center mt-auto bg-[#272A2F] py-2 space-x-4 w-full">
                <Link href={`/?user=${user}`}>
                    <div className=" text-xs p-3 text-white text-center rounded-lg space-x-2 items-center flex">
                    <CurrencyExchangeIcon></CurrencyExchangeIcon>
                    <span>Exchange</span>
                    </div>
                </Link>
                <Link href={"/friends"}>
                    <div className="bg-[#1C1F24] text-xs p-3 text-white text-center rounded-lg flex items-center space-x-2">
                    <Diversity3Icon></Diversity3Icon>
                    <span>Friends</span>
                    </div>
                </Link>
                <Link href={"/earn"}>
                    <div className=" text-xs p-3 text-white text-center rounded-lg flex items-center space-x-2">
                    <EuroIcon></EuroIcon>
                    <span>Earn</span>
                    </div>
                </Link>
                </div>
            </div>
        </>
    )
}

export default Friend;