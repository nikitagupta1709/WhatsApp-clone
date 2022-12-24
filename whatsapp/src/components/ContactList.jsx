import React, { useState } from 'react'
import styled from "styled-components";
import { Contact } from './Contact';
import { contactList } from '../mockData';
import validateEmail from '../utility/utility';
import { httpManager } from '../manager/httpManager';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
`;
const ProfileInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding:10px;
`;

const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;
const SearchBox = styled.div`
    background: #f6f6f6;
    padding:10px;
    display: flex;
`;
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 8px;
    width: 100%;
    padding: 5px 10px;
`;
const SearchIcon = styled.img`
    width: 28px;
    height: 28px;
`;

export const SearchInput = styled.input`
    width: 100%;
    outline:none;
    font-size:15px;
    border: none;
    margin-left:10px; 
`;

const SearchResults = styled.div`
    height:100px;
    width: 100%;
`

export const ContactList = (props) => {
    const {setChat, userInfo} = props;
    const [searchData, setSearchData] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const onSearchTeaxtChanged = async(searchText) => {
        setSearchData(searchText);
        if(!validateEmail(searchText)) return;
           
        const userData = await httpManager.searchUser(searchText);
        // console.log(userData.data.responseData, "userData");
        if(userData.data?.success) 
            setSearchResult(userData.data.responseData)
    }
  return (
      <Container>
        <ProfileInfoDiv>
            <ProfileImage  src={userInfo.picture}/>
        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer>
                <SearchIcon src={"/search-icon.svg"}/>
                <SearchInput 
                    placeholder="Search or Start a new chat"
                    value={searchData}
                    onChange={(e) => onSearchTeaxtChanged(e.target.value)}
                />
            </SearchContainer>
        </SearchBox>
        {searchResult && (
                <SearchResults>
                    <Contact userData={searchResult} setChat={setChat} userInfo={userInfo}/>
                </SearchResults>
        )}
        {contactList.map((userData) => (
             <Contact key={userData._id} userData={userData} setChat={setChat}/>
        ))}
      </Container>
  )
}


