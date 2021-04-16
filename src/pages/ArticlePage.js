import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {

  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {   // can't put async here
    const fetchData = async () => {
      const result = await fetch(`/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name]); // updates only when name changes (when switch articles)

  if(!article) return <NotFoundPage />

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
    <section className="m-5 p-3 bg-white">
    <h1 className="mt-2">{article.title}</h1>

    {article.content.map((paragraph, key) => (
      <p className="pl-3" key={key}>{paragraph}</p>
    ))}
    <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    <h3 className="mt-3">Other Articles</h3>
    <ArticlesList articles={otherArticles} />
    </section>
    </>
  );
}
export default ArticlePage;
