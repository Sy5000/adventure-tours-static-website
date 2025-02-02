// css
import classes from "./Articles.module.css";

export default function Article(props) {
  return (
    <article className={classes.card}>
      <img src={props.img.src} alt={props.img.alt} />
      <div className={classes.textContent}>
        <h4>{props.title}</h4>
        <p className={classes.body}>{props.text}</p>
      </div>
      <footer className={classes.footer}>link to Article &#11157;</footer>
    </article>
  );
}
