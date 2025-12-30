"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronRight, Menu } from "lucide-react";

type SubItem = { label: string; href: string };
type NavItem = { title: string; href?: string; sub?: SubItem[]; image?: string };

const navItems: NavItem[] = [
   {
    title: "Home",
    href: "/",
    image: "/",
  },
  {
    title: "About",
    sub: [
      { label: "Introduction", href: "/About/Introduction" },
      { label: "Management", href: "/About/Management" },
      { label: "School Committees", href: "/About/SchoolCommittee" },
    ],
    image: "/hero/hero1.jpg",
  },
  {
    title: "Academics",
    sub: [
      { label: "Inquiry Based Learning", href: "/academics/inquiry-based-learning" },
      { label: "Early Years Program", href: "/academics/early-years-program" },
      { label: "Primary School", href: "/academics/primary-school" },
      { label: "Secondary School", href: "/academics/secondary-school" },
      { label: "Middle School", href: "/academics/middle-school" },
      { label: "High School", href: "/academics/high-school" },
      
    ],
    image: "/hero/hero2.jpg",
  },
  {
    title: "Admissions",
    sub: [
      { label: "Process", href: "/admissions/process" },
      { label: "Fee Structure", href: "/admissions/fees" },
    ],
    image: "/hero/hero3.jpg",
  },
  {
    title: "Student Life",
    sub: [
      { label: "Clubs", href: "/student-life/clubs" },
      { label: "Sports", href: "/student-life/sports" },
      { label: "Events", href: "/student-life/events" },
    ],
    image: "/hero/hero4.jpg",
  }, 
   {
    title: "News & Events",
    href: "/news-events",
    image: "/hero/hero5.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    image: "/hero/hero5.jpg",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [activeClick, setActiveClick] = useState<number | null>(null);
  const [showSubDelayed, setShowSubDelayed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activeClick !== null) {
      const t = setTimeout(() => setShowSubDelayed(true), 180);
      return () => clearTimeout(t);
    }
    setShowSubDelayed(false);
  }, [activeClick]);

  const openMenu = () => {
    setMenuOpen(true);
    setTimeout(() => setMenuVisible(true), 150);
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setMenuOpen(false);
      setActiveHover(null);
      setActiveClick(null);
    }, 350);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-0  px-6 lg:px-12 h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={44} height={44} />
            <span className="font-bold text-lg">ABC Public School</span>
          </div>

          {/* MENU BUTTON */}
          <button
            onClick={openMenu}
            className={`flex items-center gap-3 px-6  md:py-6 py-3 bg-gray-950 hover:bg-gray-900/50 cursor-pointer focus:outline-none relative  ${
          scrolled ? " text-white shadow-md" : " text-white"
        }` }
          >
          <Menu size={24} />
            <span className="tracking-[0.35em] hidden md:block font-semibold text-lg">
              MENU
            </span>
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-[100] bg-black/90 text-white transition-opacity duration-300 ${
            menuVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Close */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 focus:outline-none cursor-pointer hover:bg-gray-800/60"
          >
            <X size={36} />
          </button>

          <div className="h-full w-full flex flex-col md:flex-row pt-28">
            {/* COLUMN 1: MAIN NAV */}
            <div className="w-full md:w-[55%] lg:w-[38%] px-6 lg:px-12 overflow-y-auto  ">
              <ul className="space-y-10">
                {navItems.map((item, index) => {
                  const hasSub = !!item.sub?.length;

                  return (
                    <li
                      key={item.title}
                      onMouseEnter={() => hasSub && setActiveHover(index)}
                      onMouseLeave={() => setActiveHover(null)}
                      className="group"
                    >
                      {hasSub ? (
                        <button
                          onClick={() =>
                            setActiveClick(activeClick === index ? null : index)
                          }
                          className="
                            w-full flex items-center justify-between
                            text-4xl sm:text-5xl lg:text-6xl
                            font-extrabold
                            text-center md:text-left
                            focus:outline-none
                            
                          "
                        >
                          <span className="relative cursor-pointer">
                            {item.title}
                            <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                          </span>
                          <ChevronRight
                            size={36}
                            className="opacity-0 -translate-x-2 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-x-0"
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href!}
                          onClick={closeMenu}
                          className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold  md:text-left focus:outline-none relative group "
                        >
                          {item.title}
                          <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                      )}

                      {/* SM SUBNAV */}
                      {hasSub && (
                        <ul
                          className={`md:hidden mt-4 space-y-3 text-xl text-left transition-all duration-300 ${
                            activeClick === index
                              ? "opacity-100 max-h-96"
                              : "opacity-0 max-h-0 overflow-hidden"
                          }`}
                        >
                          {item.sub!.map((s) => (
                            <li key={s.label}>
                              <Link
                                href={s.href}
                                onClick={closeMenu}
                                className="hover:underline focus:outline-none cursor-pointer"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* COLUMN 2: SUBNAV MD+ */}
            {activeClick !== null && showSubDelayed && (
              <div className="hidden md:block md:w-[45%] lg:w-[32%] px-6 lg:px-10 overflow-y-auto border-l border-white/20">
                <ul className="space-y-6 pt-4 text-2xl lg:text-3xl">
                  {navItems[activeClick].sub?.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        onClick={closeMenu}
                        className="hover:underline focus:outline-none"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* COLUMN 3: IMAGE LG */}
            <div className="hidden lg:flex lg:w-[30%] relative overflow-hidden">
              <div
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  activeHover !== null
                    ? "opacity-100 scale-100 delay-200"
                    : "opacity-0 scale-105"
                }`}
              >
                {activeHover !== null && (
                  <Image
                    src={navItems[activeHover].image!}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {activeHover === null && (
                <div className="flex items-center justify-center w-full h-full text-2xl text-white/60">
                  ABC Public School
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
