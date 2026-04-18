import { Text, View } from "react-native";

import { AppButton } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { useSessionStore } from "@/store/session";
import type { UserRole } from "@/types/role";
import { ROLE_LABELS } from "@/utils/roles";

export function ProfileScreen({ role }: { role: UserRole }) {
  const user = useSessionStore((state) => state.user);
  const logout = useSessionStore((state) => state.logout);

  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">{ROLE_LABELS[role]} Profile</Text>
      <Card>
        <View className="gap-1">
          <Text className="text-slate-500">Name</Text>
          <Text className="text-base font-semibold text-slate-900">{user?.name ?? "Unknown User"}</Text>
          <Text className="mt-2 text-slate-500">Email</Text>
          <Text className="text-base text-slate-900">{user?.email ?? "N/A"}</Text>
          <Text className="mt-2 text-slate-500">Role</Text>
          <Text className="text-base text-slate-900">{ROLE_LABELS[role]}</Text>
        </View>
        <AppButton variant="secondary" onPress={logout}>
          Logout
        </AppButton>
      </Card>
    </Screen>
  );
}
