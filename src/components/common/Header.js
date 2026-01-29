"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Innovation",
    href: "/innovation",
    children: [
      {
        name: "Digital Transformation",
        href: "/innovation/digital-transformation",
      },
      {
        name: "AI-First Product Design",
        href: "/innovation/ai-product-design",
      },
      {
        name: "Cloud-Native Architecture",
        href: "/innovation/cloud-architecture",
      },
      {
        name: "Automation Systems",
        href: "/innovation/automation-intelligent-systems",
      },
      {
        name: "Emerging Technologies",
        href: "/innovation/emerging-technologies",
      },
    ],
  },
  {
    name: "AI Engineering",
    href: "/ai-engineering",
    children: [
      {
        name: "Generative AI Solutions",
        href: "/ai-engineering/generative-ai",
      },
      {
        name: "Predictive Analytics",
        href: "/ai-engineering/predictive-analytics",
      },
      { name: "Machine Learning", href: "/ai-engineering/machine-learning" },
      {
        name: "Intelligent Automation",
        href: "/ai-engineering/intelligent-automation",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Custom Software", href: "/services/custom-software" },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { name: "Cloud & DevOps", href: "/services/cloud-devops" },
      { name: "Product Engineering", href: "/services/product-engineering" },
    ],
  },
  { name: "Tech Talent", href: "/tech-talent" },
  {
    name: "Industries",
    href: "/industries",
    children: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "FinTech & Banking", href: "/industries/fintech-banking" },
      { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Education & EdTech", href: "/industries/education-edtech" },
      {
        name: "Logistics & Supply Chain",
        href: "/industries/logistics-supply-chain",
      },
      { name: "Marketing & Media", href: "/industries/marketing-media" },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  { name: "News", href: "/news" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // For mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 pt-5 px-0 pb-2.5 bg-[#0A0F19] transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-indigo-500/10" : ""
      }`}
    >
      <nav
        className="container mx-auto px-6 flex items-center justify-between max-w-[1170px]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <Image
                src="/logo_new.jpeg"
                alt="SkilledHyre Labs Logo"
                width={164}
                height={106}
                style={{ width: "150px", height: "130px" }}
              />
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium leading-6 text-gray-300 hover:text-white transition-colors py-2"
              >
                {item.name}
                {item.children && (
                  // <ChevronDownIcon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  <></>
                )}
              </Link>

              {/* Desktop Submenu */}
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64 z-50">
                  <div className="bg-[#0B0F19] border border-white/10 rounded-xl shadow-xl overflow-hidden p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0B0F19] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5 flex items-center space-x-2"
              >
                <Image
                  src="/skilldhyre.jpg"
                  alt="SkilledHyre Labs Logo"
                  width={140}
                  height={65}
                  style={{ width: "140px", height: "auto" }}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between pr-2">
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5 flex-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubmenu(item.name);
                            }}
                            className="p-2 text-gray-400 hover:text-white"
                          >
                            <ChevronDownIcon
                              className={`w-5 h-5 transition-transform ${
                                activeSubmenu === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu */}
                      {item.children && activeSubmenu === item.name && (
                        <div className="pl-4 border-l border-white/10 ml-2 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
