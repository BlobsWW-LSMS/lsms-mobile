import { useState } from "react";
import { Text } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { prettifyModule } from "@/utils/roles";

export function ModuleFormScreen({ moduleKey }: { moduleKey: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Screen>
      <Text className="mb-3 mt-2 text-2xl font-bold text-slate-900">
        {prettifyModule(moduleKey)} Form
      </Text>
      <Card>
        <AppInput label="Name" value={name} onChangeText={setName} placeholder="Enter name" />
        <AppInput
          label="Description"
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
        />
        <AppButton onPress={() => router.back()}>Save</AppButton>
      </Card>
    </Screen>
  );
}
