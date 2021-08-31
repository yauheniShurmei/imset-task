import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <section className={classes.card} style={props.style}>
      {props.children}
    </section>
  );
};

export default Card;
