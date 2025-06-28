
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Download, Search, Medal } from 'lucide-react';

const Results = () => {
  const recentEvents = [
    {
      id: 1,
      name: "Ultra Marathon 2024",
      date: "15 Tháng 10, 2024",
      location: "TP. Hồ Chí Minh",
      participants: 3420,
      status: "Hoàn thành",
      topResults: [
        { rank: 1, name: "Nguyễn Văn A", time: "2:35:42", category: "Nam - 21K" },
        { rank: 2, name: "Trần Thị B", time: "2:48:15", category: "Nữ - 21K" },
        { rank: 3, name: "Lê Minh C", time: "2:52:30", category: "Nam - 21K" }
      ]
    },
    {
      id: 2,
      name: "Moutain Marathon",
      date: "28 Tháng 9, 2024", 
      location: "Hà Nội",
      participants: 2150,
      status: "Hoàn thành",
      topResults: [
        { rank: 1, name: "Hoàng Văn D", time: "18:45", category: "Nam - 5K" },
        { rank: 2, name: "Nguyễn Thị E", time: "21:32", category: "Nữ - 5K" },
        { rank: 3, name: "Phan Minh F", time: "22:18", category: "Nam - 5K" }
      ]
    },
    {
      id: 3,
      name: "Jungle Marathon",
      date: "10 Tháng 9, 2024",
      location: "Đà Nẵng", 
      participants: 1890,
      status: "Hoàn thành",
      topResults: [
        { rank: 1, name: "Vũ Thị G", time: "1:45:22", category: "Nữ - 10K" },
        { rank: 2, name: "Đặng Văn H", time: "1:48:35", category: "Nam - 10K" },
        { rank: 3, name: "Bùi Thị I", time: "1:52:41", category: "Nữ - 10K" }
      ]
    }
  ];

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return "bg-yellow-100 text-yellow-800";
      case 2: return "bg-gray-100 text-gray-800"; 
      case 3: return "bg-orange-100 text-orange-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return rank;
    }
  };

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
            <div className="section-circle w-8 h-8">
              <Trophy size={16} />
            </div>
            <span className="font-medium">KẾT QUẢ GIẢI CHẠY</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Tra cứu<br />
            <span className="bg-black text-white px-4 py-2 inline-block transform rotate-1">
              kết quả
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tìm kiếm kết quả thi đấu, chứng nhận tham gia và hình ảnh từ các sự kiện 
            đã diễn ra. Tất cả đều được lưu trữ và cập nhật đầy đủ.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-gray-300 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-center">Tìm kiếm kết quả của bạn</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Nhập tên của bạn"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option>Chọn sự kiện</option>
                <option>Huynh Ngọc Marathon 2024</option>
                <option>Phạm Anh Night Run</option>
                <option>Sheena Ultra Challenge</option>
              </select>
              <Button className="bg-black text-white hover:bg-gray-800 h-12">
                <Search className="mr-2" size={18} />
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Events Results */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Kết quả gần đây</h3>
          
          {recentEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Event Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="section-circle w-10 h-10">
                        <Medal size={18} />
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        {event.status}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-bold">{event.name}</h4>
                    
                    <div className="space-y-2 text-gray-600">
                      <div>📅 {event.date}</div>
                      <div>📍 {event.location}</div>
                      <div>👥 {event.participants.toLocaleString()} người tham gia</div>
                    </div>

                    <div className="flex gap-3">
                      {/* <Button size="sm" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                        <Download className="mr-2" size={16} />
                        Kết quả đầy đủ
                      </Button> */}
                      <Button className="bg-black text-white">
                        📸 Hình ảnh
                      </Button>
                    </div>
                  </div>

                  {/* Top Results */}
                  <div className="lg:col-span-2">
                    <h5 className="font-bold mb-4">🏆 Top 3 kết quả nổi bật</h5>
                    <div className="space-y-3">
                      {event.topResults.map((result) => (
                        <div key={`${event.id}-${result.rank}`} 
                             className="flex items-center justify-between p-4 bg-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankColor(result.rank)}`}>
                              {getRankIcon(result.rank)}
                            </div>
                            <div>
                              <div className="font-medium">{result.name}</div>
                              <div className="text-sm text-gray-600">{result.category}</div>
                            </div>
                          </div>
                          <div className="text-lg font-bold">{result.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-black text-white">
            Xem tất cả kết quả
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
