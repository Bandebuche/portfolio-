import { Project } from "@/types/portfolio";
import { DEFAULT_PROJECTS } from "@/data/projects";

const STORAGE_KEY = "webtree_projects_v5";
const AUTH_KEY = "webtree_admin_session_v2";
const PASS_KEY = "webtree_admin_password_v2";

export function getStoredProjects(): Project[] {
  if (typeof window === "undefined") {
    return DEFAULT_PROJECTS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return DEFAULT_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PROJECTS;
  } catch {
    return DEFAULT_PROJECTS;
  }
}

export function saveStoredProjects(projects: Project[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error("Failed to save projects to localStorage", err);
  }
}

export function resetStoredProjects(): Project[] {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
  }
  return DEFAULT_PROJECTS;
}

export function getAdminPassword(): string {
  if (typeof window === "undefined") return "Sachin@2026";
  return localStorage.getItem(PASS_KEY) || "Sachin@2026";
}

export function setAdminPassword(newPass: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PASS_KEY, newPass);
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "authenticated";
}

export function setAdminAuthenticated(auth: boolean): void {
  if (typeof window === "undefined") return;
  if (auth) {
    sessionStorage.setItem(AUTH_KEY, "authenticated");
  } else {
    sessionStorage.removeItem(AUTH_KEY);
  }
}
