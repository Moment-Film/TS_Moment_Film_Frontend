import React, { useState } from "react";
import { styled } from "styled-components";
import { posts } from "../../api/mockData";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { searchUser } from "../../api/searchUser";

const SearchUser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const searchTermHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const { data, isLoading, isError, error } = useQuery(['searchUser', searchTerm], () => searchUser({ username: searchTerm }), {
    enabled: searchTerm !== '',
  });

  const searchBtnHandler = () => {
    if (isLoading) {
      alert('검색중입니다, 잠시만 기다려 주세요!');
    } else if (isError) {
      alert(`에러가 발생했습니다 : ${error}`);
    } else {
      console.log(data);
      navigate('/searchresult');
    }
  };

  return (
    <>
      <ContentWrap>
        <Align>
          <What>무엇을 도와드릴까요?</What>

          <SearchWrap>
            <Search onChange={searchTermHandler} placeholder="검색어를 입력해 주세요." />
            <SearchBtn onClick={searchBtnHandler}>🔍</SearchBtn>
          </SearchWrap>

          <div>추천 검색어</div>
          <TagBox>
            {posts.map((item) => {
              return <Tag key={item.id}>{item.id}</Tag>;
            })}
          </TagBox>

          <div>나에게 맞는 크리에이터 보기</div>
          <ImgBox>
            {posts.map((item) => {
              return (
                <Img key={item.id} src={item.images} alt="" />
              );
            })}
          </ImgBox>
        </Align>
      </ContentWrap>
    </>
  );
};

export default SearchUser;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0 100px 0;
`;

const Align = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const What = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const SearchWrap = styled.div`
  display: flex;
`;

const Search = styled.input`
  width: 98%;
  padding: 10px;
  background-color: #ececec;
  border: none;
  border-bottom: 3px solid grey;
  outline: none;
`;

const SearchBtn = styled.div`
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
`;

const TagBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.div`
  padding: 5px;
  background-color: grey;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4%;
`;

const Img = styled.img`
  width: 48%;
  cursor: pointer;
`;
