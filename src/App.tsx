/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  ArrowRight, 
  Network, 
  GraduationCap, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";

export default function App() {
  const { scrollY } = useScroll();
  
  // Parallax offsets for different layers
  const yMain = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                alt="Songping Que Avatar" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLoqpX_mlqF8qrDwMibN7VzUpupGCid2a4n0fM5oOI5_6JnEOLnlfjNktVivK-gZciQzwzfHhE1mV84QMhL5j6y6CEuCgnCBB2Rf5Q8UXYatF2D6pCLvBSFdEayTND3JkJQZL-n2GKQ7_i6bZEQ-WqTaddndyeEMcopSsh8xXt1hxKVAQ9SeLoXrmLYZ8-Y8dqBKmchV5Fv5GV3-i_MBak6e7H8J4dtIafZwVxx92I9vuTmcgqIA1wYgTrCRVnTjYttFXsNco0U8Rd"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Songping Que</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#case-studies">Portfolio</a>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
          <a href="mailto:songping.que@gmail.com" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all shadow-sm">
            Contact Me
          </a>
        </div>
      </header>

      <main className="relative pt-24 flex-grow aurora-bg">
        {/* Hero Section */}
        <section id="about" className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              Strategic Consulting & Global GTM
            </div>
            <h1 className="text-gray-900">
              Bridging Global Innovation with <span className="text-primary">China’s Frontier Ecosystem.</span>
            </h1>
            <p className="text-xl text-gray-600 font-normal max-w-2xl leading-relaxed">
              11+ years of expertise in Web3 GTM, global developer growth, and strategic BD. I help international tech firms navigate the Chinese "super supply chain" and domestic leaders scale globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#case-studies" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                View Portfolio <ArrowRight size={20} />
              </a>
              <a href="#contact" className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                Book a Consultation
              </a>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex gap-8">
                <div className="text-sm text-gray-500">
                  <div className="text-gray-900 font-bold text-lg">50+</div>
                  Projects
                </div>
                <div className="w-px h-8 bg-gray-200 self-center"></div>
                <div className="text-sm text-gray-500">
                  <div className="text-gray-900 font-bold text-lg">11+</div>
                  Years Exp.
                </div>
                <div className="w-px h-8 bg-gray-200 self-center"></div>
                <div className="text-sm text-gray-500">
                  <div className="text-gray-900 font-bold text-lg">PMP® & LL.M.</div>
                  Credentials
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-xl"
          >
            <motion.div 
              style={{ y: yMain }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-2xl"
            >
              <img 
                alt="Songping Que" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhm3jJacYksYt4bkX9fS0Gqu1phooxYd83i5DNP5eMvq50PW0JDc-mtOV3gJVE5nHjtSC266SZTKELgmfGREZE-igIel_IjnSod2BVbJ8l7ZqO74HlQexuRP3f9BtVbEd_HszAUGyH8oFwRoZpr3RNgeg4o5_rnO3kt3c5vNKzkLctKpQlewQIG1GKPrXU6Sdb_lDUcACr_qyIIXyugG-DBTtQ_zEEYYR8j8niFip6i-r3ZHLfjNlUzts-gICc3XitqK3Azfoyedxk"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Reach</div>
                <div className="text-sm font-bold text-gray-900">Web3 & AI Expert</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="max-w-7xl mx-auto px-8 py-24 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
            <h2 className="text-gray-900">Strategic Case Studies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1: Neo Blockchain */}
            <Link to="/case-study/neo" className="fluent-card p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Network size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-gray-900">Neo Blockchain</h3>
                <p className="text-gray-600 text-sm">
                  Global Developer Growth Engine. Coordinated global marketing and developer relations, increasing efficiency by 20% through process productization.
                </p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm gap-2">
                View Details <ArrowRight size={16} />
              </div>
            </Link>

            {/* Case 2: Neo X */}
            <Link to="/case-study/neox" className="fluent-card p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-gray-900">Neo X US Campus Tour</h3>
                <p className="text-gray-600 text-sm">
                  Elite Market Penetration. Covered 16 top universities including Harvard and Stanford, establishing high-level faculty partnerships.
                </p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm gap-2">
                View Details <ArrowRight size={16} />
              </div>
            </Link>

            {/* Case 3: muShanghai */}
            <Link to="/case-study/mushanghai" className="fluent-card p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Cpu size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-gray-900">muShanghai Pop-up City</h3>
                <p className="text-gray-600 text-sm">
                  Ecosystem Hub. Connected top domestic AI chains (Kimi, Zhipu AI, Agibot), bridging global geeks with China's frontier tech.
                </p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm gap-2">
                View Details <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
              <h2 className="text-gray-900">Consulting Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <Globe size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Global GTM Strategy</h4>
                <p className="text-gray-600 text-sm">
                  Crafting high-impact narratives and market entry plans for Web3 and AI firms looking to scale across borders.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <Network size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Ecosystem Building</h4>
                <p className="text-gray-600 text-sm">
                  Connecting international tech firms with China's "super supply chain" and domestic leaders with global markets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Strategic BD & PMP®</h4>
                <p className="text-gray-600 text-sm">
                  Executing professional-grade technical events and summits using PMP® standards for flawless delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Calendly */}
        <section id="contact" className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Connect</span>
                <h2 className="text-gray-900">Let's Build the Next Frontier Together.</h2>
                <p className="text-gray-600 text-lg">
                  Ready to scale your innovation? Reach out directly or book a time that works for you.
                </p>
              </div>
              
              <div className="space-y-6">
                <a href="mailto:songping.que@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</div>
                    <div className="text-gray-900 font-bold">songping.que@gmail.com</div>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/songpingque" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all">
                    <Linkedin size={20} className="text-primary" />
                    <span className="font-bold text-gray-900">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com/songpingque" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all">
                    <Twitter size={20} className="text-[#1DA1F2]" />
                    <span className="font-bold text-gray-900">Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-50 bg-gray-50/50">
                <h4 className="font-bold text-gray-900">Book a Consultation</h4>
              </div>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/songping/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xl font-bold text-gray-900">Songping Que</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">© 2024 Songping Que. All rights reserved.</div>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">About</a>
            <a href="#case-studies" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">Portfolio</a>
            <a href="#services" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">Services</a>
            <a href="#contact" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com/songpingque" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com/in/songpingque" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
