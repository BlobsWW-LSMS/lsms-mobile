import type { PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";

type AppButtonProps = PropsWithChildren<{
  onPress?: () => void;
  variant?: "primary" | "secondary";
}>;

export function AppButton({ children, onPress, variant = "primary" }: AppButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      className={`mt-2 rounded-xl px-4 py-3 ${isPrimary ? "bg-brand-600" : "bg-slate-200"}`}
    >
      <Text className={`text-center font-semibold ${isPrimary ? "text-white" : "text-slate-700"}`}>
        {children}
      </Text>
    </Pressable>
  );
}
