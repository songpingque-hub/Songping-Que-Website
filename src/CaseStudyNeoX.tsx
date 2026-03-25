import { motion } from "motion/react";
import { 
  Users,
  GraduationCap,
  Landmark,
  Gavel,
  Sparkles,
  Activity,
  Rocket,
  Globe,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudyNeoX() {
  return (
    <div className="bg-white text-gray-900 selection:bg-primary/30 min-h-screen">
      <div className="aurora-bg"></div>
      
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                className="w-full h-full object-cover" 
                alt="Songping Que Avatar" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLoqpX_mlqF8qrDwMibN7VzUpupGCid2a4n0fM5oOI5_6JnEOLnlfjNktVivK-gZciQzwzfHhE1mV84QMhL5j6y6CEuCgnCBB2Rf5Q8UXYatF2D6pCLvBSFdEayTND3JkJQZL-n2GKQ7_i6bZEQ-WqTaddndyeEMcopSsh8xXt1hxKVAQ9SeLoXrmLYZ8-Y8dqBKmchV5Fv5GV3-i_MBak6e7H8J4dtIafZwVxx92I9vuTmcgqIA1wYgTrCRVnTjYttFXsNco0U8Rd"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Songping Que</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">About</Link>
            <Link to="/" className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">Portfolio</Link>
            <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">Services</Link>
            <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <a href="mailto:songping.que@gmail.com" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all shadow-sm">
            Contact
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto space-y-24">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
        </Link>

        {/* Hero Section */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">Elite Market Penetration</div>
              <h1 className="leading-none">
                Neo X <br/> <span className="text-primary">US Campus Tour</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md font-normal leading-relaxed">
                A strategic orchestration of cultural capital and institutional influence across Tier-1 North American academic hubs.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative group">
                {/* Map Container */}
                <div className="fluent-card p-4 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                  <img 
                    className="w-full h-[450px] object-cover rounded-lg opacity-90" 
                    alt="Stylized glowing digital map of the United States with highlighted campus locations connected by elegant neon arcs on a dark glass background" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjbpwlNd86nfdaI3_PhrlSmtcw9JyPTv3anHy6iuG9l4mCOG440HKns_Cx86s2zNJv2zXpFesQgcOK6NoeM_U5QC15xTj6AnB3gJB9d40oOymkBWtHZkEB5q_TV0Psdbx0n_4Eu9NJWhqjhJs-pfMjBYqGzac_jrySgk4yYDP3rtjhwqGYqJB1k9f9Buago-W8HhnUKbSgn2HmaLHdLmOdnT7IS8yYDRFodLI9zJJKltz7-erNYcBpNu53FQgOOJgwmNWsY77CIh2z"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Detail Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-gray-100 shadow-2xl max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Engagement Rate</div>
                      <div className="text-xl font-bold text-gray-900">+342%</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-gray-900">Three-Pronged Strategy</h2>
              <p className="text-gray-600 font-medium">Systemic engagement across the academic hierarchy.</p>
            </div>
            <div className="h-px flex-grow bg-gray-100 mx-8 mb-4 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Grassroots */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="fluent-card p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-gray-900 mb-4">Grassroots</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Activating student-led networks through high-impact social events and localized peer-to-peer influence nodes.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary">01 Active Nodes</span>
                <ArrowRight size={16} className="text-primary" />
              </div>
            </motion.div>
            
            {/* Card 2: Faculty */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="fluent-card p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} className="text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-4">Faculty</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic alignment with thought leaders and academic researchers to embed brand narrative in intellectual discourse.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600">02 Thought Leadership</span>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
            </motion.div>
            
            {/* Card 3: Institutional */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="fluent-card p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Landmark size={32} className="text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-4">Institutional</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Formal partnerships with university administration and career development centers for long-term placement.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-purple-600">03 Structural Integration</span>
                <ArrowRight size={16} className="text-purple-600" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lower Section: Orchestration */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-gray-900">Resource Orchestration <br/> & Narrative Skills</h2>
              <p className="text-gray-600 text-lg">Managing the complex intersection of regulatory frameworks and premium storytelling.</p>
            </div>
            <div className="space-y-6">
              {/* Detail 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center mt-1">
                  <Gavel size={24} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900">Legal Compliance</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    End-to-end navigational support for complex educational regulations and privacy standards across multiple state jurisdictions.
                  </p>
                </div>
              </div>
              {/* Detail 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center mt-1">
                  <Sparkles size={24} className="text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900">Elite Narrative</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Crafting a distinctive brand voice that resonates with high-achieving demographics while maintaining corporate integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bento Detail Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[400px]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 row-span-1 fluent-card p-6 flex flex-col justify-end relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16"></div>
              <div className="text-3xl font-bold text-gray-900">2.4M+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Impressions Generated</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-1 row-span-1 fluent-card p-6 flex flex-col justify-end"
            >
              <div className="text-2xl font-bold text-blue-600">42</div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Campus Hubs</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-1 row-span-1 bg-primary text-white rounded-xl p-6 flex flex-col justify-end shadow-lg shadow-primary/20"
            >
              <Rocket size={24} className="mb-2" />
              <div className="text-xs uppercase tracking-widest font-bold">Launch Phase Complete</div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-white border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
          <div className="text-lg font-bold text-gray-900">Songping Que</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-xs tracking-widest uppercase text-gray-400 hover:text-primary transition-all" href="#">Privacy Policy</a>
            <a className="text-xs tracking-widest uppercase text-gray-400 hover:text-primary transition-all" href="#">Terms of Service</a>
            <a className="text-xs tracking-widest uppercase text-gray-400 hover:text-primary transition-all" href="#">Global Network</a>
            <a className="text-xs tracking-widest uppercase text-gray-400 hover:text-primary transition-all" href="#">Methodology</a>
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">© 2024 Songping Que. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

