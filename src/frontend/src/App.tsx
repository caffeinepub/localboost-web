import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock,
  Copy,
  Download,
  Dumbbell,
  ExternalLink,
  Globe,
  GraduationCap,
  IndianRupee,
  Languages,
  Loader2,
  type LucideIcon,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  RefreshCw,
  Rocket,
  Scissors,
  Search,
  Send,
  Settings,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  Users,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { DemoRequest, SiteSettings } from "./backend";

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════ */
const PHONE_DISPLAY = "+91 87095 46323";
const PHONE_LINK = "tel:+918709546323";
const EMAIL = "kkant5380@gmail.com";
const WHATSAPP_BASE = "https://wa.me/918709546323";
const WHATSAPP_URL =
  "https://wa.me/918709546323?text=Hello%2C%20I%27d%20like%20a%20free%20demo%20website%20for%20my%20business.%20Please%20contact%20me.";
const CURRENT_YEAR = new Date().getFullYear();

/* ═══════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════ */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function goToMain() {
  window.location.hash = "";
}

/* ═══════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════ */
function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Demos", id: "demos" },
    { label: "AI Helper", id: "ai-helper" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      data-ocid="nav.panel"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          data-ocid="nav.link"
          aria-label="LocalBoost Web — Home"
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <img
            src="/assets/generated/lb-logo-transparent.dim_120x120.png"
            alt="LocalBoost Web logo"
            className="w-9 h-9 rounded-xl object-cover"
          />
          <span className="font-display font-bold text-foreground text-base leading-tight hidden sm:block group-hover:text-primary transition-colors">
            LocalBoost Web
          </span>
        </button>

        {/* Desktop nav links */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          aria-label="Primary navigation"
        >
          {links.map((l) => (
            <button
              type="button"
              key={l.id}
              data-ocid="nav.link"
              onClick={() => scrollTo(l.id)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/8"
            >
              {l.label}
            </button>
          ))}
          <Button
            size="sm"
            className="ml-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 font-semibold shadow-sm"
            onClick={() => scrollTo("demo-form")}
            data-ocid="nav.primary_button"
          >
            Get Free Demo
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-ocid="nav.toggle"
        >
          {open ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      {open && (
        <div
          className="lg:hidden border-t border-border bg-white/98 backdrop-blur-md"
          data-ocid="nav.panel"
        >
          <nav
            className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <button
                type="button"
                key={l.id}
                data-ocid="nav.link"
                onClick={() => {
                  scrollTo(l.id);
                  setOpen(false);
                }}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors min-h-[44px]"
              >
                {l.label}
              </button>
            ))}
            <Button
              className="mt-3 mb-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold h-12"
              onClick={() => {
                scrollTo("demo-form");
                setOpen(false);
              }}
              data-ocid="nav.primary_button"
            >
              Get Free Demo Website
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function Hero() {
  const trustBadges = [
    { icon: CheckCircle, label: "Free Demo First" },
    { icon: Zap, label: "3–7 Day Delivery" },
    { icon: CheckCircle, label: "Mobile Ready" },
    { icon: CheckCircle, label: "Starting ₹2,999" },
  ];

  return (
    <section
      id="hero"
      className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7">
            <Badge className="bg-primary/10 text-primary border-0 text-sm font-semibold px-4 py-1.5 rounded-full gap-1.5">
              <Rocket className="w-3.5 h-3.5" />
              Free Demo — No Payment Required
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.08] tracking-tight mb-6">
            Websites That{" "}
            <span className="text-gradient-indigo">Bring Local</span>
            <br className="hidden sm:block" /> Customers
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We build professional websites for{" "}
            <strong className="text-foreground font-semibold">
              gyms, salons, coaching institutes, clinics, and shops
            </strong>
            . Mobile-friendly. Fast delivery. Free demo first.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-ocid="hero.panel"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold px-8 h-14 rounded-full shadow-xl shadow-primary/25 w-full sm:w-auto transition-all hover:scale-105 hover:shadow-primary/35"
              onClick={() => scrollTo("demo-form")}
              data-ocid="hero.primary_button"
            >
              Get My Free Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold px-8 h-14 rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary w-full sm:w-auto transition-all"
              onClick={() => scrollTo("pricing")}
              data-ocid="hero.secondary_button"
            >
              View Pricing
            </Button>
          </div>

          {/* Microcopy */}
          <p className="mt-5 text-sm text-muted-foreground">
            No payment. No obligation. We'll build a preview first.
          </p>

          {/* Trust badges */}
          <div
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-12"
            data-ocid="hero.panel"
            aria-label="Trust signals"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <badge.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
function Footer() {
  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-foreground text-white" aria-label="Site footer">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/generated/lb-logo-transparent.dim_120x120.png"
                alt="LocalBoost Web logo"
                className="w-9 h-9 rounded-xl object-cover"
              />
              <span className="font-display font-bold text-white text-lg">
                LocalBoost Web
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Building digital presence for local businesses. Professional
              websites that help you get more customers online.
            </p>
            <p className="text-white/40 text-xs">
              Mon–Sat: 9AM–7PM | Sunday: WhatsApp only
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      data-ocid="footer.link"
                      className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-teal-accent transition-colors" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_LINK}
                  data-ocid="footer.link"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-primary/30 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  data-ocid="footer.link"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-primary/30 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.link"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-green-600/30 flex items-center justify-center flex-shrink-0 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all hover:scale-105"
              data-ocid="footer.link"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>LocalBoost Web © {CURRENT_YEAR} — All rights reserved.</span>
          <span className="flex items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-white/70 transition-colors"
            >
              {EMAIL}
            </a>
            <span>·</span>
            <a
              href={PHONE_LINK}
              className="hover:text-white/70 transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHATSAPP FLOAT BUTTON
═══════════════════════════════════════════════════════════ */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
      className="fixed bottom-6 right-5 z-50 group"
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-green-500/40 animate-pulse-ring"
      />
      {/* Button circle */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/30 transition-all duration-200 group-hover:scale-110 group-hover:shadow-green-500/40">
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
      </span>
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════ */
function About() {
  const stats = [
    { value: "50+", label: "Websites Built" },
    { value: "3–7", label: "Day Delivery" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3 text-center lg:text-left">
          About Us
        </p>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          data-ocid="about.panel"
        >
          {/* Left — bio & stats */}
          <div>
            <h2
              id="about-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-5"
            >
              A Web Studio Built{" "}
              <span className="text-gradient-indigo">For Local Businesses</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              LocalBoost Web is a freelance web studio helping local businesses
              —{" "}
              <strong className="text-foreground font-semibold">
                gyms, salons, coaching institutes, clinics, and shops
              </strong>{" "}
              — build their online presence affordably and fast. We make it
              simple: free demo first, transparent pricing, and a site live in
              days — not weeks.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-accent/60 rounded-2xl p-4 text-center border border-border/60"
                >
                  <p className="font-display font-bold text-2xl md:text-3xl text-primary leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission callout card */}
            <div
              data-ocid="about.card"
              className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-teal/5 p-5 md:p-6 overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/8 blur-2xl -translate-y-8 translate-x-8"
              />
              <div className="flex items-start gap-3 relative">
                <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-primary" />
                </span>
                <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                  <span className="font-bold text-primary">Our mission —</span>{" "}
                  one great website at a time, helping every local business get
                  found online.
                </p>
              </div>
            </div>
          </div>

          {/* Right — brand visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border-2 border-primary/10 scale-[1.35]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-teal/10 scale-[1.65]"
              />

              {/* Logo circle */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/10 to-teal/10 border-2 border-primary/20 flex items-center justify-center shadow-xl shadow-primary/10">
                <img
                  src="/assets/generated/lb-logo-transparent.dim_120x120.png"
                  alt="LocalBoost Web — agency logo"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md"
                />
              </div>

              {/* Floating badge — top right */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 bg-white shadow-lg shadow-primary/10 rounded-2xl px-3 py-2 border border-border flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                  Free Demo First
                </span>
              </div>

              {/* Floating badge — bottom left */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 bg-white shadow-lg shadow-primary/10 rounded-2xl px-3 py-2 border border-border flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                  3–7 Day Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════════════════ */
interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Globe,
    title: "Business Website Development",
    description: "A complete online home for your business.",
    accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    icon: Dumbbell,
    title: "Gym Websites",
    description: "Showcase memberships, timings, and get gym enquiries online.",
    accent: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: GraduationCap,
    title: "Coaching Institute Websites",
    description: "Highlight courses, faculty, and admit more students.",
    accent: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: Scissors,
    title: "Salon Websites",
    description: "Show your services, pricing, and book more appointments.",
    accent: "bg-pink-50 text-pink-600 border-pink-100",
  },
  {
    icon: Stethoscope,
    title: "Clinic Websites",
    description: "Build patient trust and make booking easy.",
    accent: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    icon: ShoppingBag,
    title: "Shop Websites",
    description: "Display products, hours, and drive more footfall.",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    description: "Help customers find you on Google Maps instantly.",
    accent: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Let customers message you in one tap from your site.",
    accent: "bg-green-50 text-green-600 border-green-100",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    description: "Every site looks great on any phone or screen size.",
    accent: "bg-sky-50 text-sky-600 border-sky-100",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-accent/30"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            What We <span className="text-gradient-indigo">Build For You</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From simple business pages to feature-rich websites — everything a
            local business needs to get found and grow online.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const ocid = `services.item.${index + 1}` as const;
            return (
              <article
                key={service.title}
                data-ocid={ocid}
                className="card-hover bg-white rounded-2xl border border-border p-6 flex flex-col gap-4 shadow-xs group"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${service.accent}`}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-13 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
            onClick={() => scrollTo("demo-form")}
            data-ocid="services.primary_button"
          >
            Get My Free Demo Website
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            No payment required · We build a preview first
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHY CHOOSE US
═══════════════════════════════════════════════════════════ */
interface BenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BENEFITS: BenefitCard[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "3–7 working days from brief to launch.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Starting at ₹2,999. No hidden charges.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Every site is built mobile-first.",
  },
  {
    icon: MapPin,
    title: "Built for Local Businesses",
    description: "We understand gyms, salons, clinics, and shops.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Reach us anytime on WhatsApp for quick help.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Why Choose Us
          </p>
          <h2
            id="why-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            Why Local Businesses{" "}
            <span className="text-gradient-indigo">Choose Us</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Simple, transparent, and built around what small businesses actually
            need.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            const ocid = `why.item.${index + 1}` as const;
            return (
              <div
                key={benefit.title}
                data-ocid={ocid}
                className="card-hover group flex flex-col items-center text-center gap-4 bg-primary/5 hover:bg-primary/10 rounded-2xl border border-primary/10 hover:border-primary/25 p-5 md:p-6 transition-colors"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-white border border-primary/15 shadow-xs flex items-center justify-center flex-shrink-0 group-hover:shadow-md group-hover:border-primary/30 transition-all">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-sm md:text-base text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/8 via-teal/5 to-primary/8 border border-primary/15 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-foreground text-base md:text-lg">
              Fast delivery · Mobile friendly · Free demo first
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Prices start at ₹2,999 — final quote based on features.
            </p>
          </div>
          <Button
            className="flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-7 h-12 shadow-md shadow-primary/20 transition-all hover:scale-105"
            onClick={() => scrollTo("demo-form")}
            data-ocid="why.primary_button"
          >
            Get Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 3 — PORTFOLIO / DEMO TEMPLATES
═══════════════════════════════════════════════════════════ */
interface DemoTemplate {
  slug: string;
  title: string;
  type: string;
  description: string;
  pages: string[];
  gradient: string;
  iconBg: string;
  icon: LucideIcon;
  hash: string;
}

const DEMO_TEMPLATES: DemoTemplate[] = [
  {
    slug: "gym-sample",
    title: "Gym Website Demo",
    type: "Fitness & Gym",
    description:
      "5 pages — Homepage, Services, Membership Plans, Gallery, Contact with WhatsApp and Google Maps.",
    pages: [
      "Homepage",
      "Services / Classes",
      "Membership Plans",
      "Gallery",
      "Contact + Maps",
    ],
    gradient: "from-indigo-600 via-blue-600 to-indigo-700",
    iconBg: "bg-indigo-100 text-indigo-700",
    icon: Dumbbell,
    hash: "#/preview/gym-sample",
  },
  {
    slug: "coaching-sample",
    title: "Coaching Institute Demo",
    type: "Education",
    description:
      "6 pages — Homepage, Courses, Faculty, Results, Admission Enquiry, Contact for coaching and tuition centres.",
    pages: [
      "Homepage",
      "Courses Offered",
      "Faculty",
      "Results & Testimonials",
      "Admission Form",
      "Contact",
    ],
    gradient: "from-violet-600 via-purple-600 to-violet-700",
    iconBg: "bg-violet-100 text-violet-700",
    icon: GraduationCap,
    hash: "#/preview/coaching-sample",
  },
  {
    slug: "salon-sample",
    title: "Salon Website Demo",
    type: "Beauty & Wellness",
    description:
      "5 pages — Homepage, Services & Pricing, Gallery, Booking, Contact — designed to bring more walk-ins and appointments.",
    pages: [
      "Homepage",
      "Services & Prices",
      "Gallery",
      "Booking / Appointment",
      "Contact + Maps",
    ],
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    iconBg: "bg-pink-100 text-pink-700",
    icon: Scissors,
    hash: "#/preview/salon-sample",
  },
];

function Portfolio() {
  return (
    <section
      id="demos"
      className="py-20 md:py-28 bg-accent/30"
      aria-labelledby="demos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Demo Templates
          </p>
          <h2
            id="demos-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            See What Your{" "}
            <span className="text-gradient-indigo">
              Website Could Look Like
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Preview three real website templates built for local businesses.
            Each one is fully customised for your brand, content, and location.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {DEMO_TEMPLATES.map((demo, index) => {
            const Icon = demo.icon;
            const ocid = `demos.item.${index + 1}` as const;
            return (
              <article
                key={demo.slug}
                data-ocid={ocid}
                className="card-hover bg-white rounded-2xl border border-border overflow-hidden shadow-xs flex flex-col group"
              >
                {/* Gradient banner */}
                <div
                  className={`relative bg-gradient-to-br ${demo.gradient} h-40 flex items-center justify-center overflow-hidden`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 20%, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs font-semibold backdrop-blur-sm">
                      Preview — Demo Only
                    </Badge>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider">
                      {demo.type}
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {demo.description}
                    </p>
                  </div>

                  {/* Pages list */}
                  <ul className="flex flex-col gap-1.5">
                    {demo.pages.map((page) => (
                      <li
                        key={page}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary/60 flex-shrink-0" />
                        {page}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2.5 mt-auto pt-2">
                    <a
                      href={demo.hash}
                      data-ocid="demos.primary_button"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold h-10 rounded-full transition-all hover:scale-105 shadow-sm shadow-primary/20"
                    >
                      View Live Preview
                    </a>
                    <button
                      type="button"
                      onClick={() => scrollTo("demo-form")}
                      data-ocid="demos.secondary_button"
                      className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-primary/30 text-primary hover:bg-primary hover:text-white text-sm font-semibold h-10 rounded-full transition-all"
                    >
                      Request This Style
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All demos are for illustration only. Your actual site will use your
          real business name, photos, and content.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREVIEW BANNER (shared across all preview pages)
═══════════════════════════════════════════════════════════ */
function PreviewBanner({
  title,
  businessName,
  daysLeft,
}: {
  title: string;
  businessName?: string;
  daysLeft?: number;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  }

  const isDynamic = businessName !== undefined && daysLeft !== undefined;

  return (
    <div
      data-preview-banner
      className="sticky top-0 z-50 bg-indigo-700 text-white shadow-lg print:hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        {/* Left — labels */}
        <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            Preview — Demo Only
          </span>
          {isDynamic ? (
            <span className="text-white/90 text-xs font-medium">
              Preview for{" "}
              <span className="font-bold text-white">{businessName}</span>
            </span>
          ) : (
            <span className="text-white/80 text-xs font-medium hidden sm:inline">
              Not a real client site
            </span>
          )}
          <span className="flex items-center gap-1.5 text-white/70 text-xs">
            <Clock className="w-3.5 h-3.5" />
            {isDynamic
              ? `Expires in ${daysLeft} day${daysLeft === 1 ? "" : "s"}`
              : "Expires in 7 days"}
          </span>
        </div>

        {/* Right — action buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={goToMain}
            data-ocid="preview.secondary_button"
            className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors min-h-[36px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to LocalBoost Web
          </button>
          <button
            type="button"
            onClick={() => {
              goToMain();
              setTimeout(() => scrollTo("demo-form"), 100);
            }}
            data-ocid="preview.primary_button"
            className="flex items-center gap-1.5 bg-white text-indigo-700 hover:bg-indigo-50 text-xs font-bold px-3 py-2 rounded-lg transition-colors min-h-[36px]"
          >
            <Rocket className="w-3.5 h-3.5" />
            Request This Style
          </button>
          <button
            type="button"
            onClick={handleCopy}
            data-ocid="preview.secondary_button"
            className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors min-h-[36px]"
            aria-label="Copy link"
          >
            <Copy className="w-3.5 h-3.5" />
            {copied ? "Copied!" : "Copy Link"}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            data-ocid="preview.secondary_button"
            className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors min-h-[36px]"
            aria-label="Export / Print"
          >
            <Printer className="w-3.5 h-3.5" />
            Export
          </button>
        </div>
      </div>
      {/* Title row */}
      <div className="bg-indigo-800/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-white/70 text-xs">
            Previewing:{" "}
            <span className="text-white font-semibold">
              {isDynamic ? `${businessName} — Demo Website` : title}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   GYM PREVIEW PAGE
═══════════════════════════════════════════════════════════ */
interface PreviewBannerProps {
  title: string;
  businessName?: string;
  daysLeft?: number;
}

function GymPreview({
  previewBannerProps,
}: {
  previewBannerProps?: PreviewBannerProps;
}) {
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I'd like to join PowerFit Gym. Please share membership details.")}`;
  const bannerProps = previewBannerProps ?? {
    title: "PowerFit Gym — Demo Website",
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PreviewBanner {...bannerProps} />

      {/* Preview Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-800 text-white py-24 px-4 text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Dumbbell className="w-3.5 h-3.5 mr-1.5" />
            Gym & Fitness Centre
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight">
            PowerFit Gym
            <br />
            <span className="text-blue-200">Shape Your Future</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            State-of-the-art equipment, expert trainers, and a community that
            keeps you motivated. Your fitness journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 font-bold px-8 py-3.5 rounded-full hover:bg-indigo-50 transition-all hover:scale-105 inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-4 h-4" /> Join Now — Free Trial
            </a>
            <button
              type="button"
              className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              View Memberships
            </button>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-indigo-50 border-y border-indigo-100 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-indigo-700">
          {[
            "Mon–Sat: 6AM–10PM",
            "Sunday: 8AM–6PM",
            "AC Gym",
            "Personal Trainers",
            "Free Parking",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Services / Classes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Our Classes
            </h2>
            <p className="text-muted-foreground">
              Something for every fitness goal
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                name: "Cardio Zone",
                icon: "🏃",
                color: "from-red-50 to-orange-50 border-red-100",
              },
              {
                name: "Weight Training",
                icon: "💪",
                color: "from-indigo-50 to-blue-50 border-indigo-100",
              },
              {
                name: "Personal Training",
                icon: "🎯",
                color: "from-violet-50 to-purple-50 border-violet-100",
              },
              {
                name: "Yoga Classes",
                icon: "🧘",
                color: "from-green-50 to-emerald-50 border-green-100",
              },
              {
                name: "Nutrition Plan",
                icon: "🥗",
                color: "from-teal-50 to-cyan-50 border-teal-100",
              },
            ].map((cls) => (
              <div
                key={cls.name}
                className={`bg-gradient-to-br ${cls.color} border rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform`}
              >
                <div className="text-3xl mb-3">{cls.icon}</div>
                <p className="font-semibold text-sm text-foreground">
                  {cls.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership plans */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Membership Plans
            </h2>
            <p className="text-muted-foreground">
              Flexible options to fit your schedule and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Monthly",
                price: "₹999",
                desc: "Full gym access, all classes, locker room",
                highlight: false,
              },
              {
                plan: "Quarterly",
                price: "₹2,499",
                desc: "3-month access + 1 personal training session free",
                highlight: true,
              },
              {
                plan: "Annual",
                price: "₹7,999",
                desc: "Full year + 6 PT sessions + nutrition consultation",
                highlight: false,
              },
            ].map((m) => (
              <div
                key={m.plan}
                className={`rounded-2xl border p-6 text-center ${m.highlight ? "bg-indigo-700 text-white border-indigo-600 shadow-xl shadow-indigo-200" : "bg-white border-border"}`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-wider mb-2 ${m.highlight ? "text-indigo-200" : "text-muted-foreground"}`}
                >
                  {m.plan}
                </p>
                <p
                  className={`text-4xl font-display font-bold mb-3 ${m.highlight ? "text-white" : "text-foreground"}`}
                >
                  {m.price}
                </p>
                <p
                  className={`text-sm mb-5 ${m.highlight ? "text-indigo-100" : "text-muted-foreground"}`}
                >
                  {m.desc}
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 ${m.highlight ? "bg-white text-indigo-700 hover:bg-indigo-50" : "bg-primary text-white hover:bg-primary/90"}`}
                >
                  <MessageCircle className="w-4 h-4" /> Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings & Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Gym Timings
            </h2>
            <div className="space-y-3">
              {[
                { day: "Monday – Friday", time: "6:00 AM – 10:00 PM" },
                { day: "Saturday", time: "6:00 AM – 10:00 PM" },
                { day: "Sunday", time: "8:00 AM – 6:00 PM" },
                { day: "Public Holidays", time: "8:00 AM – 4:00 PM" },
              ].map((t) => (
                <div
                  key={t.day}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="font-medium text-foreground">{t.day}</span>
                  <span className="text-primary font-semibold text-sm">
                    {t.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-accent/50 rounded-2xl border border-border p-6">
            <h3 className="font-display font-bold text-xl text-foreground mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +91 98000 00001 (Demo Number)
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Plot 12, Fitness Lane, Near City Mall, Delhi — 110001
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@powerfitgym.demo
              </li>
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-full text-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8 px-4 text-center mt-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Dumbbell className="w-5 h-5" />
          <span className="font-display font-bold text-lg">PowerFit Gym</span>
        </div>
        <p className="text-indigo-300 text-sm">
          Your transformation starts today.
        </p>
        <p className="text-indigo-400/60 text-xs mt-4">
          This is a demo website created by LocalBoost Web. Not a real gym.
        </p>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COACHING PREVIEW PAGE
═══════════════════════════════════════════════════════════ */
function CoachingPreview({
  previewBannerProps,
}: {
  previewBannerProps?: PreviewBannerProps;
}) {
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I'd like to enquire about admissions at BrightPath Coaching Institute.")}`;
  const bannerProps = previewBannerProps ?? {
    title: "BrightPath Coaching Institute — Demo Website",
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PreviewBanner {...bannerProps} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-700 via-purple-700 to-violet-800 text-white py-24 px-4 text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, white 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
            Coaching Institute
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight">
            BrightPath Coaching
            <br />
            <span className="text-violet-200">Your Path to Success</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Trusted by hundreds of students for JEE, NEET, Boards, and
            Foundation courses. Expert faculty, proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-violet-700 font-bold px-8 py-3.5 rounded-full hover:bg-violet-50 transition-all hover:scale-105 inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-4 h-4" /> Enquire for Admission
            </a>
            <button
              type="button"
              className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              View Courses
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-violet-50 border-y border-violet-100 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Students Enrolled" },
            { value: "92%", label: "Board Results Above 90%" },
            { value: "15+", label: "Years of Experience" },
            { value: "10", label: "Expert Faculty Members" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-2xl text-violet-700">
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Courses Offered
            </h2>
            <p className="text-muted-foreground">
              Structured batches for every stage of your academic journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: "JEE Preparation",
                desc: "Maths, Physics, Chemistry — full syllabus for JEE Mains & Advanced. Morning and evening batches.",
                badge: "Engineering",
              },
              {
                name: "NEET Preparation",
                desc: "Biology, Physics, Chemistry — complete coaching for NEET UG medical entrance exam.",
                badge: "Medical",
              },
              {
                name: "Board Exam (Class 10 & 12)",
                desc: "CBSE and State Board preparation with regular tests and doubt clearing sessions.",
                badge: "School",
              },
              {
                name: "Foundation Course (Class 8–10)",
                desc: "Build a strong base in Maths and Science with early competitive exam exposure.",
                badge: "Foundation",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="border border-border rounded-2xl p-6 hover:border-violet-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-bold text-base text-foreground">
                    {c.name}
                  </h3>
                  <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {c.badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-violet-600 font-semibold text-sm hover:text-violet-800 transition-colors"
                >
                  Enquire Now <TrendingUp className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Our Faculty
            </h2>
            <p className="text-muted-foreground">
              Experienced educators dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Prof. Ramesh Verma",
                subject: "Mathematics",
                exp: "12 years",
                note: "IIT Alumni, specialises in JEE Maths",
              },
              {
                name: "Dr. Sunita Sharma",
                subject: "Biology & Chemistry",
                exp: "10 years",
                note: "MBBS graduate, expert NEET trainer",
              },
              {
                name: "Mr. Anil Kumar",
                subject: "Physics",
                exp: "8 years",
                note: "M.Tech, IIT Roorkee — JEE & NEET Physics",
              },
            ].map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-2xl border border-border p-6 text-center shadow-xs hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-200 to-purple-200 flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold text-violet-700">
                  {f.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3 className="font-display font-bold text-base text-foreground">
                  {f.name}
                </h3>
                <p className="text-violet-600 font-semibold text-sm mt-1">
                  {f.subject}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {f.exp} experience
                </p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {f.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Admission CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Enrol?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for batch availability, fee structure, and admission
            process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-accent/50 rounded-xl p-4">
              <Phone className="w-4 h-4 text-violet-600 flex-shrink-0" />
              <span className="text-sm text-foreground">
                +91 98000 00002 (Demo)
              </span>
            </div>
            <div className="flex items-center gap-3 bg-accent/50 rounded-xl p-4">
              <MapPin className="w-4 h-4 text-violet-600 flex-shrink-0" />
              <span className="text-sm text-foreground">
                Near Ram Chowk, Patna — 800001
              </span>
            </div>
            <div className="flex items-center gap-3 bg-accent/50 rounded-xl p-4">
              <Mail className="w-4 h-4 text-violet-600 flex-shrink-0" />
              <span className="text-sm text-foreground">
                info@brightpath.demo
              </span>
            </div>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-200"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp for Admission Enquiry
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-900 text-white py-8 px-4 text-center mt-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5" />
          <span className="font-display font-bold text-lg">
            BrightPath Coaching Institute
          </span>
        </div>
        <p className="text-violet-300 text-sm">
          Shaping tomorrow's leaders today.
        </p>
        <p className="text-violet-400/60 text-xs mt-4">
          This is a demo website created by LocalBoost Web. Not a real
          institute.
        </p>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SALON PREVIEW PAGE
═══════════════════════════════════════════════════════════ */
function SalonPreview({
  previewBannerProps,
}: {
  previewBannerProps?: PreviewBannerProps;
}) {
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I'd like to book an appointment at GlowUp Salon.")}`;
  const bannerProps = previewBannerProps ?? {
    title: "GlowUp Salon — Demo Website",
  };

  const gallery = [
    { bg: "from-pink-200 to-rose-300", label: "Hair Styling" },
    { bg: "from-rose-200 to-pink-300", label: "Bridal Look" },
    { bg: "from-fuchsia-200 to-pink-200", label: "Skin Care" },
    { bg: "from-pink-300 to-rose-200", label: "Manicure" },
    { bg: "from-rose-300 to-fuchsia-200", label: "Color & Highlights" },
    { bg: "from-fuchsia-300 to-rose-300", label: "Nail Art" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PreviewBanner {...bannerProps} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white py-24 px-4 text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 80%, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Scissors className="w-3.5 h-3.5 mr-1.5" />
            Beauty Salon
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight">
            GlowUp Salon
            <br />
            <span className="text-pink-100">Look Your Best Every Day</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Professional hair, skin, and nail services. Walk in or book your
            appointment today for a fresh new look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 font-bold px-8 py-3.5 rounded-full hover:bg-pink-50 transition-all hover:scale-105 inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-4 h-4" /> Book Appointment
            </a>
            <button
              type="button"
              className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Expert care for hair, skin, and nails
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Haircut & Styling",
                desc: "Cut, blow-dry, and style for all hair types",
                icon: Scissors,
              },
              {
                name: "Bridal Package",
                desc: "Complete bridal makeup, hair, and pre-wedding care",
                icon: Star,
              },
              {
                name: "Skin Care Facial",
                desc: "Deep cleansing, brightening, and anti-aging facials",
                icon: Sparkles,
              },
              {
                name: "Hair Color",
                desc: "Global color, highlights, balayage, and ombre",
                icon: Zap,
              },
              {
                name: "Manicure & Pedicure",
                desc: "Classic, gel, and nail art for hands and feet",
                icon: CheckCircle,
              },
              {
                name: "Eyebrows & Threading",
                desc: "Precise shaping, threading, and tinting",
                icon: Users,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="border border-border rounded-2xl p-5 hover:border-pink-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-pink-600" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5 group-hover:text-pink-600 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 px-4 bg-pink-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Pricing
            </h2>
            <p className="text-muted-foreground">
              Transparent prices — no hidden charges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Basic",
                price: "₹299",
                services: [
                  "Haircut",
                  "Blow Dry",
                  "Eyebrow Threading",
                  "Basic Facial",
                ],
                highlight: false,
              },
              {
                plan: "Premium",
                price: "₹699",
                services: [
                  "Haircut & Styling",
                  "Hair Spa",
                  "Skin Facial",
                  "Manicure",
                  "Eyebrow & Upper Lip",
                ],
                highlight: true,
              },
              {
                plan: "Bridal",
                price: "₹2,999",
                services: [
                  "Full Bridal Makeup",
                  "Hairstyling",
                  "Facial + Clean-up",
                  "Manicure & Pedicure",
                  "Eyebrow Shaping",
                  "Pre-bridal Consultation",
                ],
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.plan}
                className={`rounded-2xl border p-6 text-center ${p.highlight ? "bg-pink-600 text-white border-pink-500 shadow-xl shadow-pink-200" : "bg-white border-border"}`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-wider mb-2 ${p.highlight ? "text-pink-100" : "text-muted-foreground"}`}
                >
                  {p.plan}
                </p>
                <p
                  className={`text-4xl font-display font-bold mb-4 ${p.highlight ? "text-white" : "text-foreground"}`}
                >
                  {p.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {p.services.map((s) => (
                    <li
                      key={s}
                      className={`flex items-center gap-2 text-sm text-left ${p.highlight ? "text-pink-100" : "text-muted-foreground"}`}
                    >
                      <CheckCircle
                        className={`w-3.5 h-3.5 flex-shrink-0 ${p.highlight ? "text-pink-200" : "text-pink-500"}`}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 ${p.highlight ? "bg-white text-pink-600 hover:bg-pink-50" : "bg-pink-600 text-white hover:bg-pink-500"}`}
                >
                  <MessageCircle className="w-4 h-4" /> Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Gallery
            </h2>
            <p className="text-muted-foreground">A glimpse of our work</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.label}
                className={`bg-gradient-to-br ${item.bg} rounded-2xl aspect-square flex items-end p-4 overflow-hidden relative hover:-translate-y-1 transition-transform`}
              >
                <span className="relative text-white font-semibold text-sm drop-shadow-md">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-500 to-rose-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4">
            Book Your Appointment
          </h2>
          <p className="text-pink-100 mb-8">
            Walk-ins welcome Mon–Sat. For guaranteed slots, book via WhatsApp.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-white/15 rounded-xl p-4 flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0" />
              +91 98000 00003 (Demo)
            </div>
            <div className="bg-white/15 rounded-xl p-4 flex items-center gap-3">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              Sector 18, Noida — 201301
            </div>
            <div className="bg-white/15 rounded-xl p-4 flex items-center gap-3">
              <Clock className="w-4 h-4 flex-shrink-0" />
              Mon–Sat: 9AM–8PM
            </div>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 hover:bg-pink-50 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" /> Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8 px-4 text-center mt-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Scissors className="w-5 h-5" />
          <span className="font-display font-bold text-lg">GlowUp Salon</span>
        </div>
        <p className="text-rose-300 text-sm">
          Where every day is a good hair day.
        </p>
        <p className="text-rose-400/60 text-xs mt-4">
          This is a demo website created by LocalBoost Web. Not a real salon.
        </p>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 4 — FREE DEMO BANNER
═══════════════════════════════════════════════════════════ */
function FreeDemoBanner() {
  return (
    <section
      id="free-demo-banner"
      className="py-16 md:py-20 relative overflow-hidden"
      aria-labelledby="free-demo-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-600 to-teal"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 -left-12 w-56 h-56 rounded-full bg-white/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 border border-white/30 mb-6 backdrop-blur-sm">
          <Rocket className="w-6 h-6 text-white" aria-hidden="true" />
        </div>

        <h2
          id="free-demo-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-5"
        >
          We Create Your Preview Website{" "}
          <span className="text-yellow-300">First — For Free</span>
        </h2>

        <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
          No payment. No commitment. We build a preview website for your
          business. If you like it, we continue. If not — no charge.
        </p>

        <Button
          size="lg"
          onClick={() => scrollTo("demo-form")}
          data-ocid="banner.primary_button"
          className="bg-white text-primary hover:bg-indigo-50 font-bold px-10 h-14 rounded-full shadow-xl transition-all hover:scale-105 text-base"
        >
          Request Your Free Demo
        </Button>

        {/* Trust line */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7">
          {["Free Demo", "No Payment", "No Obligation"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 text-white/80 text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 4 — DEMO REQUEST FORM
═══════════════════════════════════════════════════════════ */
type FormStatus = "idle" | "loading" | "success" | "error";

function DemoRequestForm() {
  const { actor } = useActor();
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("English");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!businessName.trim() || !businessType || !phoneNumber.trim()) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    if (!actor) {
      setErrorMsg("Connection not ready. Please wait a moment and try again.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await actor.submitDemoRequest(
        businessName.trim(),
        businessType,
        phoneNumber.trim(),
        language,
        message.trim() || null,
      );
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  function buildWhatsAppMessage() {
    if (language === "Hindi") {
      return encodeURIComponent(
        `Namaste, maine mere ${businessType} ke liye free demo website request ki hai: ${businessName}. Phone: ${phoneNumber}. Dhanyavaad.`,
      );
    }
    return encodeURIComponent(
      `Hello, I just requested a free demo website for my ${businessType}: ${businessName}. Phone: ${phoneNumber}. Thank you.`,
    );
  }

  if (status === "success") {
    return (
      <section
        id="demo-form"
        className="py-20 md:py-28 bg-accent/30"
        aria-label="Demo request success"
      >
        <div className="max-w-lg mx-auto px-4 text-center">
          <div
            data-ocid="demo-form.success_state"
            className="bg-white rounded-3xl border border-border shadow-xl p-10 flex flex-col items-center gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Preview request received!
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                We'll build your demo site and WhatsApp you in{" "}
                <strong className="text-foreground">24–48 hours</strong>. Thank
                you for reaching out!
              </p>
            </div>
            <a
              href={`${WHATSAPP_BASE}?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="demo-form.primary_button"
              className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-5 h-5" />
              {language === "Hindi"
                ? "WhatsApp Par Message Karein"
                : "Message Us on WhatsApp"}
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setBusinessName("");
                setBusinessType("");
                setPhoneNumber("");
                setLanguage("English");
                setMessage("");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="demo-form"
      className="py-20 md:py-28 bg-accent/30"
      aria-labelledby="demo-form-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Get Your Free Demo
          </p>
          <h2
            id="demo-form-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4"
          >
            Request Your{" "}
            <span className="text-gradient-indigo">Free Preview Website</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            Fill in the form below and we'll build a preview website for your
            business — completely free, no obligation.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-border shadow-xl shadow-primary/5 p-7 md:p-9">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* Business Name */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="biz-name"
                className="font-semibold text-sm text-foreground"
              >
                Business Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="biz-name"
                type="text"
                placeholder="e.g. PowerFit Gym, GlowUp Salon"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                disabled={status === "loading"}
                data-ocid="demo-form.input"
                className="h-11 text-base"
                autoComplete="organization"
              />
            </div>

            {/* Business Type */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="biz-type"
                className="font-semibold text-sm text-foreground"
              >
                Business Type <span className="text-destructive">*</span>
              </Label>
              <Select
                value={businessType}
                onValueChange={setBusinessType}
                disabled={status === "loading"}
              >
                <SelectTrigger
                  id="biz-type"
                  data-ocid="demo-form.select"
                  className="h-11 text-base"
                >
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Gym">Gym / Fitness Centre</SelectItem>
                  <SelectItem value="Salon">Salon / Beauty Parlour</SelectItem>
                  <SelectItem value="Coaching Institute">
                    Coaching Institute
                  </SelectItem>
                  <SelectItem value="Clinic">Clinic / Hospital</SelectItem>
                  <SelectItem value="Shop">Shop / Retail Store</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="phone"
                className="font-semibold text-sm text-foreground"
              >
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                disabled={status === "loading"}
                data-ocid="demo-form.input"
                className="h-11 text-base"
                autoComplete="tel"
              />
            </div>

            {/* Preferred Language */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="lang"
                className="font-semibold text-sm text-foreground"
              >
                Preferred Language
              </Label>
              <Select
                value={language}
                onValueChange={setLanguage}
                disabled={status === "loading"}
              >
                <SelectTrigger
                  id="lang"
                  data-ocid="demo-form.select"
                  className="h-11 text-base"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="msg"
                className="font-semibold text-sm text-foreground"
              >
                Message{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="msg"
                placeholder="Tell us a bit about your business..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                data-ocid="demo-form.textarea"
                rows={3}
                className="text-base resize-none"
              />
            </div>

            {/* Error state */}
            {status === "error" && (
              <div
                data-ocid="demo-form.error_state"
                role="alert"
                className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive text-sm font-medium px-4 py-3 rounded-xl"
              >
                <X className="w-4 h-4 flex-shrink-0" />
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              data-ocid="demo-form.submit_button"
              className="h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 mt-1"
            >
              {status === "loading" ? (
                <>
                  <Loader2
                    className="w-5 h-5 animate-spin mr-2"
                    data-ocid="demo-form.loading_state"
                  />
                  Submitting your request...
                </>
              ) : (
                "Request Free Demo Website"
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              No payment required. We'll contact you within 24–48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 5 — AI WEBSITE HELPER TOOL
═══════════════════════════════════════════════════════════ */
type BusinessTypeKey =
  | "Gym"
  | "Salon"
  | "Coaching Institute"
  | "Clinic"
  | "Shop";

interface RecommendedPage {
  name: string;
  description: string;
  cost: number;
  days: number;
}

const AI_HELPER_DATA: Record<BusinessTypeKey, RecommendedPage[]> = {
  Gym: [
    {
      name: "Homepage",
      description: "Introduce your gym, photos, USP",
      cost: 800,
      days: 1,
    },
    {
      name: "Services / Classes",
      description: "List your classes and timings",
      cost: 600,
      days: 1,
    },
    {
      name: "Membership Plans",
      description: "Display pricing packages",
      cost: 500,
      days: 1,
    },
    {
      name: "Gallery",
      description: "Show gym equipment and facilities",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Contact + Maps",
      description: "Phone, address, Google Maps",
      cost: 500,
      days: 0.5,
    },
    {
      name: "WhatsApp Integration",
      description: "One-tap WhatsApp button",
      cost: 300,
      days: 0.5,
    },
  ],
  Salon: [
    {
      name: "Homepage",
      description: "Showcase your salon's style and vibe",
      cost: 800,
      days: 1,
    },
    {
      name: "Services & Prices",
      description: "List all services with prices",
      cost: 600,
      days: 1,
    },
    {
      name: "Gallery",
      description: "Before/After photos, salon photos",
      cost: 500,
      days: 1,
    },
    {
      name: "Booking / Appointment",
      description: "Book an appointment CTA",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Contact + Maps",
      description: "Address, phone, Google Maps",
      cost: 500,
      days: 0.5,
    },
    {
      name: "WhatsApp Integration",
      description: "Instant WhatsApp contact",
      cost: 300,
      days: 0.5,
    },
  ],
  "Coaching Institute": [
    {
      name: "Homepage",
      description: "Intro to your institute and results",
      cost: 800,
      days: 1,
    },
    {
      name: "Courses Offered",
      description: "List all batches and subjects",
      cost: 600,
      days: 1,
    },
    {
      name: "Faculty",
      description: "Introduce your teachers",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Results & Testimonials",
      description: "Share student success",
      cost: 500,
      days: 1,
    },
    {
      name: "Admission / Enquiry Form",
      description: "Collect student leads",
      cost: 600,
      days: 1,
    },
    {
      name: "Contact + Maps",
      description: "Location and contact info",
      cost: 500,
      days: 0.5,
    },
  ],
  Clinic: [
    {
      name: "Homepage",
      description: "Build patient trust and overview",
      cost: 800,
      days: 1,
    },
    {
      name: "Services / Treatments",
      description: "List your specialties",
      cost: 600,
      days: 1,
    },
    {
      name: "Doctor Profile",
      description: "Credentials and experience",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Appointment Booking",
      description: "Easy booking CTA",
      cost: 500,
      days: 1,
    },
    {
      name: "Patient Testimonials",
      description: "Build credibility",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Contact + Maps",
      description: "Address, hours, maps",
      cost: 500,
      days: 0.5,
    },
  ],
  Shop: [
    {
      name: "Homepage",
      description: "Feature your shop and products",
      cost: 800,
      days: 1,
    },
    {
      name: "Products / Menu",
      description: "Showcase what you sell",
      cost: 600,
      days: 1,
    },
    {
      name: "Shop Hours & Location",
      description: "Be easy to find",
      cost: 300,
      days: 0.5,
    },
    {
      name: "Gallery",
      description: "Product photos, shop interior",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Offers / Discounts",
      description: "Highlight current deals",
      cost: 400,
      days: 0.5,
    },
    {
      name: "Contact + WhatsApp",
      description: "Easy one-tap contact",
      cost: 500,
      days: 0.5,
    },
  ],
};

const BUSINESS_TYPES: {
  key: BusinessTypeKey;
  icon: LucideIcon;
  color: string;
  activeColor: string;
}[] = [
  {
    key: "Gym",
    icon: Dumbbell,
    color:
      "border-indigo-100 bg-indigo-50 text-indigo-700 hover:border-indigo-300",
    activeColor:
      "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-200",
  },
  {
    key: "Salon",
    icon: Scissors,
    color: "border-pink-100 bg-pink-50 text-pink-700 hover:border-pink-300",
    activeColor:
      "border-pink-500 bg-pink-600 text-white shadow-lg shadow-pink-200",
  },
  {
    key: "Coaching Institute",
    icon: GraduationCap,
    color:
      "border-violet-100 bg-violet-50 text-violet-700 hover:border-violet-300",
    activeColor:
      "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-200",
  },
  {
    key: "Clinic",
    icon: Stethoscope,
    color: "border-teal-100 bg-teal-50 text-teal-700 hover:border-teal-300",
    activeColor:
      "border-teal-500 bg-teal-600 text-white shadow-lg shadow-teal-200",
  },
  {
    key: "Shop",
    icon: ShoppingBag,
    color:
      "border-emerald-100 bg-emerald-50 text-emerald-700 hover:border-emerald-300",
    activeColor:
      "border-emerald-500 bg-emerald-600 text-white shadow-lg shadow-emerald-200",
  },
];

const HINDI_LABELS: Record<string, string> = {
  sectionTitle: "AI वेबसाइट हेल्पर",
  sectionSubtitle: "अपना व्यापार चुनें और देखें कि आपकी वेबसाइट में क्या-क्या होना चाहिए",
  recommendedFor: "के लिए अनुशंसित",
  estimatedCost: "आपकी अनुमानित वेबसाइट लागत",
  suggestedPackage: "सुझाया गया पैकेज",
  youSave: "आप बचाते हैं",
  getWebsite: "यह वेबसाइट पाएं",
  day: "दिन",
};

function AIHelper() {
  const [selected, setSelected] = useState<BusinessTypeKey | null>(null);
  const [isHindi, setIsHindi] = useState(false);

  const pages = selected ? AI_HELPER_DATA[selected] : [];
  const totalCost = pages.reduce((sum, p) => sum + p.cost, 0);

  let suggestedPackage = "";
  let packagePrice = 0;
  if (totalCost <= 3500) {
    suggestedPackage = "Basic";
    packagePrice = 2999;
  } else if (totalCost <= 5000) {
    suggestedPackage = "Business";
    packagePrice = 4999;
  } else {
    suggestedPackage = "Advanced";
    packagePrice = 7999;
  }
  const savings = totalCost > packagePrice ? totalCost - packagePrice : 0;

  return (
    <section
      id="ai-helper"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="ai-helper-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 md:mb-12">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
              AI Website Helper
            </p>
            <h2
              id="ai-helper-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-3"
            >
              {isHindi ? AI_HELPER_DATA && "AI" : "Find Out What Pages"}{" "}
              <span className="text-gradient-indigo">
                {isHindi ? "वेबसाइट हेल्पर" : "Your Website Needs"}
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              {isHindi
                ? AI_HELPER_DATA &&
                  "अपना व्यापार चुनें और देखें आपकी वेबसाइट में क्या-क्या होना चाहिए"
                : "Select your business type and instantly see the recommended pages, estimated costs, and suggested package."}
            </p>
          </div>

          {/* Hindi/English toggle */}
          <button
            type="button"
            onClick={() => setIsHindi((h) => !h)}
            data-ocid="ai-helper.toggle"
            className="flex items-center gap-2 border border-primary/30 text-primary hover:bg-primary hover:text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all flex-shrink-0 self-start sm:self-auto mt-1"
            aria-pressed={isHindi}
            aria-label="Toggle Hindi/English"
          >
            <Languages className="w-4 h-4" />
            {isHindi ? "English" : "हिंदी"}
          </button>
        </div>

        {/* Business type selector */}
        <fieldset
          className="flex flex-wrap gap-3 mb-10 border-0 p-0 m-0"
          aria-label="Select business type"
        >
          <legend className="sr-only">Select business type</legend>
          {BUSINESS_TYPES.map((bt, idx) => {
            const Icon = bt.icon;
            const isActive = selected === bt.key;
            return (
              <button
                key={bt.key}
                type="button"
                onClick={() => setSelected(bt.key)}
                data-ocid={`ai-helper.button.${idx + 1}` as const}
                aria-pressed={isActive}
                className={`flex items-center gap-2.5 border-2 font-semibold text-sm px-5 py-3 rounded-full transition-all min-h-[44px] ${isActive ? bt.activeColor : bt.color}`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {isHindi && bt.key === "Gym"
                  ? "जिम"
                  : isHindi && bt.key === "Salon"
                    ? "सैलून"
                    : isHindi && bt.key === "Coaching Institute"
                      ? "कोचिंग संस्था"
                      : isHindi && bt.key === "Clinic"
                        ? "क्लिनिक"
                        : isHindi && bt.key === "Shop"
                          ? "दुकान"
                          : bt.key}
              </button>
            );
          })}
        </fieldset>

        {/* No selection placeholder */}
        {!selected && (
          <div className="text-center py-16 border-2 border-dashed border-border rounded-3xl bg-accent/20">
            <Sparkles
              className="w-10 h-10 text-primary/40 mx-auto mb-4"
              aria-hidden="true"
            />
            <p className="text-muted-foreground font-medium text-base">
              {isHindi
                ? "ऊपर से अपना व्यापार चुनें"
                : "Select your business type above to see recommended pages"}
            </p>
          </div>
        )}

        {/* Recommendations */}
        {selected && (
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-foreground">
              {isHindi
                ? `${selected} ${HINDI_LABELS.recommendedFor}`
                : `Recommended for ${selected}`}
            </h3>

            {/* Pages list */}
            <div className="flex flex-col gap-3">
              {pages.map((page, index) => {
                const ocid = "ai-helper.card" as const;
                return (
                  <div
                    key={page.name}
                    data-ocid={ocid}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-border rounded-2xl p-4 md:p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    {/* Number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>

                    {/* Name & description */}
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-sm text-foreground">
                        {page.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {page.description}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="inline-flex items-center gap-1 bg-primary/8 text-primary border border-primary/15 text-xs font-semibold px-2.5 py-1 rounded-full">
                        <IndianRupee className="w-3 h-3" />
                        {page.cost.toLocaleString("en-IN")}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-teal/10 text-teal border border-teal/20 text-xs font-semibold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {page.days === 0.5
                          ? `0.5 ${isHindi ? HINDI_LABELS.day : "day"}`
                          : `${page.days} ${isHindi ? HINDI_LABELS.day : page.days === 1 ? "day" : "days"}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary / Estimate card */}
            <div
              data-ocid="ai-helper.panel"
              className="bg-gradient-to-br from-primary/5 via-primary/3 to-teal/5 border-2 border-primary/20 rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">
                    {isHindi
                      ? HINDI_LABELS.estimatedCost
                      : "Your Estimated Website Cost"}
                  </p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display font-bold text-4xl text-foreground">
                      ₹{totalCost.toLocaleString("en-IN")}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      estimated total
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      {isHindi
                        ? HINDI_LABELS.suggestedPackage
                        : "Suggested Package"}
                      : {suggestedPackage} — ₹
                      {packagePrice.toLocaleString("en-IN")}
                    </span>
                    {savings > 0 && (
                      <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        {isHindi
                          ? `आप ₹${savings.toLocaleString("en-IN")} बचाते हैं`
                          : `You save ₹${savings.toLocaleString("en-IN")} by choosing the ${suggestedPackage} package`}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Prices start at ₹2,999 — final quote based on your exact
                    requirements.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    size="lg"
                    onClick={() => scrollTo("demo-form")}
                    data-ocid="ai-helper.primary_button"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 h-13 shadow-lg shadow-primary/20 transition-all hover:scale-105 w-full md:w-auto"
                  >
                    {isHindi ? "यह वेबसाइट पाएं" : "Get This Website"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Free demo · No payment needed
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 6 — COST CALCULATOR
═══════════════════════════════════════════════════════════ */
const ADDONS = [
  { id: "contactForm", label: "Contact Form", price: 500 },
  { id: "googleMaps", label: "Google Maps", price: 500 },
  { id: "whatsapp", label: "WhatsApp Button", price: 300 },
  { id: "gallery", label: "Gallery", price: 800 },
  { id: "blog", label: "Blog", price: 1200 },
  { id: "booking", label: "Online Booking", price: 1500 },
] as const;

type AddonId = (typeof ADDONS)[number]["id"];

function CostCalculator() {
  const [bizType, setBizType] = useState("Gym");
  const [pages, setPages] = useState(3);
  const [selectedAddons, setSelectedAddons] = useState<Set<AddonId>>(new Set());

  const baseCost = 1500 + (pages - 1) * 300;
  const addonCost = ADDONS.filter((a) => selectedAddons.has(a.id)).reduce(
    (sum, a) => sum + a.price,
    0,
  );
  const total = baseCost + addonCost;

  function toggleAddon(id: AddonId) {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section
      id="calculator"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="calculator-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Cost Calculator
          </p>
          <h2
            id="calculator-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            Estimate Your{" "}
            <span className="text-gradient-indigo">Website Cost</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Adjust the options below to get an instant estimate in INR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — controls */}
          <div className="flex flex-col gap-7">
            {/* Business type */}
            <div className="flex flex-col gap-2.5">
              <Label
                htmlFor="calc-biz-type"
                className="font-semibold text-sm text-foreground"
              >
                Business Type
              </Label>
              <Select value={bizType} onValueChange={setBizType}>
                <SelectTrigger
                  id="calc-biz-type"
                  data-ocid="calculator.select"
                  className="h-11 text-base"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Gym", "Salon", "Coaching Institute", "Clinic", "Shop"].map(
                    (bt) => (
                      <SelectItem key={bt} value={bt}>
                        {bt}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Pages slider */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Label className="font-semibold text-sm text-foreground">
                  Number of Pages
                </Label>
                <span className="text-primary font-bold text-lg tabular-nums">
                  {pages}
                </span>
              </div>
              <Slider
                min={1}
                max={10}
                step={1}
                value={[pages]}
                onValueChange={([val]) => setPages(val)}
                data-ocid="calculator.toggle"
                className="w-full"
                aria-label="Number of pages"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 page</span>
                <span>10 pages</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Base cost: ₹1,500 + ₹300 per additional page
              </p>
            </div>

            {/* Add-ons */}
            <div className="flex flex-col gap-3">
              <Label className="font-semibold text-sm text-foreground">
                Add-on Features
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const checked = selectedAddons.has(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      data-ocid="calculator.checkbox"
                      aria-pressed={checked}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all min-h-[44px] ${
                        checked
                          ? "border-primary/60 bg-primary/5 text-foreground"
                          : "border-border bg-white text-muted-foreground hover:border-primary/30 hover:bg-accent/40"
                      }`}
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleAddon(addon.id)}
                        className="flex-shrink-0 pointer-events-none"
                        aria-hidden="true"
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${checked ? "text-foreground" : "text-muted-foreground"}`}
                        >
                          {addon.label}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold flex-shrink-0 ${checked ? "text-primary" : "text-muted-foreground/70"}`}
                      >
                        +₹{addon.price.toLocaleString("en-IN")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — live total */}
          <div className="lg:sticky lg:top-24">
            <div
              data-ocid="calculator.panel"
              className="bg-gradient-to-br from-primary/6 via-primary/3 to-teal/5 border-2 border-primary/20 rounded-3xl p-7 md:p-8 flex flex-col gap-6"
            >
              {/* Business type badge */}
              <div className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary/70 uppercase tracking-wider">
                  {bizType} Website
                </span>
              </div>

              {/* Breakdown */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Base ({pages} page{pages > 1 ? "s" : ""})
                  </span>
                  <span className="font-semibold text-foreground">
                    ₹{baseCost.toLocaleString("en-IN")}
                  </span>
                </div>
                {ADDONS.filter((a) => selectedAddons.has(a.id)).map((addon) => (
                  <div
                    key={addon.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-primary/60" />
                      {addon.label}
                    </span>
                    <span className="font-semibold text-foreground">
                      +₹{addon.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
                <div className="h-px bg-border my-1" />
              </div>

              {/* Grand total */}
              <div>
                <p className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-1">
                  Estimated Total
                </p>
                <p className="font-display font-bold text-5xl md:text-6xl text-foreground leading-none tabular-nums">
                  ₹{total.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Final quote may vary based on your specific needs.
                </p>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                onClick={() => scrollTo("demo-form")}
                data-ocid="calculator.primary_button"
                className="h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-xl shadow-primary/20 transition-all hover:scale-105"
              >
                Request Exact Quote
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Prices start at ₹2,999 — no payment needed for demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 6 — PRICING SECTION
═══════════════════════════════════════════════════════════ */
interface PricingPlan {
  name: string;
  price: string;
  pages: string;
  popular: boolean;
  features: string[];
  accentClass: string;
  ctaClass: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: "₹2,999",
    pages: "Up to 3 pages",
    popular: false,
    features: [
      "Mobile-First Design",
      "Contact Form",
      "Basic SEO Setup",
      "1 Revision",
      "WhatsApp Support",
    ],
    accentClass: "bg-white border-border",
    ctaClass:
      "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20",
  },
  {
    name: "Business",
    price: "₹4,999",
    pages: "Up to 6 pages",
    popular: true,
    features: [
      "Everything in Basic",
      "WhatsApp Button",
      "Google Maps Integration",
      "Photo Gallery",
      "2 Revisions",
      "Priority Support",
    ],
    accentClass:
      "bg-primary border-primary shadow-2xl shadow-primary/25 scale-[1.02]",
    ctaClass: "bg-white hover:bg-indigo-50 text-primary shadow-white/20",
  },
  {
    name: "Advanced",
    price: "₹7,999",
    pages: "Up to 10 pages",
    popular: false,
    features: [
      "Everything in Business",
      "Blog / News Section",
      "Advanced SEO",
      "Online Booking",
      "3 Revisions",
      "Fast Delivery",
    ],
    accentClass: "bg-white border-border",
    ctaClass:
      "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-accent/30"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            Simple,{" "}
            <span className="text-gradient-indigo">Transparent Pricing</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Prices start at ₹2,999 — final quote based on features.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start md:items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const ocid = `pricing.item.${index + 1}` as const;
            return (
              <article
                key={plan.name}
                data-ocid={ocid}
                className={`relative rounded-3xl border p-7 md:p-8 flex flex-col gap-5 transition-all ${plan.accentClass}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      ✦ Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div>
                  <p
                    className={`text-sm font-semibold uppercase tracking-widest mb-1 ${plan.popular ? "text-white/70" : "text-primary/70"}`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className={`font-display font-bold text-4xl md:text-5xl ${plan.popular ? "text-white" : "text-foreground"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-sm font-medium ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}
                  >
                    {plan.pages}
                  </p>
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-white/60" : "text-primary/70"}`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-sm ${plan.popular ? "text-white/90" : "text-foreground/80"}`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  size="lg"
                  onClick={() => scrollTo("demo-form")}
                  data-ocid="pricing.primary_button"
                  className={`h-12 rounded-full font-bold shadow-lg transition-all hover:scale-105 ${plan.ctaClass}`}
                >
                  Get Started
                </Button>
              </article>
            );
          })}
        </div>

        {/* Custom quote row */}
        <div
          data-ocid="pricing.panel"
          className="mt-8 md:mt-10 rounded-2xl bg-white border border-border p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs"
        >
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-foreground text-base">
              Need something different?
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Get a custom quote for your exact requirements.
            </p>
          </div>
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I'd like a custom website quote. Please contact me.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="pricing.secondary_button"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-md shadow-green-200 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Prices start at ₹2,999 — final quote based on features. No hidden
          charges.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 7 — DYNAMIC PREVIEW PAGE
═══════════════════════════════════════════════════════════ */
function DynamicPreviewPage({ slug }: { slug: string }) {
  const { actor, isFetching } = useActor();
  const [demoRequest, setDemoRequest] = useState<
    DemoRequest | null | undefined
  >(undefined); // undefined = loading, null = not found
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFetching || !actor) return;
    let cancelled = false;
    setLoading(true);
    actor
      .getPreviewBySlug(slug)
      .then((result) => {
        if (!cancelled) {
          setDemoRequest(result);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDemoRequest(null);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [actor, isFetching, slug]);

  // Loading state
  if (loading || isFetching) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-white gap-5"
        data-ocid="preview.loading_state"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <div className="text-center">
          <p className="font-display font-bold text-xl text-foreground mb-1">
            Loading preview...
          </p>
          <p className="text-sm text-muted-foreground">
            Please wait while we fetch your demo site.
          </p>
        </div>
      </div>
    );
  }

  // Not found or expired
  if (!demoRequest) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-4"
        data-ocid="preview.error_state"
      >
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>
        <div className="text-center max-w-md">
          <h1 className="font-display font-bold text-2xl text-foreground mb-2">
            Preview Expired or Not Found
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            This preview link has expired or doesn't exist. Please request a new
            demo website to get a fresh preview.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={goToMain}
            variant="outline"
            data-ocid="preview.secondary_button"
            className="rounded-full px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button
            onClick={() => {
              goToMain();
              setTimeout(() => scrollTo("demo-form"), 100);
            }}
            data-ocid="preview.primary_button"
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Request New Demo
          </Button>
        </div>
      </div>
    );
  }

  // Compute daysLeft from expiresAt (BigInt nanoseconds)
  const expiresAtMs = Number(demoRequest.expiresAt) / 1_000_000;
  const daysLeft = Math.max(
    0,
    Math.ceil((expiresAtMs - Date.now()) / (1000 * 60 * 60 * 24)),
  );

  // Map businessType → template
  const bt = demoRequest.businessType.toLowerCase();
  const bannerProps = {
    title: `${demoRequest.businessName} — Demo Website`,
    businessName: demoRequest.businessName,
    daysLeft,
  };

  if (bt.includes("gym") || bt.includes("fitness")) {
    return <GymPreview previewBannerProps={bannerProps} />;
  }
  if (
    bt.includes("coaching") ||
    bt.includes("institute") ||
    bt.includes("tuition")
  ) {
    return <CoachingPreview previewBannerProps={bannerProps} />;
  }
  if (bt.includes("salon") || bt.includes("beauty") || bt.includes("parlour")) {
    return <SalonPreview previewBannerProps={bannerProps} />;
  }
  // Default fallback — use gym template for others
  return <GymPreview previewBannerProps={bannerProps} />;
}

/* ═══════════════════════════════════════════════════════════
   PART 8 — ADMIN DASHBOARD
═══════════════════════════════════════════════════════════ */

// Status badge helper
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    New: { label: "New", cls: "bg-blue-100 text-blue-700 border-blue-200" },
    "In Progress": {
      label: "In Progress",
      cls: "bg-amber-100 text-amber-700 border-amber-200",
    },
    "Demo Ready": {
      label: "Demo Ready",
      cls: "bg-green-100 text-green-700 border-green-200",
    },
    Converted: {
      label: "Converted",
      cls: "bg-teal-100 text-teal-700 border-teal-200",
    },
  };
  const entry = map[status] ?? {
    label: status,
    cls: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full border ${entry.cls}`}
    >
      {entry.label}
    </span>
  );
}

// Format BigInt nanosecond timestamp to readable date
function formatTimestamp(ts: bigint): string {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// CSV export helper
function exportCSV(
  headers: string[],
  rows: string[][],
  filename: string,
): void {
  const csv = [headers, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","),
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Admin — Demo Requests Tab
function AdminDemoRequests({
  actor,
}: {
  actor: NonNullable<ReturnType<typeof useActor>["actor"]>;
}) {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [extendingId, setExtendingId] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await actor.getAllDemoRequests();
      setRequests(data);
    } catch {
      setError("Failed to load demo requests.");
    } finally {
      setLoading(false);
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: load is a stable local fn wrapping actor
  useEffect(() => {
    load();
  }, [actor]);

  async function updateStatus(id: string, status: string) {
    setUpdatingId(id);
    try {
      await actor.updateDemoRequestStatus(id, status);
      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status } : r)),
      );
    } catch {
      /* ignore */
    } finally {
      setUpdatingId(null);
    }
  }

  async function extendExpiry(id: string) {
    setExtendingId(id);
    try {
      await actor.extendPreviewExpiry(id, 7n);
      await load();
    } catch {
      /* ignore */
    } finally {
      setExtendingId(null);
    }
  }

  function copyPreviewLink(slug: string) {
    const link = `${window.location.origin}${window.location.pathname}#/preview/${slug}`;
    navigator.clipboard.writeText(link).catch(() => {});
    setCopiedId(slug);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function handleExportCSV() {
    const headers = [
      "Business Name",
      "Business Type",
      "Phone",
      "Language",
      "Status",
      "Created",
      "Expires",
      "Preview Slug",
    ];
    const rows = requests.map((r) => [
      r.businessName,
      r.businessType,
      r.phoneNumber,
      r.language,
      r.status,
      formatTimestamp(r.createdAt),
      formatTimestamp(r.expiresAt),
      r.previewSlug,
    ]);
    exportCSV(headers, rows, "demo-requests.csv");
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="font-display font-bold text-lg text-foreground">
          Demo Requests{" "}
          {!loading && (
            <span className="text-sm font-normal text-muted-foreground">
              ({requests.length})
            </span>
          )}
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={load}
            disabled={loading}
            data-ocid="admin.demo_requests.button"
            className="gap-1.5 rounded-full"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            disabled={loading || requests.length === 0}
            data-ocid="admin.demo_requests.button"
            className="gap-1.5 rounded-full"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div
          className="flex items-center justify-center py-16 gap-3 text-muted-foreground"
          data-ocid="admin.demo_requests.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
          Loading...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div
          className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive text-sm px-4 py-3 rounded-xl"
          data-ocid="admin.demo_requests.error_state"
        >
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && requests.length === 0 && (
        <div
          className="text-center py-16 border-2 border-dashed border-border rounded-2xl"
          data-ocid="admin.demo_requests.empty_state"
        >
          <p className="text-muted-foreground font-medium">
            No demo requests yet.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Requests submitted via the Demo Form will appear here.
          </p>
        </div>
      )}

      {/* Table */}
      {!loading && requests.length > 0 && (
        <div
          className="overflow-x-auto rounded-xl border border-border"
          data-ocid="admin.demo_requests.table"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/60 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Business
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Type
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  Phone
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  Lang
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  Created
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden xl:table-cell">
                  Expires
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => {
                const ocid = `admin.demo_requests.item.${idx + 1}` as const;
                return (
                  <tr
                    key={req.id}
                    data-ocid={ocid}
                    className="border-b border-border last:border-0 hover:bg-accent/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-foreground max-w-[120px] truncate">
                      {req.businessName}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {req.businessType}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {req.phoneNumber}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden lg:table-cell">
                      {req.language}
                    </td>
                    <td className="px-4 py-3">
                      <Select
                        value={req.status}
                        onValueChange={(v) => updateStatus(req.id, v)}
                        disabled={updatingId === req.id}
                      >
                        <SelectTrigger
                          className="h-7 text-xs w-[120px] border-0 p-0 bg-transparent shadow-none focus:ring-0"
                          data-ocid="admin.demo_requests.select"
                        >
                          <StatusBadge status={req.status} />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "New",
                            "In Progress",
                            "Demo Ready",
                            "Converted",
                          ].map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden lg:table-cell">
                      {formatTimestamp(req.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">
                      {formatTimestamp(req.expiresAt)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <button
                          type="button"
                          onClick={() => extendExpiry(req.id)}
                          disabled={extendingId === req.id}
                          data-ocid="admin.demo_requests.button"
                          className="text-xs px-2 py-1 rounded-lg border border-border hover:bg-accent transition-colors disabled:opacity-50 whitespace-nowrap"
                          title="Extend preview by 7 days"
                        >
                          {extendingId === req.id ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            "+7d"
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => copyPreviewLink(req.previewSlug)}
                          data-ocid="admin.demo_requests.button"
                          className="text-xs px-2 py-1 rounded-lg border border-border hover:bg-accent transition-colors whitespace-nowrap"
                          title="Copy preview link"
                        >
                          {copiedId === req.previewSlug ? (
                            "✓"
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                        <a
                          href={`#/preview/${req.previewSlug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-ocid="admin.demo_requests.link"
                          className="text-xs px-2 py-1 rounded-lg border border-border hover:bg-accent transition-colors"
                          title="View preview"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Admin — Audit Requests Tab
function AdminAuditRequests({
  actor,
}: {
  actor: NonNullable<ReturnType<typeof useActor>["actor"]>;
}) {
  const [requests, setRequests] = useState<
    Awaited<ReturnType<typeof actor.getAllAuditRequests>>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await actor.getAllAuditRequests();
      setRequests(data);
    } catch {
      setError("Failed to load audit requests.");
    } finally {
      setLoading(false);
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: load is stable
  useEffect(() => {
    load();
  }, [actor]);

  function handleExportCSV() {
    const headers = ["URL / Maps Link", "Name", "Phone", "Date"];
    const rows = requests.map((r) => [
      r.websiteOrMapsUrl,
      r.name ?? "",
      r.phoneNumber ?? "",
      formatTimestamp(r.createdAt),
    ]);
    exportCSV(headers, rows, "audit-requests.csv");
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="font-display font-bold text-lg text-foreground">
          Audit Requests{" "}
          {!loading && (
            <span className="text-sm font-normal text-muted-foreground">
              ({requests.length})
            </span>
          )}
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={load}
            disabled={loading}
            data-ocid="admin.audit_requests.button"
            className="gap-1.5 rounded-full"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            disabled={loading || requests.length === 0}
            data-ocid="admin.audit_requests.button"
            className="gap-1.5 rounded-full"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </Button>
        </div>
      </div>

      {loading && (
        <div
          className="flex items-center justify-center py-16 gap-3 text-muted-foreground"
          data-ocid="admin.audit_requests.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
          Loading...
        </div>
      )}
      {!loading && error && (
        <div
          className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive text-sm px-4 py-3 rounded-xl"
          data-ocid="admin.audit_requests.error_state"
        >
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}
      {!loading && !error && requests.length === 0 && (
        <div
          className="text-center py-16 border-2 border-dashed border-border rounded-2xl"
          data-ocid="admin.audit_requests.empty_state"
        >
          <Search
            className="w-8 h-8 text-muted-foreground/40 mx-auto mb-3"
            aria-hidden="true"
          />
          <p className="text-muted-foreground font-medium">
            No audit requests yet.
          </p>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
            Requests submitted via the Free Audit form will appear here.
          </p>
        </div>
      )}
      {!loading && requests.length > 0 && (
        <div
          className="overflow-x-auto rounded-xl border border-border"
          data-ocid="admin.audit_requests.table"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/60 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  URL / Maps Link
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  Name
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  Phone
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => {
                const ocid = `admin.audit_requests.item.${idx + 1}` as const;
                return (
                  <tr
                    key={req.id}
                    data-ocid={ocid}
                    className="border-b border-border last:border-0 hover:bg-accent/30"
                  >
                    <td className="px-4 py-3 text-primary max-w-[200px] truncate">
                      <a
                        href={req.websiteOrMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {req.websiteOrMapsUrl}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {req.name ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                      {req.phoneNumber ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {formatTimestamp(req.createdAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Admin — Contact Messages Tab
function AdminContactMessages({
  actor,
}: {
  actor: NonNullable<ReturnType<typeof useActor>["actor"]>;
}) {
  const [messages, setMessages] = useState<
    Awaited<ReturnType<typeof actor.getAllContactMessages>>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    actor
      .getAllContactMessages()
      .then(setMessages)
      .catch(() => setError("Failed to load."))
      .finally(() => setLoading(false));
  }, [actor]);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-display font-bold text-lg text-foreground">
        Contact Messages{" "}
        {!loading && (
          <span className="text-sm font-normal text-muted-foreground">
            ({messages.length})
          </span>
        )}
      </h3>

      {loading && (
        <div
          className="flex items-center justify-center py-16 gap-3 text-muted-foreground"
          data-ocid="admin.contact_messages.loading_state"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
          Loading...
        </div>
      )}
      {!loading && error && (
        <div
          className="text-destructive text-sm"
          data-ocid="admin.contact_messages.error_state"
        >
          {error}
        </div>
      )}
      {!loading && !error && messages.length === 0 && (
        <div
          className="text-center py-16 border-2 border-dashed border-border rounded-2xl"
          data-ocid="admin.contact_messages.empty_state"
        >
          <p className="text-muted-foreground font-medium">
            No contact messages yet.
          </p>
        </div>
      )}
      {!loading && messages.length > 0 && (
        <div
          className="overflow-x-auto rounded-xl border border-border"
          data-ocid="admin.contact_messages.table"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/60 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  Email
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, idx) => {
                const ocid = `admin.contact_messages.item.${idx + 1}` as const;
                const isExpanded = expandedId === msg.id;
                return (
                  <tr
                    key={msg.id}
                    data-ocid={ocid}
                    className="border-b border-border last:border-0 hover:bg-accent/30"
                  >
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {msg.name}
                    </td>
                    <td className="px-4 py-3 text-primary hidden md:table-cell">
                      <a
                        href={`mailto:${msg.email}`}
                        className="hover:underline"
                      >
                        {msg.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[280px]">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : msg.id)
                        }
                        data-ocid="admin.contact_messages.toggle"
                        className="text-left hover:text-foreground transition-colors flex items-start gap-1.5"
                      >
                        <span className={isExpanded ? "" : "line-clamp-2"}>
                          {msg.message}
                        </span>
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs hidden lg:table-cell whitespace-nowrap">
                      {formatTimestamp(msg.createdAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Admin — Site Settings Tab
function AdminSiteSettings({
  actor,
}: {
  actor: NonNullable<ReturnType<typeof useActor>["actor"]>;
}) {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [form, setForm] = useState<{
    heroHeadline: string;
    heroSubheadline: string;
    basicPrice: string;
    businessPrice: string;
    advancedPrice: string;
    analyticsId: string;
    workingHours: string;
  } | null>(null);

  useEffect(() => {
    setLoading(true);
    actor
      .getSiteSettings()
      .then((s) => {
        setSettings(s);
        setForm({
          heroHeadline: s.heroHeadline,
          heroSubheadline: s.heroSubheadline,
          basicPrice: String(s.basicPrice),
          businessPrice: String(s.businessPrice),
          advancedPrice: String(s.advancedPrice),
          analyticsId: s.analyticsId,
          workingHours: s.workingHours,
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [actor]);

  async function handleSave() {
    if (!form || !settings) return;
    setSaving(true);
    setSaveStatus("idle");
    try {
      const newSettings: SiteSettings = {
        heroHeadline: form.heroHeadline,
        heroSubheadline: form.heroSubheadline,
        basicPrice: BigInt(form.basicPrice || "2999"),
        businessPrice: BigInt(form.businessPrice || "4999"),
        advancedPrice: BigInt(form.advancedPrice || "7999"),
        analyticsId: form.analyticsId,
        workingHours: form.workingHours,
      };
      await actor.updateSiteSettings(newSettings);
      // Mirror Analytics ID to localStorage for GA4 injection
      if (form.analyticsId) {
        localStorage.setItem("lb_analytics_id", form.analyticsId);
      }
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch {
      setSaveStatus("error");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div
        className="flex items-center justify-center py-16 gap-3 text-muted-foreground"
        data-ocid="admin.settings.loading_state"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        Loading settings...
      </div>
    );
  }

  if (!form) {
    return (
      <div className="text-center py-16" data-ocid="admin.settings.error_state">
        <p className="text-muted-foreground">Could not load site settings.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <h3 className="font-display font-bold text-lg text-foreground">
        Site Settings
      </h3>

      {/* Hero copy */}
      <div className="flex flex-col gap-4 p-5 rounded-2xl border border-border bg-accent/20">
        <h4 className="font-semibold text-sm text-foreground">
          Hero Section Copy
        </h4>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="admin-hero-headline"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Hero Headline
          </Label>
          <Input
            id="admin-hero-headline"
            value={form.heroHeadline}
            onChange={(e) =>
              setForm((f) => f && { ...f, heroHeadline: e.target.value })
            }
            data-ocid="admin.settings.input"
            className="h-11"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="admin-hero-sub"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Hero Subheadline
          </Label>
          <Textarea
            id="admin-hero-sub"
            value={form.heroSubheadline}
            onChange={(e) =>
              setForm((f) => f && { ...f, heroSubheadline: e.target.value })
            }
            data-ocid="admin.settings.input"
            rows={3}
            className="resize-none"
          />
        </div>
      </div>

      {/* Pricing */}
      <div className="flex flex-col gap-4 p-5 rounded-2xl border border-border bg-accent/20">
        <h4 className="font-semibold text-sm text-foreground">Pricing (INR)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              key: "basicPrice" as const,
              label: "Basic Price",
              placeholder: "2999",
            },
            {
              key: "businessPrice" as const,
              label: "Business Price",
              placeholder: "4999",
            },
            {
              key: "advancedPrice" as const,
              label: "Advanced Price",
              placeholder: "7999",
            },
          ].map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <Label
                htmlFor={`admin-${field.key}`}
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                {field.label}
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  ₹
                </span>
                <Input
                  id={`admin-${field.key}`}
                  type="number"
                  value={form[field.key]}
                  onChange={(e) =>
                    setForm((f) => f && { ...f, [field.key]: e.target.value })
                  }
                  placeholder={field.placeholder}
                  data-ocid="admin.settings.input"
                  className="h-11 pl-7"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics & hours */}
      <div className="flex flex-col gap-4 p-5 rounded-2xl border border-border bg-accent/20">
        <h4 className="font-semibold text-sm text-foreground">
          Analytics & Hours
        </h4>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="admin-analytics"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Google Analytics ID
          </Label>
          <Input
            id="admin-analytics"
            value={form.analyticsId}
            onChange={(e) =>
              setForm((f) => f && { ...f, analyticsId: e.target.value })
            }
            placeholder="G-XXXXXXXXXX"
            data-ocid="admin.settings.input"
            className="h-11 font-mono"
          />
          <p className="text-xs text-muted-foreground">
            Paste your GA4 Measurement ID to enable analytics tracking.
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="admin-hours"
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Working Hours
          </Label>
          <Input
            id="admin-hours"
            value={form.workingHours}
            onChange={(e) =>
              setForm((f) => f && { ...f, workingHours: e.target.value })
            }
            placeholder="Mon–Sat 9AM–7PM | Sunday: WhatsApp only"
            data-ocid="admin.settings.input"
            className="h-11"
          />
        </div>
      </div>

      {/* Save feedback */}
      {saveStatus === "success" && (
        <div
          className="flex items-center gap-2.5 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl"
          data-ocid="admin.settings.success_state"
        >
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          Settings saved successfully!
        </div>
      )}
      {saveStatus === "error" && (
        <div
          className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive text-sm font-medium px-4 py-3 rounded-xl"
          data-ocid="admin.settings.error_state"
        >
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          Failed to save settings. Please try again.
        </div>
      )}

      {/* Save button */}
      <Button
        size="lg"
        onClick={handleSave}
        disabled={saving}
        data-ocid="admin.settings.save_button"
        className="h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 self-start px-8"
      >
        {saving ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Saving...
          </>
        ) : (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Save Settings
          </>
        )}
      </Button>

      {/* SEO & Publish */}
      <AdminSEOSettings />
    </div>
  );
}

// SEO & Publish settings (saved to localStorage)
function AdminSEOSettings() {
  const [seoTitle, setSeoTitle] = useState(
    () =>
      localStorage.getItem("lb_seo_title") ??
      "LocalBoost Web — Affordable Websites for Local Businesses",
  );
  const [seoDescription, setSeoDescription] = useState(
    () =>
      localStorage.getItem("lb_seo_description") ??
      "LocalBoost Web builds affordable, mobile-friendly websites for gyms, salons, coaching institutes, clinics, and shops. Free demo first. Starting ₹2,999.",
  );
  const [robots, setRobots] = useState(
    () => localStorage.getItem("lb_robots") ?? "index, follow",
  );
  const [seoSaveStatus, setSeoSaveStatus] = useState<"idle" | "success">(
    "idle",
  );

  function handleSeoSave() {
    localStorage.setItem("lb_seo_title", seoTitle);
    localStorage.setItem("lb_seo_description", seoDescription);
    localStorage.setItem("lb_robots", robots);
    setSeoSaveStatus("success");
    setTimeout(() => setSeoSaveStatus("idle"), 3000);
  }

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl border border-border bg-accent/20">
      <div>
        <h4 className="font-semibold text-sm text-foreground mb-0.5">
          SEO &amp; Publish Settings
        </h4>
        <p className="text-xs text-muted-foreground">
          These settings are saved in your browser. Copy the Google Analytics ID
          to your hosting provider if needed.
        </p>
      </div>

      {/* Page title */}
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="admin-seo-title"
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          Page Title
        </Label>
        <Input
          id="admin-seo-title"
          value={seoTitle}
          onChange={(e) => setSeoTitle(e.target.value)}
          placeholder="LocalBoost Web — Affordable Websites..."
          data-ocid="admin.settings.input"
          className="h-11"
        />
        <p className="text-xs text-muted-foreground">
          Appears in browser tab and Google search results.
        </p>
      </div>

      {/* Meta description */}
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="admin-seo-desc"
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          Meta Description
        </Label>
        <Textarea
          id="admin-seo-desc"
          value={seoDescription}
          onChange={(e) => setSeoDescription(e.target.value)}
          placeholder="Short description under 160 characters..."
          data-ocid="admin.settings.textarea"
          rows={3}
          className="resize-none text-sm"
        />
        <p
          className={`text-xs ${seoDescription.length > 160 ? "text-destructive" : "text-muted-foreground"}`}
        >
          {seoDescription.length}/160 characters
        </p>
      </div>

      {/* Robots meta */}
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="admin-robots"
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          Robots Meta
        </Label>
        <Select value={robots} onValueChange={setRobots}>
          <SelectTrigger
            id="admin-robots"
            data-ocid="admin.settings.select"
            className="h-11"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="index, follow">
              index, follow (recommended)
            </SelectItem>
            <SelectItem value="noindex, nofollow">
              noindex, nofollow (hide from search)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Save status */}
      {seoSaveStatus === "success" && (
        <div className="flex items-center gap-2.5 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          SEO settings saved to browser.
        </div>
      )}

      <Button
        size="sm"
        onClick={handleSeoSave}
        data-ocid="admin.settings.save_button"
        className="h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md shadow-primary/15 self-start px-6"
      >
        <CheckCircle className="w-4 h-4 mr-1.5" />
        Save SEO Settings
      </Button>
    </div>
  );
}

// Full Admin Dashboard
function AdminDashboard() {
  const { actor, isFetching } = useActor();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null); // null = checking

  useEffect(() => {
    if (isFetching || !actor) return;
    actor
      .isCallerAdmin()
      .then((result) => setIsAdmin(result))
      .catch(() => setIsAdmin(false));
  }, [actor, isFetching]);

  // Loading check
  if (isFetching || isAdmin === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-accent/30 gap-5">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="text-muted-foreground text-sm">
          Checking admin access...
        </p>
      </div>
    );
  }

  // Not authorized
  if (!isAdmin) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-4"
        data-ocid="admin.panel"
      >
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>
        <div className="text-center max-w-md">
          <h1 className="font-display font-bold text-2xl text-foreground mb-2">
            Not Authorized
          </h1>
          <p className="text-muted-foreground text-base">
            You don't have admin access to this dashboard. Please log in with an
            admin account.
          </p>
        </div>
        <Button
          onClick={goToMain}
          variant="outline"
          data-ocid="admin.secondary_button"
          className="rounded-full px-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Site
        </Button>
      </div>
    );
  }

  // Authorized — show full dashboard
  return (
    <div
      className="min-h-screen bg-accent/20 flex flex-col"
      data-ocid="admin.panel"
    >
      {/* Admin header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/lb-logo-transparent.dim_120x120.png"
              alt="LocalBoost Web"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-foreground">
                LocalBoost Web
              </span>
              <span className="text-muted-foreground text-sm">—</span>
              <span className="flex items-center gap-1.5 text-primary font-semibold text-sm">
                <Settings className="w-3.5 h-3.5" />
                Admin
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={goToMain}
            data-ocid="admin.secondary_button"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border hover:border-primary/30 px-3 py-1.5 rounded-full min-h-[36px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Site
          </button>
        </div>
      </header>

      {/* Dashboard content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-1">
            Admin Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage demo requests, audit submissions, and site settings.
          </p>
        </div>

        <Tabs defaultValue="demo-requests" className="w-full">
          <TabsList
            className="mb-6 h-auto gap-1 bg-white border border-border rounded-xl p-1 flex-wrap"
            data-ocid="admin.tab"
          >
            <TabsTrigger
              value="demo-requests"
              data-ocid="admin.tab"
              className="rounded-lg text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Demo Requests
            </TabsTrigger>
            <TabsTrigger
              value="audit-requests"
              data-ocid="admin.tab"
              className="rounded-lg text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Audit Requests
            </TabsTrigger>
            <TabsTrigger
              value="contact-messages"
              data-ocid="admin.tab"
              className="rounded-lg text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Contact Messages
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              data-ocid="admin.tab"
              className="rounded-lg text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Site Settings
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-2xl border border-border shadow-xs p-5 md:p-6">
            {actor && (
              <>
                <TabsContent value="demo-requests" className="mt-0">
                  <AdminDemoRequests actor={actor} />
                </TabsContent>
                <TabsContent value="audit-requests" className="mt-0">
                  <AdminAuditRequests actor={actor} />
                </TabsContent>
                <TabsContent value="contact-messages" className="mt-0">
                  <AdminContactMessages actor={actor} />
                </TabsContent>
                <TabsContent value="settings" className="mt-0">
                  <AdminSiteSettings actor={actor} />
                </TabsContent>
              </>
            )}
          </div>
        </Tabs>
      </main>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 10 — BEFORE vs AFTER SECTION
═══════════════════════════════════════════════════════════ */
function BeforeAfterSection() {
  const withoutItems = [
    "Hard to find on Google",
    "Losing customers to competitors",
    "Looks less professional",
    "Customers don't know your hours or prices",
    "Missed leads every day",
  ];
  const withItems = [
    "Found on Google Maps & Search",
    "More customers contact you",
    "Builds trust and credibility",
    "Customers see your hours, prices, and services",
    "Leads come to you 24/7",
  ];

  return (
    <section
      id="before-after"
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="before-after-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            The Difference
          </p>
          <h2
            id="before-after-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            See the{" "}
            <span className="text-gradient-indigo">Real Difference</span> a
            Website Makes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            A website is not just a page — it's your 24/7 salesperson working
            while you sleep.
          </p>
        </div>

        {/* Two-column comparison */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          data-ocid="before-after.panel"
        >
          {/* Without */}
          <div className="rounded-3xl border-2 border-red-200 bg-red-50/60 p-6 md:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-xl text-red-700">
                Without a Website
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 border border-red-200 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-500" aria-hidden="true" />
                  </span>
                  <span className="text-sm md:text-base text-red-800/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="rounded-3xl border-2 border-green-200 bg-green-50/60 p-6 md:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                <CheckCircle
                  className="w-5 h-5 text-green-600"
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-display font-bold text-xl text-green-700">
                With a Website
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {withItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mt-0.5">
                    <CheckCircle
                      className="w-3 h-3 text-green-600"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm md:text-base text-green-800/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Button
            size="lg"
            onClick={() => scrollTo("demo-form")}
            data-ocid="before-after.primary_button"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 text-base"
          >
            Get My Free Demo Website
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            No payment. No obligation. Free demo first.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 10 — TESTIMONIALS PLACEHOLDER
═══════════════════════════════════════════════════════════ */
function Testimonials() {
  const slots = [1, 2, 3];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-accent/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Client Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            What Our <span className="text-gradient-indigo">Clients Say</span>
          </h2>
        </div>

        {/* Honest placeholder message */}
        <div
          data-ocid="testimonials.panel"
          className="bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 shadow-xs"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="font-display font-bold text-base text-foreground mb-1">
              Client reviews coming soon.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're just getting started. Request a free demo today and be one
              of our first featured clients. We'll showcase your success story
              right here.
            </p>
          </div>
          <Button
            onClick={() => scrollTo("demo-form")}
            data-ocid="testimonials.primary_button"
            className="flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-5 h-10 shadow-md shadow-primary/15 transition-all hover:scale-105 text-sm whitespace-nowrap"
          >
            Request Free Demo
          </Button>
        </div>

        {/* Ghost slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {slots.map((slot) => {
            const ocid = `testimonials.item.${slot}` as const;
            return (
              <article
                key={slot}
                data-ocid={ocid}
                className="bg-white rounded-2xl border-2 border-dashed border-border p-6 flex flex-col gap-4 relative overflow-hidden"
              >
                {/* Available badge */}
                <span className="absolute top-4 right-4 bg-primary/8 text-primary text-[10px] font-bold px-2 py-1 rounded-full border border-primary/15 uppercase tracking-wider">
                  Slot available
                </span>

                {/* Avatar placeholder */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-teal/10 border-2 border-dashed border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Users
                      className="w-4 h-4 text-primary/40"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="h-3 w-24 rounded-full bg-border animate-pulse" />
                    <div className="h-2.5 w-16 rounded-full bg-border/70 animate-pulse" />
                  </div>
                </div>

                {/* Stars — empty/outlined */}
                <div
                  className="flex items-center gap-0.5"
                  aria-label="Review rating pending"
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Circle
                      key={s}
                      className="w-4 h-4 text-border"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Review text placeholder */}
                <div className="flex flex-col gap-1.5">
                  <div className="h-2.5 w-full rounded-full bg-border/70 animate-pulse" />
                  <div className="h-2.5 w-full rounded-full bg-border/70 animate-pulse" />
                  <div className="h-2.5 w-3/4 rounded-full bg-border/70 animate-pulse" />
                </div>

                <p className="text-xs text-muted-foreground italic">
                  Client review coming soon...
                </p>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Be our next featured client.{" "}
          <button
            type="button"
            onClick={() => scrollTo("demo-form")}
            data-ocid="testimonials.secondary_button"
            className="text-primary font-semibold hover:underline underline-offset-2 transition-colors"
          >
            Request a Free Demo to be Featured →
          </button>
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 9 — FREE AUDIT FORM
═══════════════════════════════════════════════════════════ */
const AUDIT_CHECKLIST = [
  { label: "Mobile-Friendly Design", icon: Smartphone },
  { label: "Google Maps Presence", icon: MapPin },
  { label: "Page Load Speed", icon: Zap },
  { label: "Contact Form / CTA", icon: MessageCircle },
  { label: "WhatsApp Integration", icon: MessageCircle },
  { label: "SEO Title & Description", icon: Search },
  { label: "Social Proof / Reviews", icon: Star },
  { label: "Gallery / Photos", icon: Sparkles },
] as const;

function FreeAuditForm() {
  const { actor } = useActor();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) {
      setErrorMsg("Please enter your website URL or Google Maps link.");
      setStatus("error");
      return;
    }
    if (!actor) {
      setErrorMsg("Connection not ready. Please wait a moment and try again.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await actor.submitAuditRequest(
        url.trim(),
        name.trim() || null,
        phone.trim() || null,
      );
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section
        id="audit"
        className="py-20 md:py-28 bg-white"
        aria-label="Audit request submitted"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Success + checklist card */}
          <div
            data-ocid="audit.success_state"
            className="bg-white rounded-3xl border border-border shadow-xl shadow-primary/5 p-7 md:p-9"
          >
            {/* Success header */}
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-full bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Audit request received!
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  We'll review your site and WhatsApp you within 24–48 hours.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div>
              <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-4">
                What We'll Check In Your Audit
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AUDIT_CHECKLIST.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 bg-accent/40 border border-border rounded-xl px-4 py-3"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-3.5 h-3.5 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                    <span className="ml-auto text-xs text-primary/60 font-medium whitespace-nowrap">
                      ✓ Pending
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I just submitted a free website audit request. Please get in touch.")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="audit.primary_button"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-200 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setUrl("");
                  setName("");
                  setPhone("");
                }}
                data-ocid="audit.secondary_button"
                className="flex-1 inline-flex items-center justify-center text-sm text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 rounded-full py-3.5 transition-colors"
              >
                Submit another URL
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="audit"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="audit-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Free Audit
          </p>
          <h2
            id="audit-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-4"
          >
            Get a{" "}
            <span className="text-gradient-indigo">Free Website Audit</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            We'll review your existing website or Google Maps listing and give
            you honest feedback — completely free.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-border shadow-xl shadow-primary/5 p-7 md:p-9">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* URL */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="audit-url"
                className="font-semibold text-sm text-foreground"
              >
                Website URL or Google Maps Link{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="audit-url"
                type="url"
                placeholder="https://yourbusiness.com or maps.google.com/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                disabled={status === "loading"}
                data-ocid="audit.input"
                className="h-11 text-base"
                autoComplete="url"
              />
              <p className="text-xs text-muted-foreground">
                Don't have a website? Paste your Google Maps business link
                instead.
              </p>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="audit-name"
                className="font-semibold text-sm text-foreground"
              >
                Your Name{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Input
                id="audit-name"
                type="text"
                placeholder="e.g. Rajesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                data-ocid="audit.input"
                className="h-11 text-base"
                autoComplete="name"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="audit-phone"
                className="font-semibold text-sm text-foreground"
              >
                Phone Number{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Input
                id="audit-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={status === "loading"}
                data-ocid="audit.input"
                className="h-11 text-base"
                autoComplete="tel"
              />
            </div>

            {/* Error state */}
            {status === "error" && (
              <div
                data-ocid="audit.error_state"
                role="alert"
                className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive text-sm font-medium px-4 py-3 rounded-xl"
              >
                <X className="w-4 h-4 flex-shrink-0" />
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              data-ocid="audit.submit_button"
              className="h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 mt-1"
            >
              {status === "loading" ? (
                <>
                  <Loader2
                    className="w-5 h-5 animate-spin mr-2"
                    data-ocid="audit.loading_state"
                  />
                  Submitting your request...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Get My Free Audit
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              100% free. No payment. No obligation. Results within 24–48 hours.
            </p>
          </form>

          {/* Checklist preview */}
          <div className="mt-7 pt-6 border-t border-border">
            <p className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-3">
              What We'll Check In Your Audit
            </p>
            <ul className="grid grid-cols-2 gap-1.5">
              {AUDIT_CHECKLIST.map(({ label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <Circle
                    className="w-3 h-3 text-primary/30 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 10 — FAQ SECTION
═══════════════════════════════════════════════════════════ */
interface FAQItem {
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    questionEn: "Why do I need a website for my business?",
    questionHi: "मुझे अपने व्यापार के लिए वेबसाइट क्यों चाहिए?",
    answerEn:
      "Most customers search online before visiting a shop, salon, gym, or clinic. Without a website, you're invisible to these potential customers. A website helps you get found on Google, builds trust, and lets customers contact you easily — 24 hours a day.",
    answerHi:
      "ज़्यादातर ग्राहक दुकान, सैलून, जिम या क्लिनिक जाने से पहले ऑनलाइन सर्च करते हैं। वेबसाइट के बिना, आप इन संभावित ग्राहकों के लिए अदृश्य हैं। वेबसाइट आपको Google पर दिखने में, विश्वास बनाने में, और ग्राहकों को 24 घंटे आपसे संपर्क करने में मदद करती है।",
  },
  {
    questionEn: "How long does it take to build my website?",
    questionHi: "वेबसाइट बनाने में कितना समय लगता है?",
    answerEn:
      "We deliver most websites in 3 to 7 working days from the time we receive your content and requirements. The free demo preview is usually ready within 24–48 hours so you can see how it looks before making any commitment.",
    answerHi:
      "हम आपकी सामग्री और जरूरतें मिलने के बाद ज़्यादातर वेबसाइटें 3 से 7 कार्यदिवसों में तैयार करते हैं। मुफ़्त डेमो प्रीव्यू आमतौर पर 24–48 घंटों में तैयार हो जाता है ताकि आप कोई भी निर्णय लेने से पहले देख सकें।",
  },
  {
    questionEn: "Is there any payment needed for the demo website?",
    questionHi: "क्या डेमो वेबसाइट के लिए कोई भुगतान करना होगा?",
    answerEn:
      "No. The demo preview is completely free — no payment, no credit card required. We build a preview first. You only pay when you're happy with the result and decide to proceed.",
    answerHi:
      "नहीं। डेमो प्रीव्यू पूरी तरह मुफ़्त है — कोई भुगतान नहीं, कोई क्रेडिट कार्ड की ज़रूरत नहीं। हम पहले एक प्रीव्यू बनाते हैं। आप तभी भुगतान करते हैं जब आप परिणाम से खुश हों और आगे बढ़ने का फैसला करें।",
  },
  {
    questionEn: "Can I update or change my website after it's built?",
    questionHi: "क्या वेबसाइट बन जाने के बाद मैं इसे बदल सकता हूं?",
    answerEn:
      "Yes. You can request updates to your website content, photos, or pricing at any time. Minor changes are often handled quickly via WhatsApp. Larger redesigns or new pages are quoted separately.",
    answerHi:
      "हां। आप किसी भी समय अपनी वेबसाइट की सामग्री, फोटो, या कीमतों में बदलाव के लिए अनुरोध कर सकते हैं। छोटे बदलाव अक्सर WhatsApp के माध्यम से जल्दी हो जाते हैं। बड़े बदलाव या नए पेजों के लिए अलग से कोटेशन दी जाती है।",
  },
  {
    questionEn: "Will my website work on mobile phones?",
    questionHi: "क्या मेरी वेबसाइट मोबाइल फोन पर सही काम करेगी?",
    answerEn:
      "Absolutely. Every website we build is mobile-first — meaning it's designed to look and work perfectly on smartphones first, then on larger screens. Most of your customers will visit on their phone.",
    answerHi:
      "बिल्कुल। हम जो भी वेबसाइट बनाते हैं वह मोबाइल-फर्स्ट होती है — यानी पहले स्मार्टफोन पर अच्छी तरह दिखने और काम करने के लिए डिज़ाइन की जाती है, फिर बड़ी स्क्रीन पर। आपके ज़्यादातर ग्राहक फोन पर आएंगे।",
  },
  {
    questionEn: "What if I don't like the demo website?",
    questionHi: "अगर मुझे डेमो वेबसाइट पसंद नहीं आई तो?",
    answerEn:
      "No problem at all. If you're not happy with the demo, simply let us know what you'd like changed and we'll revise it, or you can walk away with zero cost. There is no obligation to proceed.",
    answerHi:
      "बिल्कुल कोई समस्या नहीं। अगर आपको डेमो पसंद नहीं आया, तो बस बताएं क्या बदलना है और हम इसे ठीक करेंगे, या आप बिना किसी लागत के जा सकते हैं। आगे बढ़ने की कोई बाध्यता नहीं है।",
  },
  {
    questionEn: "Do you provide website hosting?",
    questionHi: "क्या आप वेबसाइट होस्टिंग भी देते हैं?",
    answerEn:
      "Yes, we can arrange hosting for your website as part of the package or separately. We use reliable, affordable hosting providers. Annual hosting and domain costs are discussed transparently before you commit.",
    answerHi:
      "हां, हम पैकेज के हिस्से के रूप में या अलग से आपकी वेबसाइट के लिए होस्टिंग की व्यवस्था कर सकते हैं। हम विश्वसनीय और किफायती होस्टिंग प्रदाताओं का उपयोग करते हैं। वार्षिक होस्टिंग और डोमेन की लागत आपकी प्रतिबद्धता से पहले पारदर्शी रूप से बताई जाती है।",
  },
  {
    questionEn: "How can I contact you for support?",
    questionHi: "मुझे सपोर्ट के लिए आपसे कैसे संपर्क करना चाहिए?",
    answerEn:
      "The easiest way is WhatsApp — just tap the green button on this page. You can also call or email us. We're available Monday–Saturday, 9AM–7PM. On Sundays, WhatsApp messages are monitored and responded to.",
    answerHi:
      "सबसे आसान तरीका है WhatsApp — इस पेज पर हरे बटन पर टैप करें। आप हमें कॉल या ईमेल भी कर सकते हैं। हम सोमवार–शनिवार, सुबह 9 बजे से शाम 7 बजे तक उपलब्ध हैं। रविवार को WhatsApp संदेशों को मॉनीटर किया जाता है और जवाब दिया जाता है।",
  },
];

function FAQSection() {
  const [isHindi, setIsHindi] = useState(false);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-accent/30"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 md:mb-12">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight"
            >
              {isHindi ? "सामान्य " : "Common "}
              <span className="text-gradient-indigo">
                {isHindi ? "प्रश्न" : "Questions"}
              </span>
            </h2>
          </div>

          {/* Hindi/English toggle */}
          <button
            type="button"
            onClick={() => setIsHindi((h) => !h)}
            data-ocid="faq.toggle"
            className="flex items-center gap-2 border border-primary/30 text-primary hover:bg-primary hover:text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all flex-shrink-0 self-start sm:self-auto mt-1"
            aria-pressed={isHindi}
            aria-label="Toggle Hindi/English"
          >
            <Languages className="w-4 h-4" />
            {isHindi ? "English" : "हिंदी"}
          </button>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, index) => {
            const ocid = `faq.item.${index + 1}` as const;
            return (
              <AccordionItem
                key={item.questionEn}
                value={`item-${index + 1}`}
                data-ocid={ocid}
                className="bg-white rounded-2xl border border-border shadow-xs overflow-hidden px-0"
              >
                <AccordionTrigger className="px-5 py-4 md:py-5 text-left font-display font-semibold text-sm md:text-base text-foreground hover:text-primary hover:no-underline transition-colors [&[data-state=open]]:text-primary">
                  {isHindi ? item.questionHi : item.questionEn}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {isHindi ? item.answerHi : item.answerEn}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Have a question not covered here?
          </p>
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello! I have a question about your website services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="faq.primary_button"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 h-12 rounded-full transition-all hover:scale-105 shadow-md shadow-green-200 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PART 11 — CONTACT SECTION
═══════════════════════════════════════════════════════════ */
function ContactSection() {
  const { actor } = useActor();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }
    if (!actor) {
      setErrorMsg("Connection not ready. Please wait a moment and try again.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await actor.submitContactMessage(
        contactName.trim(),
        contactEmail.trim(),
        contactMessage.trim(),
      );
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: PHONE_DISPLAY,
      href: PHONE_LINK,
      color: "bg-primary/10 text-primary border-primary/15",
    },
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: "bg-primary/10 text-primary border-primary/15",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us directly",
      href: WHATSAPP_URL,
      color: "bg-green-50 text-green-700 border-green-200",
      external: true,
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon–Sat 9AM–7PM | Sunday: WhatsApp only",
      href: null,
      color: "bg-primary/10 text-primary border-primary/15",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
            Contact Us
          </p>
          <h2
            id="contact-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-foreground leading-tight mb-4"
          >
            Get In <span className="text-gradient-indigo">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Have a question or ready to start? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left — contact details */}
          <div className="flex flex-col gap-5" data-ocid="contact.panel">
            <h3 className="font-display font-bold text-xl text-foreground">
              Contact Details
            </h3>
            <ul className="flex flex-col gap-3">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-accent/20 hover:bg-accent/40 transition-colors group">
                    <span
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${detail.color}`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={detail.label}>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.external ? "_blank" : undefined}
                        rel={
                          detail.external ? "noopener noreferrer" : undefined
                        }
                        data-ocid="contact.link"
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="mt-2 inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-bold px-7 h-14 rounded-full shadow-xl shadow-green-200 transition-all hover:scale-105 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
            <p className="text-xs text-muted-foreground text-center">
              Quickest response via WhatsApp · Usually replies within 1 hour
            </p>
          </div>

          {/* Right — contact form */}
          <div>
            {status === "success" ? (
              <div
                data-ocid="contact.success_state"
                className="bg-white rounded-3xl border border-border shadow-xl shadow-primary/5 p-7 md:p-9 flex flex-col items-center gap-5 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Message sent!
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Thank you for reaching out. We'll get back to you within{" "}
                    <strong className="text-foreground">24 hours</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setContactName("");
                    setContactEmail("");
                    setContactMessage("");
                  }}
                  data-ocid="contact.secondary_button"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-border shadow-xl shadow-primary/5 p-7 md:p-9">
                <h3 className="font-display font-bold text-lg text-foreground mb-5">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-4"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="font-semibold text-sm text-foreground"
                    >
                      Your Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      disabled={status === "loading"}
                      data-ocid="contact.input"
                      className="h-11 text-base"
                      autoComplete="name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="font-semibold text-sm text-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                      data-ocid="contact.input"
                      className="h-11 text-base"
                      autoComplete="email"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="font-semibold text-sm text-foreground"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your business or ask a question..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      required
                      disabled={status === "loading"}
                      data-ocid="contact.textarea"
                      rows={4}
                      className="text-base resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      role="alert"
                      className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive text-sm font-medium px-4 py-3 rounded-xl"
                    >
                      <X className="w-4 h-4 flex-shrink-0" />
                      {errorMsg || "Something went wrong. Please try again."}
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    data-ocid="contact.submit_button"
                    className="h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 mt-1"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2
                          className="w-5 h-5 animate-spin mr-2"
                          data-ocid="contact.loading_state"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════ */
export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    function onHashChange() {
      setCurrentHash(window.location.hash);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Part 11 — SEO: set document title
  useEffect(() => {
    const savedTitle = localStorage.getItem("lb_seo_title");
    document.title =
      savedTitle || "LocalBoost Web — Affordable Websites for Local Businesses";
  }, []);

  // Part 11 — SEO: set/update meta description
  useEffect(() => {
    const savedDesc = localStorage.getItem("lb_seo_description");
    const content =
      savedDesc ||
      "LocalBoost Web builds affordable, mobile-friendly websites for gyms, salons, coaching institutes, clinics, and shops. Free demo first. Starting ₹2,999.";
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = content;

    // Robots meta
    const robotsValue = localStorage.getItem("lb_robots") ?? "index, follow";
    let robotsMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.name = "robots";
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = robotsValue;
  }, []);

  // Part 11 — GA4 analytics injection
  useEffect(() => {
    const analyticsId = localStorage.getItem("lb_analytics_id");
    if (!analyticsId || !analyticsId.startsWith("G-")) return;
    if (document.getElementById("lb-gtag-script")) return;

    const script1 = document.createElement("script");
    script1.id = "lb-gtag-script";
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.id = "lb-gtag-init";
    script2.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analyticsId}');`;
    document.head.appendChild(script2);
  }, []);

  // Hash-based routing for preview pages
  if (currentHash === "#/preview/gym-sample") return <GymPreview />;
  if (currentHash === "#/preview/coaching-sample") return <CoachingPreview />;
  if (currentHash === "#/preview/salon-sample") return <SalonPreview />;

  // Admin dashboard
  if (currentHash === "#/admin") return <AdminDashboard />;

  // Dynamic preview routes (slugs that are NOT the 3 static demos)
  if (currentHash.startsWith("#/preview/")) {
    const slug = currentHash.replace("#/preview/", "");
    if (
      slug !== "gym-sample" &&
      slug !== "coaching-sample" &&
      slug !== "salon-sample"
    ) {
      return <DynamicPreviewPage slug={slug} />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — About */}
        <About />

        {/* 3 — Services */}
        <Services />

        {/* 4 — Why Choose Us */}
        <WhyChooseUs />

        {/* 5 — Portfolio */}
        <Portfolio />

        {/* 6 — Free Demo Banner */}
        <FreeDemoBanner />

        {/* 7 — AI Helper */}
        <AIHelper />

        {/* 8 — Cost Calculator */}
        <CostCalculator />

        {/* 9 — Demo Request Form */}
        <DemoRequestForm />

        {/* 10 — Pricing */}
        <Pricing />

        {/* 11 — Before vs After */}
        <BeforeAfterSection />

        {/* 12 — Testimonials */}
        <Testimonials />

        {/* 13 — Free Audit Form */}
        <FreeAuditForm />

        {/* 14 — FAQ */}
        <FAQSection />

        {/* 15 — Contact */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
