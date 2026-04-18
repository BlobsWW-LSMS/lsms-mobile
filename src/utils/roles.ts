import type { UserRole } from "@/types/role";

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Admin",
  teacher: "Teacher",
  parent: "Parent"
};

export const ROLE_MODULES: Record<UserRole, string[]> = {
  admin: [
    "users",
    "students",
    "teachers",
    "classes",
    "subjects",
    "timetable",
    "attendance",
    "assignments",
    "exams",
    "results",
    "announcements",
    "notifications",
    "reports",
    "settings"
  ],
  teacher: [
    "classes",
    "subjects",
    "timetable",
    "attendance",
    "assignments",
    "exams",
    "performance",
    "materials",
    "reports"
  ],
  parent: [
    "children",
    "timetable",
    "assignments",
    "attendance",
    "exams",
    "results",
    "report-cards",
    "announcements",
    "calendar"
  ]
};

export const prettifyModule = (value: string): string =>
  value
    .split("-")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
