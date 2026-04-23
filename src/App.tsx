/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  Users, 
  Bell, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  MessageSquare, 
  Zap, 
  ChevronRight,
  MoreHorizontal,
  Bookmark,
  User,
  Info,
  X
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus('submitting');
  
  const form = e.currentTarget;
  const formData = new FormData(form);
  
  // Create the URL encoded string with the required form-name
  const searchParams = new URLSearchParams();
  formData.forEach((value, key) => {
    searchParams.append(key, value.toString());
  });
  // MANUALLY APPEND THE FORM NAME HERE
  searchParams.append("form-name", "migration-interest");
  
  try {
    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: searchParams.toString()
    });
    setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#1d9bf0]/30 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto flex min-h-screen">
        
        {/* Left Sidebar (Desktop) */}
        <header className="hidden sm:flex flex-col items-end w-[88px] xl:w-[275px] px-2 py-4 border-r border-zinc-800 sticky top-0 h-screen overflow-y-auto">
          <div className="flex flex-col space-y-2 w-full xl:pl-4">
            <div className="p-3 w-fit hover:bg-zinc-900 rounded-full cursor-pointer transition-colors mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
            
            <SidebarItem icon={<Home size={28} />} label="Home" />
            <SidebarItem icon={<Search size={28} />} label="Explore" />
            <SidebarItem icon={<Bell size={28} />} label="Notifications" active />
            <SidebarItem icon={<Mail size={28} />} label="Messages" />
            <SidebarItem icon={<Users size={28} />} label="Communities" />
            <SidebarItem icon={<Bookmark size={28} />} label="Bookmarks" />
            <SidebarItem icon={<User size={28} />} label="Profile" />
            <SidebarItem icon={<MoreHorizontal size={28} />} label="More" />

            <button 
              onClick={() => setIsModalOpen(true)}
              className="xl:w-[90%] bg-[#1d9bf0] text-white font-bold h-[52px] rounded-full mt-4 hover:bg-[#1a8cd8] transition-colors shadow-sm text-lg"
            >
              Start Transfer
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-[600px] border-r border-zinc-800 pb-20 sm:pb-0">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 backdrop-blur-md bg-black/80 border-b border-zinc-800 px-4 py-3 flex justify-between items-center">
            <h2 className="text-xl font-bold">Migration Hub</h2>
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/150?u=1" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-zinc-700" alt="Avatar" referrerPolicy="no-referrer" />
              <img src="https://i.pravatar.cc/150?u=2" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-zinc-600" alt="Avatar" referrerPolicy="no-referrer" />
              <img src="https://i.pravatar.cc/150?u=3" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-zinc-500" alt="Avatar" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="bg-[#1d9bf0]/10 border-b border-[#1d9bf0]/20 px-4 py-3 flex items-center justify-between group cursor-pointer hover:bg-[#1d9bf0]/20 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-[#1d9bf0] rounded-full p-1">
                <Users size={14} className="text-white" />
              </div>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#1d9bf0]">842 communities migrated this hour</p>
            </div>
            <ChevronRight size={18} className="text-[#1d9bf0]" />
          </div>

          {/* Hero Section */}
          <section className="px-4 py-8 sm:py-12 border-b border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Zap size={200} className="text-[#1d9bf0]" />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center space-y-6 relative z-10"
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight italic">
                Don't Lose Your <span className="text-[#1d9bf0]">Network</span>
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[480px]">
                X is phasing out Communities soon. Join the prioritized migration waitlist today to secure your community's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold h-[52px] rounded-full transition-colors text-lg flex items-center justify-center gap-2"
                >
                  Join Waitlist
                  <ArrowRight size={20} />
                </button>
                <a href="#diy" className="px-10 border border-zinc-800 hover:bg-zinc-900 text-white font-bold h-[52px] rounded-full transition-colors text-lg flex items-center justify-center">
                  DIY Guide
                </a>
              </div>
            </motion.div>
          </section>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-b border-zinc-800 bg-zinc-950/20">
            <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-950 text-left hover:border-zinc-700 transition-colors group">
              <div className="text-[#1d9bf0] mb-2 font-bold flex items-center gap-2">
                <ShieldCheck size={16} />
                01. Automated Invite
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">Auto-DM every community member with their new access link.</p>
            </div>
            <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-950 text-left hover:border-zinc-700 transition-colors group">
              <div className="text-[#1d9bf0] mb-2 font-bold flex items-center gap-2">
                <Zap size={16} />
                02. Archive History
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">Save every thread and media file before they disappear.</p>
            </div>
          </div>

          {/* Migration Status Mockup */}
          <section className="p-4 bg-black border-b border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl">Real-time Sync Status</h3>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1d9bf0] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1d9bf0] animate-ping" />
                Live Feed
              </div>
            </div>
            <div className="w-full border border-zinc-800 rounded-2xl bg-black overflow-hidden shadow-2xl">
              <div className="bg-zinc-900 px-3 sm:px-4 py-2 border-b border-zinc-800 flex justify-between items-center text-[9px] sm:text-[10px]">
                <span className="font-mono text-zinc-500 tracking-wider">SYSTEM: COMMUNITY_BRIDGE_V1</span>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-5">
                <div className="flex justify-between text-xs sm:text-sm mb-1 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="animate-pulse">â– </span>
                    <span>Transferring "Hack-Space Alpha" members...</span>
                  </div>
                  <span className="text-[#1d9bf0] font-mono font-bold italic">84%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '84%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-[#1d9bf0] h-full shadow-[0_0_10px_rgba(29,155,240,0.5)]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <StatusPill handle="@dev_jane" status="OK" img="https://i.pravatar.cc/150?u=jane" />
                  <StatusPill handle="@root_user" status="OK" img="https://i.pravatar.cc/150?u=root" />
                  <StatusPill handle="@migrating" status="RUN" active img="https://i.pravatar.cc/150?u=mig" />
                </div>
              </div>
            </div>
          </section>

          {/* DIY Developer Section */}
          <section id="diy" className="p-6 sm:p-8 bg-zinc-950/20 border-b border-zinc-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#1d9bf0]/10 rounded-lg">
                <Zap size={24} className="text-[#1d9bf0]" />
              </div>
              <h3 className="font-bold text-2xl tracking-tight italic">Developer DIY Guide</h3>
            </div>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Want to build your own bridge? Using the <span className="text-zinc-200 font-bold">X API v2</span>, you can programmatically extract community metadata and notify members.
            </p>

            <div className="space-y-4">
              <CodeBlock 
                title="Step 1: Extract Member IDs"
                code={`// GET /2/communities/:id/members
const members = await xClient.v2.communityMembers('1234567');
console.log(\`Found \${members.data.length} survivors\`);`}
              />
              <CodeBlock 
                title="Step 2: Create Migration Buffer"
                code={`// Sync to your own secure database
await db.collection('migration').insertMany(members.data);`}
              />
              <CodeBlock 
                title="Step 3: Secure Broadcast"
                code={`// Initiate secure DM invites via /2/dm_conversations
for (const member of members) {
  await xClient.v2.sendDm(member.id, {
    text: "Community 'Hack-Alpha' is moving. Join here: https://t.me/your_new_home"
  });
}`}
              />
            </div>
            
            <div className="mt-8 p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-2xl flex gap-4">
              <Info className="text-yellow-500 shrink-0" size={20} />
              <p className="text-xs text-yellow-500/80 leading-normal">
                Note: Standard X API rate limits apply. For communities with &gt;2,000 members, we recommend using our prioritized enterprise bridge which handles rate-limiting and token refreshing automatically.
              </p>
            </div>
          </section>

          {/* Social Proof */}
          <div className="p-8 sm:p-10 text-center space-y-4 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm italic leading-relaxed">"I moved my 50k hackers community in under 10 minutes. This bridge is the only thing that works."</p>
            <div className="flex items-center justify-center gap-2">
              <img src="https://i.pravatar.cc/150?u=9" className="w-8 h-8 rounded-full border border-zinc-700 shadow-lg" alt="Avatar" referrerPolicy="no-referrer" />
              <span className="font-bold text-sm text-zinc-200">@migrator_pro</span>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Desktop) */}
        <aside className="hidden lg:flex flex-col w-[350px] space-y-4 px-8 py-4 sticky top-0 h-screen">
          <div className="bg-zinc-900/50 rounded-full flex items-center px-4 py-2.5 space-x-3 border border-zinc-800 cursor-pointer">
            <Search size={18} className="text-zinc-500" />
            <span className="text-zinc-500 text-sm">Search Migrations</span>
          </div>

          <div className="bg-zinc-900/30 rounded-2xl p-4 border border-zinc-800">
            <h3 className="text-xl font-bold mb-4 italic tracking-tight">Panic Monitor</h3>
            <div className="space-y-4">
              <TrendingItem title="#SaveTheCommunities" count="142k Migrations today" label="Trending in Tech" />
              <TrendingItem title="Community API Deprecation" count="Effective in 48 hours" label="Policy Changes" />
              <TrendingItem title="Hack-Space Alpha" count="Migrated successfully" label="Recent" />
            </div>
            <button className="text-[#1d9bf0] text-sm mt-4 font-bold hover:underline">Show more</button>
          </div>

          <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-800 shadow-xl">
            <h3 className="text-xl font-bold mb-3">Recently Moved</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold group-hover:text-[#1d9bf0] transition-colors">Next-Gen Hackers</p>
                  <p className="text-[11px] text-green-400 font-mono tracking-tighter uppercase">Successfully Synced</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold group-hover:text-[#1d9bf0] transition-colors">Cyber Security Daily</p>
                  <p className="text-[11px] text-green-400 font-mono tracking-tighter uppercase">Successfully Synced</p>
                </div>
              </div>
            </div>
          </div>
          
          <footer className="text-[12px] text-zinc-500 flex flex-wrap gap-x-3 gap-y-1.5 px-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Ads info</a>
            <span>Â© 2026 MigrateX</span>
          </footer>
        </aside>
      </div>

      {/* Mobile Nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 h-[53px] bg-black/95 backdrop-blur-md border-t border-zinc-800 flex items-center justify-around z-20">
        <Home size={22} className="text-white" />
        <Search size={22} className="text-zinc-500" />
        <Users size={22} className="text-white" />
        <Mail size={22} className="text-zinc-500" />
      </nav>

      {/* Migration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-zinc-900 rounded-full transition-colors"
              >
                <X size={20} className="text-zinc-400" />
              </button>

              <div className="text-center mb-8">
                <div className="bg-[#1d9bf0]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-[#1d9bf0]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Join Priority Waitlist</h3>
                <p className="text-zinc-500 mt-2 text-sm">Migration slots are extremely limited. We are onboarding communities on a first-come, first-served basis.</p>
              </div>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={24} className="text-black" />
                  </div>
                  <p className="text-green-400 font-bold text-lg">You're on the list!</p>
                  <p className="text-green-500/80 text-sm mt-1">Check your inbox for your priority position. We'll be in touch as soon as a slot opens up.</p>
                </motion.div>
              ) : (
                <form 
                  name="migration-interest" 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="migration-interest" />
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5 ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="Alex Johnson"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1d9bf0] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      placeholder="alex@example.com"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1d9bf0] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5 ml-1">Community Name & Size</label>
                    <input 
                      required
                      type="text" 
                      name="community-name"
                      placeholder="Hack-Space Alpha (~5k members)"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1d9bf0] transition-all"
                    />
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit"
                    className="w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold py-4 rounded-full transition-all text-lg shadow-lg shadow-[#1d9bf0]/20 mt-2 flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Securing Position...
                      </>
                    ) : 'Join Priority Waitlist'}
                  </button>
                  <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest">First-come, first-served policy applying.</p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className="group flex items-center w-fit xl:w-full space-x-4 p-3 rounded-full hover:bg-zinc-900 cursor-pointer transition-all duration-200">
      <div className={`${active ? 'text-[#1d9bf0]' : 'text-zinc-200'}`}>
        {icon}
      </div>
      <span className={`hidden xl:block text-xl ${active ? 'font-black text-white' : 'font-medium text-zinc-300'} tracking-wide`}>
        {label}
      </span>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ x: 4 }}
      className="flex gap-4 group cursor-pointer"
    >
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-white group-hover:text-sky-400 transition-colors">{title}</h4>
        <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
      </div>
      <div className="ml-auto flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={16} className="text-gray-600" />
      </div>
    </motion.div>
  );
}

function TrendingItem({ title, count, label }: { title: string, count: string, label: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-zinc-500 uppercase tracking-tighter font-bold">{label}</span>
        <MoreHorizontal size={14} className="text-zinc-500" />
      </div>
      <div className="font-bold group-hover:underline text-zinc-100">{title}</div>
      <div className="text-[12px] text-zinc-500">{count}</div>
    </div>
  );
}

function StatusPill({ handle, status, img, active = false }: { handle: string, status: string, img: string, active?: boolean }) {
  return (
    <div className="h-10 sm:h-12 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center px-3 gap-2 text-[9px] sm:text-[10px] font-mono group hover:border-[#1d9bf0]/50 transition-colors cursor-default">
      <img src={img} className="w-5 h-5 rounded-full border border-zinc-800" alt={handle} referrerPolicy="no-referrer" />
      <span className="text-zinc-400 truncate flex-1">{handle}</span>
      <span className={`${active ? 'text-[#1d9bf0] animate-pulse' : 'text-green-500'} font-bold`}>{status}</span>
    </div>
  );
}

function CodeBlock({ title, code }: { title: string, code: string }) {
  return (
    <div className="w-full">
      <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2 px-1">{title}</h4>
      <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 overflow-x-auto">
        <code className="text-xs sm:text-sm font-mono text-sky-400/90 whitespace-pre">
          {code}
        </code>
      </div>
    </div>
  );
}
