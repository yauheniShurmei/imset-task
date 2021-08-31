import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <section className={classes.section}>
      <nav>
        <div className={classes.burger_menu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li>
            <span>CENTRUM OBSŁUGI KLIENTA</span>
          </li>
          <li>
            <a href="tel:800 080 800">800 080 800</a>
          </li>
          <li>
            <input placeholder="SZUKAJ" />
          </li>
          <li>
            <a>STREFA ABONANTA</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
