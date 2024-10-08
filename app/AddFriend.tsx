import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import IconButton from "@/components/AddFriendScreen/IconButton";

type Props = {
  children: React.ReactNode;
};

export default function AddFriend({ children }: Props) {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonGrp}>
        <IconButton icon="share-outline" label="分享邀请" />
        <IconButton icon="link-outline" label="复制链接" />
        <IconButton icon="chatbox" label="消息" />
        <IconButton icon="mail" label="电子邮件" />
      </View>
      <View>
        <Pressable>
          <Text>通过用户名添加</Text>
        </Pressable>
      </View>
      <View style={styles.discoverFriendsCard}>
        <Text>发现您的好友</Text>
        <Text>
          Sync your phone contacts to find people you know on Discord. (Learn
          More)
        </Text>
        <Pressable>
          <Text>Find friends</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#f1f2f3',
  },
  buttonGrp: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    padding: 16,
    marginVertical: 16
  },
  usernameButton: {},
  discoverFriendsCard: {
    borderRadius: 24,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
  },
});
