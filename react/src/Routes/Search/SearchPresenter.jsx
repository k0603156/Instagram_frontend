import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  min-height: 50vh;
  height: auto;
`;

const Section = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const UserSection = styled(Section)`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        {data.searchUser.length === 0 ? (
          <Section>
            <FatText text="일치하는 사용자를 찾을 수 없습니다" />
          </Section>
        ) : (
          <UserSection>
            {data.searchUser.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                userName={user.userName}
                isFollowing={user.isFollowing}
                avatar={user.avatar}
                isSelf={user.isSelf}
              />
            ))}
          </UserSection>
        )}

        {data.searchPost.length === 0 ? (
          <Section>
            <FatText text="일치하는 게시물을 찾을 수 없습니다" />
          </Section>
        ) : (
          <PostSection>
            {data.searchPost.map(post => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))}
          </PostSection>
        )}
      </Wrapper>
    );
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;
