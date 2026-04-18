import { useLocalSearchParams } from "expo-router";

import { ModuleListScreen } from "@/features/management/ModuleListScreen";

export default function TeacherModuleListRoute() {
  const { module } = useLocalSearchParams<{ module: string }>();
  return <ModuleListScreen role="teacher" moduleKey={module ?? "module"} />;
}
