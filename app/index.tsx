import React, { useEffect } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import IconButton from "@/components/AddFriendScreen/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import reactLogo from "@/assets/images/react-logo.png";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

type Props = {
  children: React.ReactNode;
};

export default function Index({ children }: Props) {
  const [loaded, error] = useFonts({
    "JosefinSans-Regular": require("@/assets/fonts/JosefinSans/JosefinSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.buttonGrp}>
        <IconButton icon="share-outline" label="分享邀请" />
        <IconButton icon="link-outline" label="复制链接" />
        <IconButton icon="chatbox" label="消息" />
        <IconButton icon="mail" label="电子邮件" />
      </View>
      <View style={styles.usernameButtonContainer}>
        <Pressable
          android_ripple={{ color: "#e3e3e3" }}
          style={(pressed) => [
            styles.usernameButton,
            pressed && styles.usernameButtonPressed,
          ]}
        >
          <View style={styles.usernameButtonLeft}>
            <Ionicons name="at" size={24} color="#232323" />
            <Text style={styles.usernameButtonLabel}>通过用户名添加</Text>
          </View>
          <View style={styles.usernameButtonRight}>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#232323"
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.discoverFriendsCard}>
        <Image source={reactLogo} style={{ width: 100, height: 100 }} />
        <Text style={styles.discoverFriendTitle}>发现您的好友</Text>
        <Text
          style={[
            styles.discoverFriendDesc,
            { fontFamily: "JosefinSans-Regular" },
          ]}
        >
          Sync your phone contacts to find people you know on Discord. (Learn
          More)
        </Text>
        <View style={styles.discoverFriendButton}>
          <Pressable
            android_ripple={{ color: "#6162f1" }}
            style={{
              padding: 12,
            }}
          >
            <Text
              style={[
                styles.discoverFriendButtonLabel,
                { fontFamily: "JosefinSans-Regular" },
              ]}
            >
              Find friends
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** overall style */
  screen: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#f1f2f3",
    padding: 16,
  },
  buttonGrp: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  /* user name button */
  usernameButtonContainer: {
    marginVertical: 24,
    backgroundColor: "white",
    borderRadius: 18,
    overflow: "hidden",
  },
  usernameButton: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  usernameButtonPressed: {},
  usernameButtonLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  usernameButtonRight: {},
  usernameButtonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  /** discover card */
  discoverFriendsCard: {
    borderRadius: 24,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
  },
  discoverFriendTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  discoverFriendDesc: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    color: "#616263",
    marginBottom: 12
  },
  discoverFriendButton: {
    backgroundColor: "#6169ff",
    width: "100%",
    overflow: "hidden",
    borderRadius: 28,
  },
  discoverFriendButtonLabel: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    paddingBottom: 4,
  },
});
