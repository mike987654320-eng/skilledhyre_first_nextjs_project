"use client";
import {
  RocketLaunchIcon,
  CpuChipIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  UsersIcon,
  BeakerIcon,
  ArrowPathIcon,
  HeartIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  TruckIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import TypingAnimation from "@/components/common/TypingAnimation";
import CounterItem from "@/components/common/CounterItem";
import TestimonialCard from "@/components/home/TestimonialCard";
import BlogCard from "@/components/home/BlogCard";

export default function Home() {
  const cards = [
    {
      title: "AI Engineering & Solutions",
      description:
        "Design, build, and deploy AI systems that drive automation, intelligence, and business growth.",
      icon: CpuChipIcon,
      href: "/ai-engineering",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailor-made software built for performance, scalability, and long-term success.",
      icon: CodeBracketIcon,
      href: "/services",
    },
    {
      title: "Web & App Development",
      description:
        "Modern, fast, and secure web & mobile applications using cutting-edge frameworks.",
      icon: GlobeAltIcon,
      href: "/services",
    },
    {
      title: "Tech Talent On Demand",
      description:
        "Hire skilled developers and AI engineers instantly for your projects.",
      icon: UsersIcon,
      href: "/tech-talent",
    },
    {
      title: "Product Engineering & MVPs",
      description: "From idea to MVP to enterprise-grade product.",
      icon: BeakerIcon,
      href: "/services",
    },
    {
      title: "End-to-End Delivery",
      description: "Complete lifecycle support from strategy to scale.",
      icon: ArrowPathIcon,
      href: "/end-to-end",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse" />
        </div>

        <div className="flex justify-center items-center gap-4 w-full max-w-[1170px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
                <RocketLaunchIcon className="w-4 h-4" />
                <span>SkilledHyre Labs</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                Engineering Digital <br />
                {/* <span className="text-gradient-primary">
                  Innovation with AI
                </span> */}
                <TypingAnimation
                  text="Innovation with AI"
                  className="text-gradient-primary text-[60px]"
                  delay={100}
                />
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                SkilledHyre Labs is a full-fledged IT and AI engineering company
                delivering scalable software solutions, AI-powered platforms,
                and on-demand tech talent. We help startups and enterprises
                build, modernize, and scale digital products with speed,
                security, and intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Start Your Project
                </Button>
                <Button href="/contact" variant="secondary">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/skilldhyre.jpg"
                alt="Hero Image"
                className="w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <Section className="bg-white/5 ">
        <div className="flex justify-center items-center flex-col gap-4 w-full max-w-[1170px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Comprehensive services to drive your digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section>
        <div className="max-w-[1170px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Tailored AI and software solutions for your specific industry
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare",
                description:
                  "AI diagnostics, patient risk analytics, health assistants, and hospital intelligence systems.",
                icon: HeartIcon,
              },
              {
                title: "FinTech & Banking",
                description:
                  "Fraud detection, credit scoring, transaction monitoring, and compliance AI.",
                icon: BanknotesIcon,
              },
              {
                title: "Retail & E-commerce",
                description:
                  "Recommendation engines, demand forecasting, dynamic pricing, and personalization.",
                icon: ShoppingCartIcon,
              },
              {
                title: "Manufacturing",
                description:
                  "Predictive maintenance, quality inspection, and supply chain optimization.",
                icon: Cog6ToothIcon,
              },
              {
                title: "Education & EdTech",
                description:
                  "AI tutors, adaptive learning platforms, and student analytics.",
                icon: AcademicCapIcon,
              },
              {
                title: "Logistics & Supply Chain",
                description:
                  "Route optimization, inventory forecasting, and smart warehousing.",
                icon: TruckIcon,
              },
              {
                title: "Marketing & Media",
                description:
                  "Marketing intelligence, content analytics, and campaign optimization.",
                icon: MegaphoneIcon,
              },
            ].map((ind, index) => (
              <Card key={index} {...ind} />
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-indigo-500/10">
        <div className="max-w-[1170px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 98, label: "Projects Delivered", suffix: "+" },
              { value: 50, label: "Expert Engineers", suffix: "+" },
              { value: 12, label: "Countries Served", suffix: "" },
              { value: 5, label: "Years Experience", suffix: "+" },
            ].map((stat, i) => (
              <CounterItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Hear from the businesses we&apos;ve helped scale.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechFlow",
                quote:
                  "SkilledHyre Labs transformed our development process. Their AI solutions increased our efficiency by 40% in just three months.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Michael Chen",
                role: "Founder, DataDrive",
                quote:
                  "The quality of talent we hired through SkilledHyre is exceptional. They seamlessly integrated with our team and delivered results immediately.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Emily Davis",
                role: "VP Product, InnovateX",
                quote:
                  "From MVP to full-scale product, their end-to-end delivery service was flawless. Highly recommended for startups.",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "David Wilson",
                role: "Director, FutureSystems",
                quote:
                  "Their custom software solutions are built to last. Scalable, secure, and exactly what we needed for our enterprise expansion.",
                image: "https://randomuser.me/api/portraits/men/86.jpg",
              },
              {
                name: "Jessica Lee",
                role: "CEO, StartUp Hub",
                quote:
                  "Professional, knowledgeable, and reliable. SkilledHyre Labs is our go-to partner for all things technical.",
                image: "https://randomuser.me/api/portraits/women/12.jpg",
              },
            ].map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </Section>

      {/* Blog/News Section */}
      {/* Blogs Section */}
      <Section>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Trends, technology, and strategies for digital success.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {[
              {
                title: "The Future of AI in Enterprise Software",
                date: "Oct 15, 2023",
                excerpt:
                  "Explore how artificial intelligence is reshaping the landscape of enterprise applications and automation.",
                image:
                  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "future-of-ai",
              },
              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },
              {
                title: "Top Web Development Trends for 2024",
                date: "Sep 10, 2023",
                excerpt:
                  "Stay ahead of the curve with these emerging technologies and frameworks in web development.",
                image:
                  "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "web-dev-trends",
              },
              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },
              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },
              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },
              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },
              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },

              {
                title: "Scaling Your MVP to a Product",
                date: "Sep 28, 2023",
                excerpt:
                  "Key strategies and technical considerations for taking your Minimum Viable Product to a full-market release.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "scaling-mvp",
              },
            ].map((blog, i) => (
              <BlogCard key={i} {...blog} />
            ))}
          </div>
        </div>
      </Section>

      {/* News Section */}
      <Section className="bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Company News</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Announcements, press releases, and updates from SkilledHyre Labs.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {[
              {
                title: "SkilledHyre Labs Expands to New York",
                date: "Nov 05, 2023",
                excerpt:
                  "We are thrilled to announce the opening of our new office in NYC to better serve our East Coast clients.",
                image:
                  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "nyc-expansion",
              },
              {
                title: "Partnering with TechGiant for Cloud Solutions",
                date: "Oct 22, 2023",
                excerpt:
                  "A strategic partnership to deliver enhanced cloud infrastructure services to our enterprise partners.",
                image:
                  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "techgiant-partnership",
              },
              {
                title: "Winning the 2023 Innovation Award",
                date: "Oct 01, 2023",
                excerpt:
                  "SkilledHyre Labs has been recognized for excellence in AI implementation and digital transformation.",
                image:
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "innovation-award",
              },

              {
                title: "Winning the 2023 Innovation Award",
                date: "Oct 01, 2023",
                excerpt:
                  "SkilledHyre Labs has been recognized for excellence in AI implementation and digital transformation.",
                image:
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "innovation-award",
              },

              {
                title: "Winning the 2023 Innovation Award",
                date: "Oct 01, 2023",
                excerpt:
                  "SkilledHyre Labs has been recognized for excellence in AI implementation and digital transformation.",
                image:
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "innovation-award",
              },

              {
                title: "Winning the 2023 Innovation Award",
                date: "Oct 01, 2023",
                excerpt:
                  "SkilledHyre Labs has been recognized for excellence in AI implementation and digital transformation.",
                image:
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "innovation-award",
              },

              {
                title: "Winning the 2023 Innovation Award",
                date: "Oct 01, 2023",
                excerpt:
                  "SkilledHyre Labs has been recognized for excellence in AI implementation and digital transformation.",
                image:
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "innovation-award",
              },
              {
                title: "Winning the 2023 Innovation Award",
                date: "Oct 01, 2023",
                excerpt:
                  "SkilledHyre Labs has been recognized for excellence in AI implementation and digital transformation.",
                image:
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                slug: "innovation-award",
              },
            ].map((news, i) => (
              <BlogCard key={i} {...news} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
