import { ArrowRight, ArrowLeft } from "baseui/icon";
import { Avatar } from "baseui/avatar";
import { Button, SIZE as buttonSize, SHAPE } from "baseui/button";
import { AiOutlineHistory } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import UserDrawer from "./usersDrawer";
import React from "react";
import { lazy } from "../utils";
import SearchSelect from "./search";

function MyButton({ children, styleOverides, ...rest }) {
  return (
    <Button
      size={buttonSize.compact}
      shape={SHAPE.circle}
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: "#121016",
            ...styleOverides
          })
        }
      }}
    >
      {children}
    </Button>
  );
}

function SearchBar({ currentUser, users, addHandler, switchUser, addContact }) {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <div style={{ display: "flex" }}>
        <MyButton onClick={() => lazy()}>
          <ArrowLeft size={30} color="white" />
        </MyButton>

        <MyButton onClick={() => lazy()}>
          <ArrowRight size={30} color="white" />
        </MyButton>

        <span style={{ width: "10px" }}></span>

        <MyButton onClick={() => lazy()}>
          <h2>
            <AiOutlineHistory />
          </h2>
        </MyButton>

        <span style={{ width: "20px" }}></span>

        {/* <Input
          placeholder=" 🔍 Search Sprinklr"
          size={SIZE.compact}
          overrides={inputOverides}
        /> */}
        <SearchSelect users={users} addContact={addContact} />

        <span style={{ width: "20px" }}></span>

        <MyButton onClick={() => lazy()}>
          <h2>
            <IoIosHelpCircleOutline />
          </h2>
        </MyButton>
      </div>

      <span style={{ width: "20vw" }}></span>

      <MyButton
        shape={SHAPE.square}
        size={buttonSize.compact}
        onClick={() => setDrawerOpen(true)}
        styleOverides={{ marginRight: "1vw" }}
      >
        <Avatar
          name={currentUser.name}
          size="scale800"
          src={currentUser.imgSrc}
        />
      </MyButton>

      <UserDrawer
        isOpen={isDrawerOpen}
        setIsOpen={setDrawerOpen}
        currentUser={currentUser}
        usersList={users}
        addHandler={addHandler}
        switchUser={switchUser}
      />
    </div>
  );
}

export default SearchBar;
