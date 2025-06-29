import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import Link from 'next/link';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Ultra Marathon",
      date: "22 Tháng 1, 2025",
      location: "Hà Nội",
      participants: "2.500+",
      status: "Đang mở đăng ký",
      price: "350.000đ",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      distances: ["5K", "10K", "21K"]
    },
    {
      id: 2,
      title: "Moutain Marathon",
      date: "15 Tháng 3, 2025",
      location: "Đà Nẵng",
      participants: "1.800+",
      status: "Đang mở đăng ký",
      price: "420.000đ",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      distances: ["10K", "21K", "42K"]
    },
    {
      id: 3,
      title: "Jungle Marathon",
      date: "28 Tháng 4, 2025",
      location: "TP. Hồ Chí Minh",
      participants: "3.200+",
      status: "Đang mở đăng ký",
      price: "280.000đ",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      distances: ["5K", "10K"]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
            <div className="section-circle w-8 h-8">
              <Trophy size={16} />
            </div>
            <span className="font-medium">CÁC GIẢI CHẠY</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Tham gia ngay<br />
            <span className="bg-black text-white px-4 py-2 inline-block transform">
              các sự kiện
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá những giải chạy đa dạng từ 5K đến marathon đầy thử thách, 
            phù hợp với mọi trình độ từ người mới bắt đầu đến vận động viên chuyên nghiệp.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-48 ${event.image} relative`}>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {event.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="section-circle bg-white/90 text-black">
                    <span className="text-xs">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-600">Cự ly:</div>
                  <div className="flex gap-2">
                    {event.distances.map((distance) => (
                      <span key={distance} className="bg-gray-100 px-3 py-1 rounded text-sm">
                        {distance}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <Link href="/race-details">
                    <Button className="bg-black text-white">
                      Xem chi tiết
                    </Button>
                  </Link>
                  {/* <Button className="bg-black text-white hover:bg-gray-800">
                    Đăng ký
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            Xem tất cả giải chạy
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Events;
