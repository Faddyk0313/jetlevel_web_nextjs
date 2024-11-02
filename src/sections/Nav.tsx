import { FaPhone } from "react-icons/fa6";
import NavbarDropdown from "@/components/Nav/MobileNav";
import NavOptions from "@/components/Nav/NavOptions";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="bg-black sticky top-0 z-50">
      <nav className="text-white sticky flex items-center justify-between py-5  px-3 max-w-[1800px] mx-auto ">
        <Link href={"/"}>
          <div id="logo" className="flex-1 min-w-40 max-w-56">
            <Image
              width={790}
              height={142}
              className="w-auto h-auto"
              src="/images/Logo.png"
              alt="Jet Level Aviation Logo"
            />
          </div>
        </Link>

        <div id="dropdown-nav" className="lg:hidden">
          <NavbarDropdown />
        </div>

        <div className="hidden lg:block">
          <NavOptions />
        </div>

        <div id="contact-request" className="hidden lg:flex min-w-60 text-xs min-[1200px]:text-sm items-center gap-2 justify-end">
          <div className="flex items-center gap-1">
            <FaPhone className=" animate-ringing" />
            <a href="tel:+18555385383" className="whitespace-nowrap" >(855) 538-5383</a>
          </div>
          <Link href={'#'} className="cursor-pointer whitespace-nowrap bg-gradient-to-br from-[#a94442] via-[#d9534f] to-[#c9302c] text-white no-underline py-2.5 px-3 rounded-full transition-all ease-in duration-300 hover:-translate-y-0.5 ">
            Request a Quote
          </Link>
        </div>
      </nav>
    </header>

  );
};

export default Nav;
