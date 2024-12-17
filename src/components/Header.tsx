import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { TbUserExclamation } from "react-icons/tb";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[60px] bg-yellow-200 flex justify-between items-center">
        {/* left */}
    <Link href={""}>
        <header className="h-[40px] w-[40px]" />
    </Link>
        
            {/* navbar */}
        <ul>
            <li className="flex justify-corner space-x-5">
            <Link href={""}>Home</Link>
            <Link href={""}>Shop</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
            </li>
        </ul>
        {/*usermark*/}
    {/*right*/}
     <div className="flex items-corner mr-7 space-x-5">
            <TbUserExclamation className="text-2xl"/>
        <IoIosSearch className="text-2xl" />
        <CiHeart className="text-2xl"/>
        <AiOutlineShoppingCart className="text-2xl" />
        </div>
            </header>
  );
}