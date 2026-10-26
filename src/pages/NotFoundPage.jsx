import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-7xl font-extrabold text-brand-600 font-display">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm">
          The page you are looking for does not exist or has been moved. Let's get you back to lush green ground.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
