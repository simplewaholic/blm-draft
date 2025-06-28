"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { Calendar, Clock, ArrowLeft, Share2, User, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsDetailsContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // Mock data - in a real app, you'd fetch this based on the ID
  const article = {
    id: id || "1",
    title: "5 Mẹo Luyện Tập Cho Người Mới Bắt Đầu Chạy Bộ",
    excerpt: "Hướng dẫn chi tiết cho những người mới bắt đầu hành trình chạy bộ, từ việc chọn giày đến lập kế hoạch tập luyện hiệu quả.",
    content: `
      <p>Chạy bộ là một trong những hình thức tập luyện tuyệt vời nhất để cải thiện sức khỏe tim mạch, giảm cân và tăng cường sức bền. Tuy nhiên, đối với những người mới bắt đầu, việc bắt đầu chạy bộ có thể khiến họ cảm thấy choáng ngợp.</p>
      
      <h2>1. Chọn giày chạy bộ phù hợp</h2>
      <p>Đây là yếu tố quan trọng nhất để bắt đầu. Một đôi giày chạy bộ tốt sẽ hỗ trợ chân bạn, giảm nguy cơ chấn thương và làm cho việc chạy trở nên thoải mái hơn. Hãy đến cửa hàng chuyên dụng để được tư vấn và thử nhiều loại giày khác nhau.</p>
      
      <h2>2. Bắt đầu từ từ</h2>
      <p>Đừng cố gắng chạy quá nhanh hoặc quá xa ngay từ đầu. Hãy bắt đầu với việc đi bộ nhanh và chạy nhẹ luân phiên. Ví dụ: chạy 2 phút, đi bộ 1 phút, lặp lại 8-10 lần.</p>
      
      <h2>3. Thiết lập thói quen</h2>
      <p>Tần suất quan trọng hơn cường độ. Tốt nhất là chạy 3-4 lần mỗi tuần với thời gian ngắn hơn là chạy 1 lần dài trong tuần. Điều này giúp cơ thể thích nghi dần dần.</p>
      
      <h2>4. Lắng nghe cơ thể</h2>
      <p>Đau nhức nhẹ sau khi tập là bình thường, nhưng nếu bạn cảm thấy đau sắc hoặc khó chịu kéo dài, hãy nghỉ ngơi. Việc nghỉ ngơi cũng là một phần quan trọng của quá trình tập luyện.</p>
      
      <h2>5. Đặt mục tiêu thực tế</h2>
      <p>Hãy đặt những mục tiêu nhỏ và có thể đạt được. Ví dụ: chạy được 5km liên tục sau 6 tuần, hoặc tham gia một giải chạy 10km trong 3 tháng tới.</p>
    `,
    date: "15 Tháng 11, 2024",
    readTime: "5 phút đọc",
    category: "Hướng dẫn",
    author: "Nguyễn Văn A",
    views: "1.2K",
    image: "bg-gradient-to-br from-blue-400 to-blue-600"
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Chế Độ Dinh Dưỡng Tối Ưu Cho Vận Động Viên",
      excerpt: "Tìm hiểu về chế độ ăn uống khoa học...",
      date: "10 Tháng 11, 2024",
      readTime: "6 phút đọc",
      image: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "Xu Hướng Công Nghệ Trong Thể Thao Chạy Bộ",
      excerpt: "Cập nhật những công nghệ mới nhất...",
      date: "8 Tháng 11, 2024", 
      readTime: "7 phút đọc",
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
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 relative">
        <div className={`h-80 ${article.image} relative`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white space-y-4">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  {article.title}
                </h1>
                <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye size={16} />
                    <span>{article.views} lượt xem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Link href="/news" className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                <ArrowLeft size={20} />
                <span>Quay lại trang tin tức</span>
              </Link>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8">
                    {/* Article Actions */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b">
                      <div className="text-sm text-gray-600">
                        Chia sẻ bài viết này:
                      </div>
                      <Button size="sm" variant="outline">
                        <Share2 size={16} className="mr-2" />
                        Chia sẻ
                      </Button>
                    </div>

                    {/* Article Body */}
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>

                    {/* Article Footer */}
                    <div className="mt-12 pt-8 border-t">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          Tác giả: <span className="font-medium">{article.author}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Share2 size={16} className="mr-2" />
                          Chia sẻ
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Related Articles */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Bài viết liên quan</h3>
                      <div className="space-y-4">
                        {relatedArticles.map((related) => (
                          <Link key={related.id} href={`/new-details?id=${related.id}`} className="block group">
                            <div className="space-y-2">
                              <div className={`h-24 ${related.image} rounded`}></div>
                              <h4 className="font-medium text-sm group-hover:text-gray-600 transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Calendar size={12} />
                                <span>{related.date}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Đăng ký nhận tin</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Nhận những tin tức và mẹo hay nhất về chạy bộ
                      </p>
                      <div className="space-y-3">
                        <input 
                          type="email" 
                          placeholder="Email của bạn"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                        />
                        <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800">
                          Đăng ký
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const NewsDetail = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    }>
      <NewsDetailsContent />
    </Suspense>
  );
};

export default NewsDetail;