import ChevronDown from "baseui/icon/chevron-down";
import { AiFillEdit } from "react-icons/ai";
import { Button, KIND, SIZE } from "baseui/button";
import { lazy } from "../utils";

function MyButton({ children, ...rest }) {
  return (
    <Button
      {...rest}
      size={SIZE.compact}
      kind={KIND.primary}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: "#19171c",
            height: "3vh"
          })
        }
      }}
    >
      {children}
    </Button>
  );
}

function WorkSpace() {
  return (
    <div
      style={{
        width: "100%",
        height: "5vh",
        border: "1px solid #35373b",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white"
      }}
    >
      <MyButton onClick={() => lazy()}>
        <div style={{ display: "flex", alignItems: "center", height: "2vh" }}>
          <h3>Sprinklr</h3>
          <ChevronDown />
        </div>
      </MyButton>
      <span style={{ width: "25%" }}></span>
      <MyButton onClick={() => lazy()}>
        <AiFillEdit />
      </MyButton>
    </div>
  );
}

export default WorkSpace;
