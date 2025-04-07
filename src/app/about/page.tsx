import Image from "next/image";
import Link from "next/link";
import Component from "../component/page";
import Aiy from "../image/Aiy.jpeg";
import Aily from "../image/Aily.jpeg";
import parn from "../image/parn.jpeg";
import khamfong from "../image/khamfong.jpeg";

export default function Home() {
  return (
    <div>
        <h1>ສະມາຊິກໃນກຸ່ມ  :</h1>
      <div >
        
        <div>
        <Image className="flex p-3 ml-10 mt-8 " src={Aiy} width={150} height={50} alt="Image Pictrue"/>Mr.Lattaphone
        </div>
        <div>
        <Image className="flex p-3 ml-10 mt-8 " src={Aily} width={250} height={150} alt="Image Pictrue"/>Miss.Alinod
        </div>
        <div>
        <Image className="flex p-3 ml-10 mt-8 " src={parn} width={250} height={150} alt="Image Pictrue"/>Miss.phonesanith
        </div>
        <div>
        <Image className="flex p-3 ml-10 mt-8 " src={khamfong} width={250} height={150} alt="Image Pictrue"/>Miss.khamfong
        </div>
      </div>
    </div>
  );
}