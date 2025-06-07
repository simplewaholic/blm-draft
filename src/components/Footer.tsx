
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold">LOVE</span>
              </div>
              <span className="font-bold text-2xl">MOUNTAIN!</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Tổ chức các giải chạy bộ chuyên nghiệp, 
              kết nối cộng đồng yêu thể thao và lan tỏa 
              tinh thần sống khỏe mạnh.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Giải chạy</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">Tin tức</a></li>
              <li><a href="#results" className="text-gray-300 hover:text-white transition-colors">Kết quả</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Đăng ký sự kiện</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tra cứu kết quả</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chứng nhận tham gia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hướng dẫn luyện tập</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hỗ trợ kỹ thuật</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>123 Đường ABC, Quận 1</div>
                  <div>TP. Đà Nẵng, Việt Nam</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">1900 1234</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">hello@belovemoutain.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 BELOVEMOUTAIN! Tất cả quyền được bảo lưu.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Chính sách cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
