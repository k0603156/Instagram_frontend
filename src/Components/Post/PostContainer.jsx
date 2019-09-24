import React, { useState, useEffect } from "react";
import { useCooldown } from "use-cooldown";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  caption,
  location
}) => {
  const [isLikedState, setIsLiked] = useState(isLiked);
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const [cooledDown, setCooledDown] = useCooldown(1500);
  const newComment = useInput("");

  const addComment = useMutation(ADD_COMMENT, {
    variables: {
      postId: id,
      text: comments.value
    }
  });

  const slide = React.useCallback(() => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 2000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 2000);
    }
  }, [currentItem, files.length]);

  const toggleLike = async () => {
    if (cooledDown) {
      setCooledDown(false);
      if (isLikedState === true) {
        setIsLiked(false);
        setLikeCount(likeCountState - 1);
      } else {
        setIsLiked(true);
        setLikeCount(likeCountState + 1);
      }
      try {
        await toggleLikeMutation();
      } catch (error) {
        setIsLiked(isLikedState);
        setLikeCount(likeCountState);
        toast.error(
          `Sorry. Can't register ${isLikedState ? "unLike" : "like"}`
        );
      }
    }
  };
  useEffect(() => {
    slide();
  }, [currentItem, slide]);

  return (
    <PostPresenter
      user={user}
      location={location}
      caption={caption}
      files={files}
      likeCount={likeCountState}
      isLiked={isLikedState}
      comments={comments}
      createdAt={createdAt}
      newComment={newComment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      toggleLike={toggleLike}
    />
  );
};
PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired
      }).isRequired
    })
  ),
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};
export default PostContainer;
