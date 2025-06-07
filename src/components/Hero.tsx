"use client";

import { Button } from '@/components/ui/button';
import { Play, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero/slide1.jpg",
      title: "Khám phá",
      subtitle: "Vẻ đẹp thiên nhiên",
      description: "Trải nghiệm những cung đường chạy bộ tuyệt đẹp qua rừng núi, biển cả và thành phố"
    },
    {
      image: "/images/hero/slide2.jpg",
      title: "Thử thách",
      subtitle: "Bản thân",
      description: "Vượt qua giới hạn của chính mình với những giải chạy đầy thử thách"
    },
    {
      image: "/images/hero/slide3.jpg",
      title: "Kết nối",
      subtitle: "Cộng đồng",
      description: "Gặp gỡ và chia sẻ đam mê với những người yêu thích chạy bộ"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    // Kiểm tra isMobile thì margin bottom 21px

    <section id="home" className={`relative h-screen ${isMobile ? 'mb-16' : ''}`}>
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="section-circle w-8 h-8">
                    <span className="text-xs">🏃</span>
                  </div>
                  <span className="font-medium text-white">GIẢI CHẠY</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-white">
                  {slides[currentSlide].title}<br />
                  <span className="bg-black text-white px-4 py-2 inline-block ">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
                
                <p className="text-white/90 text-lg max-w-xl">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size={isMobile ? "default" : "lg"} className="bg-black text-white hover:bg-gray-800">
                    Khám phá ngay
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  {/* <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-white text-white hover:bg-white/10">
                    Tìm hiểu thêm
                  </Button> */}
                </div>
              </div>
            </div>

            {/* Right Content - Event Card */}
            <div className={`relative ${isMobile ? 'z-10' : ''}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Sắp diễn ra
                  </span>
                  <div className="section-circle">
                    <span className="text-xs">01</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold">
                  Măng Đen<br />
                  Marathon 2024
                </h3>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Calendar size={18} />
                    <span>15 Tháng 12, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} />
                    <span>TP. Hồ Chí Minh</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-600">Khoảng cách:</div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="bg-gray-100 p-2 rounded text-center">5K</div>
                    <div className="bg-gray-100 p-2 rounded text-center">10K</div>
                    <div className="bg-black text-white p-2 rounded text-center">21K</div>
                    <div className="bg-gray-100 p-2 rounded text-center">42K</div>
                  </div>
                </div>

                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Đăng ký ngay
                </Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
