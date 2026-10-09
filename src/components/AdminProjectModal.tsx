"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/types/portfolio";
import { X, Globe, Sparkles } from "lucide-react";

interface AdminProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  projectToEdit?: Project | null;
}

export function AdminProjectModal({
  isOpen,
  onClose,
  onSave,
  projectToEdit,
}: AdminProjectModalProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("AI Web Apps");
  const [status, setStatus] = useState<"Live" | "In Development" | "Archived">("Live");
  const [featured, setFeatured] = useState(false);
  const [tagsInput, setTagsInput] = useState("");
  const [customThumb, setCustomThumb] = useState("");

  useEffect(() => {
    if (projectToEdit) {
      setTitle(projectToEdit.title || projectToEdit.name);
      setUrl(projectToEdit.url);
      setDescription(projectToEdit.description);
      setCategory(projectToEdit.category);
      setStatus(projectToEdit.status as "Live" | "In Development" | "Archived" || "Live");
      setFeatured(!!projectToEdit.featured);
      setTagsInput(projectToEdit.tags.join(", "));
      setCustomThumb(projectToEdit.customThumb || "");
    } else {
      setTitle("");
      setUrl("");
      setDescription("");
      setCategory("AI Web Apps");
      setStatus("Live");
      setFeatured(false);
      setTagsInput("React, Next.js, Tailwind");
      setCustomThumb("");
    }
  }, [projectToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const updatedProject: Project = {
      id: projectToEdit ? projectToEdit.id : `site-${Date.now()}`,
      name: title.trim(),
      title: title.trim(),
      url: url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`,
      description: description.trim() || "High-performance modern web application.",
      category,
      status,
      featured,
      tags: tags.length > 0 ? tags : ["Web"],
      customThumb: customThumb.trim() || undefined,
      clicks: projectToEdit?.clicks || 100,
      createdAt: projectToEdit?.createdAt || Date.now(),
    };

    onSave(updatedProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {projectToEdit ? "Edit Project" : "Add New Project"}
              </h3>
              <p className="text-xs text-zinc-400">
                Configure showcase details and preview metadata
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Acme SaaS Platform"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Live URL *
            </label>
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              1-Line Tech Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Next.js 14 architecture with server actions and Stripe"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-white focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
              >
                <option value="AI Web Apps">AI Web Apps</option>
                <option value="Dashboards">Dashboards</option>
                <option value="E-Commerce / SaaS">E-Commerce / SaaS</option>
                <option value="WordPress">WordPress</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "Live" | "In Development" | "Archived")}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-white focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
              >
                <option value="Live">Live</option>
                <option value="In Development">In Development</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Tech Tags (comma separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="React, Next.js, TypeScript"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Custom Thumbnail URL (Optional)
            </label>
            <input
              type="text"
              value={customThumb}
              onChange={(e) => setCustomThumb(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="featured-toggle"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500"
            />
            <label htmlFor="featured-toggle" className="text-xs font-medium text-zinc-300 flex items-center gap-1.5 cursor-pointer">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Spotlight / Featured Project (Promoted in Bento Grid)</span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-zinc-800">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 shadow-md transition-all active:scale-95"
            >
              {projectToEdit ? "Update Project" : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
