import Image from "next/image";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#00122e] text-white py-12 px-6">
      <div className="container mx-auto">
        
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 md:gap-0">
          
          
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo image" width={50} height={50}></Image>
            <span className="font-bold text-xl uppercase tracking-wider">
              Hero.io
            </span>
          </div>

          
          <div className="flex flex-col items-center md:items-end gap-2">
            <h4 className="font-semibold text-lg mb-2">Social Links</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-[#00122e] hover:bg-white/90 transition"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-[#00122e] hover:bg-white/90 transition"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full text-[#00122e] hover:bg-white/90 transition"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/20 mb-10"></div>

        <div className="text-center">
          <p className="text-sm opacity-70">
            Copyright &copy; {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;