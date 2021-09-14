import { ChannelTitle } from "./channelTitle";
import React from "react";

const options = {
  hour: "numeric",
  minute: "numeric",
  month: "short",
  day: "numeric"
};

function MessageContainer({ children }) {
  return (
    <div
      style={{
        height: "75vh",
        overflow: "hidden",
        overflowY: "scroll"
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          margin: "0",
          padding: "0"
        }}
      >
        {children}
      </ul>
    </div>
  );
}

function MessagePrimary({ name, imgSrc, time, textContent }) {
  return (
    <div>
      <ChannelTitle
        name={name}
        imgSrc={imgSrc}
        styleOveride={{ backgroundColor: "#1b1d21" }}
        render={
          <div
            style={{
              fontSize: "10px",
              margin: "2px 0  0 5px",
              color: "lightgrey"
            }}
          >
            {new Date(time).toLocaleDateString("en-US", options)}
          </div>
        }
      />
      <p
        style={{
          fontSize: "14px",
          margin: "0px 10px 10px 50px",
          color: "white",
          textAlign: "left",
          fontWeight: "100"
        }}
      >
        {textContent}
      </p>
    </div>
  );
}

function MessageSecondary({ time, textContent }) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: visible ? "#333333" : "none"
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <p
        style={{
          fontSize: "14px",
          margin: "0px 10px 10px 50px",
          color: "white",
          textAlign: "left",
          display: "inline",
          fontWeight: "100"
        }}
      >
        {textContent}
      </p>
      <p
        style={{
          fontSize: "10px",
          margin: "2px 10px  0 0px",
          color: "lightgrey",
          display: visible ? "inline" : "none"
        }}
      >
        {new Date(time).toLocaleDateString("en-US", options)}
      </p>
    </div>
  );
}

export { MessageContainer, MessagePrimary, MessageSecondary };
