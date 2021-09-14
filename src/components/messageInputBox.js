import { Textarea } from "baseui/textarea";
import { ButtonGroup, SHAPE } from "baseui/button-group";
import { Button } from "baseui/button";
import { SIZE } from "baseui/input";
import React from "react";
import { lazy } from "../utils";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCodeAlt,
  BiLink,
  BiCodeBlock,
  BiAt,
  BiSmile,
  BiText,
  BiSend
} from "react-icons/bi";
import { GrOrderedList, GrUnorderedList } from "react-icons/gr";
import { MdAttachFile } from "react-icons/md";

function MyButton({ children, styleOverides, ...rest }) {
  return (
    <Button
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: "#212529",
            borderRadius: "5px",
            height: "4.5vh",
            width: "4.5vh",
            marginRight: "3px",
            color: "gray",
            ...styleOverides
          })
        }
      }}
    >
      {children}
    </Button>
  );
}

function MessageInputBox({ currentUser, receiver, addMessage }) {
  const [value, setValue] = React.useState("");

  function submitOnEnter(event) {
    if (event.which === 13) {
      addMessage(value, currentUser);
      setValue("");
    }
  }
  return (
    <div
      style={{
        backgroundColor: "#212529",
        border: "1px solid #7a7b7d",
        borderRadius: "10px",
        width: "75vw",
        position: "fixed",
        top: "87vh",
        left: "22.5vw",
        height: "10vh",
        padding: "3px"
      }}
    >
      <div style={{ display: "flex" }}>
        <ThemeProvider
          theme={createTheme(lightThemePrimitives, {
            colors: { inputBorder: "#212529" }
          })}
        >
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={`Message ${receiver.name}`}
            size={SIZE.compact}
            onKeyPress={(e) => submitOnEnter(e)}
            overrides={{
              Input: {
                style: ({ $theme }) => ({
                  backgroundColor: "#212529",
                  height: "5vh",
                  color: "white"
                })
              }
            }}
          />
        </ThemeProvider>
        <MyButton
          styleOverides={{ backgroundColor: "darkgreen" }}
          onClick={() => {
            addMessage(value, currentUser);
            setValue("");
          }}
        >
          <p style={{ color: "white" }}>
            <BiSend size={24} />
          </p>
        </MyButton>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonGroup
          shape={SHAPE.square}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginLeft: "5px"
              })
            }
          }}
        >
          <MyButton onClick={() => lazy()}>
            <BiBold size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiItalic size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiStrikethrough size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiCodeAlt size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiLink size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <GrOrderedList size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <GrUnorderedList size={20} />
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiCodeBlock size={20} />
          </MyButton>
        </ButtonGroup>

        <ButtonGroup
          shape={SHAPE.square}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginLeft: "5px"
              })
            }
          }}
        >
          <MyButton onClick={() => lazy()}>
            <BiText size={20} />{" "}
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiAt size={20} />{" "}
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <BiSmile size={20} />{" "}
          </MyButton>
          <MyButton onClick={() => lazy()}>
            <MdAttachFile size={20} />
          </MyButton>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default MessageInputBox;
