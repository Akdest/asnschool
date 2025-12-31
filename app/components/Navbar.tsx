"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronRight,
  Menu,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

type SubItem = { label: string; href: string };
type NavItem = { title: string; href?: string; sub?: SubItem[]; image?: string };

const navItems: NavItem[] = [
  { title: "Home", href: "/", image: "/images/asn-bg.jpg" },
  {
    title: "About",
    sub: [
      { label: "Introduction", href: "/About/Introduction" },
      { label: "Management", href: "/About/Management" },
      { label: "School Committees", href: "/About/SchoolCommittee" },
    ],
    image: "/images/asn-club.jpg",
  },
  {
    title: "Academics",
    sub: [
      { label: "Inquiry Based Learning", href: "/Academics/InquiryBasedLearning" },
      { label: "Early Years Program", href: "/Academics/EarlyYearsProgram" },
      { label: "Primary School", href: "/Academics/PrimarySchool" },
      { label: "Secondary School", href: "/Academics/SecondarySchool" },
      { label: "High School", href: "/Academics/HighSchool" },
    ],
    image: "/images/asn-class.jpg",
  },
  {
    title: "Admissions",
    sub: [
      { label: "Process", href: "/Admissions/Process" },
      { label: "Fee Structure", href: "/Admissions/FeeStructure" },
    ],
    image: "/images/foundation.jpg",
  },
  {
    title: "Student Life",
    sub: [
      { label: "Clubs", href: "/StudentsLife/Clubs" },
      { label: "Sports", href: "/StudentsLife/Sports" },
    ],
    image: "/images/asn-sports.jpg",
  },
  { title: "News & Events", href: "/NewsEvents", image: "/images/asn-play.jpg" },
  { title: "Contact", href: "/Contact", image: "/images/asn-principal.jpg" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [delayedHover, setDelayedHover] = useState<number | null>(null);
  const [activeClick, setActiveClick] = useState<number | null>(null);
  const [showSubDelayed, setShowSubDelayed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activeHover !== null) {
      const t = setTimeout(() => setDelayedHover(activeHover), 250);
      return () => clearTimeout(t);
    }
    setDelayedHover(null);
  }, [activeHover]);

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
      setDelayedHover(null);
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
        <div className="px-6 lg:px-12 h-24 flex items-center justify-between">

                     <Link href="/">

          <div className="flex items-center gap-3">
            <Image src="/images/asn-logo.png" alt="Logo" width={64} height={64} />
            {/* <span className="font-bold text-lg">ASN Public School</span> */}
          </div>
          </Link>

          <button
            onClick={openMenu}
            className="flex items-center gap-3 px-6 py-3 md:py-4 cursor-pointer bg-gray-950 hover:bg-gray-900/60 text-white"
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
          {/* TOP BAR */}
          <Link href="/">
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <Image src="/images/asn-logo.png" alt="Logo" width={42} height={42} />
            <span className="font-bold text-lg">ABC Public School</span>
          </div>
</Link>
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 cursor-pointer hover:bg-gray-800/60"
          >
            <X size={36} />
          </button>

          <div className="h-full w-full flex flex-col md:flex-row pt-28 pb-28">
            {/* COLUMN 1 */}
            <div className="w-full md:w-[55%] lg:w-[38%] px-6 lg:px-12 overflow-y-auto">
              <ul className="space-y-10">
                {navItems.map((item, index) => {
                  const hasSub = !!item.sub?.length;

                  return (
                    <li
                      key={item.title}
                      onMouseEnter={() => setActiveHover(index)}
                      onMouseLeave={() => setActiveHover(null)}
                      className="group"
                    >
                      {hasSub ? (
                        <>
                          <button
                            onClick={() =>
                              setActiveClick(
                                activeClick === index ? null : index
                              )
                            }
                            className="w-full flex items-center justify-between text-4xl sm:text-5xl lg:text-6xl font-extrabold"
                          >
                            <span className="relative">
                              {item.title}
                              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-white transition-all group-hover:w-full" />
                            </span>
                            <ChevronRight
                              size={36}
                              className={`transition-transform duration-300  ${
                                activeClick === index ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {/* MOBILE SUBNAV */}
                          {activeClick === index && (
                            <div className="block md:hidden mt-4 pl-6 border-l border-white/30">
                              <ul className="space-y-4 text-xl">
                                {item.sub?.map((s) => (
                                  <li key={s.label}>
                                    <Link
                                      href={s.href}
                                      onClick={closeMenu}
                                      className="block text-white/80 hover:text-white transition"
                                    >
                                      {s.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          onClick={closeMenu}
                          className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold relative group"
                        >
                          {item.title}
                          <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-white transition-all group-hover:w-full" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* COLUMN 2 — DESKTOP SUBNAV */}
            {activeClick !== null && showSubDelayed && (
              <div className="hidden md:block md:w-[45%] lg:w-[32%] px-6 lg:px-10 overflow-y-auto border-l border-white/20">
                <ul className="space-y-6 pt-4 text-2xl lg:text-3xl">
                  {navItems[activeClick].sub?.map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} onClick={closeMenu}>
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* COLUMN 3 — IMAGE PREVIEW */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden mx-6">
              <div
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  delayedHover !== null ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                {delayedHover !== null && navItems[delayedHover].image && (
                  <Image
                    src={navItems[delayedHover].image!}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="absolute bottom-8 left-6 flex items-center gap-6 text-white/70">
            <Link href="#" className="hover:text-white transition">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Twitter size={22} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
