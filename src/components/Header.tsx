"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const languages = ["en", "vi"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("menu");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("races"), href: "/races" },
    // { label: t("news"), href: "/news" },
    { label: t("results"), href: "/results" },
    { label: t("sponsorsPartners"), href: "/sponsors-and-partners" },
    { label: t("contact"), href: "/contact" },
  ];

  const changeLanguage = (e: string) => {
    console.log(e);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: e }
      );
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // detect window resize to close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-10 flex items-center justify-center">
              <img
                src="/lovable-uploads/4b2f5c78-e807-4247-8b3b-b196888c343d.png"
                alt="MĂNG ĐEN LALA TRAIL"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">MĂNG ĐEN</span>
              <span className="font-bold text-sm leading-tight">
                LALA TRAIL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium hover:text-gray-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector - Moved to far right */}
          <div className="hidden lg:flex items-center">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn("uppercase text-sm cursor-pointer text-dark font-medium")}
              >
                {locale || "EN"}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    disabled={isPending}
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="uppercase cursor-pointer font-medium"
                  >
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="pt-4 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 font-medium hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800">
              Đăng ký ngay
            </Button> */}
            </nav>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="h-10 active:bg-transparent uppercase text-black text-sm cursor-pointer relative text-left mb-4 font-medium">
                {locale || "EN"}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    disabled={isPending}
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="uppercase cursor-pointer font-medium"
                  >
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
