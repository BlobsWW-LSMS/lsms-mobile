export type UserRole = "admin" | "teacher" | "parent";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type ModuleItem = {
  id: string;
  title: string;
  subtitle?: string;
};
