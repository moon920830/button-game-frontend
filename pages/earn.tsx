"use Client";

import Card from '@/app/components/common/card';
import Link from 'next/link';
import Button from '@mui/material/Button';

function Earn() {
    return(
        <>
            <div className="px-2 py-3 flex bg-[#453209] items-center">
                <img src="/images/avatar.png" alt="AvatarImg" className=' w-10 h-10'></img>
                <div className=' text-sm font-medium text-white ml-3'>Tim Mark(CEO)</div>
                <Button variant="contained" sx={{paddingY: '8px', fontSize: '12px', paddingX: '8px', marginLeft: 'auto', borderRadius: '20px', textTransform: 'none', background: '#4C432D'}}>Choose exchange</Button>
            </div>
            <div className='my-10 px-2 text-white'>
                <div className='text-xl font-medium '>
                    Tasks list
                </div>
                <Card title="Mexc" price='1000' link="https://www.mexc.com/ru-RU/register?inviteCode=mexc-Magik" img="/images/mexc-logo-big.png"></Card>
                <Card title="Gate" price='1000' link="https://www.gate.io/signup/11024473" img="/images/gate-io.webp"></Card>
                <Card title="Bitmart" price='1000' link="https://www.bitmart.com/register-referral/en?r=TxcR8r" img="/images/bitmart.png"></Card>
                <Card title="Bingc" price='1000' link="https://bingx.com/invite/E5RZZM" img="/images/bingx.svg"></Card>
                <Card title="Getgems" price='1000' link="http://getgems.io/virtualsworlds" img="/images/getgem.png"></Card>
                <Card title="Twitter" price='1000' link="http://x.com/VirtualsWorlds" img="/images/twitter.png"></Card>
                <Card title="Youtube" price='1000' link="http://youtube.com/@magicnft" img="/images/youtube.png"></Card> 
                <Card title="Github" price='1000' link="http://github.com/MagicVipPeople" img="/images/gihub.png"></Card>
                <Card title="Facebook" price='1000' link="http://www.facebook.com/MagicVipClub" img="/images/facebook.jpg"></Card>
                <Card title="Instagram" price='1000' link="http://www.instagram.com/magiknft" img="/images/instagram.png"></Card>
                <Card title="Ticktok" price='1000' link=" http://www.tiktok.com/@spacetickets" img="/images/tiktok.avif"></Card>
            </div>
            <div className='grid grid-cols-5 mt-5 bg-[#272A2F] p-2'>
                <div className=' text-xs px-1 py-4 text-white text-center rounded-lg'><Link href={'/home'}>Exchange</Link></div>
                <div className='bg-[#1C1F24] text-xs px-1 py-4 text-white text-center rounded-lg'><Link href={'/earn'}>Earn</Link></div>
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
