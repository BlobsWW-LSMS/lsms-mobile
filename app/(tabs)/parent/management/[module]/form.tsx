import { useLocalSearchParams } from "expo-router";

import { ModuleFormScreen } from "@/features/management/ModuleFormScreen";

export default function ParentModuleFormRoute() {
  const { module } = useLocalSearchParams<{ module: string }>();
  return <ModuleFormScreen moduleKey={module ?? "module"} />;
}
