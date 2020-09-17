import React from "react";
// Components Imports
import ArticleCard from "../components/ArticleCard"; // this is the realtive path to this file
// Data Imports
import Data from "../components/data"; // this is the location of our data JSON

function ArticleListing() {
  return (
    <main>
      <header>
        <h1>Articles</h1>
      </header>
      {Data.map((article, i) => (
        <ArticleCard key={i} articleData={article} />
      ))}
    </main>
  );
}

export default ArticleListing;
