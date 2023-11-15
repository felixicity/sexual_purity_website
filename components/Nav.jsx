"use client";

import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { signIn, useSession, getProviders, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      ``;
    }
  };

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex justify-between items-center w-full pt-3">
      <div className="flex">
        {toggleDropdown ? (
          <FaTimes
            className="mr-4 text-2xl md:hidden"
            onClick={() => setToggleDropdown(false)}
          />
        ) : (
          <HiMenuAlt2
            className="mr-4 text-2xl md:hidden"
            onClick={() => setToggleDropdown(true)}
          />
        )}
        <Link href="/" className="flex gap-2 flex-center">
          <p>
            <span className="text-lipstick text-3xl font-dancing">
              Sexual Purity
            </span>
          </p>
        </Link>
      </div>
      <div className="sm:flex hidden font-kalam">
        <div className="flex items-center gap-5 md:gap-12 mr-28 text-lg">
          <Link href="/" className="hover:border-b-[2.5px] border-lipstick">
            Home
          </Link>
          <Link
            href="/#blog-section"
            onClick={() => handleClick("blog")}
            className="hover:border-b-[2.5px] border-lipstick"
          >
            Blog
          </Link>
          <Link
            href="/#about"
            onClick={() => handleClick("about")}
            className="hover:border-b-[2.5px] border-lipstick"
          >
            Who are we
          </Link>
          <Link
            href="/#faq-section"
            onClick={() => handleClick("faq")}
            className="hover:border-b-[2.5px] border-lipstick"
          >
            FAQ
          </Link>
        </div>

        {session?.user ? (
          <>
            <button
              type="button"
              className="py-2 px-4 bg-lipstick text-white rounded-[25px]"
              onClick={signOut}
            >
              Sign Out
            </button>

            <Link href="/">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full ml-12"
                alt="profile image"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  className="py-2 px-4 bg-lipstick text-white rounded-[25px]"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden font-kalam">
        {session?.user ? (
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full hover:cursor-pointer"
            alt="profile image"
          />
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  className="py-2 px-3 bg-lipstick text-white rounded-[25px]"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
        {toggleDropdown && (
          <div className="absolute top-[88px] px-8 left-0 right-0 h-1/2 z-30 bg-white pt-4">
            <div className="flex flex-col gap-y-4 text-[.94rem]">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => {
                  handleClick("projects");
                  setToggleDropdown(false);
                }}
              >
                Home
              </Link>
              <Link
                href="/#blog-section"
                className="dropdown_link"
                onClick={() => {
                  handleClick("blog");
                  setToggleDropdown(false);
                }}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="dropdown_link"
                onClick={() => {
                  handleClick("about");
                  setToggleDropdown(false);
                }}
              >
                Who we are
              </Link>
              <Link
                href="/#faq-section"
                className="dropdown_link"
                onClick={() => {
                  handleClick("faq");
                  setToggleDropdown(false);
                }}
              >
                FAQ
              </Link>
              <Link
                href="/#profile"
                className="dropdown_link"
                onClick={() => {
                  handleClick("profile");
                  setToggleDropdown(false);
                }}
              >
                My Profile
              </Link>
              {!session?.user ? (
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    className="py-2 px-3 bg-lipstick text-white rounded-[25px] w-1/3"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign In
                  </button>
                ))
              ) : (
                <button
                  type="button"
                  className="py-2 px-4 bg-lipstick text-white rounded-[25px] w-1/3"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
