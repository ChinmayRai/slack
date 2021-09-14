import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

function NewUserModal({ isOpen, setIsOpen, addNewUser }) {
  const [name, setName] = React.useState("");
  const [imgSrc, setImgSrc] = React.useState("");

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Add New Contact</ModalHeader>
      <ModalBody>
        <FormControl label="Name">
          <Input
            id="name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl label="Avatar URL">
          <Input
            id="imgSrc"
            value={imgSrc}
            onChange={(event) => setImgSrc(event.currentTarget.value)}
          />
        </FormControl>
        Click{" "}
        <a
          href="https://avatars.dicebear.com/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to make Awesome Avatars
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={ButtonKind.tertiary}>Cancel</ModalButton>
        <ModalButton
          onClick={() => {
            addNewUser({ name, imgSrc });
            setIsOpen(false);
          }}
        >
          Add
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default NewUserModal;
