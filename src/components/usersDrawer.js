import * as React from "react";
import { Drawer, SIZE } from "baseui/drawer";
import { UserDescription } from "./channelTitle";
import UserSwitch from "./userSwitch";

function UserDrawer({
  isOpen,
  setIsOpen,
  currentUser,
  usersList,
  addHandler,
  switchUser
}) {
  const otherUsers = usersList.filter((k) => k.name !== currentUser.name);
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => setIsOpen(false)}
      showBackdrop={false}
      size={SIZE.auto}
      overrides={{
        DrawerBody: {
          style: ({ $theme }) => ({ color: "white" })
        },
        Close: {
          style: ({ $theme }) => ({
            display: "none"
          })
        },
        DrawerContainer: {
          style: ({ $theme }) => ({
            backgroundColor: "#1b1d21",
            top: "6vh",
            height: "80vh",
            width: "30vw",
            border: "1px solid #35373b",
            color: "white"
          })
        }
      }}
    >
      <UserDescription {...currentUser} />
      <UserSwitch
        usersList={otherUsers}
        addHandler={addHandler}
        switchUser={switchUser}
      />
    </Drawer>
  );
}

export default UserDrawer;
