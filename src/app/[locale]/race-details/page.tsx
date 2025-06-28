"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Calendar, MapPin, Trophy, Users, Clock, Mountain } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const RaceDetails = () => {
  const raceData = {
    title: "Măng Đen Ultra Trail 2024",
    subtitle: "Thử thách bản thân trên những con đường mòn hoang sơ",
    date: "15 Tháng 12, 2024",
    location: "Kon Tum - Măng Đen",
    status: "Đang mở đăng ký",
    edition: "Lần thứ 3",
    image: "bg-gradient-to-br from-green-600 to-emerald-700"
  };

  const distances = [
    {
      name: "25K Trail",
      price: "450.000đ",
      elevation: "+800m",
      timeLimit: "4 giờ",
      slots: "200 vận động viên"
    },
    {
      name: "50K Ultra",
      price: "650.000đ",
      elevation: "+1.500m",
      timeLimit: "8 giờ",
      slots: "150 vận động viên"
    },
    {
      name: "100K Ultra",
      price: "850.000đ",
      elevation: "+3.000m",
      timeLimit: "16 giờ",
      slots: "100 vận động viên"
    }
  ];

  const previousEditions = [
    {
      year: "2023",
      participants: "280 vận động viên",
      winner25k: "Nguyễn Văn A - 2:15:30",
      winner50k: "Trần Thị B - 4:45:20",
      winner100k: "Lê Văn C - 9:30:15"
    },
    {
      year: "2022",
      participants: "220 vận động viên",
      winner25k: "Phạm Văn D - 2:18:45",
      winner50k: "Hoàng Thị E - 4:52:10",
      winner100k: "Vũ Văn F - 9:45:30"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="pt-16 relative">
        <div className={`${raceData.image} h-96 relative`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">{raceData.edition}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">{raceData.title}</h1>
              <p className="text-xl opacity-90">{raceData.subtitle}</p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{raceData.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{raceData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Race Header */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="section-circle w-8 h-8">
                  <Trophy size={16} />
                </div>
                <span className="font-medium">CHI TIẾT GIẢI CHẠY</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold">
                MĂNG ĐEN<br />
                <span className="bg-black text-white px-4 py-2 inline-block ">
                  LALA TRAIL
                </span>
              </h1>
            </div>

            {/* Race Info */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Thông tin giải chạy</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="text-gray-500" size={20} />
                        <div>
                          <p className="font-medium">Ngày diễn ra</p>
                          <p className="text-gray-600">15 Tháng 12, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-gray-500" size={20} />
                        <div>
                          <p className="font-medium">Địa điểm</p>
                          <p className="text-gray-600">Kon Tum, Việt Nam</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="text-gray-500" size={20} />
                        <div>
                          <p className="font-medium">Số lượng tham gia</p>
                          <p className="text-gray-600">500+ người</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Cự ly</h2>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold">21KM</p>
                        <p className="text-sm text-gray-600">Trail Run</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold">10KM</p>
                        <p className="text-sm text-gray-600">Trail Run</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold">5KM</p>
                        <p className="text-sm text-gray-600">Fun Run</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Mô tả</h2>
                    <p className="text-gray-600">
                      MĂNG ĐEN LALA TRAIL là giải chạy trail đầu tiên tại Kon Tum,
                      mang đến cho người tham gia trải nghiệm chạy bộ qua những cung đường
                      đẹp nhất của vùng đất Tây Nguyên. Với 3 cự ly 21KM, 10KM và 5KM,
                      giải chạy phù hợp với mọi đối tượng từ người mới bắt đầu đến vận động viên chuyên nghiệp.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Giải thưởng</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">Top 3 Nam/Nữ mỗi cự ly</p>
                        <p className="text-gray-600">Huy chương và giải thưởng tiền mặt</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">Hoàn thành</p>
                        <p className="text-gray-600">Huy chương và áo finisher</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link href={`/race-registration`}>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Đăng ký ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RaceDetails; 