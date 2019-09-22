import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment } from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div``;

const File = styled.img`
  max-width: 100%;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

export default ({
  user: { userName, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt
}) => (
  <Post>
    <Header>
      <Avatar
        size="sm"
        url={
          avatar ||
          "data:image/png;base64,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"
        }
      />
      <UserColumn>
        <FatText text={userName} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map(file => <File key={file.id} id={file.id} src={file.url} />)}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
  </Post>
);
