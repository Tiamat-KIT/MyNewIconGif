import { AbsoluteFill } from "remotion";

export const MyComposition = () => {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    justifyItems: "center",
    width: "225px",
    height: "225px",
    borderRadius: "999px",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(180deg, rgba(150, 218, 255, 1), rgba(42, 179, 252, 1) 28%, rgba(58, 99, 255, 1) 61%, rgba(0, 24, 112, 1)",
    boxShadow: "3px 3px rgba(0,0,0,0.5)",
  };
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ ...baseStyle }}>
        <span style={{height: "10px"}}/>
        <h3
          style={{
            color: "whitesmoke",
            textShadow: "5px 5px rgba(0,0,0,0.4)",
            fontSize: "5.5rem",
            lineHeight: "6rem",
          }}
        >
          泡<br />沫
        </h3>
      </div>
    </AbsoluteFill>
  );
};
