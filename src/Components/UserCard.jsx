import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import FollowButton from "./FollowButton";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CardAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;
const CardLink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;
const UserCard = ({ id, userName, isFollowing, avatar, isSelf }) => (
  <Card>
    <CardAvatar url={avatar} size={"md"} />
    <CardLink to={`/${userName}`}>
      <FatText text={userName} />
    </CardLink>
    {!isSelf && <FollowButton isFollowing={isFollowing} id={id} />}
  </Card>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
