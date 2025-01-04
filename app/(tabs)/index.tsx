import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import Video, { VideoRef } from "react-native-video";

const videoSource = require("@/assets/video/3677-SOS-maltraitance-animale-Video.mp4");

export default function VideoScreen() {
  const videoRef = useRef<VideoRef>(null);

  return (
    <View>
      <Video
        // Can be a URL or a local file.
        source={videoSource}
        // Store reference
        ref={videoRef}
        // Callback when remote video is buffering
        // Callback when video cannot be loaded
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
