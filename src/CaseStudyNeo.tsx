import { motion } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Network, 
  Menu,
  ArrowLeft,
  ArrowRight,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudyNeo() {
  return (
    <div className="bg-white text-gray-900 selection:bg-primary/30 min-h-screen">
      <div className="aurora-bg"></div>
      
      {/* TopAppBar */}
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

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
        </Link>

        {/* Hero Section */}
        <section className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">Case Study: Web3 Growth</span>
            <h1 className="mb-8">
              Global Developer <br/>
              <span className="text-primary">Growth Engine (Neo Blockchain)</span>
            </h1>
            <p className="text-xl text-gray-600 font-normal max-w-2xl leading-relaxed">
              How I architected the evolution of Neo Blockchain's ecosystem from a nascent community to an APAC-wide developer powerhouse.
            </p>
          </motion.div>
        </section>

        {/* Interactive Timeline */}
        <section className="space-y-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="mb-2">3 Years of Evolution</h2>
              <p className="text-gray-600">The strategic roadmap from launch to regional dominance.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-all">
                <ChevronLeft size={24} className="text-gray-400" />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-all">
                <ChevronRight size={24} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory">
            {/* Node 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-none w-80 md:w-96 snap-start"
            >
              <div className="fluent-card p-6 h-full flex flex-col group">
                <div className="h-48 rounded-lg overflow-hidden mb-6 border border-gray-100 relative">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                    alt="Abstract futuristic digital particles" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQqI8QehlLXu9gNurtOPkFGm_z4EkiLBzB8qmB6It4lo6BV6WqCervWaAV2HGRgKhKGRZ-sU5O7GD3cMJJCSgE3ThjAYkNPyS_TRMuqsQcD9LYxzxFtGLX9MG7qEwnEep9t2KE--E47L_nAUXbeCgtJ5D9Sl5_sugfBFGDm2yUzRNMWSDDdnOeqRvC0a4V3SPwr79pg2oPeRaDltIjC4rUrbVL_zPTVQJxb5lt75MWnh8JostfPhP8rwveppc_6ED4C2QZjqk5bOz9"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-900">Year 01</div>
                </div>
                <h3 className="mb-2">Frontier Launchpad</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Initialization of the grant framework and community onboarding protocols.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="block text-xs text-gray-400 uppercase font-semibold">Headcount</span>
                    <span className="text-lg font-bold text-primary">12 Core Nodes</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-gray-400 uppercase font-semibold">Projects</span>
                    <span className="text-lg font-bold">45 Initiated</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Node 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-none w-80 md:w-96 snap-start"
            >
              <div className="fluent-card p-6 h-full flex flex-col group border-primary/20 bg-primary/[0.02]">
                <div className="h-48 rounded-lg overflow-hidden mb-6 border border-gray-100 relative">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                    alt="Digital earth map" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIdboqomHFPy1fiD_Reliwttv93yVVLCXfW59HyEA_afkzrA6ZCwrwASSVyhvoY9t1q7PyJF1Y9uopzLcbMjGWHqnzZOI-91JocTu0mEj0iZzDA48NW9vdd7szixlHgdvRaR3PbsZ1t0fG6fWkVMljPrKQ7cRrKkSI5t5B2U9r0tSVF8xtStrQrHVjGO2pUv3NLcbPGb3g3RplsY3IHilgPWX3boDG_PjoQgTamBw037ybE28GXAD7qP15959cmIl21Rg0zHYUXZH2"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">Year 02</div>
                </div>
                <h3 className="mb-2">Ecosystem Expansion</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Cross-chain bridge deployment and the first wave of enterprise partnerships.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="block text-xs text-gray-400 uppercase font-semibold">Headcount</span>
                    <span className="text-lg font-bold text-primary">48 Partners</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-gray-400 uppercase font-semibold">Projects</span>
                    <span className="text-lg font-bold">120+ Live</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Node 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-none w-80 md:w-96 snap-start"
            >
              <div className="fluent-card p-6 h-full flex flex-col group">
                <div className="h-48 rounded-lg overflow-hidden mb-6 border border-gray-100 relative">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                    alt="High-end modern workspace" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Rp5RsJZoZKuwdwvjJ9im7XO0ptxlB3v8ObLFI1M1QcIONsXmznYOGNURz4V-qyocpkr-Ur8keNVxaJfZgt-vaa0_6X5FiIT5tnxgG4RQ0Uyf6NL9SQTstaYwwPvaNK4UNV_2e6EUBd3NOy23k-YCncWYF6xltVQV1fM77t30XzUKKshbaV4QMcLz6wpf_FDECc7GOV2kY6EKfj9buIobtdA-Uep7DgZ0zaS7euitsjum3-LU5s2ruKEc4TuoFw1wl9-z4SnqQN5E"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-900">Year 03</div>
                </div>
                <h3 className="mb-2">APAC Touring</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Regional developer summits across 12 cities and mass adoption of the EVM-stack.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="block text-xs text-gray-400 uppercase font-semibold">Headcount</span>
                    <span className="text-lg font-bold text-primary">150+ Talent</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-gray-400 uppercase font-semibold">Projects</span>
                    <span className="text-lg font-bold">300+ Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Efficiency Dashboard */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="leading-tight">Efficiency <br/>Redefined</h2>
            <p className="text-gray-600 leading-relaxed">
              By implementing a productized workflow, I eliminated redundant communication loops and automated vendor delivery tracking, resulting in a measurable impact on the ecosystem's velocity.
            </p>
            <div className="fluent-card p-8 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <div>
                  <span className="block text-4xl font-bold text-primary tracking-tighter">20% Gain</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Overall Delivery Velocity</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fluent-card p-8 space-y-12">
            {/* Manual Row */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Manual Workflow</span>
                <span className="text-xs font-mono">100% effort</span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-2 py-1 rounded border border-gray-200 text-gray-400">Slack Overload</span>
                <span className="text-[10px] px-2 py-1 rounded border border-gray-200 text-gray-400">Manual QA</span>
                <span className="text-[10px] px-2 py-1 rounded border border-gray-200 text-gray-400">Email Loops</span>
              </div>
            </div>
            
            {/* Productized Row */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Productized Workflow</span>
                <span className="text-xs font-mono text-primary">80% effort</span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-2 py-1 rounded border border-primary/30 text-primary bg-primary/5">Auto-Reporting</span>
                <span className="text-[10px] px-2 py-1 rounded border border-primary/30 text-primary bg-primary/5">Unified CRM</span>
                <span className="text-[10px] px-2 py-1 rounded border border-primary/30 text-primary bg-primary/5">SOP Triggers</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm italic text-gray-500 text-center leading-relaxed">
                "The transition from human-managed tracking to system-enforced accountability was the single biggest catalyst for our Year 3 expansion."
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Asymmetric Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 sticky top-32">
            <h2 className="mb-6">Structural Capabilities</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
                <h4 className="font-bold text-sm mb-1 text-gray-900">Closed-Loop Design</h4>
                <p className="text-xs text-gray-600">Ensuring value stays within the ecosystem through incentivized liquidity and developer retention.</p>
              </div>
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors text-gray-900">Cross-Org Coordination</h4>
                <p className="text-xs text-gray-600">Syncing distributed teams across 4 timezones using a single source of truth dashboard.</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="fluent-card p-10 space-y-6">
                <Network className="text-primary" size={48} />
                <h3 className="text-gray-900">Ecosystem Closed-Loop Design</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  I architected a 'flywheel' mechanism where grant recipients were not just vendors, but became long-term stakeholders. By aligning technical milestones with ecosystem growth KPIs, we ensured that every dollar invested generated a 3x return in network activity and developer engagement.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="fluent-card p-8 space-y-4"
              >
                <h4 className="text-xl font-bold text-gray-900">Agile Governance</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Streamlining decision-making processes to reduce board approval times from 14 days to 48 hours.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="fluent-card p-8 space-y-4"
              >
                <h4 className="text-xl font-bold text-gray-900">Market Intelligence</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Real-time tracking of competitor developer migration patterns and sentiment analysis across Web3 social layers.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white w-full py-12 px-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-gray-900">Songping Que</span>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
            >
              <ArrowRight size={18} className="-rotate-90" />
            </button>
            <a className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all" href="https://linkedin.com/in/songpingque">
              <Linkedin size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-widest">© 2024 Songping Que. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

