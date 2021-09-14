import TriangleDown from "baseui/icon/triangle-down";
import TriangleRight from "baseui/icon/triangle-right";
import { Button, SIZE as buttonSize, SHAPE } from "baseui/button";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ListItem } from "baseui/list";
import { ChannelTitle } from "./channelTitle";
import { lazy } from "../utils";

function MyButton({ children, styleProps, ...rest }) {
  return (
    <Button
      size={buttonSize.mini}
      shape={SHAPE.square}
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: "#19171c",
            ...styleProps
          })
        }
      }}
    >
      {children}
    </Button>
  );
}

function MyLi({ children }) {
  return (
    <ListItem
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            backgroundColor: "#19171c",
            height: "4vh",
            color: "white",
            marginBottom: "1vh"
          })
        }
      }}
    >
      {children}
    </ListItem>
  );
}

function ChannelDropDown({ groupName, contactList, setReceiver, receiver }) {
  const [expand, setExpand] = React.useState(false);
  return (
    <div>
      <header
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "1vw" }}
        >
          <MyButton onClick={() => setExpand(!expand)} shape={SHAPE.default}>
            {expand ? <TriangleDown /> : <TriangleRight />}
            <span style={{ width: "0.4vw" }}></span>
            <p style={{ fontSize: "14px" }}>{groupName}</p>
          </MyButton>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginRight: "1vw" }}
        >
          <MyButton onClick={() => lazy()}>
            <BsThreeDotsVertical />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <h3>+</h3>
          </MyButton>
        </div>
      </header>
      <ul
        style={{
          width: "100%",
          padding: "0",
          listStyleType: "none",
          margin: "0",
          display: expand ? "inline" : "none"
        }}
      >
        {contactList.map((item, idx) => (
          <MyLi>
            <ChannelTitle
              name={item.name}
              imgSrc={item.imgSrc}
              active={item.name === receiver.name}
              styleOveride={{
                fontSize: "12px",
                marginLeft: "-17px",
                width: "21vw"
              }}
              onClick={() => setReceiver(item)}
            />
          </MyLi>
        ))}
      </ul>
    </div>
  );
}

export default ChannelDropDown;
