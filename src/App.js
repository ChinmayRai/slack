import "../public/styles.css";
import Container from "./components/container";
import SearchBar from "./components/searchBar";
import WorkSpace from "./components/workspace";
import ChannelDropDown from "./components/channelDropDown";
import ChannelHead from "./components/channelHead";
import MessageInputBox from "./components/messageInputBox";
import {
  MessageContainer,
  MessagePrimary,
  MessageSecondary
} from "./components/message";
import NewUserModal from "./components/newUserModal";
import React from "react";
import { usePersistedState } from "./utils";

function MessageRender(item, idx, arr) {
  if (idx === 0) {
    return <MessagePrimary {...item} />;
  }
  if (item.name === arr[idx - 1].name) {
    return <MessageSecondary {...item} />;
  } else {
    return <MessagePrimary {...item} />;
  }
}

export default function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  function addHandler() {
    setModalOpen((p) => !p);
  }

  const [users, setUsers] = usePersistedState([myUser, Nalin], "users");
  function addNewUser(newItem) {
    const newUsers = [...users, newItem];
    setUsers(newUsers);
    modifyFriendList(newItem.name);
  }

  const [currentUser, setCurrentUser] = usePersistedState(myUser, "current");
  const [receiver, setReceiver] = usePersistedState(currentUser, "receiver");

  let friends = {};
  for (let k of users) {
    friends = { ...friends, [k.name]: [] };
  }

  const [friendList, setFriendList] = usePersistedState(friends, "friends");

  function modifyFriendList(user, friend) {
    let newFriendList = {};
    if (friendList[user]) {
      newFriendList = {
        ...friendList,
        [user]: [...friendList[user], friend]
      };
    } else {
      newFriendList = { ...friendList, [user]: [] };
    }
    setFriendList(newFriendList);
  }

  const [messages, setMessages] = usePersistedState(
    { "Chinmay Rai,Nalin Gupta": [rawData] },
    "messages"
  );

  function addMessage(textContent, currentUser) {
    const newMessage = {
      name: currentUser.name,
      imgSrc: currentUser.imgSrc,
      time: Date.now(),
      textContent
    };
    const key = [currentUser.name, receiver.name].sort().join();

    let newMessages = messages[key]
      ? { ...messages, [key]: [...messages[key], newMessage] }
      : { ...messages, [key]: [newMessage] };

    setMessages(newMessages);
  }

  const [displayMsg, setdisplayMsg] = React.useState([]); //usePersistedState([], "display");

  React.useEffect(() => {
    const key = [currentUser.name, receiver.name].sort().join();
    if (messages[key]) {
      setdisplayMsg(messages[[currentUser.name, receiver.name].sort().join()]);
    } else {
      setdisplayMsg([]);
    }
  }, [messages, currentUser.name, receiver.name]);

  return (
    <div className="App">
      <NewUserModal
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        addNewUser={addNewUser}
      />

      <Container className="header" style={{ width: "99vw", height: "5vh" }}>
        <SearchBar
          currentUser={currentUser}
          users={users}
          addHandler={addHandler}
          switchUser={setCurrentUser}
          addContact={(friend) => modifyFriendList(currentUser.name, friend)}
        />
      </Container>

      <Container className="sidebar" style={{ width: "20vw", height: "93vh" }}>
        <WorkSpace />
        <ChannelDropDown
          groupName="Direct Messages"
          contactList={friendList[currentUser.name]}
          setReceiver={setReceiver}
          receiver={receiver}
        />
      </Container>

      <Container className="content" style={{ width: "79vw", height: "93vh" }}>
        <ChannelHead {...receiver} />

        <MessageContainer>
          {displayMsg.map((item, idx, arr) => MessageRender(item, idx, arr))}
        </MessageContainer>

        <MessageInputBox
          currentUser={currentUser}
          receiver={receiver}
          addMessage={addMessage}
        />
      </Container>
    </div>
  );
}

const myUser = {
  name: "Chinmay Rai",
  imgSrc: "https://avatars.dicebear.com/api/avataaars/chinmay.svg"
};

const Nalin = {
  name: "Nalin Gupta",
  imgSrc: "https://avatars.dicebear.com/api/avataaars/Nalinggg.svg"
};

const rawData = {
  name: "Chinmay Rai",
  imgSrc: "https://avatars.dicebear.com/api/avataaars/chinmay.svg",
  time: Date.now(),
  textContent: "Hello, How are you doing?"
};
