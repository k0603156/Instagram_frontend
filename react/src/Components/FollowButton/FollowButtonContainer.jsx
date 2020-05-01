import React, { useState } from "react";
import PropTypes from "prop-types";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import { useMutation } from "react-apollo-hooks";

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [isFollowingState, setIsFollowingState] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW, { variables: { id } });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = () => {
    if (isFollowingState === true) {
      setIsFollowingState(false);
      try {
        unfollowMutation();
      } catch {}
    } else {
      setIsFollowingState(true);
      followMutation();
    }
  };
  return (
    <FollowButtonPresenter isFollowing={isFollowingState} onClick={onClick} />
  );
};

FollowButtonContainer.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};
export default FollowButtonContainer;
