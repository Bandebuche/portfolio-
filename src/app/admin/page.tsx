"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminDashboard } from "@/components/AdminDashboard";
import {
  getStoredProjects,
  saveStoredProjects,
  resetStoredProjects,
  getAdminPassword,
  setAdminPassword,
  isAdminAuthenticated,
  setAdminAuthenticated,
} from "@/lib/storage";
import { Project } from "@/types/portfolio";
import { Lock, Eye, EyeOff, ShieldCheck, ArrowLeft } from "lucide-react";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  // Login form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsAuthenticated(isAdminAuthenticated());
    setProjects(getStoredProjects());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const validUser = "sachin";
    const currentPass = getAdminPassword();

    setTimeout(() => {
      if (
        username.trim().toLowerCase() === validUser &&
        password === currentPass
      ) {
        setAdminAuthenticated(true);
        setIsAuthenticated(true);
      } else {
        setErrorMsg("Invalid username or password. Please try again.");
      }
      setLoading(false);
    }, 400);
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
  };

  const handleUpdateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    saveStoredProjects(newProjects);
  };

  const handleResetDefaults = () => {
    const defaults = resetStoredProjects();
    setProjects(defaults);
  };

  const handleChangePassword = (newPass: string) => {
    setAdminPassword(newPass);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-500">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <AdminDashboard
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
        onLogout={handleLogout}
        onChangePassword={handleChangePassword}
        onResetDefaults={handleResetDefaults}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-zinc-950 flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="relative w-full max-w-md space-y-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Public Portfolio</span>
        </Link>

        {/* Auth Card */}
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-cyan-500/40 bg-zinc-950 shadow-[0_0_20px_-3px_rgba(6,182,212,0.45)] mb-3">
              <Image
                src="/logo.png"
                alt="WebTree Logo"
                fill
                sizes="56px"
                priority
                className="object-cover"
              />
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-cyan-400 uppercase">
              WebTree Admin
            </span>
            <h1 className="text-xl font-bold tracking-tight text-white mt-1">
              Control Center Authentication
            </h1>
            <p className="text-xs text-zinc-400 mt-1 max-w-xs">
              Sign in with your administrative credentials to manage portfolio items and showcase data.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-medium text-zinc-300 mb-1.5"
              >
                Administrator Username
              </label>
              <input
                id="username"
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username (e.g. Sachin)"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-zinc-300 mb-1.5"
              >
                Secure Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 pr-10 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-2.5 text-xs text-rose-300">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-500 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Verifying Access..." : "Authenticate & Continue"}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Default Demo Login:</span>
            <span className="font-mono text-zinc-400">Sachin / Sachin@2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
