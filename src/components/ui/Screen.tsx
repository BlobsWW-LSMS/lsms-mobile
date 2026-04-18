import type { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

type ScreenProps = PropsWithChildren<{
  scroll?: boolean;
}>;

export function Screen({ children, scroll = true }: ScreenProps) {
  if (!scroll) {
    return (
      <SafeAreaView className="flex-1 bg-slate-50">
        <View className="flex-1 px-4 pt-3">{children}</View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="flex-1 px-4 pt-3" contentContainerStyle={{ paddingBottom: 24 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
