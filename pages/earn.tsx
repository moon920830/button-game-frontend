"use Client";

import Card from '@/app/components/common/card';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EuroIcon from '@mui/icons-material/Euro';
import { useEffect, useState } from 'react';



function Earn() {
    const [user, setUser] = useState<string | null>('')
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const user = localStorage.getItem("user");
        setUser(user)
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

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

    return(
        <>
        {loading ?
            <div className="flex justify-center items-center h-screen">
                <CircularProgress />
            </div> : <div></div> }

            <div hidden={loading}>
                <div className='px-2  flex py-3 bg-[#453209] items-center' >
                    <img src="/images/avatar.png" alt="AvatarImg" className=' w-10 h-10' onLoad={handleImageLoad}></img>
                    <div className=' text-sm font-medium text-white ml-3'>Tim Mark(CEO)</div>
                    <Button variant="contained" sx={{paddingY: '8px', fontSize: '12px', paddingX: '8px', marginLeft: 'auto', borderRadius: '20px', textTransform: 'none', background: '#4C432D'}}>Choose exchange</Button>
                </div>
                <div className='my-10 px-2 text-white mb-28'>
                    <div className='text-xl font-medium '>
                        Tasks list
                    </div>
                    <Card title="Mexc" price='1000' link="https://www.mexc.com/ru-RU/register?inviteCode=mexc-Magik" img="/images/mexc-logo-big.png" onLoad={handleImageLoad}></Card>
                    <Card title="Gate" price='1000' link="https://www.gate.io/signup/11024473" img="/images/gate-io.webp" onLoad={handleImageLoad}></Card>
                    <Card title="Bitmart" price='1000' link="https://www.bitmart.com/register-referral/en?r=TxcR8r" img="/images/bitmart.png" onLoad={handleImageLoad}></Card>
                    <Card title="Bingc" price='1000' link="https://bingx.com/invite/E5RZZM" img="/images/bingx.svg" onLoad={handleImageLoad}></Card>
                    <Card title="Getgems" price='1000' link="http://getgems.io/virtualsworlds" img="/images/getgem.png" onLoad={handleImageLoad}></Card>
                    <Card title="Twitter" price='1000' link="http://x.com/VirtualsWorlds" img="/images/twitter.png" onLoad={handleImageLoad}></Card>
                    <Card title="Youtube" price='1000' link="http://youtube.com/@magicnft" img="/images/youtube.png" onLoad={handleImageLoad}></Card> 
                    <Card title="Github" price='1000' link="http://github.com/MagicVipPeople" img="/images/github.png" onLoad={handleImageLoad}></Card>
                    <Card title="Facebook" price='1000' link="http://www.facebook.com/MagicVipClub" img="/images/facebook.png" onLoad={handleImageLoad}></Card>
                    <Card title="Instagram" price='1000' link="http://www.instagram.com/magiknft" img="/images/instagram.png" onLoad={handleImageLoad}></Card>
                    <Card title="Ticktok" price='1000' link=" http://www.tiktok.com/@spacetickets" img="/images/ticktok.png" onLoad={handleImageLoad}></Card>
                </div>
                <div className='fixed bottom-0 w-full flex justify-center'>
                    <div className='flex justify-center mt-5 bg-[#272A2F] px-2 py-2 space-x-4 w-full opacity-80' style={{backdropFilter: 'blur(10px)'}}>
                        <Link href={`/?user=${user}`}><div className=' text-xs px-1 py-3 text-white text-center rounded-lg space-x-2 items-center flex'><CurrencyExchangeIcon></CurrencyExchangeIcon>Exchange</div></Link>
                        <Link href={'/earn'}><div className='bg-[#1C1F24] text-xs px-2 py-3 text-white text-center rounded-lg mt-1 flex items-center space-x-1'><EuroIcon></EuroIcon>Earn</div></Link>
                    </div>
                </div>
            </div>
        </>
  

    )
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
