import { Select, SIZE, TYPE } from "baseui/select";
import React from "react";

const styleOverides = {
  Root: {
    style: ({ $theme }) => ({
      width: "40vw",
      marginTop: "3px"
    })
  },
  Input: {
    style: ({ $theme }) => ({
      color: "white"
    })
  },
  ControlContainer: {
    style: ({ $theme }) => ({
      backgroundColor: "#38373c",
      border: "1px solid #35373b",
      borderRadius: "7px"
    })
  },
  Dropdown: {
    style: ({ $theme }) => ({
      backgroundColor: "#38373c"
    })
  },
  DropdownListItem: {
    style: ({ $theme }) => ({ color: "#1163a3" })
  }
};

function SearchSelect({ users, addContact }) {
  const [value, setValue] = React.useState([]);
  const options = users.map((u, idx) => ({ label: u.name, id: idx }));

  React.useEffect(() => {
    if (value.length > 0) {
      const receiver = users.filter((u) => u.name === value[0].label)[0];
      addContact(receiver);
      setValue([]);
    }
  }, [value, users]);

  return (
    <Select
      size={SIZE.mini}
      ype={TYPE.search}
      options={options}
      value={value}
      placeholder="Search Sprinklr"
      onChange={(params) => setValue(params.value)}
      overrides={styleOverides}
    />
  );
}

export default SearchSelect;
