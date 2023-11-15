import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-lato">
      <div className="container mt-32 mb-2">
        <div className="flex justify-between gap-x-2 gap-y-16 flex-wrap">
          <div className="socials">
            <p className="font-bold text-lipstick">Sexual Purity</p>
            <div>
              <p className="text-sm font-bold mt-4">Follow Us:</p>
              <div className="flex gap-2 my-4">
                <FaWhatsapp />
                <FaFacebookF />
                <FaInstagram />
                <FaTelegram />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-sm gap-y-4">
            <h2 className="font-bold text-lg">Menu</h2>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Home
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-lipstick active:text-lipstick"
            >
              Who are we
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              FAQ
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Blog Post of the Week
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col text-sm gap-y-4">
            <h2 className="font-bold text-lg">Features</h2>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Ask for Help
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Join Our Community
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Support Us
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Share a Testimony
            </Link>
          </div>
          <div className="flex flex-col text-sm gap-y-4">
            <h2 className="font-bold text-lg">Resources</h2>
            <Link
              href="/gallery"
              className="hover:text-lipstick active:text-lipstick"
            >
              Gallery
            </Link>
            <Link
              href="/register"
              className="hover:text-lipstick active:text-lipstick"
            >
              Sexual Purity 4.0
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Download New Issue
            </Link>
            <Link href="/" className="hover:text-lipstick active:text-lipstick">
              Get Sexual Purity Quotes
            </Link>
          </div>
        </div>
        <p className="text-sm mt-16">
          {" "}
          &copy; Sexual Purity , Watchman Catholic Charismatic Renewal Movement,
          Owode Ajegunle Parish,2023.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
