import { useLocalSearchParams } from "expo-router";

import { ModuleFormScreen } from "@/features/management/ModuleFormScreen";

export default function TeacherModuleFormRoute() {
  const { module } = useLocalSearchParams<{ module: string }>();
  return <ModuleFormScreen moduleKey={module ?? "module"} />;
}
