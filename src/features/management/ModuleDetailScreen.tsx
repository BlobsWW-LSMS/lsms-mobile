import { Text } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import type { UserRole } from "@/types/role";
import { prettifyModule } from "@/utils/roles";

export function ModuleDetailScreen({
  role,
  moduleKey,
  itemId
}: {
  role: UserRole;
  moduleKey: string;
  itemId: string;
}) {
  const router = useRouter();

  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">
        {prettifyModule(moduleKey)} Detail
      </Text>
      <Card>
        <Text className="text-sm text-slate-500">Record ID</Text>
        <Text className="text-base font-semibold text-slate-900">{itemId}</Text>
        <Text className="mt-3 text-sm text-slate-500">Preview</Text>
        <Text className="text-slate-700">Details for selected module item.</Text>
        <AppButton onPress={() => router.push(`/(tabs)/${role}/management/${moduleKey}/form`)}>
          Edit
        </AppButton>
      </Card>
    </Screen>
  );
}
