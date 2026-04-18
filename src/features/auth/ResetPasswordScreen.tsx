import { useState } from "react";
import { Text } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";

export function ResetPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <Screen>
      <Text className="mb-4 mt-4 text-2xl font-bold text-slate-900">Reset Password</Text>
      <Card>
        <AppInput
          label="New password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Create new password"
        />
        <AppInput
          label="Confirm password"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry
          placeholder="Repeat password"
        />
        <AppButton onPress={() => router.replace("/(auth)/login")}>Save Password</AppButton>
      </Card>
    </Screen>
  );
}
