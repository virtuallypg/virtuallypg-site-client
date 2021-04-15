import React from 'react';
import ArticlesList from '../components/ArticlesList'
import articleContent from './article-content';

const ArticlesListPage = () => (
  <>
  <section >
  <h1 className="display-5 mt-5 ml-3 pl-4 pt-4 ">My Blog</h1>
  <ArticlesList articles={articleContent} />
  </section>
  </>
);

export default ArticlesListPage;
