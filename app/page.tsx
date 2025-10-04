"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X, Globe, Users, Award, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const translations = {
  id: {
    nav: {
      about: "Tentang Kami",
      products: "Produk",
      contact: "Kontak",
    },
    hero: {
      title: "Healthiness From Nature, Feel The Eastern Luxury",
      description:
        "Royalle Bird's Nest adalah perusahaan Indonesia yang berfokus pada produksi, pengolahan, dan distribusi sarang burung walet berkualitas tinggi untuk pasar domestik dan internasional. Kami menggabungkan pengalaman bisnis keluarga selama lebih dari 15 tahun dengan inovasi untuk menghadirkan produk terbaik bagi Anda.",
      cta1: "Lihat Produk Kami",
      cta2: "Pelajari Lebih Lanjut",
    },
    products: {
      mangkok: {
        name: "Royalle Mangkok",
        description: "Kualitas super premium dengan kebersihan hingga 100%",
      },
      indomie: {
        name: "Royalle Indomie",
        description: "Inovasi kesehatan dan kepraktisan dengan cita rasa premium",
      },
      lempengan: {
        name: "Royalle Lempengan",
        description: "Pilihan premium untuk kebutuhan industri dan konsumsi",
      },
    },
    about: {
      title: "Tentang Kami",
      storyTitle: "Sejarah Kami",
      story:
        "Royalle Bird's Nest didirikan pada tahun 2025, berawal dari bisnis keluarga di bidang perdagangan sarang walet yang telah dimulai sejak 2011. Melihat potensi besar Indonesia sebagai pemasok 85% bahan baku sarang walet dunia, kami bertransformasi menjadi industri pengolahan produk siap konsumsi dengan standar kualitas internasional yang ketat.",
      vision: "Visi",
      visionText:
        "Menjadi perusahaan Indonesia terdepan dalam industri sarang walet yang mampu menembus pasar global dengan produk inovatif, sehat, dan berkualitas premium.",
      mission: "Misi",
      missionText:
        "Mengangkat potensi lokal Indonesia ke pasar internasional melalui inovasi, integritas, dan kemitraan strategis jangka panjang.",
      advantagesTitle: "Keunggulan Kami",
      advantages: [
        {
          title: "Jaringan Langsung ke Petani",
          description:
            "Kami bekerja sama langsung dengan petani walet di berbagai daerah di Indonesia, termasuk Sumatera, Kalimantan, dan Sulawesi, untuk memastikan kualitas bahan baku terbaik.",
        },
        {
          title: "Tim Manajemen Berpengalaman",
          description:
            "Dipimpin oleh generasi muda yang visioner dengan dukungan tim berpengalaman lebih dari 20 tahun di industri walet.",
        },
        {
          title: "Inovasi Produk",
          description:
            'Kami menjadi pelopor produk "Indomie Sarang Walet" di Indonesia, membuka peluang pasar yang baru dan modern.',
        },
      ],
    },
    productsCatalog: {
      title: "Katalog Produk Royalle Nest",
      subtitle: "Produk sarang burung walet premium dengan standar kualitas internasional",
      specs: {
        grade: "Grade:",
        color: "Warna:",
        cleanliness: "Kebersihan:",
        fiber: "Serat:",
        moisture: "Kadar Air:",
      },
      mangkok: {
        grade: "Super Premium",
        color: "Putih Natural / Ivory",
        cleanliness: "95-100% Clean",
        fiber: "±85%",
        moisture: "8-12%",
      },
      indomie: {
        grade: "Premium Ekspor",
        color: "Putih Natural / Ivory",
        cleanliness: "95-98% Clean",
        fiber: "±70%",
        moisture: "0-5%",
      },
      lempengan: {
        grade: "Premium / Industri",
        color: "Putih Natural / Ivory",
        cleanliness: "95-100% Clean",
        fiber: "±60-70%",
        moisture: "8-12%",
      },
      innovationTitle: "Produk Inovasi Mendatang",
      innovationText:
        "Kami juga sedang melakukan riset dan pengembangan untuk produk siap minum (Ready-to-Drink) yang praktis dan menyehatkan.",
    },
    contact: {
      title: "Hubungi Kami",
      infoTitle: "Informasi Kontak",
      phone: "Telepon / WhatsApp",
      email: "Email",
      address: "Alamat Kantor & Pabrik",
      addressText: "Citapen, Kec. Ciawi,\nKabupaten Bogor, Jawa Barat",
      formTitle: "Kirim Pesan",
      formName: "Nama Lengkap",
      formEmail: "Email",
      formMessage: "Pesan Anda",
      formSubmit: "Kirim Pesan",
    },
    footer: {
      tagline: "Healthiness From Nature, Feel The Eastern Luxury",
      copyright: "© 2025 Royalle Bird's Nest. All rights reserved.",
    },
  },
  en: {
    nav: {
      about: "About Us",
      products: "Products",
      contact: "Contact",
    },
    hero: {
      title: "Healthiness From Nature, Feel The Eastern Luxury",
      description:
        "Royalle Bird's Nest is an Indonesian company focused on the production, processing, and distribution of high-quality bird's nest for domestic and international markets. We combine over 15 years of family business experience with innovation to bring you the best products.",
      cta1: "View Our Products",
      cta2: "Learn More",
    },
    products: {
      mangkok: {
        name: "Royalle Mangkok",
        description: "Super premium quality with up to 100% cleanliness",
      },
      indomie: {
        name: "Royalle Indomie",
        description: "Health and convenience innovation with premium taste",
      },
      lempengan: {
        name: "Royalle Lempengan",
        description: "Premium choice for industrial and consumption needs",
      },
    },
    about: {
      title: "About Us",
      storyTitle: "Our Story",
      story:
        "Royalle Bird's Nest was founded in 2025, originating from a family business in bird's nest trading that started in 2011. Recognizing Indonesia's great potential as a supplier of 85% of the world's bird's nest raw materials, we transformed into a ready-to-consume product processing industry with strict international quality standards.",
      vision: "Vision",
      visionText:
        "To become Indonesia's leading company in the bird's nest industry capable of penetrating global markets with innovative, healthy, and premium quality products.",
      mission: "Mission",
      missionText:
        "To elevate Indonesia's local potential to international markets through innovation, integrity, and long-term strategic partnerships.",
      advantagesTitle: "Our Advantages",
      advantages: [
        {
          title: "Direct Network to Farmers",
          description:
            "We work directly with bird's nest farmers in various regions of Indonesia, including Sumatra, Kalimantan, and Sulawesi, to ensure the best raw material quality.",
        },
        {
          title: "Experienced Management Team",
          description:
            "Led by a visionary young generation with the support of a team with over 20 years of experience in the bird's nest industry.",
        },
        {
          title: "Product Innovation",
          description:
            'We are pioneers of the "Indomie Bird\'s Nest" product in Indonesia, opening new and modern market opportunities.',
        },
      ],
    },
    productsCatalog: {
      title: "Royalle Nest Product Catalog",
      subtitle: "Premium bird's nest products with international quality standards",
      specs: {
        grade: "Grade:",
        color: "Color:",
        cleanliness: "Cleanliness:",
        fiber: "Fiber:",
        moisture: "Moisture:",
      },
      mangkok: {
        grade: "Super Premium",
        color: "Natural White / Ivory",
        cleanliness: "95-100% Clean",
        fiber: "±85%",
        moisture: "8-12%",
      },
      indomie: {
        grade: "Export Premium",
        color: "Natural White / Ivory",
        cleanliness: "95-98% Clean",
        fiber: "±70%",
        moisture: "0-5%",
      },
      lempengan: {
        grade: "Premium / Industrial",
        color: "Natural White / Ivory",
        cleanliness: "95-100% Clean",
        fiber: "±60-70%",
        moisture: "8-12%",
      },
      innovationTitle: "Upcoming Innovation Products",
      innovationText:
        "We are also conducting research and development for Ready-to-Drink products that are practical and healthy.",
    },
    contact: {
      title: "Contact Us",
      infoTitle: "Contact Information",
      phone: "Phone / WhatsApp",
      email: "Email",
      address: "Office & Factory Address",
      addressText: "Citapen, Kec. Ciawi,\nBogor Regency, West Java",
      formTitle: "Send Message",
      formName: "Full Name",
      formEmail: "Email",
      formMessage: "Your Message",
      formSubmit: "Send Message",
    },
    footer: {
      tagline: "Healthiness From Nature, Feel The Eastern Luxury",
      copyright: "© 2025 Royalle Bird's Nest. All rights reserved.",
    },
  },
}

export default function RoyalleNestPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [language, setLanguage] = useState<"id" | "en">("id")

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["hero", "about", "products", "contact"]
      const newVisibleSections = new Set<string>()

      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.75) {
            newVisibleSections.add(id)
          }
        }
      })

      setVisibleSections(newVisibleSections)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border animate-in slide-in-from-top duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-serif text-lg lg:text-xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Royalle Nest Logo"
                  width={80}
                  height={80}
                  className="h-12 w-12 lg:h-14 lg:w-14 drop-shadow-sm"
                  priority
                />
                <span>ROYALLE NEST</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                aria-label="Toggle language"
              >
                <Globe size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{language === "id" ? "EN" : "ID"}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  {t.nav.products}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  {t.nav.contact}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 w-fit"
                >
                  <Globe size={16} className="text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{language === "id" ? "EN" : "ID"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/bg.png"
            alt="Natural bird nest background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div
            className="max-w-4xl mx-auto text-center transition-all duration-700"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(1 - scrollY / 500, 0),
            }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 lg:mb-8 leading-tight text-balance animate-in fade-in slide-in-from-bottom duration-700">
              {t.hero.title}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t.hero.cta1}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 lg:py-32 bg-muted/30 transition-all duration-1000 ${
          visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 lg:mb-16 text-center">
              {t.about.title}
            </h2>

            {/* Story */}
            <div
              className={`mb-16 lg:mb-20 transition-all duration-700 delay-150 ${
                visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">{t.about.storyTitle}</h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">{t.about.story}</p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
              <Card
                className={`border-border transition-all duration-700 delay-300 hover:shadow-lg hover:-translate-y-1 ${
                  visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4">{t.about.vision}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{t.about.visionText}</p>
                </CardContent>
              </Card>
              <Card
                className={`border-border transition-all duration-700 delay-500 hover:shadow-lg hover:-translate-y-1 ${
                  visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4">{t.about.mission}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{t.about.missionText}</p>
                </CardContent>
              </Card>
            </div>

            {/* Advantages */}
            <div>
              <h3
                className={`font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 lg:mb-12 text-center transition-all duration-700 delay-700 ${
                  visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {t.about.advantagesTitle}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {t.about.advantages.map((advantage, index) => {
                  const icons = [Users, Award, Lightbulb];
                  const IconComponent = icons[index];
                  
                  return (
                    <Card
                      key={index}
                      className={`border-border group hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${
                        visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${900 + index * 150}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                          <IconComponent className="w-6 h-6 text-primary transition-all duration-500 group-hover:scale-125" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                          {advantage.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className={`py-20 lg:py-32 transition-all duration-1000 ${
          visibleSections.has("products") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
              {t.productsCatalog.title}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
              {t.productsCatalog.subtitle}
            </p>

            <div className="space-y-12 lg:space-y-16">
              {/* Royalle Mangkok */}
              <Card
                className={`overflow-hidden border-border group hover:shadow-2xl transition-all duration-700 ${
                  visibleSections.has("products") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square md:aspect-auto bg-muted overflow-hidden">
                    <img
                      src="/royallemangkok.png"
                      alt="Royalle Mangkok"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6 transition-colors duration-300 group-hover:text-primary">
                      {t.products.mangkok.name}
                    </h3>
                    <div className="space-y-3 text-sm lg:text-base">
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.grade}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.mangkok.grade}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.color}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.mangkok.color}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.cleanliness}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.mangkok.cleanliness}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.fiber}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.mangkok.fiber}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.moisture}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.mangkok.moisture}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Royalle Indomie */}
              <Card
                className={`overflow-hidden border-border group hover:shadow-2xl transition-all duration-700 delay-200 ${
                  visibleSections.has("products") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square md:aspect-auto bg-muted md:order-2 overflow-hidden">
                    <img
                      src="/royalleindomie.png"
                      alt="Royalle Indomie"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center md:order-1">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6 transition-colors duration-300 group-hover:text-primary">
                      {t.products.indomie.name}
                    </h3>
                    <div className="space-y-3 text-sm lg:text-base">
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.grade}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.indomie.grade}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.color}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.indomie.color}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.cleanliness}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.indomie.cleanliness}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.fiber}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.indomie.fiber}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.moisture}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.indomie.moisture}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Royalle Lempengan */}
              <Card
                className={`overflow-hidden border-border group hover:shadow-2xl transition-all duration-700 delay-300 ${
                  visibleSections.has("products") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square md:aspect-auto bg-muted overflow-hidden">
                    <img
                      src="/royallelempengan.png"
                      alt="Royalle Lempengan"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6 transition-colors duration-300 group-hover:text-primary">
                      {t.products.lempengan.name}
                    </h3>
                    <div className="space-y-3 text-sm lg:text-base">
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.grade}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.lempengan.grade}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.color}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.lempengan.color}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.cleanliness}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.lempengan.cleanliness}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.fiber}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.lempengan.fiber}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border transition-all duration-300 hover:border-primary">
                        <span className="text-muted-foreground">{t.productsCatalog.specs.moisture}</span>
                        <span className="font-medium text-foreground">{t.productsCatalog.lempengan.moisture}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Innovation Note */}
            <Card
              className={`mt-12 lg:mt-16 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                visibleSections.has("products") ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <CardContent className="p-8 lg:p-12 text-center">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {t.productsCatalog.innovationTitle}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t.productsCatalog.innovationText}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 lg:py-32 bg-muted/30 transition-all duration-1000 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 lg:mb-16 text-center">
              {t.contact.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div
                className={`transition-all duration-700 delay-150 ${
                  visibleSections.has("contact") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-6">{t.contact.infoTitle}</h3>
                <div className="space-y-6">
                  <div className="transition-all duration-300 hover:translate-x-2">
                    <p className="text-sm font-medium text-muted-foreground mb-2">{t.contact.phone}</p>
                    <a
                      href="tel:+6281262948027"
                      className="text-base lg:text-lg text-foreground hover:text-primary transition-colors duration-300"
                    >
                      +62 812 6294 8027
                    </a>
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-2">
                    <p className="text-sm font-medium text-muted-foreground mb-2">{t.contact.email}</p>
                    <a
                      href="mailto:royallenestid@royallenest.com"
                      className="text-base lg:text-lg text-foreground hover:text-primary transition-colors duration-300 break-all"
                    >
                      royallenestid@royallenest.com
                    </a>
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-2">
                    <p className="text-sm font-medium text-muted-foreground mb-2">{t.contact.address}</p>
                    <p className="text-base lg:text-lg text-foreground leading-relaxed whitespace-pre-line">
                      {t.contact.addressText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  visibleSections.has("contact") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-6">{t.contact.formTitle}</h3>
                <form className="space-y-4">
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <Input
                      placeholder={t.contact.formName}
                      className="bg-background border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <Input
                      type="email"
                      placeholder={t.contact.formEmail}
                      className="bg-background border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <Textarea
                      placeholder={t.contact.formMessage}
                      rows={5}
                      className="bg-background border-border resize-none focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {t.contact.formSubmit}
                  </Button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div
              className={`mt-12 lg:mt-16 transition-all duration-700 delay-500 ${
                visibleSections.has("contact") ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d106.68942995!3d-6.5971469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d2e602b501%3A0x25a12f0f97fac4ee!2sCiawi%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Royalle Nest"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border animate-in fade-in duration-1000">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">
              ROYALLE NEST
            </p>
            <p className="text-sm text-muted-foreground mb-2">{t.footer.tagline}</p>
            <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
