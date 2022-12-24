import { useState } from "react";
import styled from "styled-components";
import { ContactList } from "./components/ContactList";
import { Conversation } from "./components/Conversation";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

const Placeholder = styled.div`
  width:70%;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:14px;
  color:rgba(0,0,0,0.45);
  gap:10px;
  span{
    font-size:32px;
    color:#525252;
  }
`;
const ChatPlaceholder = styled.img`
  width:240px;
  height:240px;
  border-radius:50%;
  object-fit: contain;
`;

function App({ userInfo }) {
  const [selectedChat, setChat] = useState();
  const [refreshContactList, toggleRefreshContactList] = useState(false);

  return (
    <div className="App">
      <Container>
        <ContactList setChat={setChat} userInfo={userInfo} refreshContactList={refreshContactList} />
        {selectedChat ? (
          <Conversation 
            selectedChat={selectedChat} 
            userInfo={userInfo} 
            refreshContactList={() => 
              toggleRefreshContactList(!refreshContactList)
            } /> 
          ): ( <Placeholder>
            <ChatPlaceholder src="/welcome_placeholder.jpg" />
            <span>Keep your phone connected</span>
            Whatsapp connects to your phone to sync messages.
          </Placeholder>
          )}
      </Container>
    </div>
  );
}

export default App;
