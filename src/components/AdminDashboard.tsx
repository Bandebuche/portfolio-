"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { AdminProjectModal } from "./AdminProjectModal";
import {
  Globe,
  Plus,
  Trash2,
  Edit,
  ArrowUp,
  ArrowDown,
  Sparkles,
  ExternalLink,
  Shield,
  LogOut,
  RefreshCw,
  Search,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface AdminDashboardProps {
  projects: Project[];
  onUpdateProjects: (projects: Project[]) => void;
  onLogout: () => void;
  onChangePassword: (newPass: string) => void;
  onResetDefaults: () => void;
}

export function AdminDashboard({
  projects,
  onUpdateProjects,
  onLogout,
  onChangePassword,
  onResetDefaults,
}: AdminDashboardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [pwdModalOpen, setPwdModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [pwdSuccess, setPwdSuccess] = useState(false);

  // Stats calculation
  const totalCount = projects.length;
  const liveCount = projects.filter((p) => p.status === "Live").length;
  const featuredCount = projects.filter((p) => p.featured).length;
  const totalClicks = projects.reduce((acc, curr) => acc + (curr.clicks || 0), 0);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.url.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesQ;
  });

  const handleSaveProject = (project: Project) => {
    if (projectToEdit) {
      const updated = projects.map((p) => (p.id === project.id ? project : p));
      onUpdateProjects(updated);
    } else {
      onUpdateProjects([project, ...projects]);
    }
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm("Are you sure you want to remove this project?")) {
      const updated = projects.filter((p) => p.id !== id);
      onUpdateProjects(updated);
    }
  };

  const handleToggleFeatured = (id: string) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, featured: !p.featured } : p
    );
    onUpdateProjects(updated);
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= projects.length) return;
    const newItems = [...projects];
    const [removed] = newItems.splice(index, 1);
    newItems.splice(targetIndex, 0, removed);
    onUpdateProjects(newItems);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword.trim()) return;
    onChangePassword(newPassword.trim());
    setPwdSuccess(true);
    setTimeout(() => {
      setPwdSuccess(false);
      setPwdModalOpen(false);
      setNewPassword("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Control Center Header */}
        <header className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-cyan-500/40 bg-zinc-950 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)] flex-shrink-0">
              <Image
                src="/logo.png"
                alt="WebTree Admin"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                web<span className="text-cyan-400">tree</span> Control Center
                <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  Protected
                </span>
              </h1>
              <p className="text-xs text-zinc-400">
                Logged in as <strong className="text-zinc-200">Sachin</strong> • Dedicated Admin Suite
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Public Showcase</span>
            </Link>

            <button
              onClick={() => setPwdModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>Security</span>
            </button>

            <button
              onClick={() => {
                setProjectToEdit(null);
                setModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 shadow-md transition-all active:scale-95"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Website</span>
            </button>

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-300 hover:bg-rose-500/20 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md">
            <span className="text-xs text-zinc-400">Total Systems</span>
            <div className="text-2xl font-bold text-white mt-1">{totalCount}</div>
            <span className="text-[10px] text-zinc-500">Live in catalog</span>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md">
            <span className="text-xs text-emerald-400">Active Deployments</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{liveCount}</div>
            <span className="text-[10px] text-emerald-500/80">100% operational</span>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md">
            <span className="text-xs text-amber-400">Featured Spotlight</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">{featuredCount}</div>
            <span className="text-[10px] text-amber-500/80">Promoted bento tiles</span>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md">
            <span className="text-xs text-sky-400">Recorded Views</span>
            <div className="text-2xl font-bold text-sky-400 mt-1">{formatNumber(totalClicks)}</div>
            <span className="text-[10px] text-sky-500/80">Combined interactions</span>
          </div>
        </div>

        {/* Projects Management Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl overflow-hidden shadow-xl">
          {/* Table Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 sm:p-5 border-b border-zinc-800">
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative min-w-[200px] sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by name, URL, or tag..."
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 py-1.5 pl-9 pr-3 text-xs text-zinc-200 placeholder-zinc-500 outline-none focus:border-zinc-700"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 outline-none focus:border-zinc-700"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => {
                  if (window.confirm("Restore the 24 verified default showcase projects?")) {
                    onResetDefaults();
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                title="Reset to default showcase listings"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Restore Defaults</span>
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50 text-[11px] font-semibold text-zinc-400">
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4 w-16">Preview</th>
                  <th className="py-3 px-4">Project & URL</th>
                  <th className="py-3 px-4 w-32">Category</th>
                  <th className="py-3 px-4 w-28">Status</th>
                  <th className="py-3 px-4 w-24 text-center">Featured</th>
                  <th className="py-3 px-4 w-20 text-right">Views</th>
                  <th className="py-3 px-4 w-36 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {filteredProjects.map((project, idx) => (
                  <tr
                    key={project.id}
                    className="group hover:bg-zinc-900/40 transition-colors"
                  >
                    {/* Reorder / Index */}
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <div className="flex flex-col">
                          <button
                            onClick={() => handleMove(idx, "up")}
                            disabled={idx === 0}
                            className="text-zinc-500 hover:text-zinc-200 disabled:opacity-20"
                            title="Move Up"
                          >
                            <ArrowUp className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleMove(idx, "down")}
                            disabled={idx === filteredProjects.length - 1}
                            className="text-zinc-500 hover:text-zinc-200 disabled:opacity-20"
                            title="Move Down"
                          >
                            <ArrowDown className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500 w-4">
                          {idx + 1}
                        </span>
                      </div>
                    </td>

                    {/* Preview Thumbnail */}
                    <td className="py-3 px-4">
                      <div className="relative h-9 w-9 rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden flex items-center justify-center">
                        {project.customThumb ? (
                          <Image
                            src={project.customThumb}
                            alt=""
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        ) : (
                          <Globe className="h-4 w-4 text-zinc-500" />
                        )}
                      </div>
                    </td>

                    {/* Title & URL */}
                    <td className="py-3 px-4 max-w-xs sm:max-w-md">
                      <div className="font-semibold text-white tracking-tight flex items-center gap-1.5">
                        <span>{project.title}</span>
                        {project.featured && (
                          <span className="rounded bg-amber-500/10 px-1.5 py-0.2 text-[9px] font-medium text-amber-400 border border-amber-500/20">
                            Spotlight
                          </span>
                        )}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-emerald-400 transition-colors truncate max-w-full"
                      >
                        <span className="truncate">{project.url}</span>
                        <ExternalLink className="h-2.5 w-2.5 flex-shrink-0" />
                      </a>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4">
                      <span className="inline-block rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-300">
                        {project.category}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{project.status}</span>
                      </span>
                    </td>

                    {/* Featured Toggle */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleToggleFeatured(project.id)}
                        className={`rounded-full p-1.5 transition-colors ${
                          project.featured
                            ? "text-amber-400 bg-amber-400/10"
                            : "text-zinc-600 hover:text-zinc-400"
                        }`}
                        title="Toggle Featured"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                      </button>
                    </td>

                    {/* Views */}
                    <td className="py-3 px-4 text-right font-mono text-[11px] text-zinc-400">
                      {formatNumber(project.clicks || 0)}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            setProjectToEdit(project);
                            setModalOpen(true);
                          }}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-1.5 text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
                          title="Edit Project"
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="rounded-lg border border-rose-500/20 bg-rose-500/10 p-1.5 text-rose-400 hover:bg-rose-500/20 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add / Edit Project Modal */}
      <AdminProjectModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setProjectToEdit(null);
        }}
        onSave={handleSaveProject}
        projectToEdit={projectToEdit}
      />

      {/* Change Password Modal */}
      {pwdModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2">Update Admin Password</h3>
            <p className="text-xs text-zinc-400 mb-4">
              Set a new administrative passphrase for the `/admin` portal.
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-zinc-700"
                />
              </div>

              {pwdSuccess && (
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Password updated successfully!</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setPwdModalOpen(false)}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400"
                >
                  Save Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
