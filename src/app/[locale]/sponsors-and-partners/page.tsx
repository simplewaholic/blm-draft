import { Handshake } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { splitArrayToGroups } from "@/lib/utils";

const SponsorsAndPartnersPage = () => {
  const sponsors = [
    // line 1
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

  const partners = [
    {
      title: "Đối tác Hình ảnh",
      logo: [
        "/images/logo/Anderson-Trucking-Service-Logo.png",
        "/images/logo/Bison-Transport-Logo.png",
        "/images/logo/CMA-CGM-Logo.png",
        "/images/logo/COSCO-Shipping-Group-Logo.png",
      ],
    },
    {
      title: "Đối tác Vận hành hệ thống",
      logo: [
        "/images/logo/FedEx-Logo.png",
        "/images/logo/Forward-Air-Corporation-Logo.png",
      ],
    },
    {
      title: "Đối tác Thi công",
      logo: ["/images/logo/Universal-Logistics-Holdings-Logo.png"],
    },
    {
      title: "Các hệ thống tính điểm",
      logo: [
        "/images/logo/Western-Express-Logo.png",
        "/images/logo/TransAm-Trucking-Logo.png",
      ],
    },
    {
      title: "Đơn vị Xin giấy phép tổ chức",
      logo: ["/images/logo/Schneider-National-Logo.png"],
    },
    {
      title: "Đối tác Quỹ thiện nguyện",
      logo: ["/images/logo/Geopost-Logo.png"],
    },
  ];

  return (
    <div id="sponsors-and-partners" className="pt-20 bg-gray-300">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16 pt-4">
        <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
          <div className="section-circle w-8 h-8">
            <Handshake size={20} />
          </div>
          <span className="font-medium">
            MĂNG ĐEN TRAIL {new Date().getFullYear()}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold">
          Cảm ơn các
          <br />
          <span className="bg-black text-white px-4 py-2 inline-block">
            nhà tài trợ
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Sự thành công của Măng Đen Trail không thể thiếu sự đồng hành của các
          đối tác và nhà tài trợ.
        </p>
      </div>

      {/* Sponsor */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <p className="font-semibold">Office GPS Watch</p>
              <div>
                <Image
                  src="/images/logo/coros.webp"
                  alt="Office GPS Watch"
                  width={350}
                  height={75}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>

            {splitArrayToGroups(sponsors, 3).map((group, index) => (
              <div
                key={index}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
              >
                {group.map((sponsor, idx) => {
                  if (!sponsor.logo && !sponsor.name)
                    return (
                      <div
                        key={`sponsor-${index}-${idx}`}
                        className="hidden md:block"
                      />
                    );
                  return (
                    <div
                      className="text-center"
                      key={`sponsor-${index}-${idx}`}
                    >
                      <p className="text-wrap whitespace-pre-line font-semibold">
                        {sponsor.name}
                      </p>
                      {sponsor.logo ? (
                        <div>
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name || "Sponsor Logo"}
                            width={200}
                            height={50}
                            className="mx-auto"
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-2 pb-2 bg-white">
        <div className="max-w-5xl mx-auto border-t border-t-gray-300"/>
      </div>

      {/* Partners Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Đối tác
            </h2>
            <p className="text-gray-600">
              Chúng tôi xin gửi lời cảm ơn chân thành đến các đối tác đã đồng
              hành cùng Măng Đen Trail trong suốt thời gian qua.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className={`grid grid-cols-1 md:grid-cols-2 mb-2 ${partner.logo.length <= 2 ? "items-center" : ""}`}
              >
                <p className={`font-semibold ${partner.logo.length > 2 ? "mt-8" : ""}`}>{partner.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {partner.logo.map((logo, logoIndex) => (
                    <div key={`partner-logo-${index}-${logoIndex}`}>
                      <Image
                        src={logo}
                        alt={`Partner Logo ${index}-${logoIndex}`}
                        width={200}
                        height={50}
                        className="mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Trở thành đối tác của Măng Đen Trail {new Date().getFullYear()}
            </h2>
            <p className="text-xl text-gray-600">
              Cùng chúng tôi tạo nên một sự kiện thể thao đỉnh cao tại cao
              nguyên Kon Tum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sponsors@mangdentrail.vn">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black hover:text-gray-500"
                >
                  Liên hệ
                </Button>
              </a>
              <a download href={"/documents/MangDen_Proposal.jpg"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-gray-100 text-black hover:text-gray-500"
                >
                  Quyền lợi đối tác
                </Button>
              </a>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              Email:{" "}
              <a
                href="mailto:sponsors@mangdentrail.vn"
                className="underline hover:text-gray-500"
              >
                sponsors@mangdentrail.vn
              </a>{" "}
              | Hotline:{" "}
              <a href="tel:0909123456" className="underline hover:text-gray-500">
                0909 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsAndPartnersPage;
