import { useLocalSearchParams } from "expo-router";

import { ModuleDetailScreen } from "@/features/management/ModuleDetailScreen";

export default function TeacherModuleDetailRoute() {
  const { module, id } = useLocalSearchParams<{ module: string; id: string }>();
  return <ModuleDetailScreen role="teacher" moduleKey={module ?? "module"} itemId={id ?? "0"} />;
}
