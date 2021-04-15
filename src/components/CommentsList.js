import React from 'react';

const CommentsList = ({ comments }) => (
  <>
  <h4>Comments:</h4>
  <div className="ml-2">
  {comments.map((comment, key) => (
    <div className= "comment" key={key}>
      <h4>{comment.username}</h4>
      <p>{comment.text}</p>
    </div>
  ))}
  </div>
  </>
)

export default CommentsList;
