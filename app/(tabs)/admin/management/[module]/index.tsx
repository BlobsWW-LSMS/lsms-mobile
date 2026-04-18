import { useLocalSearchParams } from "expo-router";

import { ModuleListScreen } from "@/features/management/ModuleListScreen";

export default function AdminModuleListRoute() {
  const { module } = useLocalSearchParams<{ module: string }>();
  return <ModuleListScreen role="admin" moduleKey={module ?? "module"} />;
}
