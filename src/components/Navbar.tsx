// the navbar consist if the Home, shop, orders, cart, and about and maybe a search option .

import Link from "next/link";
import MobMenu from "./MobMenu";
import { Button } from "./ui/button";
import { ShoppingCart, ShoppingBag, Home, Book, Package } from "lucide-react";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { ModeToggle } from "./ui/darkToggle";
import { AccountButton } from "./ui/accountButton";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

const navItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Shop", url: "/shop" },
  { id: 3, title: "Orders", url: "/orders" },
  { id: 4, title: "Cart", url: "/cart" },
  { id: 5, title: "About", url: "/about" },
];

const Navbar = () => {
  return (
    <nav className=" p-3 ">
      <div className=" flex justify-between items-center ">
        <div className=" flex flex-row items-center space-x-2 ">
          <Link href="/" className="flex flex-row  items-center space-x-2">
            <Image
              className="rounded-full "
              src="/MedhaPersonalLogo.png"
              height={40}
              width={40}
              priority={true}
              alt="Logo"
            />
            <span className={` text-xl tracking-widest hover:text-emerald-400 drop-shadow-2xl ${pacifico.className}`}>Grocery online</span>
          </Link>
          <ModeToggle/>
          <AccountButton/>
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              className=" text-lg font-medium  "
              href={item.url}
              key={item.id}
            >
              <div className="flex flex-row  justify-center items-center space-x-5">
                {item.title === "Cart" && <ShoppingCart />}
                {item.title === "Shop" && <ShoppingBag />}
                {item.title === "Home" && <Home />}
                {item.title === "About" && <Book />}
                {item.title === "Orders" && <Package/> }
                <Button
                  className=" text-xl font-medium shadow-lg shadow-emerald-500/50 "
                  variant="ghost"
                >
                  {item.title}
                </Button>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:hidden  ">
          <MobMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
