import {Composition} from "remotion";
import {HelloVideo} from "./HelloVideo";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="HelloVideo"
    component={HelloVideo}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{title: "Hello from Remotion", subtitle: "D:\\hermes\\remotion-videos"}}
  />
);
