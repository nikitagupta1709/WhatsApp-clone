import React, { useState } from 'react'
import styled from "styled-components";
import EmojiPicker from 'emoji-picker-react';
import { SearchContainer, SearchInput } from './ContactList';
// import { messagesList } from '../mockData';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding:10px;
  align-items: center;
  gap:10px;
`
const ProfileImage = styled.img`
  width:32px;
  height:32px;
  border-radius: 50%;
`
const ChatBox = styled.div`
  display: flex;
  background:#f0f0f0;
  padding:10px;
  align-items: center;
  bottom:0;
`
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.4;
  cursur:pointer;
`
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5ddd6;
  overflow-y: auto;
`
const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end":"flex-start")};
  display: flex;
  margin: 5px 15px;
`
const Message = styled.div`
  max-width:50%;
  background:${(props) => (props.isYours ? "#daf8cb":"white")};
  color: #303030;
  padding: 8px 10px;
  font-size:14px;
  border-radius: 4px;
`

export const Conversation = (props) => {
  const {selectedChat} = props;
  const [pickerVisible, setPickerVisible] = useState(false);
  const [text, setText] = useState("");
  const [message,setMessage] = useState([]);

  const onEmojiClick =(emojiObj) =>{
    setText(text+emojiObj.emoji);
    setPickerVisible(false)
  }

  const onEnterPress =(event) => {
    if(event.key === "Enter"){
      const messages = [...message];
      messages.push({
        id:0,
        messageType:"TEXT",
        text,
        senderID: 0,
        addedOn: "12:02 PM",
      });
      setMessage(messages);
      setText("");
      
    }
  }

  return (
    <Container>
        <ProfileHeader>
          <ProfileImage src={selectedChat.profilePic}/>
          {selectedChat.name}
        </ProfileHeader> 
        <MessageContainer>
          {message.map((messageData) => (
            <MessageDiv isYours={messageData.senderID === 0}>
              <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
            </MessageDiv>
          ))}
          {pickerVisible && (<EmojiPicker width="40%" margin="auto" height="1000px" onEmojiClick={onEmojiClick} />)}
        </MessageContainer>
        <ChatBox>
          <SearchContainer>
            <EmojiImage src={"/data.svg"} onClick={()=>setPickerVisible(!pickerVisible)}/>
            <SearchInput placeholder='Type a message' value={text} onKeyDown={onEnterPress} onChange={(e) => setText(e.target.value)}/>
          </SearchContainer>
        </ChatBox>

    </Container>
  )
}

