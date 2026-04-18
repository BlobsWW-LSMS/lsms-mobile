import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import type { UserRole } from "@/types/role";
import { prettifyModule } from "@/utils/roles";

const MOCK_ROWS = [
  { id: "1", title: "Record One", subtitle: "Primary info" },
  { id: "2", title: "Record Two", subtitle: "Secondary info" },
  { id: "3", title: "Record Three", subtitle: "Additional info" }
];

export function ModuleListScreen({ role, moduleKey }: { role: UserRole; moduleKey: string }) {
  const router = useRouter();

  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">{prettifyModule(moduleKey)} List</Text>
      <AppButton onPress={() => router.push(`/(tabs)/${role}/management/${moduleKey}/form`)}>
        Add New
      </AppButton>
      <View className="mt-2">
        {MOCK_ROWS.map((row) => (
          <Card key={row.id}>
            <Text className="text-base font-semibold text-slate-900">{row.title}</Text>
            <Text className="text-slate-600">{row.subtitle}</Text>
            <AppButton onPress={() => router.push(`/(tabs)/${role}/management/${moduleKey}/${row.id}`)}>
              View Detail
            </AppButton>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
