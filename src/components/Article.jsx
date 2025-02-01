// css
import classes from "./Articles.module.css";

export default function Article(props) {
  return (
    <article className={classes.card}>
      <img
        src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
        alt="Hot air balloons"
      />
      <header>
        <h4>{props.title}</h4>
      </header>
      <div>
        <p>{props.text}</p>
      </div>
      <footer>link</footer>
    </article>
  );
}
