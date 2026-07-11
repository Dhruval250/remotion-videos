import {useCurrentFrame, interpolate, spring} from "remotion";

interface Props {
  title: string;
  subtitle: string;
}

export const HelloVideo: React.FC<Props> = ({title, subtitle}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: "clamp"});
  const scale = spring({frame, fps: 30, config: {damping: 200}});

  return (
    <div
      style={{
        flex: 1,
        background: "linear-gradient(135deg, #1e1b4b, #312e81)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        opacity,
      }}
    >
      <h1 style={{fontSize: 120, margin: 0, transform: `scale(${scale})`}}>
        {title}
      </h1>
      <p style={{fontSize: 48, opacity: 0.8, marginTop: 24}}>{subtitle}</p>
    </div>
  );
};
