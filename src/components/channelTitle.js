import { Button } from "baseui/button";
import { Avatar } from "baseui/avatar";

function ChannelTitle({
  name,
  imgSrc,
  active = false,
  styleOveride = {},
  render,
  onClick
}) {
  return (
    <Button
      onClick={onClick}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: active ? "#1163a3" : "#19171c",
            width: "100%",
            height: "4vh",
            ...styleOveride
          })
        }
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
          height: "3vh"
        }}
      >
        <Avatar name={name} size="scale800" src={imgSrc} />
        <span style={{ width: "10px" }}></span>
        <p style={{ color: "white", size: "1em" }}>{name}</p>
        {render}
      </div>
    </Button>
  );
}

function UserDescription({ name, imgSrc, styleOveride = {} }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        height: "auto"
      }}
    >
      <Avatar name={name} size="scale3200" src={imgSrc} />
      <h2 style={{ color: "white", size: "225px" }}>{name}</h2>
    </div>
  );
}

export { ChannelTitle, UserDescription };
