
import Image from "next/image";
import Facebook from '../image/iconsfacebook.png';
import Google from '../image/iconsgoogle.svg';
import Screen from "../image/logo.png";
import Face from "../image/iconsfacebook.png";
import google from "../image/iconsgoogle.png";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white text-center">

        <div className="mb-6">
          <div className="flex justify-center items-center gap-2">
          <Image className="fiex-1 ml-10" src={Screen} width={150} height={50} alt="Image Pictrue"/>
          </div>
        </div>

        <h2 className="text-black font-bold mb-4">ເຂົ້າສູ່ລະບົບ</h2>
        <input
        
          type="email"
          placeholder="Gmail"
          className="w-full px-4 py-2 mb-3 border rounded-md bg-gray-200 placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full px-4 py-2 mb-3 border rounded-md bg-gray-200 placeholder-gray-500"
        />

        {/* Links */}
        <div className="flex justify-between text-sm text-blue-700 mb-4">
          <a href="#">ສະຫມັກສະມາຊິກ</a>
          <a href="#">ລືມລະຫັດຜ່ານ</a>
        </div>

        {/* Login button */}
        <button className="w-full bg-teal-600 text-black py-2 rounded-md font-bold mb-6 hover:bg-teal-700">
          ເຂົ້າສູ່ລະບົບ
        </button>

        {/* Divider */}
        <h3 className="font-bold text-black mb-4">ເຂົ້າສູ່ລະບົບໂດຍ</h3>

        {/* Social logins */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 bg-[#3b5998] text-black py-2 rounded-md font-medium hover:bg-[#2d4373]">
          <div className="flex justify-center items-center gap-2">
          <Image className="fiex-1 ml-10" src={Face} width={20} height={50} alt="Image Pictrue"/>
          </div>
             Facebook
          </button>
          <button className="flex items-center justify-center gap-2 border py-2 text-black rounded-md font-medium ">
          <div className="flex justify-center items-center gap-2">
          <Image className="fiex-1 ml-10" src={google} width={20} height={50} alt="Image Pictrue"/>
          </div>
             Google
          </button>
        </div>
      </div>
    </div>
  );
}
