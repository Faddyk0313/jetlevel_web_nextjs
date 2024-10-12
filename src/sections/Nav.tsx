import { FaPhone } from "react-icons/fa6";
import NavbarDropdown from "@/components/Nav/MobileNav";
import NavOptions from "@/components/Nav/NavOptions";

const Nav = () => {
  return (
    <header className="bg-black sticky top-0 z-20">
      <nav className="text-white sticky flex items-center justify-between py-6 px-3 max-w-[1500px] mx-auto ">
        <div id="logo" className="flex-1 min-w-40 max-w-56">
          <img
            src="https://jetlevel.com/wp-content/uploads/2023/07/jetLeval-logo-1.png"
            alt="Jet Level Aviation Logo"
          />
        </div>

        <div id="dropdown-nav" className="lg:hidden">
          <NavbarDropdown />
        </div>

        <div className="hidden lg:block">
          <NavOptions />
        </div>

        <div id="contact-request" className="hidden lg:flex min-w-60 text-xs min-[1200px]:text-sm items-center gap-1 justify-end">
          <FaPhone className=" animate-ringing" />
          <a href="tel:+18555385383" >(855) 538-5383</a>
          <a className="cursor-pointer bg-gradient-to-br from-[#a94442] via-[#d9534f] to-[#c9302c] text-white no-underline py-2.5 px-2 rounded-full transition-all ease-in duration-300 hover:-translate-y-0.5 ">
            Request a Quote
          </a>
        </div>
      </nav>
    </header>

  );
};

export default Nav;
