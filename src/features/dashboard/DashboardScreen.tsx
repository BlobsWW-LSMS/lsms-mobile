import { Text, View } from "react-native";

import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import type { UserRole } from "@/types/role";
import { ROLE_LABELS } from "@/utils/roles";

const KPI_MOCK = [
  { label: "Students", value: "1,240" },
  { label: "Attendance", value: "92%" },
  { label: "Assignments", value: "312" },
  { label: "Alerts", value: "8" }
];

export function DashboardScreen({ role }: { role: UserRole }) {
  return (
    <Screen>
      <Text className="mb-4 mt-2 text-2xl font-bold text-slate-900">{ROLE_LABELS[role]} Dashboard</Text>
      <View className="flex-row flex-wrap justify-between">
        {KPI_MOCK.map((item) => (
          <View key={item.label} className="w-[48%]">
            <Card>
              <Text className="text-xs text-slate-500">{item.label}</Text>
              <Text className="mt-1 text-2xl font-bold text-slate-900">{item.value}</Text>
            </Card>
          </View>
        ))}
      </View>
      <Card>
        <Text className="text-lg font-semibold text-slate-900">Today</Text>
        <Text className="mt-1 text-slate-600">
          Role-based dashboard cards are shared and can be bound to live API data later.
        </Text>
      </Card>
    </Screen>
  );
}
