import { Text } from "react-native";

import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import type { UserRole } from "@/types/role";
import { ROLE_LABELS } from "@/utils/roles";

export function ReportsScreen({ role }: { role: UserRole }) {
  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">{ROLE_LABELS[role]} Reports</Text>
      <Card>
        <Text className="font-semibold text-slate-900">Reusable Report Screen</Text>
        <Text className="mt-1 text-slate-600">
          Connect this screen to filtered report endpoints per role with shared chart/report components.
        </Text>
      </Card>
    </Screen>
  );
}
