import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-button">
      <p>Click below if you liked this player?</p>
      <button onClick={handleLikeClick}>
        <span role="img" aria-label="heart">❤️</span> 
      </button>
      <p>{likes} people liked this player</p>
    </div>
  );
};

export default LikeButton;
