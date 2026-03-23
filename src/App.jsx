import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  MapPin,
  Menu,
  Package,
  Play,
  Shield,
  Star,
  Users,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "For Kitchens", href: "#kitchens" },
  { label: "Contact", href: "#contact" },
];

const problemPoints = [
  "Difficult to find Dabba Services",
  "Difficult to manage Kitchen Records",
  "Finding daily menus from every kitchen is difficult",
];

const solutionPoints = [
  "Verified home kitchens",
  "Fresh homemade meals & Easy management",
  "Easy ordering experience",
];

const featureList = [
  {
    icon: Package,
    title: "Smart Order Management",
    description: "Track customer orders from a single kitchen dashboard.",
  },
  {
    icon: Activity,
    title: "Real-time Updates",
    description:
      "Customers stay informed with every stage from confirmation to readiness.",
  },
  {
    icon: Calendar,
    title: "Transparent Records",
    description:
      "Meal & Payment History visible to Customer as well as Kitchen.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Safe checkout, clear billing, and reliable payout handling for kitchens.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description:
      "Build trust quickly through social proof and transparent feedback.",
  },
  {
    icon: MapPin,
    title: "Local Discovery",
    description:
      "Help hungry customers find the right home kitchen within minutes.",
  },
];

const customerScreens = [
  {
    title: "Home Discovery",
    image: "/assets/mockups/customer-home.jpg",
    badge: "Customer",
    feature: "Browse nearby kitchens",
  },
  {
    title: "Kitchen Profile",
    image: "/assets/mockups/customer-kitchen.jpg",
    badge: "Customer",
    feature: "View menus and ratings",
  },
  {
    title: "Order Meal",
    image: "/assets/mockups/customer-subscription.jpg",
    badge: "Customer",
    feature: "Place orders in seconds",
  },
  {
    title: "Checkout",
    image: "/assets/mockups/customer-history.jpg",
    badge: "Customer",
    feature: "Place orders in seconds",
  },
];

const kitchenScreens = [
  {
    title: "Kitchen Dashboard",
    image: "/assets/mockups/kitchen-dashboard.jpg",
    badge: "Kitchen",
    feature: "Manage daily orders",
  },
  {
    title: "Menu Manager",
    image: "/assets/mockups/kitchen-menu.jpg",
    badge: "Kitchen",
    feature: "Update meals and pricing",
  },
  {
    title: "Orders",
    image: "/assets/mockups/kitchen-orders.jpg",
    badge: "Kitchen",
    feature: "Track regular orders",
  },
  {
    title: "Customers",
    image: "/assets/mockups/kitchen-customers.jpg",
    badge: "Kitchen",
    feature: "Track your Customers",
  },
];

const videoItems = [
  {
    title: "Customer App Demo",
    url: "https://res.cloudinary.com/dabbame/video/upload/v1773467384/customer_vibfhe.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/526837209/photo/real-indian-man-eating-with-hands-in-indian-restaurant.jpg?s=612x612&w=0&k=20&c=zZ9YmeL2oUB5hDqk_6F7eXycRIo05z4jd5_RHZSMEJk=",
  },
  {
    title: "Kitchen App Demo",
    url: "https://res.cloudinary.com/dabbame/video/upload/v1773467384/kitchen_iljvfn.mp4",
    thumbnail:
      "https://sc04.alicdn.com/kf/H24a0056e88df4525a53849a749cc309cS.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The kitchen dashboard is clean, easy to learn, and helps us handle repeat orders without chaos.",
    name: "Sonal Parakh",
    role: "Home Chef Partner, Pune",
  },
  {
    quote:
      "DabbaMe helped me manage my daily headache of customer management, clubbed into a single app",
    name: "Anna",
    role: "Home Chef Partner, Mumbai",
  },
  {
    quote:
      "It feels premium, reliable, and genuinely useful for students who miss home food every day.",
    name: "Ritvika D.",
    role: "College Student, Pune",
  },
];

const customerHighlights = [
  "Browse nearby kitchens",
  "View menus and ratings",
  "Order meals in a few taps",
];

const kitchenHighlights = [
  "Manage daily orders",
  "Track customer preferences",
  "Grow business confidently",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const EMAILJS_SERVICE_ID = "service_pjr74br";
const EMAILJS_TEMPLATE_ID = "template_t4ufbsh";
const EMAILJS_PUBLIC_KEY = "xFLspg7cIcxfDEKsJ";
const logo = "/assets/logo.webp";

function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20 ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {(eyebrow || title || description) && (
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-950 sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_80px_rgba(17,17,17,0.10)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300 text-stone-900">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-stone-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
    </motion.div>
  );
}

function OptimizedImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  fetchPriority = "auto",
  sizes,
  decoding = "async",
  blur = true,
}) {
  const [loaded, setLoaded] = useState(false);
  const image = (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      sizes={sizes}
      onLoad={() => setLoaded(true)}
      className={`${blur ? `image-blur-transition image-blur-up ${loaded ? "is-loaded" : ""}` : ""} ${className}`}
    />
  );

  if (!wrapperClassName) return image;

  return <div className={wrapperClassName}>{image}</div>;
}

function MockupCard({ title, badge, image, feature, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      className={`group rounded-[32px] border border-stone-200 bg-white p-3 shadow-[0_20px_60px_rgba(17,17,17,0.06)] ${className}`}
    >
      <div className="mx-auto w-full max-w-[220px] rounded-[30px] bg-stone-950 p-2 pb-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative">
          <div className="overflow-hidden rounded-[24px] bg-stone-100">
            <OptimizedImage
              src={image}
              alt={title}
              sizes="(max-width: 768px) 220px, 220px"
              className="h-[420px] w-full rounded-[24px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-4 -bottom-7 z-20 rounded-[18px] border border-stone-200 bg-white/98 px-3 py-2.5 shadow-[0_18px_36px_rgba(17,17,17,0.12)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold leading-tight text-stone-950">
                  {title}
                </h3>
                <p className="mt-0.5 text-[11px] leading-4 text-stone-600">
                  {feature}
                </p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-stone-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileMockupCarousel({ screens, direction = "left" }) {
  const loopItems = [...screens, ...screens];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 24,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((screen, index) => (
          <MockupCard
            key={`${screen.title}-${index}`}
            {...screen}
            className="min-w-[250px] shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}

function DemoPlayer({ video, accent = "light" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-[28px]">
      <div className="relative h-[380px] overflow-hidden rounded-[24px] bg-stone-950 sm:h-[420px]">
        {!isPlaying ? (
          <>
            <OptimizedImage
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-transparent" />
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full shadow-xl ${
                  accent === "yellow"
                    ? "bg-yellow-300 text-stone-950"
                    : "bg-white text-stone-950"
                }`}
              >
                <Play size={22} className="ml-1 fill-current" />
              </span>
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  accent === "yellow"
                    ? "bg-yellow-300 text-stone-950"
                    : "bg-white text-stone-950"
                }`}
              >
                Play Demo
              </span>
            </button>
          </>
        ) : (
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            controls
            playing
            style={{ backgroundColor: "#111111" }}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

function EnquiryModal({ open, onClose, enquiryType }) {
  const options = [
    "Contact Us",
    "Request Demo",
    "Kitchen Onboarding",
    "Partnership",
  ];
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState(
    enquiryType === "demo" ? "Request Demo" : "Contact Us"
  );
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedOption(enquiryType === "demo" ? "Request Demo" : "Contact Us");
    setDropdownOpen(false);
    setSubmitted(false);
    setIsSending(false);
    setErrorMessage("");
    setFormValues({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  }, [enquiryType, open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (field) => (event) => {
    setFormValues((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formValues.fullName,
          email: formValues.email,
          phone: formValues.phone,
          message: formValues.message,
          enquiry_type: selectedOption,
          subject: `DabbaMe Enquiry - ${selectedOption}`,
          from_name: formValues.fullName,
          from_email: formValues.email,
          reply_to: formValues.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        "Something went wrong while sending your enquiry. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-stone-950/65 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.24 }}
          onClick={(event) => event.stopPropagation()}
          className="mx-auto my-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-stone-200 bg-[#fffdf7] shadow-[0_32px_120px_rgba(17,17,17,0.22)] sm:max-h-[calc(100dvh-4rem)] sm:rounded-[32px]"
        >
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-stone-200 px-5 py-5 sm:px-8 sm:py-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                Enquiries
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-950">
                {enquiryType === "demo" ? "Request a Demo" : "Contact DabbaMe"}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                Share a few details and we will get back to you with the right
                next step.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-900 transition hover:border-stone-900"
              aria-label="Close enquiry form"
            >
              <X size={18} />
            </button>
          </div>

          <div className="min-h-0 overflow-y-auto px-5 py-5 sm:px-8 sm:py-8">
            {submitted ? (
              <div className="rounded-[24px] border border-yellow-200 bg-yellow-100/70 p-6">
                <h4 className="text-2xl font-bold text-stone-950">
                  Your enquiry has been noted
                </h4>
                <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                  Thanks for reaching out. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-6 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-stone-700">
                    Full Name
                  </span>
                  <input
                    type="text"
                    required
                    value={formValues.fullName}
                    onChange={handleChange("fullName")}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 hover:border-yellow-300 focus:border-yellow-400 focus:bg-yellow-50/40 focus:shadow-[0_0_0_4px_rgba(255,215,0,0.18)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-stone-700">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={formValues.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 hover:border-yellow-300 focus:border-yellow-400 focus:bg-yellow-50/40 focus:shadow-[0_0_0_4px_rgba(255,215,0,0.18)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-stone-700">
                    Phone
                  </span>
                  <input
                    type="tel"
                    value={formValues.phone}
                    onChange={handleChange("phone")}
                    placeholder="+91 98xxxxxx"
                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 hover:border-yellow-300 focus:border-yellow-400 focus:bg-yellow-50/40 focus:shadow-[0_0_0_4px_rgba(255,215,0,0.18)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-stone-700">
                    Type
                  </span>
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((value) => !value)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm text-stone-900 outline-none transition ${
                        dropdownOpen
                          ? "border-yellow-400 bg-yellow-50 shadow-[0_0_0_4px_rgba(255,215,0,0.18)]"
                          : "border-stone-200 bg-white hover:border-yellow-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 items-center rounded-full bg-yellow-300 px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-900">
                        </span>
                        <span className="font-medium">{selectedOption}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-stone-500 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 right-0 top-[calc(100%+10px)] z-20 overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-[0_24px_80px_rgba(17,17,17,0.14)]"
                        >
                          <div className="p-2">
                            {options.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setSelectedOption(option);
                                  setDropdownOpen(false);
                                }}
                                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition ${
                                  selectedOption === option
                                    ? "bg-yellow-100 text-stone-950"
                                    : "text-stone-700 hover:bg-stone-50"
                                }`}
                              >
                                <span>{option}</span>
                                {selectedOption === option && (
                                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-stone-950">
                                    <Check size={14} />
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-stone-700">
                    Message
                  </span>
                  <textarea
                    rows="5"
                    required
                    value={formValues.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us a little about what you need"
                    className="w-full resize-none rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 hover:border-yellow-300 focus:border-yellow-400 focus:bg-yellow-50/40 focus:shadow-[0_0_0_4px_rgba(255,215,0,0.18)]"
                  />
                </label>
                <div className="flex items-center justify-between gap-4 sm:col-span-2">
                  <p className="text-xs leading-6 text-stone-500">
                    {errorMessage ||
                      "Enquiries will be sent directly to your connected email."}
                  </p>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState("contact");
  const [pendingSectionId, setPendingSectionId] = useState(null);

  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId);
    if (!section) return;

    const header = document.querySelector("header");
    const headerOffset = header ? header.getBoundingClientRect().height + 12 : 88;
    const top =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  };

  const handleNavLinkClick = (event, href) => {
    const targetId = href.replace("#", "");

    event.preventDefault();
    setPendingSectionId(targetId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!enquiryOpen) return undefined;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousTouchAction = body.style.touchAction;

    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.touchAction = previousTouchAction;
    };
  }, [enquiryOpen]);

  useEffect(() => {
    if (mobileMenuOpen || !pendingSectionId) return undefined;

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(pendingSectionId);
      setPendingSectionId(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [mobileMenuOpen, pendingSectionId]);

  useEffect(() => {
    if (!enquiryOpen) return undefined;

    const handlePopState = () => {
      setEnquiryOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [enquiryOpen]);

  const openEnquiry = (type = "contact") => {
    setEnquiryType(type);
    if (!window.history.state?.enquiryModal) {
      window.history.pushState(
        { ...(window.history.state ?? {}), enquiryModal: true },
        ""
      );
    }
    setEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    if (window.history.state?.enquiryModal) {
      window.history.back();
      return;
    }

    setEnquiryOpen(false);
  };

  return (
    <div className="overflow-x-hidden bg-[#fffdf7] text-stone-900">
      <div className="relative isolate">
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute right-0 top-20 -z-10 h-[320px] w-[320px] rounded-full bg-yellow-200/30 blur-3xl" />

        <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#fffdf7]/88 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center gap-3">
              <OptimizedImage
                src={logo}
                alt="DabbaMe logo"
                loading="eager"
                fetchPriority="high"
                blur={false}
                sizes="144px"
                className="h-9 w-auto object-contain"
              />
              <span className="text-lg font-extrabold tracking-tight text-stone-950 sm:text-xl">
                DabbaMe
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                link.label === "Contact" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => openEnquiry("contact")}
                    className="cursor-pointer text-sm font-medium text-stone-600 transition hover:text-stone-950"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-stone-600 transition hover:text-stone-950"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => openEnquiry("demo")}
                className="inline-flex items-center rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-yellow-400"
              >
                Get App
              </button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-900 md:hidden"
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-stone-200 bg-[#fffdf7] md:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5">
                  {navLinks.map((link) => (
                    link.label === "Contact" ? (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          openEnquiry("contact");
                        }}
                        className="text-left text-sm font-medium text-stone-700"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(event) => handleNavLinkClick(event, link.href)}
                        className="text-sm font-medium text-stone-700"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                  <a
                    href="#contact"
                    onClick={(event) => handleNavLinkClick(event, "#contact")}
                    className="inline-flex w-fit items-center rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-stone-950"
                  >
                    Get App
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-18 sm:pt-20">
          <section
            id="home"
            className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-22 lg:pt-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700">
                Trusted Home Tiffins
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Homemade Food, Just a Tap away!
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
                Connecting home kitchens with hungry customers nearby through a
                premium, reliable food experience.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  Order Food
                  <ChevronRight size={18} className="ml-2" />
                </a>
                <a
                  href="#kitchens"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-stone-900 transition hover:border-stone-950"
                >
                  Register Your Kitchen
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "10+", label: "Free Features" },
                  { value: "50+", label: "Active Users" },
                  { value: "100%", label: "Homemade Focus" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-stone-200 bg-white/80 p-5 backdrop-blur"
                  >
                    <p className="text-2xl font-extrabold text-stone-950">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-stone-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative isolate flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-4, 0, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-2 top-0 z-30 hidden rounded-full border border-yellow-200 bg-white/95 px-4 py-2 text-sm font-semibold text-stone-700 shadow-[0_18px_50px_rgba(17,17,17,0.08)] backdrop-blur sm:flex"
              >
                <span className="mr-2">💛</span>
                Loved by users
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [6, 0, 6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 -top-4 z-20 hidden rounded-full border border-yellow-200 bg-yellow-100/95 px-4 py-2 text-sm font-semibold text-stone-800 shadow-[0_18px_50px_rgba(255,215,0,0.18)] backdrop-blur sm:flex"
              >
                <span className="mr-2">⭐</span>
                Trusted kitchens
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-14 top-16 z-30 hidden h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/95 text-2xl shadow-[0_18px_50px_rgba(17,17,17,0.10)] backdrop-blur md:flex"
              >
                😍
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-10 top-40 z-30 hidden h-16 w-16 items-center justify-center rounded-full border border-yellow-200 bg-yellow-50/95 text-2xl shadow-[0_18px_50px_rgba(255,215,0,0.18)] backdrop-blur md:flex"
              >
                🫶
              </motion.div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-yellow-200/35 blur-2xl" />
                <div className="absolute right-12 top-10 h-24 w-24 rounded-full bg-yellow-300/25 blur-2xl" />
                <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full bg-white/70 blur-xl" />
              </div>
              <div className="absolute right-8 top-20 z-40 rounded-full border border-yellow-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-lg">
                Trusted by growing home chefs
              </div>
              <div className="relative z-20 mt-20 w-full max-w-[360px] rounded-[42px] border border-stone-300 bg-stone-950 p-3 shadow-[0_40px_120px_rgba(17,17,17,0.18)]">
                <div className="overflow-hidden rounded-[34px] bg-stone-100">
                  <div className="flex items-center justify-between bg-stone-950 px-5 py-4 text-xs font-medium text-white">
                    <span>DabbaMe</span>
                    <span>9:41</span>
                  </div>
                  <div className="relative h-[620px] overflow-hidden">
                    <OptimizedImage
                      src="https://img.freepik.com/free-photo/high-angle-indian-food-assortment_23-2148747704.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="DabbaMe app preview"
                      loading="eager"
                      fetchPriority="high"
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                    <div className="absolute inset-x-4 top-4 rounded-[24px] bg-white/92 p-4 shadow-lg backdrop-blur">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                            Today&apos;s pick
                          </p>
                          <h3 className="mt-2 text-lg font-bold text-stone-950">
                            Fresh thali from nearby kitchens
                          </h3>
                        </div>
                        <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-stone-950">
                          18min
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 rounded-[28px] bg-white/95 p-5 shadow-xl backdrop-blur">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-stone-950">
                            Kitchen Mates
                          </p>
                          <p className="mt-1 text-sm text-stone-600">
                            Hygiene checked | 4.9 rating
                          </p>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-stone-800">
                          <Star size={14} className="fill-current" />
                          4.9
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl bg-stone-100 p-3">
                          <p className="font-semibold text-stone-950">
                            Veg Lunch
                          </p>
                          <p className="mt-1 text-stone-600">
                            Fresh rotis, dal, sabzi
                          </p>
                        </div>
                        <div className="rounded-2xl bg-stone-100 p-3">
                          <p className="font-semibold text-stone-950">
                            Subscription
                          </p>
                          <p className="mt-1 text-stone-600">
                            Weekly meal plans
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <SectionWrapper
            eyebrow="Why DabbaMe"
            title="A better answer to everyday food struggle"
            description="Away from Home? or Managing a Kitchen? We've got you!"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white">
                    <AlertCircle size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-950">
                    Problems
                  </h3>
                </div>
                <div className="space-y-4">
                  {problemPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 text-stone-500"
                      />
                      <p className="text-sm leading-7 text-stone-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-yellow-200 bg-yellow-100/60 p-8 shadow-[0_20px_60px_rgba(255,215,0,0.16)]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300 text-stone-950">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-950">
                    Solutions
                  </h3>
                </div>
                <div className="space-y-4">
                  {solutionPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 text-stone-900"
                      />
                      <p className="text-sm leading-7 text-stone-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper
            id="kitchens"
            eyebrow="Built for both sides"
            title="One App, tailored for customers and kitchens"
            description="DabbaMe makes ordering feel effortless for customers while giving kitchen partners the tools they need to grow with confidence."
          >
            <div className="grid gap-6 xl:grid-cols-2">
              <motion.div
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[36px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(17,17,17,0.06)]"
              >
                <div className="border-b border-stone-200 px-8 py-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                    For Customers
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-stone-950">
                    Easy Discovering & Ordering food
                  </h3>
                </div>
                <div className="grid gap-6 p-8 lg:grid-cols-[1fr_220px] lg:items-start">
                  <div className="space-y-4 self-start">
                    {customerHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-stone-700"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-stone-950">
                          <Check size={16} />
                        </span>
                        {item}
                      </div>
                    ))}
                    <p className="pt-4 text-sm leading-7 text-stone-600">
                      A clean mobile experience that helps users discover
                      trusted homemade meals, compare options, and place orders.
                    </p>
                  </div>
                  <div className="self-start rounded-[28px] bg-stone-950 p-2">
                    <DemoPlayer video={videoItems[0]} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[36px] border border-stone-200 bg-stone-950 text-white shadow-[0_20px_60px_rgba(17,17,17,0.14)]"
              >
                <div className="border-b border-white/10 px-8 py-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
                    For Kitchens
                  </p>
                  <h3 className="mt-3 text-3xl font-bold">
                    Grow without the chaos
                  </h3>
                </div>
                <div className="grid gap-6 p-8 lg:grid-cols-[1fr_220px] lg:items-start">
                  <div className="space-y-4 self-start">
                    {kitchenHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-stone-950">
                          <Check size={16} />
                        </span>
                        {item}
                      </div>
                    ))}
                    <p className="pt-4 text-sm leading-7 text-stone-300">
                      Kitchen partners get a polished workflow for accepting
                      orders, managing deliveries, and building loyal repeat
                      customers nearby.
                    </p>
                  </div>
                  <div className="self-start rounded-[28px] bg-white/8 p-2">
                    <DemoPlayer video={videoItems[1]} accent="yellow" />
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionWrapper>

          <SectionWrapper
            id="features"
            eyebrow="Core Features"
            title="Everything needed to make homemade food feel dependable at scale"
            description="The app is designed to feel polished and operational from day one, without adding friction for customers or kitchen partners."
          >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureList.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper
            eyebrow="App Screens"
            title="Two polished app experiences, one for customers and one for kitchens"
          >
            <div className="space-y-12">
              <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] sm:p-8">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Customer Screens
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-stone-950">
                      Discovery, ordering, and subscriptions
                    </h3>
                  </div>
                </div>

                <div className="md:hidden">
                  <MobileMockupCarousel
                    screens={customerScreens}
                    direction="left"
                  />
                </div>

                <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
                  {customerScreens.map((screen) => (
                    <MockupCard key={screen.title} {...screen} />
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-stone-200 bg-stone-950 p-6 text-white shadow-[0_20px_60px_rgba(17,17,17,0.12)] sm:p-8">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
                      Kitchen Screens
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">
                      Operations, customers, and growth tools
                    </h3>
                  </div>
                </div>

                <div className="md:hidden">
                  <MobileMockupCarousel
                    screens={kitchenScreens}
                    direction="right"
                  />
                </div>

                <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
                  {kitchenScreens.map((screen) => (
                    <MockupCard key={screen.title} {...screen} />
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper
            eyebrow="Trust"
            title="Built to earn repeat use"
            description="DabbaMe balances growth and quality through verified kitchens, visible reviews, and a customer experience that stays clean and reassuring."
          >
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
                  <Users className="text-yellow-400" size={30} />
                  <p className="mt-5 text-4xl font-extrabold text-stone-950">
                    50+ Users
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    A growing network of trusted home chefs serving nearby
                    neighborhoods.
                  </p>
                </div>
                <div className="rounded-[32px] border border-stone-200 bg-stone-950 p-8 text-white shadow-[0_20px_60px_rgba(17,17,17,0.12)]">
                  <Package className="text-yellow-300" size={30} />
                  <p className="mt-5 text-4xl font-extrabold">
                    100% Homemade Food
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    Consistent local delivery backed by real kitchens and
                    reliable repeat orders.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[32px] border border-stone-200 bg-white p-7 shadow-[0_20px_60px_rgba(17,17,17,0.06)]"
                  >
                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={16} className="fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-stone-700">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="mt-6">
                      <p className="font-bold text-stone-950">{item.name}</p>
                      <p className="text-sm text-stone-500">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper id="contact" className="pb-24">
            <div className="overflow-hidden rounded-[40px] border border-stone-200 bg-stone-950 px-6 py-12 text-center text-white shadow-[0_30px_100px_rgba(17,17,17,0.16)] sm:px-10 sm:py-16">
              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                Start your homemade food journey today
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                Whether you want better meals nearby or want to grow your own
                kitchen brand, DabbaMe gives you a cleaner place to begin.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <a
                  href="#home"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-semibold text-stone-950 transition hover:bg-yellow-400"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3.609 2.601a1.22 1.22 0 0 0-.109.519v17.76c0 .187.038.366.109.519L13.86 12 3.609 2.601Zm11.08 10.2 2.522-2.522L5.281 3.406l9.408 9.395Zm3.348-1.696-2.639 2.639 2.639 2.639 3.794-2.146c1.57-.889 1.57-2.334 0-3.223l-3.794-2.27ZM5.281 20.594l11.93-6.873-2.522-2.522-9.408 9.395Z" />
                  </svg>
                  Download App
                </a>
              </div>
              <button
                type="button"
                onClick={() => openEnquiry("demo")}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-medium text-stone-200 transition hover:border-yellow-300/40 hover:bg-white/10 hover:text-white"
              >
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-yellow-300" />
                Contact us or request a demo
              </button>
            </div>
          </SectionWrapper>
        </main>

        <footer className="border-t border-stone-200 bg-white/70">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <OptimizedImage
                src={logo}
                alt="DabbaMe logo"
                blur={false}
                sizes="144px"
                className="h-9 w-auto object-contain"
              />
              <div>
                <p className="text-base font-bold text-stone-950">DabbaMe</p>
                <p className="text-sm text-stone-500">
                  Homemade food, just a tap away.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-stone-600">
              {navLinks.map((link) => (
                link.label === "Contact" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => openEnquiry("contact")}
                    className="cursor-pointer transition hover:text-stone-950"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-stone-950"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a
                href="/privacy-policy"
                className="transition hover:text-stone-950"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="transition hover:text-stone-950"
              >
                Terms & Conditions
              </a>
            </div>

            <p className="text-sm text-stone-500">
              Copyright 2026 DabbaMe. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      <EnquiryModal
        open={enquiryOpen}
        onClose={closeEnquiry}
        enquiryType={enquiryType}
      />
    </div>
  );
}

export default App;
