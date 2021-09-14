import { ChannelTitle } from "./channelTitle";
import { ListItem } from "baseui/list";
import { Button, SHAPE, SIZE } from "baseui/button";

function MyLi({ children, ...rest }) {
  return (
    <ListItem
      {...rest}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            backgroundColor: "#1b1d21",
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

function MyButton({ children, ...rest }) {
  return (
    <Button
      size={SIZE.Large}
      shape={SHAPE.circle}
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: "#1b1d21"
          })
        }
      }}
    >
      {children}
    </Button>
  );
}

function UserSwitch({ usersList, addHandler, switchUser }) {
  return (
    <div
      style={{
        border: "1px solid #35373b",
        borderRadius: "5px",
        marginTop: "3vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2vh"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Switch Users</h2>
      <ul
        style={{
          width: "100%",
          padding: "0",
          listStyleType: "none",
          margin: "0"
        }}
      >
        {usersList.map((item, idx) => (
          <MyLi>
            <ChannelTitle
              name={item.name}
              imgSrc={item.imgSrc}
              styleOveride={{ fontSize: "12px", backgroundColor: "#1b1d21" }}
              onClick={() => switchUser(item)}
            />
          </MyLi>
        ))}
      </ul>
      <MyButton onClick={() => addHandler()}>
        <h2>+</h2>
      </MyButton>
    </div>
  );
}

export default UserSwitch;
