import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export const registerPushNotifications = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = status;
  if (status !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== "granted") return null;

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
};

export const sendLocalNotification = async (title, body) => {
  await Notifications.scheduleNotificationAsync({ content: { title, body }, trigger: { seconds: 1 } });
};
