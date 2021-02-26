import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Message here..."
          />
          <SendButton type="submit" onClick={send}>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex; // makes input and icon lay next to each other
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1; // Causes input to take up most of the area because it is most important  (examples tru 0.5, 0.75);
      border: none;
      font-size: 13px;
    }
    input:focus {           // Remove outline when input box is clicked
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;        // Use margin instead of padding to give whole div space
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {        // Inspected icon and retrieved class name from the console
      width: 18px;
  }

  :hover {
      background: #148567;
  }

`

const Send = styled(SendIcon)`      // Importing SendIcon to Send to change the color
  color: #D9D9D9;
`;