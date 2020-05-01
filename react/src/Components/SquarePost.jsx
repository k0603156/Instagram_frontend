import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  HeartFull as HeartFullIco,
  CommentFull as CommentFullIco
} from "./Icons";
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s linear;
  svg {
    fill: white;
  }
`;
const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  color: white;
  &:first-child {
    margin-right: 30px;
  }
`;
const NumberText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const SquarePost = ({ likeCount, commentCount, file }) => {
  return (
    <Container bg={file.url}>
      <Overlay>
        <Number>
          <HeartFullIco />
          <NumberText>{likeCount}</NumberText>
        </Number>
        <Number>
          <CommentFullIco />
          <NumberText>{commentCount}</NumberText>
        </Number>
      </Overlay>
    </Container>
  );
};
SquarePost.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired
};
export default SquarePost;
