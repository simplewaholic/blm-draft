"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Clock,
  Mountain,
  Route,
  AlertTriangle,
  ChevronDown,
  Package,
  Shirt,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCountdown } from "@/hooks/use-countdown";

const RaceDetails = () => {
  const { id } = useParams();
  const [selectedDistance, setSelectedDistance] = useState("25K");
  const { months, hours, days, minutes, seconds } = useCountdown(
    "2025-12-15T06:00:00"
  );

  const raceData = {
    title: "Măng Đen Ultra Trail 2024",
    subtitle: "Thử thách bản thân trên những con đường mòn hoang sơ",
    date: "15 Tháng 12, 2024",
    location: "Kon Tum - Măng Đen",
    status: "Đang mở đăng ký",
    edition: "Lần thứ 1",
    image: "bg-gradient-to-br from-green-600 to-emerald-700",
  };

  const distances = [
    {
      name: "25K Trail",
      price: "450.000đ",
      elevation: "+800m",
      timeLimit: "4 giờ",
      slots: "200 vận động viên",
    },
    {
      name: "50K Ultra",
      price: "650.000đ",
      elevation: "+1.500m",
      timeLimit: "8 giờ",
      slots: "150 vận động viên",
    },
    {
      name: "100K Ultra",
      price: "850.000đ",
      elevation: "+3.000m",
      timeLimit: "16 giờ",
      slots: "100 vận động viên",
    },
  ];

  const requiredEquipmentByDistance = {
    "25K": {
      mandatory: [
        "Giày trail running chuyên dụng",
        "Balo chạy bộ tối thiểu 10L",
        "Nước uống tối thiểu 1L",
        "Điện thoại di động có pin đầy",
        "Còi khẩn cấp",
        "Băng y tế cơ bản",
      ],
      recommended: [
        "Mũ chạy bộ",
        "Kính mát thể thao",
        "Găng tay chạy trail",
        "Gaiters (bao chân)",
        "Muối điện giải",
        "Áo mưa nhẹ",
      ],
      prohibited: [
        "Tai nghe không dây",
        "Điện thoại không có GPS",
        "Giày chạy đường phố",
        "Balo không có hệ thống nước",
      ],
    },
    "50K": {
      mandatory: [
        "Giày trail running chuyên dụng",
        "Balo chạy bộ tối thiểu 15L",
        "Nước uống tối thiểu 1.5L",
        "Điện thoại di động có pin đầy",
        "Còi khẩn cấp",
        "Băng y tế cơ bản",
        "Đèn pin đầu (dự phòng)",
        "Pin dự phòng cho điện thoại",
      ],
      recommended: [
        "Mũ chạy bộ",
        "Kính mát thể thao",
        "Găng tay chạy trail",
        "Gaiters (bao chân)",
        "Muối điện giải",
        "Áo mưa nhẹ",
        "Gel năng lượng",
        "Ống quần compression",
      ],
      prohibited: [
        "Tai nghe không dây",
        "Điện thoại không có GPS",
        "Giày chạy đường phố",
        "Balo không có hệ thống nước",
        "Thực phẩm có chứa chất kích thích",
      ],
    },
    "100K": {
      mandatory: [
        "Giày trail running chuyên dụng",
        "Balo chạy bộ tối thiểu 20L",
        "Nước uống tối thiểu 2L",
        "Điện thoại di động có pin đầy",
        "Còi khẩn cấp",
        "Băng y tế đầy đủ",
        "Đèn pin đầu + đèn dự phòng",
        "Pin dự phòng cho điện thoại",
        "Áo ấm (nhiệt độ ban đêm)",
        "Áo mưa chống nước",
        "Thực phẩm dự trữ",
      ],
      recommended: [
        "Mũ chạy bộ",
        "Kính mát thể thao",
        "Găng tay chạy trail",
        "Gaiters (bao chân)",
        "Muối điện giải",
        "Gel năng lượng",
        "Ống quần compression",
        "Túi ngủ khẩn cấp",
        "Kính bảo hộ",
        "Thuốc cá nhân",
      ],
      prohibited: [
        "Tai nghe không dây",
        "Điện thoại không có GPS",
        "Giày chạy đường phố",
        "Balo không có hệ thống nước",
        "Thực phẩm có chứa chất kích thích",
        "Thiết bị hỗ trợ điện tử",
      ],
    },
  };

  const schedule = [
    {
      date: "14/12/2024",
      time: "14:00 - 18:00",
      location: "Trung tâm Măng Đen",
      event: "Nhận BIB & Kiểm tra trang thiết bị",
      description:
        "Nhận số báo danh, kiểm tra trang thiết bị bắt buộc, briefing an toàn",
    },
    {
      date: "14/12/2024",
      time: "19:00 - 21:00",
      location: "Trung tâm Măng Đen",
      event: "Gala Dinner & Kỹ thuật",
      description: "Buổi tiệc tối, thuyết trình kỹ thuật đường đua và quy định",
    },
    {
      date: "15/12/2024",
      time: "05:00",
      location: "Trung tâm Măng Đen",
      event: "Mở cửa khu vực tập trung",
      description: "Nhận BIB phút chót, kiểm tra trang thiết bị, khởi động",
    },
    {
      date: "15/12/2024",
      time: "06:00",
      location: "Sân khấu chính",
      event: "Khởi động tập thể",
      description: "Khởi động chung do HLV chuyên nghiệp hướng dẫn",
    },
    {
      date: "15/12/2024",
      time: "06:30",
      location: "Trung tâm Măng Đen",
      event: "Xuất phát 100K Ultra",
      description: "Vận động viên 100K bắt đầu cuộc đua - chạy qua đêm",
    },
    {
      date: "15/12/2024",
      time: "07:00",
      location: "Trung tâm Măng Đen",
      event: "Xuất phát 50K Ultra",
      description: "Vận động viên 50K bắt đầu cuộc đua",
    },
    {
      date: "15/12/2024",
      time: "07:30",
      location: "Trung tâm Măng Đen",
      event: "Xuất phát 25K Trail",
      description: "Vận động viên 25K bắt đầu cuộc đua",
    },
    {
      date: "15/12/2024",
      time: "11:30",
      location: "Trung tâm Măng Đen",
      event: "Người về đầu tiên (25K)",
      description: "Dự kiến thời gian hoàn thành nhanh nhất cho cự ly 25K",
    },
    {
      date: "15/12/2024",
      time: "12:00",
      location: "Trung tâm Măng Đen",
      event: "Lễ trao giải 25K",
      description: "Trao giải cho các hạng mục Nam/Nữ/Đồng đội 25K",
    },
    {
      date: "15/12/2024",
      time: "15:00",
      location: "Trung tâm Măng Đen",
      event: "Người về đầu tiên (50K)",
      description: "Dự kiến thời gian hoàn thành nhanh nhất cho cự ly 50K",
    },
    {
      date: "15/12/2024",
      time: "15:30",
      location: "Trung tâm Măng Đenchính",
      event: "Lễ trao giải 50K",
      description: "Trao giải cho các hạng mục Nam/Nữ/Đồng đội 50K",
    },
    {
      date: "16/12/2024",
      time: "22:30",
      location: "Trung tâm Măng Đen",
      event: "Người về đầu tiên (100K)",
      description: "Dự kiến thời gian hoàn thành nhanh nhất cho cự ly 100K",
    },
    {
      date: "16/12/2024",
      time: "23:00",
      location: "Trung tâm Măng Đen",
      event: "Lễ trao giải 100K",
      description:
        "Trao giải cho các hạng mục Nam/Nữ/Đồng đội 100K - Kết thúc sự kiện",
    },
  ];

  const shirtSizes = [
    {
      size: "XS",
      chest: "84-89cm",
      description: "Phù hợp cho người có vòng ngực 84-89cm",
    },
    {
      size: "S",
      chest: "89-94cm",
      description: "Phù hợp cho người có vòng ngực 89-94cm",
    },
    {
      size: "M",
      chest: "94-99cm",
      description: "Phù hợp cho người có vòng ngực 94-99cm",
    },
    {
      size: "L",
      chest: "99-104cm",
      description: "Phù hợp cho người có vòng ngực 99-104cm",
    },
    {
      size: "XL",
      chest: "104-109cm",
      description: "Phù hợp cho người có vòng ngực 104-109cm",
    },
    {
      size: "XXL",
      chest: "109-114cm",
      description: "Phù hợp cho người có vòng ngực 109-114cm",
    },
  ];

  const requiredEquipment = {
    mandatory: [
      "Giày trail running chuyên dụng",
      "Balo chạy bộ (tối thiểu 10L cho 25K, 15L cho 50K, 20L cho 100K)",
      "Nước uống tối thiểu 1.5L",
      "Điện thoại di động có pin đầy",
      "Còi khẩn cấp",
      "Băng y tế cơ bản",
    ],
    recommended: [
      "Mũ chạy bộ",
      "Kính mát thể thao",
      "Găng tay chạy trail",
      "Gaiters (bao chân)",
      "Đèn pin đầu (cho cự ly 100K)",
      "Pin dự phòng",
      "Muối điện giải",
      "Áo mưa nhẹ",
    ],
    prohibited: [
      "Tai nghe không dây",
      "Điện thoại không có GPS",
      "Giày chạy đường phố",
      "Balo không có hệ thống nước",
      "Thực phẩm có chứa chất kích thích",
    ],
  };

  const courseInfo = {
    "25K": {
      description:
        "Tuyến đường 25K phù hợp cho người mới bắt đầu với trail running, đi qua những con đường mòn đẹp nhất của Măng Đen.",
      highlights: [
        "Khởi đầu tại trung tâm Măng Đen",
        "Đi qua rừng thông cổ thụ",
        "Điểm check-point tại thác Dray Nur",
        "Kết thúc tại khu vực hồ T'Nưng",
      ],
      terrain: "70% đường mòn, 20% đường đất, 10% đường asphalt",
      difficulty: "Trung bình",
      checkpoints: 3,
    },
    "50K": {
      description:
        "Cự ly thử thách với địa hình phức tạp, yêu cầu kinh nghiệm trail running và sự chuẩn bị kỹ lưỡng.",
      highlights: [
        "Bao gồm toàn bộ tuyến 25K",
        "Mở rộng đến khu vực núi Chư Mố",
        "Đi qua các thác nước hoang sơ",
        "Tham quan làng Kơnia truyền thống",
      ],
      terrain: "80% đường mòn, 15% đường đất, 5% đường asphalt",
      difficulty: "Khó",
      checkpoints: 6,
    },
    "100K": {
      description:
        "Ultra marathon đầy thử thách, dành cho những vận động viên có kinh nghiệm và sự chuẩn bị tốt nhất.",
      highlights: [
        "Bao gồm toàn bộ tuyến 50K",
        "Mở rộng đến đỉnh núi Chú Hrú",
        "Qua đêm tại các checkpoint",
        "Khám phá toàn bộ vùng Măng Đen",
      ],
      terrain: "90% đường mòn, 8% đường đất, 2% đường asphalt",
      difficulty: "Rất khó",
      checkpoints: 12,
    },
  };

  const previousEditions = [
    {
      year: "2023",
      participants: "280 vận động viên",
      winner25k: "Nguyễn Văn A - 2:15:30",
      winner50k: "Trần Thị B - 4:45:20",
      winner100k: "Lê Văn C - 9:30:15",
    },
    {
      year: "2022",
      participants: "220 vận động viên",
      winner25k: "Phạm Văn D - 2:18:45",
      winner50k: "Hoàng Thị E - 4:52:10",
      winner100k: "Vũ Văn F - 9:45:30",
    },
  ];

  const sponsors = [
    {
      name: "Office GPS Watch",
      logo: "/images/logo/coros.webp",
      description: "",
    },
    {
      name: "Official Shoes Brand",
      logo: "/images/logo/Hormel-Logo-food.png",
      description: "",
    },
    {
      name: "",
      logo: "",
      description: "",
    },
    {
      name: "Exclusive 25KM Sponsor",
      logo: "/images/logo/Hunts-Logo-food.png",
      description: "",
    },
    // line 2
    {
      name: "Official F&B Brand",
      logo: "",
      description: "",
    },
    {
      name: "",
      logo: "/images/logo/Kit-Kat-Logo-food.png",
      description: "",
    },
    {
      name: "",
      logo: "/images/logo/Logo-NASA-500x281.png",
      description: "",
    },
    // line 3
    {
      name: "50/75/100\nNutrition Sponsor",
      logo: "/images/logo/Marie-Callenders-Logo-food.png",
      description: "",
    },
    {
      name: "Couple TShirt\nSponsor",
      logo: "/images/logo/MMs-Logo-food.png",
      description: "",
    },
    {
      name: "Sport Drink Powder\nSponsor",
      logo: "/images/logo/Nature-Valley-Logo-food.png",
      description: "",
    },
    // line 4
    {
      name: "Merchandise Sponsor",
      logo: "/images/logo/Oreo-Logo-food.png",
      description: "",
    },
    {
      name: "Beer Sponsor",
      logo: "/images/logo/Snickers-Logo-food.png",
      description: "",
    },
    {
      name: "Medical Sponsor",
      logo: "/images/logo/Lays-Logo-food.png",
      description: "",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Trung bình":
        return "text-yellow-600 bg-yellow-50";
      case "Khó":
        return "text-orange-600 bg-orange-50";
      case "Rất khó":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 relative">
        <div className={`h-96 ${raceData.image} relative`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">{raceData.edition}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                {raceData.title}
              </h1>
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
              <Link href={`/race-registration`}>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 mt-4"
                >
                  Đăng ký ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <div className="lg:container ps-4 pe-4 pb-2 pt-4 md:py-5">
        <div className="w-full space-y-16 pt-5 lg:pt-10">
          {/* Overview Section */}
          <div className="">
            <div className="font-bold text-xl hover:no-underline pb-3">
              Giới thiệu giải chạy
            </div>
            <div>
              <div className="pt-4 border-t">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4 text-lg">
                    Măng Đen Ultra Trail là giải chạy trail thường niên
                    được tổ chức tại cao nguyên Măng Đen, Kon Tum. Đây là
                    một trong những giải chạy trail thử thách nhất Việt
                    Nam với địa hình đa dạng từ rừng thông, thác nước đến
                    những con đường mòn núi hiểm trở.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg">
                    Giải chạy không chỉ là thử thách thể chất mà còn là cơ
                    hội để vận động viên khám phá vẻ đẹp hoang sơ của
                    thiên nhiên Tây Nguyên, trải nghiệm văn hóa địa phương
                    độc đáo.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <Mountain className="w-8 h-8 mx-auto mb-4" />
                      <h3 className="font-bold">Địa hình đa dạng</h3>
                      <p className="text-sm text-gray-600">
                        Rừng thông, thác nước, đường mòn núi
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <Users className="w-8 h-8 mx-auto mb-4" />
                      <h3 className="font-bold">Cộng đồng đam mê</h3>
                      <p className="text-sm text-gray-600">
                        Kết nối các trail runner Việt Nam
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <Trophy className="w-8 h-8 mx-auto mb-4" />
                      <h3 className="font-bold">Thử thách bản thân</h3>
                      <p className="text-sm text-gray-600">
                        Vượt qua giới hạn của chính mình
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Accordion type="multiple" className="space-y-6">

            {/* Distances Section */}
            <AccordionItem value="distances" className="shadow-md px-4 rounded-lg">
              <AccordionTrigger className="font-bold text-xl hover:no-underline">
                Cự ly thi đấu
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap justify-center gap-2 mb-8 pt-8 border-t">
                  {distances.map((distance, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedDistance === distance.name.split(" ")[0]
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        setSelectedDistance(distance.name.split(" ")[0])
                      }
                      className="mb-0"
                    >
                      {distance.name}
                    </Button>
                  ))}
                </div>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <Route className="mr-3" size={24} />
                      Thông tin đường đua - {selectedDistance}K
                    </h3>

                    <div className="space-y-6">
                      <p className="text-gray-600 text-lg">
                        {courseInfo[selectedDistance].description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-4 text-lg">
                            🗺️ Điểm nổi bật
                          </h4>
                          <ul className="space-y-2">
                            {courseInfo[selectedDistance].highlights.map(
                              (highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="text-green-600 mt-1">
                                    •
                                  </span>
                                  <span className="text-gray-600">
                                    {highlight}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">🏔️ Địa hình</h4>
                            <p className="text-gray-600">
                              {courseInfo[selectedDistance].terrain}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-bold mb-2">⚠️ Độ khó</h4>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                                courseInfo[selectedDistance].difficulty
                              )}`}
                            >
                              {courseInfo[selectedDistance].difficulty}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-bold mb-2">🏁 Checkpoints</h4>
                            <p className="text-gray-600">
                              {courseInfo[selectedDistance].checkpoints} điểm
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle
                            className="text-blue-600 mt-1"
                            size={20}
                          />
                          <div>
                            <h4 className="font-bold text-blue-800 mb-2">
                              Lưu ý quan trọng
                            </h4>
                            <p className="text-blue-700 text-sm">
                              Vận động viên cần chuẩn bị kỹ lưỡng về thể lực
                              và trang thiết bị. Đọc kỹ quy định về trang bị
                              bắt buộc trước khi tham gia.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>

            {/* Registration Section */}
            <AccordionItem value="registration" className="shadow-md px-4 rounded-lg">
              <AccordionTrigger className="font-bold text-xl hover:no-underline">
                Thông tin đăng ký
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 border-t">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-medium mb-4 text-xl">
                          Thời gian đăng ký
                        </h3>
                        <ul className="space-y-2 ps-3 text-gray-600">
                          <li>• Early Bird: 01/09 - 30/09/2024</li>
                          <li>• Đăng ký thường: 01/10 - 30/11/2024</li>
                          <li>• Đăng ký cuối: 01/12 - 10/12/2024</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-4 text-xl">
                          Yêu cầu tham gia
                        </h3>
                        <ul className="space-y-2 ps-3 text-gray-600">
                          <li>• Tuổi từ 18-65</li>
                          <li>• Khám sức khỏe trong 6 tháng</li>
                          <li>• Kinh nghiệm chạy trail tối thiểu</li>
                          <li>• Bảo hiểm thể thao</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-bold text-yellow-800 mb-2">
                        Lưu ý quan trọng
                      </h3>
                      <p className="text-yellow-700 mb-4">
                        Số lượng có hạn. Đăng ký sớm để được ưu đãi giá
                        Early Bird và đảm bảo suất tham gia.
                      </p>
                      <Link href={`/race-registration`}>
                        <Button className="bg-black text-white hover:bg-gray-800">
                          Đăng ký ngay
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Shirt Sizes Section */}
            <AccordionItem value="shirt-sizes" className="shadow-md px-4 rounded-lg">
              <AccordionTrigger className="font-bold text-xl hover:no-underline">
                Size áo thi đấu
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Shirt className="mr-3" size={24} />
                      <h3 className="text-xl font-medium">
                        Bảng size áo chính thức
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {shirtSizes.map((shirt, index) => (
                        <div
                          key={index}
                          className="border rounded-lg p-4 text-center"
                        >
                          <h4 className="text-xl font-medium mb-2">
                            {shirt.size}
                          </h4>
                          <p className="text-lg text-green-600 font-semibold mb-1">
                            {shirt.chest}
                          </p>
                          <p className="text-sm text-gray-600">
                            {shirt.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                      <p className="text-yellow-800 text-sm">
                        <strong>Lưu ý:</strong> Vui lòng chọn size chính xác
                        khi đăng ký. Không thể đổi size sau khi đăng ký thành
                        công.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>

            {/* Required Equipment Section - Now Dynamic */}
            <AccordionItem value="required-equipment" className="shadow-md px-4 rounded-lg">
              <AccordionTrigger className="font-bold text-xl hover:no-underline">
                Trang thiết bị bắt buộc
              </AccordionTrigger>
              <AccordionContent>
                {/* Distance Selection for Equipment */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 pt-8 border-t">
                  {distances.map((distance, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedDistance === distance.name.split(" ")[0]
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        setSelectedDistance(distance.name.split(" ")[0])
                      }
                      className="mb-0"
                    >
                      {distance.name}
                    </Button>
                  ))}
                </div>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Package className="mr-3" size={24} />
                      <h3 className="text-2xl font-bold">
                        Trang thiết bị cho cự ly {selectedDistance}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Mandatory Equipment */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-red-600">
                          🔴 Bắt buộc
                        </h4>
                        <ul className="space-y-2">
                          {requiredEquipmentByDistance[
                            selectedDistance
                          ].mandatory.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-red-600 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended Equipment */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-yellow-600">
                          🟡 Khuyến nghị
                        </h4>
                        <ul className="space-y-2">
                          {requiredEquipmentByDistance[
                            selectedDistance
                          ].recommended.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-yellow-600 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prohibited Items */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-red-600">
                          ❌ Cấm sử dụng
                        </h4>
                        <ul className="space-y-2">
                          {requiredEquipmentByDistance[
                            selectedDistance
                          ].prohibited.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-red-600 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle
                          className="text-red-600 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="font-bold text-red-800 mb-2">
                            Kiểm tra trang thiết bị
                          </h4>
                          <p className="text-red-700 text-sm">
                            BTC sẽ kiểm tra trang thiết bị bắt buộc trước khi
                            xuất phát. Vận động viên thiếu bất kỳ trang thiết
                            bị nào sẽ không được phép tham gia. Yêu cầu trang
                            thiết bị sẽ khác nhau tùy theo cự ly thi đấu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>

            {/* Schedule Section - Improved */}
            <AccordionItem value="schedule" className="shadow-md px-4 rounded-lg">
              <AccordionTrigger className="font-bold text-xl hover:no-underline">
                Lịch trình sự kiện
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Clock className="mr-3" size={24} />
                      <h3 className="text-xl font-medium">
                        Chương trình 2 ngày thi đấu
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {schedule.map((item, index) => (
                        <div
                          key={index}
                          className="border rounded-lg p-6 hover:bg-gray-50 transition-colors"
                        >
                          <div className="grid md:grid-cols-4 gap-4 items-start">
                            <div className="space-y-2">
                              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold text-center">
                                {item.date}
                              </div>
                              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold text-center">
                                {item.time}
                              </div>
                            </div>
                            <div className="md:col-span-1">
                              <div className="flex items-center space-x-2 text-gray-600 mb-2">
                                <MapPin size={16} />
                                <span className="text-sm font-medium">
                                  {item.location}
                                </span>
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <h4 className="font-medium text-lg mb-2">
                                {item.event}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                      <h4 className="font-medium text-blue-800 mb-2">
                        Lưu ý về lịch trình
                      </h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>
                          • Lịch trình có thể thay đổi tùy thuộc vào điều kiện
                          thời tiết
                        </li>
                        <li>
                          • Vận động viên 100K sẽ chạy qua đêm từ 15/12 đến
                          16/12
                        </li>
                        <li>
                          • Tất cả thông tin cập nhật sẽ được thông báo qua
                          email và website
                        </li>
                        <li>• Vui lòng có mặt đúng giờ theo lịch trình</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Sponsors and Partners Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nhà tài trợ & Đối tác
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cảm ơn các nhà tài trợ và đối tác đã đồng hành cùng Măng Đen Ultra
              Trail
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {sponsors
                .filter((ele) => ele.logo && ele.logo)
                .map((sponsor, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 mb-3">
                        <div className="aspect-square flex items-center justify-center bg-white rounded-lg mb-4">
                          {sponsor.logo ? (
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name || `Sponsor ${index + 1}`}
                              className="max-w-full max-h-full object-contain p-2"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-400 text-sm">
                                Logo
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            {/* <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div> */}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default RaceDetails;
