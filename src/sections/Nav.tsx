import { FaPhone } from "react-icons/fa6";
import NavbarDropdown from "@/components/Nav/MobileNav";
import NavOptions from "@/components/Nav/NavOptions";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="bg-black sticky top-0 z-50 px-5 md:px-10 lg:px-20 ">
      <nav className="text-white sticky flex items-center lg:items-end justify-between py-4 sm:py-3 lg:pt-2  max-w-[1800px] mx-auto ">
        <Link id="logo" className="flex-1 min-w-40 max-w-56 mr-4" href={"/"}>
          <Image
            width={790}
            height={142}
            className="w-auto h-auto"
            src="/images/Logo.png"
            alt="Jet Level Aviation Logo" 
          />
        </Link>
        <div className="flex items-end gap-2 md:gap-5">
          <div className="hidden lg:block pb-[10px]">
            <NavOptions />
          </div>

          <div id="contact-request" className="flex flex-col text-xs xl:text-sm items-end gap-2 lg:gap-0.5 ">
            <div className="hidden lg:flex items-center gap-1 text-[11px] mr-3">
              <FaPhone className=" animate-ringing" />
              <a href="tel:+18555385383" className="whitespace-nowrap" >(855) 538-5383</a>
            </div>
            <Link href={'#'} className="cursor-pointer whitespace-nowrap bg-gradient-to-br from-[#a94442] via-[#d9534f] to-[#c9302c] text-white py-2 md:py-2.5 px-2 md:px-3 rounded-full transition-all ease-in duration-300 hover:-translate-y-0.5 ">
              Request a Quote
            </Link>
          </div>
          <div id="dropdown-nav" className="lg:hidden ">
            <NavbarDropdown />
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Nav;
