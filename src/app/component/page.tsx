import Link from "next/link";
import Image from "next/image";
import Screen from "../image/logo.png";


export default function Component() {
  return (
    <div>
      
        <div className="flex bg-blue-300 p-3">
            <Image className="fiex-1 ml-10" src={Screen} width={150} height={50} alt="Image Pictrue"/>
            <h1 className="fiex-1 ml-10 mt-8 "><Link href="../about">About</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#">ອຸປະກອນຕອມພິວເຕີ້ V</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="../space">ສະເປັກຄອມ V</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#">ສີນຄາພ້ອມສົ່ງ V</Link></h1>
            <h1 className="fiex-1 ml-10 mt-8"><Link href="#"> ລາຍການທັງໝົດ V</Link></h1>
                <div className="flex ml-10 mt-8">
                <svg className="ml-10 h-8 w-8 text-red-50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              <svg className="ml-10 h-8 w-8 text-red-50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
                <h1 className="fiex-1 ml-10"><Link href="../singin"> Sing in</Link></h1>
                </div>
        </div>
    </div>
  );
}