import { useState } from "react";
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { useSessionStore } from "@/store/session";

export function SignUpScreen() {
  const router = useRouter();
  const signUp = useSessionStore((state) => state.signUp);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    setError("");
    
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    signUp({ name, email, password });
    router.replace("/");
  };

  return (
    <Screen>
      <View className="mb-4 mt-4">
        <Text className="text-3xl font-bold text-slate-900">Create Account</Text>
        <Text className="mt-1 text-slate-600">Sign up with role email: admin / teacher / parent</Text>
      </View>
      <Card>
        <AppInput label="Name" value={name} onChangeText={setName} placeholder="Your name" />
        <AppInput label="Email" value={email} onChangeText={setEmail} placeholder="you@school.com" />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="At least 6 characters"
        />
        {error ? <Text className="mt-2 text-red-600">{error}</Text> : null}
        <AppButton onPress={handleSignUp}>Sign Up</AppButton>
        <Link href="/(auth)/login" className="mt-3 text-center text-brand-700">
          Already have an account? Login
        </Link>
      </Card>
    </Screen>
  );
}