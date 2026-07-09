import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, Cpu, Network, Sparkles, Sliders, ToggleLeft, ToggleRight, Check, Shield, KeyRound, Lock, Zap, Workflow, Database, Target, Globe, Terminal, Play, RefreshCw, Activity, Layers, CreditCard, Truck, FileText, Receipt, MapPin, CheckCircle2 } from "lucide-react";

type CoreTab = "neural" | "edge" | "cognitive";

interface GlobalNode {
  id: string;
  name: string;
  region: string;
  basePing: number;
  capacity: string;
  status: "Active" | "Optimized" | "Synchronizing";
  locationCoords: { x: number; y: number };
}

const globalNodesList: GlobalNode[] = [
  { id: "zurich", name: "Zurich Node-A", region: "Europe (Central)", basePing: 8, capacity: "94%", status: "Active", locationCoords: { x: 95, y: 55 } },
  { id: "tokyo", name: "Tokyo Core-01", region: "Asia (East)", basePing: 92, capacity: "88%", status: "Active", locationCoords: { x: 170, y: 72 } },
  { id: "singapore", name: "Singapore Edge-B", region: "Asia (Southeast)", basePing: 74, capacity: "81%", status: "Active", locationCoords: { x: 155, y: 110 } },
  { id: "new-york", name: "New York Hub-Y", region: "US (East)", basePing: 42, capacity: "96%", status: "Active", locationCoords: { x: 38, y: 62 } },
  { id: "frankfurt", name: "Frankfurt Main", region: "Europe (West)", basePing: 12, capacity: "85%", status: "Active", locationCoords: { x: 88, y: 50 } },
  { id: "sydney", name: "Sydney Edge-1", region: "Australia", basePing: 134, capacity: "72%", status: "Active", locationCoords: { x: 180, y: 145 } }
];

const sandboxCommands = {
  INIT_SYNAPSE: {
    endpoint: "POST /v1/synapse/initialize",
    description: "Pre-heats on-device cognitive neural nodes and binds core state engines.",
    requestBody: (density: number) => ({
      node_id: "flux-synapse-48",
      density_threshold: `${density}%`,
      optimize_latency: true,
      crypto_provider: "quantum_isolated"
    }),
    response: (lat: number, den: number, sync: boolean, tab: string) => ({
      status: "success",
      initialized: true,
      engine_version: "4.8.2-prod",
      synaptic_density: `${den}%`,
      bound_nodes: Math.round(den / 6),
      handshake_latency_ms: Math.round(lat * 0.8),
      security: "quantum_grade",
      telemetry_routing: "isolated"
    })
  },
  SYNC_LEDGER: {
    endpoint: "POST /v1/ledger/synchronize",
    description: "Triggers multi-region ledger replication across highly distributed global nodes.",
    requestBody: (density: number, sync: boolean) => ({
      sync_mode: sync ? "quantum_grid" : "organic_scatter",
      replication_nodes: ["zurich", "tokyo", "singapore", "new_york"],
      force_consistency: true
    }),
    response: (lat: number, den: number, sync: boolean, tab: string) => ({
      status: sync ? "synchronized" : "scatter_sync_completed",
      sync_mode: sync ? "QUANTUM_GRID_SYNC" : "ORGANIC_SCATTER",
      active_channels: sync ? 8 : 4,
      hash_integrity: sync ? "0x9F3E8C12A55D9E08B" : "0x3A2E8B991C4B5E01D",
      consensus_reached: sync,
      replication_delay_ms: Math.round(lat * 1.5)
    })
  },
  FETCH_METRICS: {
    endpoint: "GET /v1/telemetry/metrics",
    description: "Pulls real-time synapse latency, compute throughput, and network status.",
    requestBody: () => ({}),
    response: (lat: number, den: number, sync: boolean, tab: string) => ({
      timestamp: new Date().toISOString(),
      active_module: tab,
      metrics: {
        latency_ms: lat,
        synapse_density_percent: den,
        quantum_grid_sync: sync,
        efficiency_index: Math.round(((den * 1.5) / (lat * 0.8)) * (sync ? 1.2 : 0.8)),
        synaptic_throughput: tab === "neural" ? "4.8 TF/s" : tab === "edge" ? "99.999%" : "1536 dim"
      },
      system_status: "operational"
    })
  },
  EXECUTE_SWEEP: {
    endpoint: "POST /v1/security/threat-sweep",
    description: "Initiates context-aware, cognitive on-device vulnerability analysis.",
    requestBody: (density: number) => ({
      deep_scan: true,
      threat_mapping: "cognitive_realtime",
      mitigation_protocols: ["isolate_keys", "rotate_shards"]
    }),
    response: (lat: number, den: number, sync: boolean, tab: string) => ({
      status: "secure",
      threats_detected: 0,
      scan_duration_ms: Math.round(lat * 3.2),
      cognitive_accuracy: `${Math.min(100, Math.round(90 + den * 0.1))}%`,
      active_shields: ["quantum_sig", "zero_knowledge_verifier", "decoupled_key_management"],
      defense_state: "shielded"
    })
  }
};

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const frameCount1 = 150;
    const frameCount2 = 180;
    const frameCount = frameCount1 + frameCount2; 
    const images: HTMLImageElement[] = [];
    let currentFrameIndex = 0;

    for (let i = 1; i <= frameCount1; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/robotic frames one by one /ezgif-frame-${frameNumber}.jpg`;
        images.push(img);
    }
    for (let i = 1; i <= frameCount2; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/transformation of humanoid/ezgif-frame-${frameNumber}.jpg`;
        images.push(img);
    }

    function resizeAndDraw(img: HTMLImageElement) {
        if (!img || !img.complete || !canvas) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        
        context?.scale(dpr, dpr);
        if (context) {
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
        }

        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
        const dWidth = img.width * scale;
        const dHeight = img.height * scale;
        
        const dx = (canvasWidth - dWidth) / 2;
        const dy = (canvasHeight - dHeight) / 2;

        context?.clearRect(0, 0, canvasWidth, canvasHeight);
        context?.drawImage(img, 0, 0, img.width, img.height, dx, dy, dWidth, dHeight);
    }

    images[0].onload = () => {
        resizeAndDraw(images[0]);
    };

    const handleResize = () => {
        if (images[currentFrameIndex] && images[currentFrameIndex].complete) {
            resizeAndDraw(images[currentFrameIndex]);
        }
    };
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
        const scrollDistance = document.documentElement.scrollHeight - window.innerHeight;
        let scrollFraction = window.scrollY / scrollDistance;
        scrollFraction = Math.max(0, Math.min(1, scrollFraction));
        
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        );

        if (frameIndex !== currentFrameIndex) {
            currentFrameIndex = frameIndex;
            requestAnimationFrame(() => {
                resizeAndDraw(images[frameIndex]);
            });
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  
  // Interactive states for the Explore Card
  const [activeTab, setActiveTab] = useState<CoreTab>("neural");
  const [latency, setLatency] = useState(12);
  const [density, setDensity] = useState(84);
  const [syncEnabled, setSyncEnabled] = useState(true);

  // Checkout Stepper states
  const [activeStep, setActiveStep] = useState<number>(3);
  const [expressShipping, setExpressShipping] = useState<boolean>(true);
  const [standardShipping, setStandardShipping] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("visa");
  const [paymentDropdownOpen, setPaymentDropdownOpen] = useState<boolean>(false);

  // New states for Global Node Explorer & Developer Sandbox
  const [selectedNode, setSelectedNode] = useState<string>("zurich");
  const [nodeOptimizing, setNodeOptimizing] = useState<string | null>(null);
  const [selectedCommand, setSelectedCommand] = useState<"INIT_SYNAPSE" | "SYNC_LEDGER" | "FETCH_METRICS" | "EXECUTE_SWEEP">("INIT_SYNAPSE");
  const [consoleLogs, setConsoleLogs] = useState<Array<{ id: number, type: "system" | "success" | "error" | "info", msg: string, timestamp: string }>>([
    { id: 1, type: "system", msg: "Fluxora Core Engine v4.8 initialized successfully.", timestamp: "10:14:02" },
    { id: 2, type: "info", msg: "Multi-region handshake completed. Active route: Zurich Node-A.", timestamp: "10:14:03" }
  ]);
  const [isConsoleExecuting, setIsConsoleExecuting] = useState(false);
  const [logCounter, setLogCounter] = useState(3);

  // SPACE Login Card interactive states
  const [loginEmail, setLoginEmail] = useState("example@gmail.com");
  const [loginPassword, setLoginPassword] = useState("password123");
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccessMessage, setLoginSuccessMessage] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginSuccessMessage(null);

    const timeNow = new Date().toTimeString().split(' ')[0];
    setConsoleLogs(prev => [
      ...prev,
      {
        id: logCounter,
        type: "info",
        msg: `[AUTH] Initiating authentication sequence for user: ${loginEmail}`,
        timestamp: timeNow
      },
      {
        id: logCounter + 1,
        type: "system",
        msg: `[AUTH] Cryptographic handshake completed. Security layer established.`,
        timestamp: timeNow
      }
    ]);
    setLogCounter(prev => prev + 2);

    setTimeout(() => {
      setIsLoggingIn(false);
      const successText = isSignUpMode 
        ? "Account successfully provisioned! Welcome to the SPACE network." 
        : `Welcome back! Secure session established for ${loginEmail}.`;
      setLoginSuccessMessage(successText);

      const doneTime = new Date().toTimeString().split(' ')[0];
      setConsoleLogs(prev => [
        ...prev,
        {
          id: logCounter + 2,
          type: "success",
          msg: `[AUTH] Authorization successful. Access Token issued and cached locally.`,
          timestamp: doneTime
        }
      ]);
      setLogCounter(prev => prev + 3);
    }, 1500);
  };

  const handleForgetPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    const timeNow = new Date().toTimeString().split(' ')[0];
    setConsoleLogs(prev => [
      ...prev,
      {
        id: logCounter,
        type: "error",
        msg: `[AUTH] Password recovery sequence launched for ${loginEmail}.`,
        timestamp: timeNow
      }
    ]);
    setLogCounter(prev => prev + 1);
    setLoginSuccessMessage(`A password recovery token has been transmitted to ${loginEmail}.`);
  };

  const handleGetStartedClick = () => {
    const element = document.getElementById("space-login-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      // Temporary glowing outline to draw the user's attention
      element.classList.add("ring-1", "ring-cyan-500/50");
      setTimeout(() => {
        element.classList.remove("ring-1", "ring-cyan-500/50");
      }, 1500);
    }
  };

  const navItems = [
    { label: "Features", hasDropdown: true },
    { label: "How It Works", hasDropdown: false },
    { label: "About", hasDropdown: false },
    { label: "Product", hasDropdown: false },
    { label: "Blogs", hasDropdown: false },
  ];

  const featuresList = [
    { title: "Intelligent Analytics", desc: "Real-time user behavior tracking" },
    { title: "Human-Centered AI", desc: "Intuitive automated operations" },
    { title: "Enterprise Security", desc: "Bank-grade data protection" },
    { title: "Global Scale", desc: "Ultra-low latency globally distributed" },
  ];

  // Specific descriptions for each core node in the explore card
  const tabContent = {
    neural: {
      title: "Neural Fusion Core",
      subtitle: "Autonomous context-aware processing engine",
      metricName: "Synaptic Throughput",
      metricValue: "4.8 TF/s",
      color: "from-orange-500 to-red-600",
      accent: "#ff4e1a",
      tags: ["Self-learning", "Sub-2ms", "Dynamic Layering"],
    },
    edge: {
      title: "Edge Network Hub",
      subtitle: "Global decentralized routing & state synchronization",
      metricName: "Anycast Redundancy",
      metricValue: "99.999%",
      color: "from-amber-500 to-orange-600",
      accent: "#f59e0b",
      tags: ["Multi-region", "Zero-trust", "Local Cache"],
    },
    cognitive: {
      title: "Cognitive Space",
      subtitle: "Semantic memory vector maps & interaction engine",
      metricName: "Embedding Density",
      metricValue: "1536 dim",
      color: "from-orange-400 to-amber-600",
      accent: "#f97316",
      tags: ["Vector DB", "Context Window", "Human Align"],
    }
  };

  return (
    <div className="min-h-screen text-zinc-100 relative overflow-hidden flex flex-col font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1] object-cover pointer-events-none" />
      
      {/* Immersive radial glowing background elements */}
      <div 
        id="bg-glow-orange"
        className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#ff4e1a]/5 blur-[140px] pointer-events-none select-none" 
      />
      <div 
        id="bg-glow-right-top"
        className="absolute top-[-5%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#aa3b18]/4 blur-[130px] pointer-events-none select-none" 
      />
      <div 
        id="bg-glow-right-bottom"
        className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4e1a]/4 blur-[150px] pointer-events-none select-none" 
      />

      {/* --- HEADER / NAVBAR --- */}
      <header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div id="brand-logo-container" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center">
            {/* Custom geometric Fluxora logo */}
            <svg className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="fluxora-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e62e05" />
                  <stop offset="100%" stopColor="#ff5a1f" />
                </linearGradient>
                <linearGradient id="fluxora-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5a1f" />
                  <stop offset="100%" stopColor="#ff9a3c" />
                </linearGradient>
              </defs>
              <rect x="5.5" y="11" width="13" height="13" rx="3.5" transform="rotate(45 5.5 11)" fill="url(#fluxora-grad-left)" />
              <rect x="17.5" y="11" width="13" height="13" rx="3.5" transform="rotate(45 17.5 11)" fill="url(#fluxora-grad-right)" className="mix-blend-screen" opacity="0.9" />
            </svg>
          </div>
          <span className="text-white font-sans text-2xl font-bold tracking-tight">
            Fluxora
          </span>
        </div>

        {/* Center: Glassmorphic Capsule Navigation */}
        <nav className="hidden md:flex items-center bg-zinc-950/40 backdrop-blur-md border border-zinc-800/30 rounded-full px-1.5 py-1 relative">
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isDropdownActive = item.label === "Features" && isFeaturesOpen;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (item.label === "Features") setIsFeaturesOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (item.label === "Features") setIsFeaturesOpen(false);
                }}
              >
                <button
                  id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer rounded-full ${
                    isHovered || isDropdownActive ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isFeaturesOpen ? "rotate-180 text-orange-500" : "text-zinc-500"
                      }`}
                    />
                  )}
                </button>

                {/* Animated pill background on hover */}
                {isHovered && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-zinc-800/35 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Features Dropdown Menu */}
                {item.label === "Features" && (
                  <AnimatePresence>
                    {isFeaturesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80"
                      >
                        <div className="bg-[#0e0e11]/95 border border-zinc-800/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                          <div className="grid grid-cols-1 gap-1">
                            {featuresList.map((feat) => (
                              <div
                                key={feat.title}
                                className="group/item flex flex-col p-2.5 rounded-xl hover:bg-zinc-900/60 transition-colors cursor-pointer"
                              >
                                <span className="text-sm font-medium text-zinc-200 group-hover/item:text-orange-400 transition-colors flex items-center justify-between">
                                  {feat.title}
                                </span>
                                <span className="text-xs text-zinc-500 mt-0.5">{feat.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: "Get Started" CTA */}
        <div className="hidden md:flex items-center">
          <button 
            id="btn-nav-get-started"
            onClick={handleGetStartedClick}
            className="bg-white text-black font-sans font-medium px-5 py-2.5 rounded-full text-sm hover:bg-zinc-200 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.06)] cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* --- HERO CONTENT FLOW --- */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-24 flex-grow flex items-center">
        <div className="flex flex-col gap-10 w-full items-start">
          
          {/* Headline, Subtext, CTA Button */}
          <div className="flex flex-col justify-center max-w-3xl w-full">
            
            {/* Reduced fontweight headline using exact DM Sans and light tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-sans text-[2.8rem] sm:text-[4.2rem] md:text-[5.4rem] lg:text-[5.8rem] font-light leading-[1.05] tracking-tight text-white flex flex-col select-none"
            >
              <span className="block text-zinc-100 font-light">
                Technology
              </span>
              <span className="block font-light">
                Crafted for{" "}
                <span className="bg-gradient-to-r from-[#e62e05] to-[#ff6622] bg-clip-text text-transparent font-light">
                  All
                </span>
              </span>
              <span className="block font-light">
                Not{" "}
                <span className="font-light italic bg-gradient-to-r from-[#ff5321] via-[#ff7836] to-[#ffa859] bg-clip-text text-transparent">
                  Machines
                </span>
              </span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              id="hero-subtitle"
              className="mt-8 text-base sm:text-lg md:text-[20px] text-zinc-400 max-w-xl font-sans font-light leading-relaxed tracking-normal"
            >
              We create clear, intuitive, and accessible digital experiences
              shaped by real human behavior.
            </motion.p>

            {/* Simple primary Call-To-Action button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-10"
            >
              <button 
                id="btn-hero-get-started"
                onClick={handleGetStartedClick}
                className="bg-gradient-to-r from-[#e62e05] to-[#f24e1e] text-white pl-7 pr-2.5 py-2.5 rounded-full font-sans font-medium text-[15px] inline-flex items-center justify-between gap-6 hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group shadow-[0_4px_24px_rgba(230,46,5,0.22)] cursor-pointer"
              >
                <span>Get started</span>
                <span className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-md">
                  <ArrowRight className="w-5 h-5 text-[#e62e05]" strokeWidth={2.5} />
                </span>
              </button>
            </motion.div>

          </div>

          {/* Stacked Interactive Panels (Core Synthesizer & Checkout Stepper) directly beneath the heading */}
          <div className="flex flex-col gap-10 items-start w-full">
            
            {/* Core Synthesizer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              id="explore-core-card"
              className="relative w-full max-w-[520px] rounded-3xl bg-gradient-to-b from-[#160b07]/80 to-[#070302]/95 border border-[#2d140b]/70 p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.03)] group"
            >
              {/* Outer glowing dynamic node indicator based on selected tab */}
              <div 
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[45px] opacity-20 transition-colors duration-500" 
                style={{ backgroundColor: tabContent[activeTab].accent }}
              />

              {/* Card Header and Module selector */}
              <div className="flex items-center justify-between border-b border-zinc-800/45 pb-5">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Cpu className="w-4 h-4 text-orange-500" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Core Synthesizer v4.8</span>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-950/60 p-1 rounded-full border border-zinc-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider pr-1">Active</span>
                </div>
              </div>

              {/* Explorable Tabs navigation */}
              <div className="grid grid-cols-3 gap-1 bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-900/80 mt-6 select-none">
                {(Object.keys(tabContent) as CoreTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="active-explore-tab"
                        className="absolute inset-0 bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700/30 rounded-xl"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Content based on active state */}
              <div className="min-h-[120px] mt-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[11px] font-mono uppercase tracking-widest text-orange-500 font-semibold block">
                      Explorable Module
                    </span>
                    <h3 className="font-sans text-2xl font-normal text-white mt-1 leading-tight">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                      {tabContent[activeTab].subtitle}
                    </p>

                    {/* Interactive tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {tabContent[activeTab].tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/60 text-zinc-400 border border-zinc-800/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Interactive sliders & toggles to "explore" parameters */}
              <div className="mt-8 pt-6 border-t border-zinc-800/45 flex flex-col gap-5">
                
                {/* Parameter 1: Synaptic Latency Slider */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Network className="w-3.5 h-3.5 text-zinc-500" />
                      Dynamic Latency
                    </span>
                    <span className="text-orange-400 font-bold">{latency}ms</span>
                  </div>
                  <div className="relative flex items-center group/slider">
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={latency}
                      onChange={(e) => setLatency(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Parameter 2: Neural Density Slider */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
                      Neural Synapse Density
                    </span>
                    <span className="text-orange-400 font-bold">{density}%</span>
                  </div>
                  <div className="relative flex items-center group/slider">
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={density}
                      onChange={(e) => setDensity(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Parameter 3: Live Synchronization Toggle */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-zinc-500" />
                    <span className="text-xs font-mono text-zinc-400">Quantum Grid Sync</span>
                  </div>
                  <button 
                    onClick={() => setSyncEnabled(!syncEnabled)}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {syncEnabled ? (
                      <ToggleRight className="w-8 h-8 text-orange-500" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-zinc-600" />
                    )}
                  </button>
                </div>

              </div>

              {/* Dynamic Interactive Status Output based on custom values */}
              <div className="mt-6 bg-[#000000]/80 border border-zinc-900/60 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Live Calculations</span>
                  <span className="text-xs text-zinc-200 mt-1 font-mono flex items-center gap-1">
                    Efficiency Index: 
                    <span className="text-orange-400 font-bold">
                      {Math.round(((density * 1.5) / (latency * 0.8)) * (syncEnabled ? 1.2 : 0.8))} pts
                    </span>
                  </span>
                </div>
                <div className="h-2 w-16 bg-zinc-900 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-amber-500"
                    animate={{ width: `${Math.min(100, Math.round(((density * 1.5) / (latency * 0.8)) * (syncEnabled ? 1.2 : 0.8)))}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>
              </div>

            </motion.div>

            {/* SPACE Login Card (beneath Core Synthesizer, above Checkout Stepper) */}
            <motion.div
              id="space-login-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[520px] rounded-3xl bg-black border border-zinc-900 p-8 flex flex-col gap-6 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] hover:border-cyan-950/80 transition-all duration-500 group ScrollMountOffset"
            >
              {/* Outer delicate glowing lightbars for enhanced depth */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              {/* SPACE Logo Branding & Header */}
              <div className="flex flex-col items-center select-none text-center mt-2">
                <div className="font-sans font-black tracking-[0.3em] text-3xl text-white uppercase flex items-center justify-center transition-all duration-300 group-hover:tracking-[0.33em]">
                  SP<span className="text-cyan-400">A</span>CE
                </div>
                <p className="text-zinc-400 text-sm font-light mt-3 tracking-wide">
                  {isSignUpMode ? "Create New Member Profile" : "Welcome Back"}
                </p>
              </div>

              {/* Interactive Form */}
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 mt-2">
                
                {/* Email address input field */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">
                    Email address
                  </label>
                  <div className="relative group/input">
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="w-full bg-black border border-cyan-500/40 rounded-xl px-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.06),inset_0_2px_4px_rgba(0,0,0,0.8)] hover:border-cyan-500/60 transition-all duration-300"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within/input:text-cyan-400 transition-colors duration-300">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Password input field */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Password
                    </label>
                    {!isSignUpMode && (
                      <button
                        type="button"
                        onClick={handleForgetPassword}
                        className="text-[10px] font-mono text-cyan-400/80 hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
                      >
                        Forget Password ?
                      </button>
                    )}
                  </div>
                  <div className="relative group/input">
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-black border border-cyan-500/40 rounded-xl px-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.06),inset_0_2px_4px_rgba(0,0,0,0.8)] hover:border-cyan-500/60 transition-all duration-300"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within/input:text-cyan-400 transition-colors duration-300">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Confirm Password (only displayed when signing up) */}
                {isSignUpMode && (
                  <div className="flex flex-col gap-2.5 animate-fade-in">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        className="w-full bg-black border border-cyan-500/40 rounded-xl px-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.06),inset_0_2px_4px_rgba(0,0,0,0.8)] hover:border-cyan-500/60 transition-all duration-300"
                      />
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Login/Signup Button */}
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-cyan-400/[0.07] backdrop-blur-md border border-cyan-400/30 text-cyan-400 hover:text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase font-mono shadow-[0_4px_20px_rgba(6,182,212,0.08),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] active:scale-[0.99] cursor-pointer mt-2 flex items-center justify-center gap-2"
                >
                  {isLoggingIn ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                      <span className="text-cyan-300">Verifying Credentials...</span>
                    </>
                  ) : (
                    <span>{isSignUpMode ? "Sign UP Now" : "Login"}</span>
                  )}
                </button>
              </form>

              {/* Status Message Display */}
              <AnimatePresence>
                {loginSuccessMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3 text-center text-xs text-emerald-400 font-mono"
                  >
                    {loginSuccessMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Auth Switcher Footer Link */}
              <div className="text-center text-xs text-zinc-400 font-sans mt-1">
                {isSignUpMode ? (
                  <>
                    Already a member?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignUpMode(false);
                        setLoginSuccessMessage(null);
                      }}
                      className="text-white hover:text-cyan-400 font-bold hover:underline cursor-pointer ml-1 transition-colors"
                    >
                      Login Here
                    </button>
                  </>
                ) : (
                  <>
                    Are You New Member ?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignUpMode(true);
                        setLoginSuccessMessage(null);
                      }}
                      className="text-white hover:text-cyan-400 font-bold hover:underline cursor-pointer ml-1 transition-colors"
                    >
                      Sign UP
                    </button>
                  </>
                )}
              </div>
            </motion.div>

            {/* Interactive Checkout Stepper Card (Chips & Forms) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-[520px] rounded-3xl bg-black border border-zinc-900/80 p-6 md:p-8 flex flex-col gap-6 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              {/* Stepper block */}
              <div className="flex flex-col gap-3 relative">
                {[
                  { id: 1, label: "Cart Review", icon: CheckCircle2, pathName: "1: Cart Review" },
                  { id: 2, label: "Shipping Info", icon: CheckCircle2, pathName: "2: Shipping Info" },
                  { id: 3, label: "Payment Method", icon: CreditCard, pathName: "3: Payment Method" },
                  { id: 4, label: "Billing Address", icon: MapPin, pathName: "4: Billing Address" },
                  { id: 5, label: "Confirmation", icon: Receipt, pathName: "5: Confirmation" }
                ].map((step, idx, arr) => {
                  const isCompleted = step.id < activeStep;
                  const isActive = step.id === activeStep;

                  return (
                    <div 
                      key={step.id} 
                      className="flex items-start gap-4 cursor-pointer group select-none relative"
                      onClick={() => setActiveStep(step.id)}
                    >
                      {/* Left: Indicator Nodes connected by path line */}
                      <div className="flex flex-col items-center flex-shrink-0 relative">
                        {/* Circle */}
                        {isCompleted ? (
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                            <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                          </div>
                        ) : isActive ? (
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] relative z-10 transition-all duration-300">
                            <div className="w-5.5 h-5.5 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-semibold text-white">
                              {step.id}
                            </div>
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-semibold transition-all duration-300">
                            {step.id}
                          </div>
                        )}

                        {/* Connecting Line segment */}
                        {idx < arr.length - 1 && (
                          <div 
                            className={`w-[2px] h-7 absolute top-8 left-1/2 -translate-x-1/2 transition-colors duration-500 ${
                              step.id < activeStep ? "bg-blue-500" : "bg-zinc-800"
                            }`} 
                          />
                        )}
                      </div>

                      {/* Right: Capsule Pill */}
                      <div className="flex-grow pt-0.5">
                        {isCompleted ? (
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/30 border border-zinc-800/40 text-xs text-zinc-400 hover:text-zinc-200 transition-colors duration-300">
                            <Check className="w-3.5 h-3.5 text-blue-400" />
                            <span className="font-sans font-medium">{step.pathName}</span>
                          </div>
                        ) : isActive ? (
                          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-zinc-950 border border-blue-500 text-xs text-white shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all duration-300 font-semibold">
                            <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                            <span className="font-sans">{step.pathName}</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 border border-zinc-900/60 text-xs text-zinc-600 group-hover:text-zinc-400 group-hover:border-zinc-800 transition-all duration-300">
                            {step.id === 4 ? (
                              <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                            ) : (
                              <Receipt className="w-3.5 h-3.5 text-zinc-700" />
                            )}
                            <span className="font-sans">{step.pathName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Forms Card */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  {activeStep === 1 && (
                    <motion.div
                      key="step1-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-5 flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Cart Items</span>
                        <span className="text-[10px] font-mono text-zinc-600">ID: FLX-SUB-881</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
                          <div>
                            <span className="text-xs text-zinc-200 block font-medium">Fluxora Developer Core license</span>
                            <span className="text-[10px] text-zinc-500">Autonomous edge routing sync</span>
                          </div>
                          <span className="text-xs font-mono text-orange-400 font-bold">$49.00</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-zinc-500 font-mono">Platform Tax</span>
                          <span className="text-zinc-400 font-mono">$0.00</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold mt-1 border-t border-zinc-900/50 pt-2">
                          <span className="text-zinc-300">Total</span>
                          <span className="text-emerald-400 font-mono text-sm">$49.00</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setActiveStep(2)}
                        className="w-full py-3 bg-zinc-900 text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
                      >
                        Proceed to Shipping
                      </button>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step2-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-5 flex flex-col gap-4"
                    >
                      <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Shipping Location</span>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase">Recipient Name</label>
                          <input 
                            type="text" 
                            defaultValue="Zurich Core Admin" 
                            className="bg-black border border-zinc-900 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700" 
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase">Routing Address</label>
                          <input 
                            type="text" 
                            defaultValue="Hardturmstrasse 161, Zurich, Switzerland" 
                            className="bg-black border border-zinc-900 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700" 
                          />
                        </div>
                      </div>
                      <button 
                        onClick={() => setActiveStep(3)}
                        className="w-full py-3 bg-zinc-900 text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer mt-2"
                      >
                        Save & Continue
                      </button>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      key="step3-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-zinc-800/80 bg-zinc-950/40 rounded-2xl p-5 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                    >
                      {/* Shipping Options Title */}
                      <span className="text-xs text-zinc-200 font-semibold tracking-wide">
                        Shipping Options
                      </span>

                      {/* Toggles Container */}
                      <div className="flex flex-col gap-3">
                        {/* Option 1: Express (2-3 days) */}
                        <div 
                          className="flex items-center justify-between p-2.5 bg-black/40 rounded-xl border border-zinc-900/40 hover:border-zinc-800/80 transition-colors duration-300 cursor-pointer"
                          onClick={() => {
                            setExpressShipping(true);
                            setStandardShipping(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Custom Switch Toggle */}
                              <div className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-300 ${expressShipping ? 'bg-orange-500' : 'bg-zinc-800'}`}>
                                <motion.div 
                                  className="w-3.5 h-3.5 rounded-full bg-white shadow-md"
                                  layout
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  animate={{ x: expressShipping ? 14 : 0 }}
                                />
                              </div>
                            </div>
                            <span className="text-xs text-zinc-300">Express (2-3 days)</span>
                          </div>
                        </div>

                        {/* Option 2: Standard (5-7 days) */}
                        <div 
                          className="flex items-center justify-between p-2.5 bg-black/40 rounded-xl border border-zinc-900/40 hover:border-zinc-800/80 transition-colors duration-300 cursor-pointer"
                          onClick={() => {
                            setStandardShipping(true);
                            setExpressShipping(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {/* Custom Switch Toggle */}
                              <div className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-300 ${standardShipping ? 'bg-blue-500' : 'bg-zinc-800'}`}>
                                <motion.div 
                                  className="w-3.5 h-3.5 rounded-full bg-white shadow-md"
                                  layout
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  animate={{ x: standardShipping ? 14 : 0 }}
                                />
                              </div>
                            </div>
                            <span className="text-xs text-zinc-300">Standard (5-7 days)</span>
                          </div>
                        </div>
                      </div>

                      {/* Select Payment Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setPaymentDropdownOpen(!paymentDropdownOpen)}
                          className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800/50 p-3.5 flex items-center justify-between text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 transition cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-3.5 h-3.5 text-zinc-400" />
                            <span>
                              {selectedPayment === "visa" ? "Visa ending in 4242" :
                               selectedPayment === "mastercard" ? "Mastercard ending in 9876" :
                               selectedPayment === "apple" ? "Apple Pay" : "Google Pay"}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${paymentDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {paymentDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden z-30 shadow-2xl">
                            {[
                              { id: "visa", label: "Visa ending in 4242" },
                              { id: "mastercard", label: "Mastercard ending in 9876" },
                              { id: "apple", label: "Apple Pay" },
                              { id: "google", label: "Google Pay" }
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => {
                                  setSelectedPayment(opt.id);
                                  setPaymentDropdownOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left text-xs text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors border-b border-zinc-900/50 last:border-0"
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Continue Button */}
                      <button
                        onClick={() => {
                          setActiveStep(4);
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:brightness-110 active:scale-[0.99] cursor-pointer mt-1"
                      >
                        Continue
                      </button>
                    </motion.div>
                  )}

                  {activeStep === 4 && (
                    <motion.div
                      key="step4-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-5 flex flex-col gap-4"
                    >
                      <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Billing Address</span>
                      <div className="flex items-center gap-2.5 p-1 cursor-pointer">
                        <input 
                          type="checkbox" 
                          id="same-addr" 
                          defaultChecked 
                          className="rounded border-zinc-800 bg-black text-blue-500 focus:ring-0 focus:ring-offset-0" 
                        />
                        <label htmlFor="same-addr" className="text-xs text-zinc-400 cursor-pointer">Same as Shipping Address</label>
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        <span className="text-[10px] text-zinc-500 font-mono uppercase">Billing Country</span>
                        <div className="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-xs text-zinc-300">
                          Switzerland (CHE)
                        </div>
                      </div>
                      <button 
                        onClick={() => setActiveStep(5)}
                        className="w-full py-3 bg-zinc-900 text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer mt-2"
                      >
                        Confirm Details
                      </button>
                    </motion.div>
                  )}

                  {activeStep === 5 && (
                    <motion.div
                      key="step5-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-zinc-900 bg-zinc-950/20 rounded-2xl p-5 flex flex-col gap-4 items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-bounce mb-2">
                        <Check className="w-6 h-6" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-zinc-200 font-bold block">Ready to Complete Order</span>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Your payment method has been verified. Click below to secure and launch your node transaction sequence.
                      </p>
                      <button 
                        onClick={() => {
                          const triggerTime = new Date().toTimeString().split(' ')[0];
                          setConsoleLogs(prev => [
                            ...prev,
                            {
                              id: logCounter + 1,
                              type: "success",
                              msg: `Successfully launched secure decentralized node billing stream for ${selectedPayment.toUpperCase()}.`,
                              timestamp: triggerTime
                            }
                          ]);
                          setLogCounter(c => c + 1);
                          alert("Order Placed Successfully!");
                          setActiveStep(3); // Reset to 3 or keep it
                        }}
                        className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-mono text-xs uppercase tracking-wider rounded-xl hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all cursor-pointer mt-2 font-semibold"
                      >
                        Place Order & Sync
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      {/* --- ROADMAP SECTION --- */}
      <section id="roadmap-section" className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 border-t border-zinc-900/60 flex flex-col items-center">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white font-sans text-3xl sm:text-4xl md:text-[45px] font-light tracking-tight leading-tight"
          >
            Product Development Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed"
          >
            A clear and structured approach to building a secure and scalable financial platform.
          </motion.p>
        </div>

        {/* 3-Column Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-5xl relative">
          
          {/* Column: Month 1 */}
          <div className="flex flex-col items-center relative min-h-[220px]">
            <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-8 font-semibold block text-center">
              Month 1
            </span>
            <div className="flex flex-col gap-4 w-full items-center relative">
              {/* Chip 1: Market research (Shifted right) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:translate-x-4 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>Market research</span>
              </motion.div>

              {/* Chip 2: User needs analysis (Shifted left) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:-translate-x-6 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>User needs analysis</span>
              </motion.div>
            </div>
          </div>

          {/* Column: Month 2 */}
          <div className="flex flex-col items-center relative min-h-[220px]">
            <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-8 font-semibold block text-center">
              Month 2
            </span>
            <div className="flex flex-col gap-4 w-full items-center relative">
              {/* Chip 1: Product design (Shifted left) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:-translate-x-12 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>Product design</span>
              </motion.div>

              {/* Chip 2: System development (Shifted right) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:translate-x-6 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>System development</span>
              </motion.div>

              {/* Chip 3: System development (Shifted left) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:-translate-x-4 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>System development</span>
              </motion.div>
            </div>
          </div>

          {/* Column: Month 3 */}
          <div className="flex flex-col items-center relative min-h-[220px]">
            <span className="font-sans text-xs uppercase tracking-widest text-zinc-500 mb-8 font-semibold block text-center">
              Month 3
            </span>
            <div className="flex flex-col gap-4 w-full items-center relative">
              {/* Chip 1: Beta launch (Shifted left) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:-translate-x-8 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>Beta launch</span>
              </motion.div>

              {/* Chip 2: User feedback (Shifted right) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:translate-x-2 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>User feedback</span>
              </motion.div>

              {/* Chip 3: Performance optimization (Shifted right) */}
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.4)", backgroundColor: "rgba(24,24,27,0.8)" }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-950/60 border border-zinc-800/40 shadow-lg text-zinc-300 text-[13px] font-normal transition-all w-fit md:translate-x-12 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>Performance optimization</span>
              </motion.div>
            </div>
          </div>

        </div>

      </section>

      {/* --- GLOBAL INFRASTRUCTURE MESH SECTION --- */}
      <section id="global-mesh-section" className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 border-t border-zinc-900/60 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <span className="font-mono text-[10px] text-orange-500 uppercase tracking-widest font-semibold block mb-3">
            Distributed Telemetry
          </span>
          <h2 className="text-white font-sans text-3xl sm:text-4xl md:text-[45px] font-light tracking-tight leading-tight">
            Global Infrastructure Mesh
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Monitor state synchronization, transaction latencies, and threat-mapping protocols across our secure node coordinates.
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-5xl items-stretch">
          
          {/* Column 1: Stylized Node Link Map (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/40 border border-zinc-900/80 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111115_1px,transparent_1px),linear-gradient(to_bottom,#111115_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
                Intercontinental Links
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                Active Nodes: 6 / 6
              </span>
            </div>

            {/* Interactive Vector Topology Map */}
            <div className="relative w-full h-[240px] md:h-[280px] border border-zinc-900/50 rounded-2xl bg-[#030303] flex items-center justify-center overflow-hidden">
              
              {/* World map stylized coordinates dots */}
              <svg className="w-full h-full opacity-30 absolute inset-0 select-none pointer-events-none" viewBox="0 0 220 180">
                <circle cx="40" cy="50" r="1.5" fill="#52525b" />
                <circle cx="55" cy="55" r="1.5" fill="#52525b" />
                <circle cx="70" cy="45" r="1.5" fill="#52525b" />
                <circle cx="90" cy="40" r="1.5" fill="#52525b" />
                <circle cx="110" cy="48" r="1.5" fill="#52525b" />
                <circle cx="130" cy="70" r="1.5" fill="#52525b" />
                <circle cx="150" cy="85" r="1.5" fill="#52525b" />
                <circle cx="170" cy="95" r="1.5" fill="#52525b" />
                <circle cx="190" cy="110" r="1.5" fill="#52525b" />
                <circle cx="105" cy="80" r="1.5" fill="#52525b" />
                <circle cx="125" cy="95" r="1.5" fill="#52525b" />
                <circle cx="145" cy="120" r="1.5" fill="#52525b" />
              </svg>

              {/* Connected pathways SVG */}
              <svg className="w-full h-full absolute inset-0 z-10 overflow-visible" viewBox="0 0 220 180">
                {/* Draw pathways between nodes */}
                {globalNodesList.map((node, i) => {
                  const nextNode = globalNodesList[(i + 1) % globalNodesList.length];
                  return (
                    <g key={`path-${node.id}`}>
                      <motion.line
                        x1={node.locationCoords.x}
                        y1={node.locationCoords.y}
                        x2={nextNode.locationCoords.x}
                        y2={nextNode.locationCoords.y}
                        stroke={selectedNode === node.id || selectedNode === nextNode.id ? "rgba(230, 46, 5, 0.4)" : "rgba(39, 39, 42, 0.5)"}
                        strokeWidth={selectedNode === node.id || selectedNode === nextNode.id ? "1.5" : "0.75"}
                        strokeDasharray={syncEnabled ? "none" : "3, 4"}
                        className="transition-colors duration-300"
                      />
                      {/* Traveling sync pulse */}
                      {syncEnabled && (
                        <motion.circle
                          r="1.5"
                          fill="#ff4e1a"
                          animate={{
                            cx: [node.locationCoords.x, nextNode.locationCoords.x],
                            cy: [node.locationCoords.y, nextNode.locationCoords.y],
                          }}
                          transition={{
                            duration: (latency * 0.05) + 1.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Node Markers */}
                {globalNodesList.map((node) => {
                  const isSelected = selectedNode === node.id;
                  const isOptimizing = nodeOptimizing === node.id;
                  
                  return (
                    <g 
                      key={`marker-${node.id}`} 
                      transform={`translate(${node.locationCoords.x}, ${node.locationCoords.y})`}
                      className="cursor-pointer"
                      onClick={() => setSelectedNode(node.id)}
                    >
                      {/* Glow ripple */}
                      <motion.circle
                        r={isSelected ? 8 : 4}
                        fill={isSelected ? "#ff4e1a" : "rgba(255,255,255,0.08)"}
                        className="opacity-25"
                        animate={{ scale: isSelected ? [1, 1.6, 1] : 1 }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      />
                      {/* Active core dot */}
                      <circle
                        r={isSelected ? 3.5 : 2}
                        fill={isSelected ? "#ffffff" : isOptimizing ? "#34d399" : "#ff4e1a"}
                        stroke={isSelected ? "#ff4e1a" : "none"}
                        strokeWidth={1}
                        className="transition-colors duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Dynamic Coordinate overlay watermark */}
              <div className="absolute top-3 left-4 font-mono text-[9px] text-zinc-600">
                MESH_ID: 0xFX-889 • GRID STATUS: {syncEnabled ? "LOCKED" : "FLOATING"}
              </div>
            </div>

            {/* Quick selectors list */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-6">
              {globalNodesList.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`py-2 px-1 rounded-xl font-mono text-[10px] text-center border transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? "bg-zinc-900 border-orange-500/50 text-white shadow-md shadow-orange-500/5" 
                        : "bg-zinc-950/20 border-zinc-900/60 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                    }`}
                  >
                    {node.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Column 2: Node Telemetry Panel (lg:col-span-5) */}
          <div className="lg:col-span-5 flex">
            {globalNodesList.filter(n => n.id === selectedNode).map((node) => {
              const currentPing = node.basePing + Math.round(latency * 0.4);
              const isOptimizing = nodeOptimizing === node.id;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full rounded-3xl bg-zinc-950/20 border border-zinc-900/80 p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative"
                >
                  {/* Dynamic glow corner */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-orange-500/5 blur-[35px]" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-zinc-900/80 pb-4">
                      <div>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                          Active Telemetry Node
                        </span>
                        <h4 className="font-sans text-xl font-normal text-white mt-1">
                          {node.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#000]/50 border border-zinc-900 px-2 py-1 rounded-full">
                        <span className={`w-1.5 h-1.5 rounded-full ${isOptimizing ? "bg-amber-400 animate-spin" : "bg-emerald-500 animate-pulse"}`} />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                          {isOptimizing ? "Syncing" : "Active"}
                        </span>
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="mt-6 flex flex-col gap-4">
                      
                      {/* Metric: Region */}
                      <div className="flex justify-between items-center border-b border-zinc-900/30 pb-3">
                        <span className="text-xs font-mono text-zinc-500">Region Scope</span>
                        <span className="text-xs text-zinc-300 font-medium">{node.region}</span>
                      </div>

                      {/* Metric: Responsive Ping Delay */}
                      <div className="flex justify-between items-center border-b border-zinc-900/30 pb-3">
                        <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                          <Network className="w-3.5 h-3.5 text-zinc-500" />
                          Dynamic Ping Delay
                        </span>
                        <span className="text-xs text-emerald-400 font-mono font-semibold">
                          {currentPing} ms
                        </span>
                      </div>

                      {/* Metric: Hash Verification */}
                      <div className="flex justify-between items-center border-b border-zinc-900/30 pb-3">
                        <span className="text-xs font-mono text-zinc-500">Node Load</span>
                        <span className="text-xs text-zinc-300 font-mono">{node.capacity}</span>
                      </div>

                      {/* Metric: Security Ledger Key */}
                      <div className="flex flex-col gap-1.5 pt-1">
                        <span className="text-xs font-mono text-zinc-500">Dynamic SHA-256 Signature</span>
                        <span className="text-[10px] text-zinc-500 font-mono break-all bg-black/60 p-2.5 rounded-xl border border-zinc-900 select-all">
                          {syncEnabled 
                            ? `0x${node.id.toUpperCase()}_88F9E842A${Math.round(density * 1.5)}BC8E9011`
                            : `0x${node.id.toUpperCase()}_UNSYNCED_DECOUPLED_SHARD_8A`
                          }
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Actions footer inside card */}
                  <div className="mt-8">
                    <button
                      onClick={() => {
                        if (isOptimizing) return;
                        setNodeOptimizing(node.id);
                        
                        // Log trigger to sandbox console logs dynamically!
                        const timestamp = new Date().toTimeString().split(' ')[0];
                        setConsoleLogs(prev => [
                          ...prev,
                          {
                            id: logCounter + 1,
                            type: "info",
                            msg: `Triggered intercontinental link optimization route for ${node.name}...`,
                            timestamp
                          }
                        ]);
                        setLogCounter(c => c + 1);

                        setTimeout(() => {
                          setNodeOptimizing(null);
                          const completeTimestamp = new Date().toTimeString().split(' ')[0];
                          setConsoleLogs(prev => [
                            ...prev,
                            {
                              id: logCounter + 2,
                              type: "success",
                              msg: `Route optimization successfully verified for ${node.name}. Ping minimized to ${node.basePing}ms.`,
                              timestamp: completeTimestamp
                            }
                          ]);
                          setLogCounter(c => c + 2);
                        }, 1200);
                      }}
                      disabled={isOptimizing}
                      className="w-full bg-zinc-900 text-white font-mono text-xs uppercase tracking-wider py-3.5 rounded-2xl border border-zinc-800/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isOptimizing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Recalibrating Path...</span>
                        </>
                      ) : (
                        <>
                          <Activity className="w-3.5 h-3.5" />
                          <span>Optimize Link Pathway</span>
                        </>
                      )}
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </section>

      {/* --- SMART SECURE CARDS SECTION --- */}
      <section id="secure-cards-section" className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-28 border-t border-zinc-900/60 flex flex-col items-center">
        
        {/* Large spacing grid with great horizontal and vertical gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 md:gap-x-36 lg:gap-x-44 gap-y-16 md:gap-y-28 w-full max-w-5xl relative py-12">
          
          {/* LEFT SIDE: 4 CARDS */}
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 w-full">
            
            {/* Card 1: Advanced secure system */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Shield className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Advanced secure system
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Advanced protection layers to keep financial transactions safe, isolated, and completely secure.
              </p>
            </motion.div>

            {/* Card 2: Decoupled Key Management */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <KeyRound className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Decoupled key management
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Isolated cryptography layer that secures sensitive private data and wallets with military grade encryption.
              </p>
            </motion.div>

            {/* Card 3: Zero-Knowledge Verification */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Lock className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Zero-knowledge verification
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Fully anonymous computation protocols that verify user eligibility without sharing private transactional metadata.
              </p>
            </motion.div>

            {/* Card 4: Quantum-Grade Protection */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Zap className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Quantum-grade protection
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Post-quantum signature schemes designed to fully withstand future computing technologies and state decryption.
              </p>
            </motion.div>

          </div>

          {/* RIGHT SIDE: 4 CARDS (Staggered slightly to match premium layout) */}
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 w-full md:translate-y-12">
            
            {/* Card 5: Seamless user access */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Workflow className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Seamless user access
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Frictionless and elegant login interfaces paired with biometrics for managing your finances anytime, anywhere.
              </p>
            </motion.div>

            {/* Card 6: Decentralized State Sync */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Database className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Decentralized state sync
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Real-time cryptographic ledger replication across highly distributed and autonomous global nodes.
              </p>
            </motion.div>

            {/* Card 7: Cognitive Threat Mapping */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Target className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Cognitive threat mapping
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                Proactive risk mitigation and threat profiling engine powered by context-aware on-device machine intelligence.
              </p>
            </motion.div>

            {/* Card 8: Multi-Region Redundancy */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 border border-zinc-800/40 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-md group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center mb-6">
                <Globe className="w-5.5 h-5.5 text-zinc-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-sans text-[22px] font-normal text-zinc-100 leading-snug tracking-tight">
                Multi-region redundancy
              </h3>
              <p className="text-zinc-500 text-xs sm:text-[13px] font-light leading-relaxed mt-3 max-w-[290px]">
                High-availability edge cluster routing with seamless failovers configured across 50+ global networks.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* --- DEVELOPER SANDBOX SECTION --- */}
      <section id="developer-sandbox-section" className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 border-t border-zinc-900/60 flex flex-col items-center">
        
        {/* Dynamic decorative background SVG vector / grid */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-40">
          <svg className="absolute top-0 left-0 w-full h-full text-zinc-900/45" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="sandbox-dot-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(6, 182, 212, 0.12)" />
              </pattern>
              <linearGradient id="sandbox-grad-lines" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.05)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.02)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#sandbox-dot-pattern)" />
            {/* Elegant vector trace lines */}
            <path d="M-100,200 L300,100 L600,450 L1200,200 L1600,600" fill="none" stroke="url(#sandbox-grad-lines)" strokeWidth="1.5" />
            <path d="M100,-50 L400,200 L800,100 L1100,500 L1500,150" fill="none" stroke="url(#sandbox-grad-lines)" strokeWidth="1" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16 relative z-10">
          <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block mb-3">
            API Playground
          </span>
          <h2 className="text-white font-sans text-3xl sm:text-4xl md:text-[45px] font-light tracking-tight leading-tight">
            Sovereign Developer Sandbox
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Test and interface with our decentralized node protocols directly from this live terminal. Adjust parameters in the Core Synthesizer above to see responses change in real-time.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-5xl items-stretch relative z-10">
          
          {/* Column 1: API Endpoint Selectors (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider pl-1 block">
              SELECT ENDPOINT PROTOCOL
            </span>
            {(Object.keys(sandboxCommands) as Array<keyof typeof sandboxCommands>).map((cmdKey) => {
              const cmd = sandboxCommands[cmdKey];
              const isSelected = selectedCommand === cmdKey;
              return (
                <button
                  key={cmdKey}
                  onClick={() => setSelectedCommand(cmdKey)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-md relative overflow-hidden group/btn ${
                    isSelected 
                      ? "bg-cyan-500/[0.04] border-cyan-400/40 text-white shadow-[0_4px_25px_rgba(6,182,212,0.1),inset_0_1px_1px_rgba(255,255,255,0.05)]" 
                      : "bg-zinc-950/30 border-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:border-cyan-500/30 hover:bg-zinc-900/10"
                  }`}
                >
                  {/* Subtle delicate hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-2 mb-1.5">
                    <Terminal className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-400" : "text-zinc-600"}`} />
                    <span className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 ${isSelected ? "text-cyan-400" : "text-zinc-400"}`}>{cmdKey}</span>
                  </div>
                  <span className={`relative z-10 font-mono text-[10px] block truncate mb-2 transition-colors duration-300 ${isSelected ? "text-cyan-500/70" : "text-zinc-500"}`}>
                    {cmd.endpoint}
                  </span>
                  <p className="relative z-10 text-[11px] font-light leading-relaxed text-zinc-400 font-sans">
                    {cmd.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Column 2: Terminal Window & Output Stream (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col relative">
            <div className="w-full rounded-2xl border border-zinc-900 bg-zinc-950/45 backdrop-blur-md overflow-hidden flex flex-col h-full shadow-[0_25px_60px_rgba(0,0,0,0.95)] hover:border-cyan-950/80 transition-all duration-500 group relative">
              
              {/* Outer delicate glowing lightbars for enhanced depth matching the SPACE login card */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-10" />
              <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent z-10" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-900/60 bg-black/60 backdrop-blur-sm relative z-10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 ml-3">
                    fluxora@sandbox-zurich:~ (v4.8)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>Interactive connection</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 flex-grow font-mono text-[12px] flex flex-col gap-5 text-zinc-300 max-h-[480px] overflow-y-auto select-all selection:bg-cyan-500/20 selection:text-cyan-200 relative z-10">
                
                {/* Endpoint Request Headers */}
                <div className="flex flex-col gap-1 border-b border-zinc-900 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">API Request:</span>
                    <span className="text-zinc-400 bg-zinc-900/60 px-2 py-0.5 rounded text-[11px] border border-zinc-800/40">
                      {sandboxCommands[selectedCommand].endpoint}
                    </span>
                  </div>
                  <span className="text-zinc-600 text-[10px] mt-1">Host: api.fluxora.network</span>
                  <span className="text-zinc-600 text-[10px]">Authorization: Bearer 0xFX_QUANTUM_KEY_SHARD_881</span>
                </div>

                {/* Request Payload JSON representation */}
                <div>
                  <span className="text-zinc-500 block mb-1.5 uppercase text-[10px] tracking-wider">Request Payload:</span>
                  <pre className="bg-black/40 border border-zinc-900/60 rounded-xl p-4 text-orange-400/90 text-[11px] overflow-x-auto leading-relaxed shadow-inner">
                    {JSON.stringify(
                      selectedCommand === "SYNC_LEDGER" 
                        ? sandboxCommands.SYNC_LEDGER.requestBody(density, syncEnabled)
                        : selectedCommand === "FETCH_METRICS" 
                        ? {} 
                        : sandboxCommands[selectedCommand].requestBody(density),
                      null, 
                      2
                    )}
                  </pre>
                </div>

                {/* Trigger call button & status outputs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-zinc-900/60 pt-4">
                  <button
                    onClick={() => {
                      if (isConsoleExecuting) return;
                      setIsConsoleExecuting(true);
                      
                      const triggerTime = new Date().toTimeString().split(' ')[0];
                      // Add trigger statement log
                      setConsoleLogs(prev => [
                        ...prev,
                        {
                          id: logCounter + 1,
                          type: "system",
                          msg: `Dispatching ${selectedCommand} transaction packet to Zurich core...`,
                          timestamp: triggerTime
                        }
                      ]);
                      setLogCounter(c => c + 1);

                      const execDuration = Math.min(1500, Math.max(300, latency * 25));
                      
                      setTimeout(() => {
                        setIsConsoleExecuting(false);
                        const completeTime = new Date().toTimeString().split(' ')[0];
                        
                        setConsoleLogs(prev => [
                          ...prev,
                          {
                            id: logCounter + 2,
                            type: "success",
                            msg: `Received API Handshake Response [200 OK] in ${execDuration}ms.`,
                            timestamp: completeTime
                          }
                        ]);
                        setLogCounter(c => c + 2);
                      }, execDuration);
                    }}
                    disabled={isConsoleExecuting}
                    className="bg-cyan-400/[0.07] backdrop-blur-md border border-cyan-400/30 text-cyan-400 hover:text-white font-extrabold py-3 px-6 rounded-xl transition-all duration-300 text-[11px] tracking-wider uppercase font-mono shadow-[0_4px_20px_rgba(6,182,212,0.08),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isConsoleExecuting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                        <span className="text-cyan-300">Resolving Shards...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current text-cyan-400" />
                        <span>Execute API Call</span>
                      </>
                    )}
                  </button>

                  <div className="font-mono text-[10px] text-zinc-500 uppercase flex items-center gap-2">
                    <span>Protocol state:</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[9px] tracking-wider">READY</span>
                  </div>
                </div>

                {/* Response payload representation */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-zinc-500 uppercase text-[10px] tracking-wider">Response JSON payload (HTTP 200):</span>
                    {isConsoleExecuting && (
                      <span className="text-[10px] text-cyan-400 animate-pulse">Resolving cryptography layers...</span>
                    )}
                  </div>
                  <pre className="bg-black/40 border border-zinc-900/60 rounded-xl p-4 text-emerald-400/90 text-[11px] overflow-x-auto leading-relaxed relative min-h-[140px] flex flex-col justify-center shadow-inner">
                    {isConsoleExecuting ? (
                      <div className="flex flex-col items-center gap-2 text-zinc-600 select-none">
                        <RefreshCw className="w-6 h-6 animate-spin text-cyan-500/60" />
                        <span>Negotiating zero-knowledge handshakes...</span>
                      </div>
                    ) : (
                      <code>
                        {JSON.stringify(
                          sandboxCommands[selectedCommand].response(latency, density, syncEnabled, activeTab),
                          null,
                          2
                        )}
                      </code>
                    )}
                  </pre>
                </div>

                {/* Live Node Console Logs / History stream */}
                <div className="border-t border-zinc-900 pt-4 mt-2">
                  <span className="text-zinc-500 uppercase text-[10px] tracking-wider block mb-2">Live Node Connection Stream:</span>
                  <div className="bg-black/30 border border-zinc-900/50 rounded-xl p-3.5 max-h-[160px] overflow-y-auto flex flex-col gap-1.5 font-mono text-[10px] shadow-inner">
                    {consoleLogs.map((log) => {
                      const colorMap = {
                        system: "text-zinc-500",
                        info: "text-amber-500",
                        success: "text-emerald-500",
                        error: "text-red-500"
                      };
                      return (
                        <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-zinc-600">[{log.timestamp}]</span>
                          <span className={colorMap[log.type] || "text-zinc-300"}>
                            {log.type === "success" ? "✓" : log.type === "error" ? "✗" : "•"} {log.msg}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* --- FOOTER AT BOTTOM --- */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 md:px-12 flex items-center justify-between border-t border-zinc-950 text-zinc-600 text-[11px] font-medium font-mono uppercase tracking-widest">
        <span>© 2026 Fluxora Inc.</span>
        <span>Human Behavior & Design</span>
      </footer>

    </div>
  );
}
