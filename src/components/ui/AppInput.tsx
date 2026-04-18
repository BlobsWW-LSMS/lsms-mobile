import { Text, TextInput, View } from "react-native";

type AppInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
};

export function AppInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry
}: AppInputProps) {
  return (
    <View className="mb-3">
      <Text className="mb-1 text-sm text-slate-600">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900"
      />
    </View>
  );
}
