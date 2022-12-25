import React, { useState } from 'react'
import styled from "styled-components";
import EmojiPicker from 'emoji-picker-react';
import { SearchContainer, SearchInput } from './ContactList';
import { httpManager } from '../manager/httpManager';
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
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
`
const Message = styled.div`
  max-width:50%;
  background:${(props) => (props.isYours ? "#daf8cb" : "white")};
  color: #303030;
  padding: 8px 10px;
  font-size:14px;
  border-radius: 4px;
`

export const Conversation = (props) => {
  const { selectedChat, userInfo, refreshContactList } = props;
  const [pickerVisible, setPickerVisible] = useState(false);
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState([]);

  const onEmojiClick = (emojiObj) => {
    setText(text + emojiObj.emoji);
    setPickerVisible(false)
  }

  // useEffect(()=>{
  //   setMessageList(selectedChat.channelData.message);
  // },[selectedChat]);

  const onEnterPress = async (event) => {
    let channelId = "";
    if (event.key === "Enter") {
      if (!messageList || !messageList.length) {
        const channelUsers = [
          {
            email: userInfo.email,
            name: userInfo.name,
            profilePic: userInfo.picture,
          },
          {
            email: selectedChat.email,
            name: selectedChat.name,
            profilePic: selectedChat.profilePic,
          },
        ];
        // console.log("channelUsers ", channelUsers );

        const channelResponse = await httpManager.createChannel({channelUsers });
        // console.log("channelResponse", channelResponse);

        channelId = channelResponse.data.responseData._id;
        // console.log("channelId", channelId);
      }
      refreshContactList();

      const messages = [...messageList];
      const msgReqData = {
        text,
        senderEmail: userInfo.email,
        addedOn: new Date().getTime(),
      }
      await httpManager.sendMessage({
        channelId,
        messages: msgReqData
      });

      console.log("messageResponse", {
        channelId,
        msgReqData
      })
      messages.push(msgReqData);
      setMessageList(messages);
      setText("");

    }
  }

  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic} />
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {messageList.map((messageData) => (
          <MessageDiv key={messageData.addedOn} isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
          </MessageDiv>
        ))}
        {pickerVisible && (<EmojiPicker width="40%" margin="auto" height="1000px" onEmojiClick={onEmojiClick} />)}
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/data.svg"} onClick={() => setPickerVisible(!pickerVisible)} />
          <SearchInput placeholder='Type a message' value={text} onKeyDown={onEnterPress} onChange={(e) => setText(e.target.value)} />
        </SearchContainer>
      </ChatBox>

    </Container>
  )
}

