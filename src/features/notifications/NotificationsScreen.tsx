import { Text, View } from "react-native";

import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import type { UserRole } from "@/types/role";
import { ROLE_LABELS } from "@/utils/roles";

const SAMPLE_NOTIFICATIONS = [
  "New assignment posted for Grade 8",
  "Exam schedule updated",
  "Holiday notice published"
];

export function NotificationsScreen({ role }: { role: UserRole }) {
  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">{ROLE_LABELS[role]} Notifications</Text>
      <View>
        {SAMPLE_NOTIFICATIONS.map((notice) => (
          <Card key={notice}>
            <Text className="text-slate-800">{notice}</Text>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
