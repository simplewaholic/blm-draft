
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

const FeaturedRaces = () => {
  const featuredRaces = [
    {
      id: 1,
      title: "Măng Đen Ultra Trail 2024",
      date: "15 Tháng 12, 2024",
      location: "Kon Tum - Măng Đen",
      status: "Đang mở đăng ký",
      price: "850.000đ",
      image: "bg-gradient-to-br from-green-600 to-emerald-700",
      distances: ["25K", "50K", "100K"],
      featured: true,
      edition: "Lần 3"
    },
    {
      id: 2,
      title: "Măng Đen Forest Run",
      date: "20 Tháng 2, 2025",
      location: "Kon Tum - Măng Đen",
      status: "Đang mở đăng ký",
      price: "450.000đ",
      image: "bg-gradient-to-br from-blue-600 to-cyan-700",
      distances: ["10K", "21K"],
      featured: true,
      edition: "Lần 1"
    }
  ];

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-yellow-600" />
            <span className="font-medium text-yellow-800">GIẢI CHẠY NỔI BẬT</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold">
            Khám phá những
            <span className="block bg-black text-white px-4 py-2 inline-block transform mt-2">
              trải nghiệm đặc biệt
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tham gia các giải chạy trail đầy thử thách tại Măng Đen, 
            nơi thiên nhiên hoang sơ và cung đường tuyệt đẹp đang chờ đón bạn.
          </p>
        </div>

        {/* Featured Races Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredRaces.map((race, index) => (
            <Card key={race.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-56 ${race.image} relative`}>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    NỔI BẬT
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {race.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="section-circle bg-white/90 text-black">
                    <span className="text-xs">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {race.edition}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                  {race.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{race.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{race.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-600">Cự ly:</div>
                  <div className="flex gap-2">
                    {race.distances.map((distance) => (
                      <span key={distance} className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">
                        {distance}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  {/* <span className="text-lg font-bold">{race.price}</span> */}
                  <Link href="/race-details">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            Xem tất cả giải chạy
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedRaces;
