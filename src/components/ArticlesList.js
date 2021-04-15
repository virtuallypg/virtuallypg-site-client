import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
  <>
  <div className="">
    {articles.map((article,key) => (
      <Link className="" key={key} to={`/article/${article.name}`}>
          <blockquote className="ml-4 mr-4 p-2 bg-white rounded">
            <h3 className="text-dark p-3">{article.title}</h3>
            <p className="text-secondary pl-3 pr-3">{article.content[0].substring(0,150)}...</p>
          </blockquote>
      </Link>
    ))}
  </div>
  </>
);

export default ArticlesList;
