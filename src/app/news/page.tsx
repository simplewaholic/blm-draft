
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const articles = [
    {
      id: 1,
      title: "5 Mẹo Luyện Tập Cho Người Mới Bắt Đầu Chạy Bộ",
      excerpt: "Hướng dẫn chi tiết cho những người mới bắt đầu hành trình chạy bộ, từ việc chọn giày đến lập kế hoạch tập luyện hiệu quả.",
      date: "15 Tháng 11, 2024",
      readTime: "5 phút đọc",
      category: "Hướng dẫn",
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Những Câu Chuyện Truyền Cảm Hứng Từ Marathon Hà Nội 2024",
      excerpt: "Chia sẻ những câu chuyện đầy cảm xúc và ý nghĩa từ các vận động viên tham gia Marathon Hà Nội vừa qua.",
      date: "10 Tháng 11, 2024",
      readTime: "8 phút đọc",
      category: "Câu chuyện",
      image: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "Chế Độ Dinh Dưỡng Tối Ưu Cho Vận Động Viên Chạy Bộ",
      excerpt: "Tìm hiểu về chế độ ăn uống khoa học, giúp nâng cao hiệu suất và phục hồi nhanh chóng sau các buổi tập.",
      date: "8 Tháng 11, 2024",
      readTime: "6 phút đọc",
      category: "Sức khỏe",
      image: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "Xu Hướng Công Nghệ Trong Thể Thao Chạy Bộ 2024",
      excerpt: "Cập nhật những công nghệ mới nhất trong lĩnh vực chạy bộ, từ thiết bị đeo tay đến ứng dụng theo dõi sức khỏe.",
      date: "5 Tháng 11, 2024",
      readTime: "7 phút đọc",
      category: "Công nghệ",
      image: "bg-gradient-to-br from-purple-400 to-purple-600"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Hướng dẫn": "bg-blue-100 text-blue-700",
      "Câu chuyện": "bg-green-100 text-green-700",
      "Sức khỏe": "bg-orange-100 text-orange-700",
      "Công nghệ": "bg-purple-100 text-purple-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="news" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <div className="section-circle w-8 h-8">
              <span className="text-xs">📰</span>
            </div>
            <span className="font-medium">TIN TỨC & BLOG</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Cập nhật<br />
            <span className="bg-black text-white px-4 py-2 inline-block transform -rotate-1">
              mới nhất
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Theo dõi những thông tin, mẹo hay và câu chuyện truyền cảm hứng 
            từ cộng đồng chạy bộ BELOVEMOUTAIN!
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className={`${articles[0].image} min-h-[300px] relative`}>
                <div className="absolute top-6 left-6">
                  <Badge className={getCategoryColor(articles[0].category)}>
                    {articles[0].category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-600">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center space-x-2 font-medium hover:underline group">
                    <span>Đọc tiếp</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-48 ${article.image} relative`}>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 text-sm font-medium hover:underline group">
                  <span>Đọc tiếp</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
