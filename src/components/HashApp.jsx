import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return <div className="p-4 bg-emerald-50 text-emerald-800 rounded">System Dashboard Active</div>;
}

function Settings() {
  return <div className="p-4 bg-amber-50 text-amber-800 rounded">System Settings & Configuration</div>;
}

function HashApp() {
  return (
    <HashRouter>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Utility Panel (HashRouter)</h2>
        <p className="text-xs text-gray-500 mb-4">URL uses hash (#) for compatibility with static file servers.</p>
        <div className="space-x-3 mb-4">
          <Link to="/" className="text-blue-600 font-bold hover:underline">Dashboard</Link>
          <Link to="/settings" className="text-blue-600 font-bold hover:underline">Settings</Link>
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
