import { ChannelTitle } from "./channelTitle";

function ChannelHead(props) {
  return (
    <div
      style={{
        width: "99.5%",
        height: "5vh",
        border: "1px solid #35373b",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white"
      }}
    >
      <ChannelTitle {...props} styleOveride={{ backgroundColor: "#1b1d21" }} />
    </div>
  );
}

export default ChannelHead;
