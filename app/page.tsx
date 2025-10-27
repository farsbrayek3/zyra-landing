"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Zap,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Star,
  ChevronDown,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bookingStep, setBookingStep] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated booking flow demo
  useEffect(() => {
    const interval = setInterval(() => {
      setBookingStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry, even after hours",
      metric: "100% uptime",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Zap,
      title: "Instant Bookings",
      description: "Customers book appointments in seconds",
      metric: "3s avg response",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Smart Integration",
      description: "Connects directly with your booking system",
      metric: "15+ integrations",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "AI that understands and responds naturally",
      metric: "98% satisfaction",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      business: "Luxe Salon",
      text: "Bookings increased 40% in the first month!",
      rating: 5,
    },
    {
      name: "Mike T.",
      business: "FitCore Gym",
      text: "Our front desk staff can finally focus on members.",
      rating: 5,
    },
    {
      name: "Dr. Chen",
      business: "Wellness Clinic",
      text: "No-shows reduced by 60% with automated reminders.",
      rating: 5,
    },
  ];

  const bookingSteps = [
    {
      step: 1,
      user: true,
      message: "Hi, I'd like to get my hair done",
      icon: "💇‍♀️",
    },
    {
      step: 2,
      user: false,
      message: "Choose your stylist",
      options: [
        "Sarah - Senior Stylist",
        "Mike - Color Specialist",
        "Emma - Cuts & Styles",
      ],
      icon: "✂️",
    },
    {
      step: 3,
      user: false,
      message: "Pick your preferred time",
      options: [
        "Today 2:00 PM",
        "Today 4:00 PM",
        "Tomorrow 10:00 AM",
        "Tomorrow 3:00 PM",
      ],
      icon: "📅",
    },
    {
      step: 4,
      user: false,
      message: "✅ Appointment confirmed! You'll receive SMS reminders.",
      success: true,
      icon: "🎉",
    },
  ];

  // Structured data (JSON-LD). Placed in the body is ok for crawlers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Zyra",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [
          "https://github.com/farsbrayek3",
          "https://twitter.com/farsbrayek3",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "Zyra",
        description:
          "Your 24/7 AI assistant for automating customer communication and bookings.",
        publisher: { "@id": `${SITE_URL}#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Features",
            item: `${SITE_URL}/#features`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* JSON-LD for SEO, included in body (accepted by search engines) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        {/* Enhanced Navigation */}
        <nav
          aria-label="Primary"
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <a
                href="/"
                className="flex items-center gap-3"
                aria-label="Zyra home link"
              >
                <div
                  className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all duration-300"
                  aria-hidden="true"
                >
                  <span className="relative z-10">Z</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl blur opacity-0 transition-opacity"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zyra
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#features"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#use-cases"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Testimonials
              </a>
            </div>

            <div className="ml-4">
              <Button
                aria-label="Book a call with Zyra"
                className="relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Enhanced Hero Section */}
        <section
          ref={heroRef}
          aria-labelledby="hero-heading"
          className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center"
        >
          {/* Advanced animated background */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className={`relative max-w-7xl mx-auto w-full transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Enhanced Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    <span className="font-medium">AI-Powered Automation</span>
                  </div>

                  <h1
                    id="hero-heading"
                    className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
                  >
                    Your{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                        24/7 Assistant
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-sm" />
                    </span>
                    <br />
                    <span className="text-slate-200">Awaits</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                    Zyra automates customer communication and appointment
                    bookings for{" "}
                    <strong className="text-cyan-400 font-medium">
                      salons, gyms, clinics, and spas
                    </strong>
                    .
                  </p>

                  {/* NEW: Key Benefits */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-lg text-white">
                        <strong className="font-semibold">
                          Reduce no-shows by 60%
                        </strong>{" "}
                        with automated SMS reminders
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-lg text-white">
                        <strong className="font-semibold">
                          Manage multiple stylists
                        </strong>{" "}
                        and their schedules effortlessly
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-lg text-white">
                        <strong className="font-semibold">
                          Free up hours every day
                        </strong>{" "}
                        — no more phone tag or manual booking
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    aria-label="Book a call"
                    className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-semibold py-7 px-10 text-lg rounded-xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Call
                      <ArrowRight
                        className="group-hover:translate-x-2 transition-transform duration-300"
                        size={20}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Button>

                  <Button
                    aria-label="See demo"
                    variant="outline"
                    className="border-2 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 py-7 px-10 text-lg rounded-xl bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold group"
                  >
                    <span className="flex items-center gap-2">
                      See Demo
                      <Sparkles
                        className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
                        aria-hidden="true"
                      />
                    </span>
                  </Button>
                </div>

                {/* Enhanced Stats with new metrics */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { value: "60%", label: "Fewer No-Shows", icon: TrendingUp },
                    { value: "5+", label: "Stylists Managed", icon: Users },
                    { value: "10h", label: "Saved Per Week", icon: Clock },
                  ].map((stat, i) => (
                    <div key={i} className="relative group" aria-hidden="false">
                      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                        <stat.icon
                          className="w-5 h-5 text-cyan-400 mb-2"
                          aria-hidden="true"
                        />
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3" aria-hidden="true">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div
                      className="flex items-center gap-1 text-yellow-400"
                      aria-hidden="true"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-400 mt-1">
                      Trusted by{" "}
                      <span className="text-white font-semibold">
                        businesses
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* NEW: Simplified Booking Flow Demo */}
              <aside
                aria-label="Booking flow demo"
                className="relative lg:scale-110"
              >
                {/* Glow effect */}
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
                  {/* Window controls */}
                  <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-700/50 bg-slate-800/50">
                    <div className="flex gap-2" aria-hidden="true">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center text-xs text-slate-400 font-medium">
                      Client Booking Flow
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 pb-6 border-b border-slate-700/50">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                          <MessageCircle
                            size={22}
                            className="text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          Zyra Assistant
                        </div>
                        <div className="text-xs text-green-400 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Ready to book
                        </div>
                      </div>
                    </div>

                    {/* Simplified booking steps visualization */}
                    <div className="space-y-6 py-6 min-h-[420px] flex flex-col justify-center">
                      {bookingSteps.slice(0, bookingStep + 1).map((step, i) => (
                        <div
                          key={i}
                          className={`animate-slide-in ${
                            step.user ? "justify-end" : "justify-start"
                          } flex`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div
                            className={`rounded-2xl px-6 py-4 max-w-[85%] shadow-lg ${
                              step.success
                                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-2 border-green-400"
                                : step.user
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-br-sm"
                                : "bg-slate-700/80 backdrop-blur-sm text-slate-100 rounded-bl-sm border border-slate-600/50"
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl" aria-hidden="true">
                                {step.icon}
                              </span>
                              {!step.user && (
                                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wide">
                                  Step {step.step}
                                </span>
                              )}
                            </div>
                            <p className="text-base font-medium leading-relaxed mb-3">
                              {step.message}
                            </p>

                            {/* Options display */}
                            {step.options && (
                              <div className="space-y-2 mt-4">
                                {step.options.map((option, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-slate-800/60 border border-slate-600/40 rounded-lg px-4 py-2.5 text-sm text-white hover:border-cyan-500/50 transition-all cursor-pointer hover:bg-slate-800"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{option}</span>
                                      {idx === 0 && bookingStep === i && (
                                        <span className="text-xs text-cyan-400 animate-pulse">
                                          ← Select
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Loading indicator between steps */}
                      {bookingStep < bookingSteps.length - 1 &&
                        bookingStep > 0 && (
                          <div className="flex justify-start animate-slide-in">
                            <div className="bg-slate-700/80 backdrop-blur-sm rounded-2xl rounded-bl-sm px-5 py-3 border border-slate-600/50">
                              <div className="flex gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                                <div
                                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                />
                                <div
                                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                    </div>

                    {/* Progress indicator */}
                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-700/50">
                      {bookingSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i <= bookingStep
                              ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500"
                              : "w-1.5 bg-slate-600"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-xs text-slate-400">
                        {bookingStep === bookingSteps.length - 1
                          ? "🎉 Booking complete in seconds!"
                          : "Watch how simple it is..."}
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToFeatures}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer hover:text-cyan-300 transition-colors"
            aria-label="Scroll to features"
          >
            <ChevronDown size={32} aria-hidden="true" />
          </button>
        </section>

        {/* Enhanced Features Section */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="py-32 px-6 bg-slate-900/50 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 mb-6">
                ✨ Powerful Features
              </div>
              <h2
                id="features-heading"
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
              >
                Why Choose Zyra?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Everything you need to automate your service business, all in
                one intelligent platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <article
                  key={i}
                  aria-labelledby={`feature-${i}-title`}
                  className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                    activeFeature === i
                      ? "border-cyan-400/50 shadow-xl shadow-cyan-500/20"
                      : "border-cyan-500/20 hover:border-cyan-500/40"
                  }`}
                  onMouseEnter={() => setActiveFeature(i)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                    aria-hidden="true"
                  />

                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                      aria-hidden="true"
                    />
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="relative space-y-3">
                    <h3
                      id={`feature-${i}-title`}
                      className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-full text-xs font-semibold text-cyan-400 border border-slate-600/50">
                      <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                      {feature.metric}
                    </div>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>

            {/* Feature highlights - UPDATED */}
            <div className="mt-20 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  text: "Automated reminders",
                  subtext: "Reduce no-shows by 60%",
                },
                {
                  icon: Users,
                  text: "Multi-staff scheduling",
                  subtext: "Manage all your team members",
                },
                {
                  icon: Clock,
                  text: "Save 10+ hours/week",
                  subtext: "Focus on what matters",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon
                      className="w-6 h-6 text-cyan-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.text}</div>
                    <div className="text-sm text-slate-400">{item.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Use Cases */}
        <section
          id="use-cases"
          aria-labelledby="use-cases-heading"
          className="py-32 px-6 relative overflow-hidden"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 mb-6">
                🎯 Perfect For
              </div>
              <h2
                id="use-cases-heading"
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Built for Service Businesses
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Tailored solutions for industries that rely on appointments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Salons",
                  icon: "💇",
                  features: [
                    "Style bookings",
                    "Staff management",
                    "Product recommendations",
                  ],
                  gradient: "from-pink-500/20 to-purple-500/20",
                },
                {
                  name: "Gyms",
                  icon: "💪",
                  features: [
                    "Class scheduling",
                    "PT sessions",
                    "Membership queries",
                  ],
                  gradient: "from-orange-500/20 to-red-500/20",
                },
                {
                  name: "Clinics",
                  icon: "🏥",
                  features: ["Patient booking", "Reminders", "Follow-ups"],
                  gradient: "from-blue-500/20 to-cyan-500/20",
                },
                {
                  name: "Spas",
                  icon: "🧘",
                  features: [
                    "Treatment booking",
                    "Package sales",
                    "Gift vouchers",
                  ],
                  gradient: "from-green-500/20 to-emerald-500/20",
                },
              ].map((useCase, i) => (
                <article
                  key={i}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                  aria-labelledby={`usecase-${i}-title`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    aria-hidden="true"
                  />

                  <div className="relative space-y-6">
                    <div
                      className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {useCase.icon}
                    </div>
                    <h3
                      id={`usecase-${i}-title`}
                      className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                    >
                      {useCase.name}
                    </h3>

                    <ul className="space-y-2" aria-hidden="false">
                      {useCase.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-cyan-400 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      aria-label={`Learn more about ${useCase.name}`}
                      variant="outline"
                      className="w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-slate-800/50 backdrop-blur-sm group-hover:border-cyan-400 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="py-32 px-6 bg-slate-900/50 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 mb-6">
                ⭐ Testimonials
              </div>
              <h2
                id="testimonials-heading"
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Loved by Business Owners
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See what our customers have to say about transforming their
                businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <article
                  key={i}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div className="relative space-y-6">
                    <div
                      className="flex gap-1 text-yellow-400"
                      aria-hidden="true"
                    >
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-200 text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-400">
                          {testimonial.business}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
            aria-hidden="true"
          />
          <div className="absolute inset-0">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
              aria-hidden="true"
            />
          </div>

          <div className="relative max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Join <span className="text-white font-bold">businesses</span>{" "}
                automating their customer communication with Zyra
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button
                aria-label="Book a call today"
                className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold py-8 px-12 text-xl rounded-2xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-110 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book a Call Today
                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    size={24}
                    aria-hidden="true"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>

              <div className="flex items-center gap-3 text-slate-300">
                <CheckCircle2
                  className="w-5 h-5 text-green-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">
                  Flexible pricing • Contact sales
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div
              className="pt-12 flex flex-wrap items-center justify-center gap-8 text-slate-400"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer
        className="border-t border-slate-800 py-16 px-6 bg-slate-950/80 backdrop-blur-xl relative overflow-hidden"
        aria-labelledby="footer-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <h2 id="footer-heading" className="sr-only">
            Zyra footer
          </h2>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-cyan-500/30">
                  Z
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zyra
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your 24/7 AI assistant for automating customer communication and
                bookings.
              </p>
            </div>

            {/* Links */}
            <nav aria-label="Footer navigation">
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#api"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="/privacy"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="/gdpr"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Zyra. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-slate-400 hover:text-cyan-400"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
