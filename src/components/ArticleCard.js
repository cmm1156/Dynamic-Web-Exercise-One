import React from "react";

import { Link } from "react-router-dom"; // See react router documentation https://reactrouter.com/web/guides/quick-start

import { days, months } from "./dateValues";

function ArticleCard({ articleData }) {
  const date = new Date(articleData.publishedDate);
  const dayOfWeek = date.getDay();
  const calendarDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="ArticleCard">
      <div className="ArticleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt}></img>
      </div>
      <div className="ArticleCardText">
        <h2>{articleData.title}</h2>
        <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
        <p>{articleData.blurb}</p>
        <Link to={`/article/${articleData.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default ArticleCard;

/*









*/

/*
when inserting in jsx html
must use { } literal brackets because it is the key of the JSON
without the brackets, it will return literally what you typed

example:
{articleData.title} will return "Article One"
articleData.title will return "articleData.title"

*/
