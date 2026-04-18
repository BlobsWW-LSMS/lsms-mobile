import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import type { UserRole } from "@/types/role";
import { ROLE_MODULES, ROLE_LABELS, prettifyModule } from "@/utils/roles";

export function ManagementHomeScreen({ role }: { role: UserRole }) {
  const router = useRouter();
  const modules = ROLE_MODULES[role];

  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">{ROLE_LABELS[role]} Management</Text>
      <View>
        {modules.map((moduleKey) => (
          <Card key={moduleKey}>
            <Text className="text-lg font-semibold text-slate-900">{prettifyModule(moduleKey)}</Text>
            <Text className="mt-1 text-slate-600">
              Reuses shared list, form, and detail screen architecture.
            </Text>
            <AppButton onPress={() => router.push(`/(tabs)/${role}/management/${moduleKey}`)}>
              Open Module
            </AppButton>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
