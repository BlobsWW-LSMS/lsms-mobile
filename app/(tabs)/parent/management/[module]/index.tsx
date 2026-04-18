import { useLocalSearchParams } from "expo-router";

import { ModuleListScreen } from "@/features/management/ModuleListScreen";

export default function ParentModuleListRoute() {
  const { module } = useLocalSearchParams<{ module: string }>();
  return <ModuleListScreen role="parent" moduleKey={module ?? "module"} />;
}
