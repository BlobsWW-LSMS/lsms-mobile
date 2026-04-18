import { useState } from "react";
import { Text } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";

export function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <Screen>
      <Text className="mb-4 mt-4 text-2xl font-bold text-slate-900">Forgot Password</Text>
      <Card>
        <AppInput
          label="Registered email"
          value={email}
          onChangeText={setEmail}
          placeholder="name@school.com"
        />
        <AppButton onPress={() => router.push("/(auth)/reset-password")}>Send Reset Link</AppButton>
      </Card>
    </Screen>
  );
}
