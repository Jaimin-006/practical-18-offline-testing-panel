import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-md font-semibold text-sm">System Dashboard Active</div>;
}

function Settings() {
  return <div className="p-4 bg-amber-50 text-amber-900 border border-amber-200 rounded-md font-semibold text-sm">System Settings & Configuration</div>;
}

function HashApp() {
  return (
    <HashRouter>
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm border border-neutral-300">
        <h2 className="text-xl font-bold text-neutral-900 mb-1 border-b border-neutral-200 pb-2">Utility Panel (HashRouter)</h2>
        <p className="text-xs font-mono text-neutral-500 mb-4 mt-2">URL uses hash (#) for static compatibility.</p>
        <div className="space-x-4 mb-4">
          <Link to="/" className="text-blue-700 font-bold hover:underline text-sm">Dashboard</Link>
          <Link to="/settings" className="text-blue-700 font-bold hover:underline text-sm">Settings</Link>
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
