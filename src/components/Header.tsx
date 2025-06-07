"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải chạy', href: '/races' },
    { label: 'Tin tức', href: '/news' },
    { label: 'Kết quả', href: '/results' },
    { label: 'Liên hệ', href: '/contact' },
  ];

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
              <span className="font-bold text-sm leading-tight">LALA TRAIL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* CTA Button */}
          <div className="hidden md:block">
            {/* <Button className="bg-black text-white hover:bg-gray-800">
              Đăng ký ngay
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
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
        )}
      </div>
    </header>
  );
};

export default Header;
