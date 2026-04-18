import { useState } from "react";
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { useSessionStore } from "@/store/session";

const getDashboardPath = (email: string): string => {
  const lowerEmail = email.toLowerCase();
  if (lowerEmail.includes("admin")) return "/(tabs)/admin/dashboard";
  if (lowerEmail.includes("teacher")) return "/(tabs)/teacher/dashboard";
  return "/(tabs)/parent/dashboard";
};

export function LoginScreen() {
  const router = useRouter();
  const login = useSessionStore((state) => state.login);
  const [email, setEmail] = useState("admin@school.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    login({ email, password });
    const destination = getDashboardPath(email);
    router.replace(destination as any);
  };

  return (
    <Screen>
      <View className="mb-4 mt-4">
        <Text className="text-3xl font-bold text-slate-900">School Management</Text>
        <Text className="mt-1 text-slate-600">Sign in with role email: admin / teacher / parent</Text>
      </View>
      <Card>
        <AppInput label="Email" value={email} onChangeText={setEmail} placeholder="you@school.com" />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
        />
        <AppButton onPress={handleLogin}>Login</AppButton>
        {error ? <Text className="mt-2 text-red-600 text-center">{error}</Text> : null}
        <Link href="/(auth)/signup" className="mt-3 text-center text-brand-700">
          Don't have an account? Sign Up
        </Link>
        <Link href="/(auth)/forgot-password" className="mt-2 text-center text-brand-700">
          Forgot password?
        </Link>
      </Card>
    </Screen>
  );
}
