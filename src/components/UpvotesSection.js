import React from 'react';
import { Button } from 'react-bootstrap';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo}) => {

  const upvoteArticle = async () => {
    const result = await fetch(`api/articles/${articleName}/upvote`, {
      method: 'post',
    });
    const body = await result.json();
    setArticleInfo(body)
  }

  return (
  <section>
        <Button className="btn-sm float-left mr-2" variant="warning" onClick={() => upvoteArticle()}>Add Upvote</Button>

        <p className="pl-3">Upvoted {upvotes} times!</p>

  </section>
  );
}

export default UpvotesSection;
