import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen
        name="AddFriend"
        options={{ headerTitle: "添加好友", headerShadowVisible: false }}
      />
    </Stack>
  );
}
