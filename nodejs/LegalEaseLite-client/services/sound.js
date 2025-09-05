import { Audio } from "expo-av";

export const playNotificationSound = async (type = "default") => {
  let soundFile;
  switch (type) {
    case "chime":
      soundFile = require("../assets/sounds/chime.mp3");
      break;
    case "alert":
      soundFile = require("../assets/sounds/alert.mp3");
      break;
    default:
      soundFile = require("../assets/sounds/default.mp3");
  }

  const { sound } = await Audio.Sound.createAsync(soundFile);
  await sound.playAsync();
};
