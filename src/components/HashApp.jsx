import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return <div className="p-4 bg-emerald-950/60 border border-emerald-800 text-emerald-400 rounded-lg font-mono text-sm">System Dashboard Active</div>;
}

function Settings() {
  return <div className="p-4 bg-amber-950/60 border border-amber-800 text-amber-400 rounded-lg font-mono text-sm">System Settings & Configuration</div>;
}

function HashApp() {
  return (
    <HashRouter>
      <div className="p-6 max-w-md mx-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800 font-sans">
        <div className="border-b border-slate-800 pb-3 mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Utility Panel (HashRouter)
          </h2>
          <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
            Offline # Protocol
          </span>
        </div>
        
        <p className="text-xs font-mono text-slate-400 mb-4">URL uses hash (#) for static compatibility.</p>
        
        <div className="space-x-4 mb-5">
          <Link to="/" className="text-cyan-400 font-bold hover:underline text-sm font-mono">Dashboard</Link>
          <Link to="/settings" className="text-cyan-400 font-bold hover:underline text-sm font-mono">Settings</Link>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default HashApp;
