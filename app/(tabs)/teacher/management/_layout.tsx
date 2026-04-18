import { Stack } from "expo-router";

export default function TeacherManagementLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[module]/index" options={{ title: "Module List" }} />
      <Stack.Screen name="[module]/form" options={{ title: "Form" }} />
      <Stack.Screen name="[module]/[id]" options={{ title: "Detail" }} />
    </Stack>
  );
}
