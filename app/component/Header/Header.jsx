import { Home, List, MessageCircle } from "lucide-react";
// import LoginButton from './LoginButton'
// import AuthContextProvider from '@/lib/contexts/AuthContext'
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b">
      <Link href={"/"}>
        <img className="h-10" src="/logo.png" alt="" />
      </Link>
      <ul className="flex gap-6 items-center">
        <Link href={"/"}>
          <li className="flex items-center gap-2">
            <Home />
            Home
          </li>
        </Link>
        <Link href={"/categories"}>
          <li className="flex items-center gap-2">
            <List />
            Categories
          </li>
        </Link>
        <Link href={"/"}>
          <li className="flex items-center gap-2">
            <MessageCircle />
            Contact Us
          </li>
        </Link>
      </ul>
      <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full">
        <img className="h-7" src="/google.png" alt="" />
        Login With Google
      </button>
    </nav>
  );
}
