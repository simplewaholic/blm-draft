
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <div className="section-circle w-8 h-8">
              <MessageCircle size={16} />
            </div>
            <span className="font-medium">LIÊN HỆ VỚI CHÚNG TÔI</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Kết nối<br />
            <span className="bg-black text-white px-4 py-2 inline-block ">
              cùng chúng tôi
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Có câu hỏi về các giải chạy? Cần hỗ trợ đăng ký? 
            Đội ngũ BELOVEMOUTAIN! luôn sẵn sàng hỗ trợ bạn 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="section-circle mx-auto">
                  <Phone size={20} />
                </div>
                <h3 className="font-bold">Hotline 24/7</h3>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">1900 1234</div>
                  <div className="text-sm text-gray-600">Miễn phí từ tất cả nhà mạng</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="section-circle mx-auto">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold">Email</h3>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">hello@belovemoutain.vn</div>
                  <div className="text-sm text-gray-600">Phản hồi trong 2 giờ</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="section-circle mx-auto">
                  <MapPin size={20} />
                </div>
                <h3 className="font-bold">Văn phòng</h3>
                <div className="space-y-2">
                  <div className="text-sm">123 Đường ABC, Quận 1</div>
                  <div className="text-sm text-gray-600">TP. Đà Nẵng</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Nhập email của bạn"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Chủ đề</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                        <option>Chọn chủ đề</option>
                        <option>Đăng ký sự kiện</option>
                        <option>Hỗ trợ kỹ thuật</option>
                        <option>Đối tác</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tin nhắn *</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800 h-12">
                    <MessageCircle className="mr-2" size={18} />
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Clock className="mx-auto mb-3" size={24} />
            <h4 className="font-bold mb-2">Giờ làm việc</h4>
            <div className="text-sm text-gray-600">
              <div>T2 - T6: 8:00 - 18:00</div>
              <div>T7 - CN: 9:00 - 17:00</div>
            </div>
          </Card>

          <Card className="text-center p-6">
            <Users className="mx-auto mb-3" size={24} />
            <h4 className="font-bold mb-2">Cộng đồng</h4>
            <div className="text-sm text-gray-600">
              <div>Facebook: BELOVEMOUTAIN!</div>
              <div>Instagram: @belovemoutain_running</div>
            </div>
          </Card>

          <Card className="text-center p-6">
            <MessageCircle className="mx-auto mb-3" size={24} />
            <h4 className="font-bold mb-2">Chat trực tuyến</h4>
            <div className="text-sm text-gray-600">
              <div>Hỗ trợ tức thì</div>
              <div>8:00 - 22:00 hằng ngày</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
