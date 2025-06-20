"use client";

import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { useEffect, useState } from "react";

const slidesCard = [
	{
		image: "/images/hero/slide1.jpg",
		title: "Khám phá",
		subtitle: "Vẻ đẹp thiên nhiên",
		description:
			"Trải nghiệm những cung đường chạy bộ tuyệt đẹp qua rừng núi, biển cả và thành phố",
	},
	{
		image: "/images/hero/slide2.jpg",
		title: "Thử thách",
		subtitle: "Bản thân",
		description:
			"Vượt qua giới hạn của chính mình với những giải chạy đầy thử thách",
	},
	{
		image: "/images/hero/slide3.jpg",
		title: "Kết nối",
		subtitle: "Cộng đồng",
		description: "Gặp gỡ và chia sẻ đam mê với những người yêu thích chạy bộ",
	},
];

const Hero = () => {
	const isMobile = useIsMobile();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentSlideCard, setCurrentSlideCard] = useState(0);

	const slides = [
		{
			image: "/images/hero/slide1.jpg",
			title: "Khám phá",
			subtitle: "Vẻ đẹp thiên nhiên",
			description:
				"Trải nghiệm những cung đường chạy bộ tuyệt đẹp qua rừng núi, biển cả và thành phố",
		},
		{
			image: "/images/hero/slide2.jpg",
			title: "Thử thách",
			subtitle: "Bản thân",
			description:
				"Vượt qua giới hạn của chính mình với những giải chạy đầy thử thách",
		},
		{
			image: "/images/hero/slide3.jpg",
			title: "Kết nối",
			subtitle: "Cộng đồng",
			description: "Gặp gỡ và chia sẻ đam mê với những người yêu thích chạy bộ",
		},
	];

	useEffect(() => {
		const timerCard = setInterval(() => {
			setCurrentSlideCard((prev) => (prev + 1) % slidesCard.length);
		}, 5000);

		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);

		return () => {
			clearInterval(timer);
			clearInterval(timerCard);
		};
	}, []);

	return (
		<section id="home" className="relative h-[90vh]">
			{/* Background Slides - Full size */}
			<div className="absolute inset-0">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							src={slide.image}
							alt={slide.title}
							fill
							className="object-cover"
							priority={index === 0}
						/>
						<div className="absolute inset-0 bg-black/50" />
					</div>
				))}
			</div>

			{/* Content Container */}
			<div className="relative h-full flex items-center">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
						{/* Left content */}
						<div className="max-w-2xl pt-12">
							<div className="space-y-6">
								<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
									<div className="section-circle w-8 h-8">
										<span className="text-xs">🏃</span>
									</div>
									<span className="font-medium text-white">
										GIẢI CHẠY
									</span>
								</div>

								<h1 className="text-4xl lg:text-6xl font-bold text-white">
									{slides[currentSlide].title}
									<br />
									<span className="bg-black text-white px-4 py-2 inline-block ">
										{slides[currentSlide].subtitle}
									</span>
								</h1>

								<p className="text-white/90 text-lg max-w-xl">
									{slides[currentSlide].description}
								</p>

								<div className="flex flex-wrap gap-4">
									<Button
										size={isMobile ? "default" : "lg"}
										className="bg-black text-white hover:bg-gray-800"
									>
										Khám phá ngay
										<ChevronRight className="ml-2 h-4 w-4" />
									</Button>
									{/* <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-white text-white hover:bg-white/10">
                    Tìm hiểu thêm
                  </Button> */}
								</div>
							</div>
						</div>

						{/* Right content - Optimized size */}
						<div className={`relative ${isMobile ? "z-10" : ""}`}>
							<div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 transform hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
								<div className="space-y-4">
									<div className="relative w-full h-48">
										<Image
											src={slides[currentSlide].image}
											alt={slides[currentSlide].title}
											fill
											className="rounded-lg object-cover"
										/>
									</div>

									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-gray-900">
											{slides[currentSlide].title}
										</h3>
										<p className="text-gray-600">
											{slides[currentSlide].description}
										</p>

										<div className="flex flex-col space-y-2">
											<div className="flex items-center gap-2 text-gray-600">
												<Calendar className="h-5 w-5" />
												<span>24 June, 2025</span>
											</div>
											<div className="flex items-center gap-2 text-gray-600">
												<MapPin className="h-5 w-5" />
												<span>Hạ Long, Quảng Ninh</span>
											</div>
										</div>

										<div className="flex justify-between items-center pt-2">
											<Button variant="outline" size="sm">
												Chi tiết{" "}
												<ChevronRight className="h-4 w-4 ml-1" />
											</Button>
											<Button size="sm">
												Đăng ký ngay{" "}
												<Play className="h-4 w-4 ml-1" />
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Slide Indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-all ${
							index === currentSlide ? "bg-white w-8" : "bg-white/50"
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
