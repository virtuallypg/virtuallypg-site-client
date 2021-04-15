import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  }

  return (
    <>
<h3>Add a Comment</h3>
<section className="container">
   <div className="form-group">
     <label>
       <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
     </label>
   </div>
   <div className="form-group">
      <textarea className="form-control" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
    </div>
    <button onClick={() => addComment()}>Add Comment</button>
</section>
</>
  );

}

export default AddCommentForm;
