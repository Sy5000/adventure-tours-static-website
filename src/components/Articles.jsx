// sub component
import Article from "./Article";
// css
import classes from "./Articles.module.css";
// data
import data from "../data.js";

export default function Articles() {
  // map data (data = array of various different app data objects)
  const articles = data.articles.map((article) => {
    return <Article title={article.title} text={article.text} />;
  });

  //   console.log("debug >", articles);
  return (
    <>
      <section className={classes.wrapper}>{articles}</section>
    </>
  );
}
