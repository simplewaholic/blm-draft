"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar, MapPin, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const RaceRegistration = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [selectedDistance, setSelectedDistance] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    experience: '',
    tshirtSize: '',
    agreeTerms: false,
    agreeNewsletter: false
  });

  // Mock data - in a real app, you'd fetch this based on the ID
  const raceData = {
    id: id || "1",
    title: "Măng Đen Ultra Trail 2024",
    date: "15 Tháng 12, 2024",
    location: "Kon Tum - Măng Đen",
    status: "Đang mở đăng ký",
    image: "bg-gradient-to-br from-green-600 to-emerald-700",
    distances: [
      {
        name: "25K Trail",
        price: "450.000đ",
        priceEarly: "350.000đ",
        elevation: "+800m",
        timeLimit: "4 giờ",
        slots: "200 vận động viên",
        remaining: "45 chỗ còn lại"
      },
      {
        name: "50K Ultra",
        price: "650.000đ",
        priceEarly: "550.000đ",
        elevation: "+1.500m",
        timeLimit: "8 giờ",
        slots: "150 vận động viên",
        remaining: "23 chỗ còn lại"
      },
      {
        name: "100K Ultra",
        price: "850.000đ",
        priceEarly: "750.000đ",
        elevation: "+3.000m",
        timeLimit: "16 giờ",
        slots: "100 vận động viên",
        remaining: "12 chỗ còn lại"
      }
    ]
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDistance) {
      alert('Vui lòng chọn cự ly tham gia');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Vui lòng đồng ý với điều khoản và điều kiện');
      return;
    }
    
    console.log('Registration data:', { ...formData, distance: selectedDistance });
    alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
  };

  const selectedDistanceData = raceData.distances.find(d => d.name === selectedDistance);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 relative">
        <div className={`h-64 ${raceData.image} relative`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold">{raceData.title}</h1>
              <p className="text-lg">Đăng ký tham gia</p>
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

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Link href={`/races/${id}`} className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                <ArrowLeft size={20} />
                <span>Quay lại chi tiết giải chạy</span>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Registration Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User size={24} />
                      <span>Thông tin đăng ký</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Distance Selection */}
                      <div className="space-y-4">
                        <Label className="text-base font-semibold">Chọn cự ly tham gia *</Label>
                        <div className="grid gap-4">
                          {raceData.distances.map((distance) => (
                            <div key={distance.name} className="border rounded-lg p-4">
                              <div className="flex items-center space-x-3">
                                <input
                                  type="radio"
                                  id={distance.name}
                                  name="distance"
                                  value={distance.name}
                                  checked={selectedDistance === distance.name}
                                  onChange={(e) => setSelectedDistance(e.target.value)}
                                  className="w-4 h-4"
                                />
                                <label htmlFor={distance.name} className="flex-1 cursor-pointer">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="font-bold">{distance.name}</h3>
                                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                        <span>Độ cao: {distance.elevation}</span>
                                        <span>Giới hạn: {distance.timeLimit}</span>
                                      </div>
                                      <div className="text-sm text-orange-600 mt-1">{distance.remaining}</div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-lg font-bold text-green-600">{distance.priceEarly}</div>
                                      <div className="text-sm text-gray-500 line-through">{distance.price}</div>
                                      <div className="text-xs text-red-600">Early Bird</div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Họ và tên *</Label>
                          <Input
                            id="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Số điện thoại *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthDate">Ngày sinh *</Label>
                          <Input
                            id="birthDate"
                            type="date"
                            required
                            value={formData.birthDate}
                            onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="gender">Giới tính *</Label>
                          <select
                            id="gender"
                            required
                            value={formData.gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          >
                            <option value="">Chọn giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tshirtSize">Size áo *</Label>
                          <select
                            id="tshirtSize"
                            required
                            value={formData.tshirtSize}
                            onChange={(e) => handleInputChange('tshirtSize', e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          >
                            <option value="">Chọn size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </div>
                      </div>

                      {/* Emergency Contact */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact">Người liên hệ khẩn cấp *</Label>
                          <Input
                            id="emergencyContact"
                            type="text"
                            required
                            value={formData.emergencyContact}
                            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">SĐT người liên hệ khẩn cấp *</Label>
                          <Input
                            id="emergencyPhone"
                            type="tel"
                            required
                            value={formData.emergencyPhone}
                            onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-2">
                        <Label htmlFor="experience">Kinh nghiệm chạy trail</Label>
                        <Textarea
                          id="experience"
                          placeholder="Mô tả ngắn về kinh nghiệm chạy trail của bạn..."
                          value={formData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalConditions">Tình trạng sức khỏe đặc biệt</Label>
                        <Textarea
                          id="medicalConditions"
                          placeholder="Nếu có vấn đề sức khỏe cần lưu ý..."
                          value={formData.medicalConditions}
                          onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                        />
                      </div>

                      {/* Terms and Conditions */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="agreeTerms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                          />
                          <Label htmlFor="agreeTerms" className="text-sm">
                            Tôi đồng ý với <a href="#" className="text-blue-600 hover:underline">điều khoản và điều kiện</a> *
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="agreeNewsletter"
                            checked={formData.agreeNewsletter}
                            onCheckedChange={(checked) => handleInputChange('agreeNewsletter', checked)}
                          />
                          <Label htmlFor="agreeNewsletter" className="text-sm">
                            Tôi muốn nhận thông tin về các giải chạy sắp tới
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                        Đăng ký và thanh toán
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Tóm tắt đăng ký</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">{raceData.title}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{raceData.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>{raceData.location}</span>
                        </div>
                      </div>
                    </div>

                    {selectedDistanceData && (
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Cự ly đã chọn:</h4>
                        <div className="bg-gray-50 p-3 rounded">
                          <div className="font-medium">{selectedDistanceData.name}</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <div>Độ cao: {selectedDistanceData.elevation}</div>
                            <div>Giới hạn: {selectedDistanceData.timeLimit}</div>
                          </div>
                          <div className="mt-2">
                            <div className="text-lg font-bold text-green-600">{selectedDistanceData.priceEarly}</div>
                            <div className="text-xs text-red-600">Giá Early Bird</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Bao gồm:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Áo thi đấu chính thức</li>
                        <li>• Huy chương hoàn thành</li>
                        <li>• Chứng nhận điện tử</li>
                        <li>• Bảo hiểm thể thao</li>
                        <li>• Hỗ trợ y tế</li>
                        <li>• Ăn uống tại các trạm</li>
                      </ul>
                    </div>

                    {selectedDistanceData && (
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Tổng cộng:</span>
                          <span className="text-green-600">{selectedDistanceData.priceEarly}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RaceRegistration;