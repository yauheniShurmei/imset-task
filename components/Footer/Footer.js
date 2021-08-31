import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <main className={classes.main_block_width100}>
      <footer className={classes.footer}>
        <section className={classes.first_section}>
          <div>
            <div className={classes.first_block}>
              <span>APLIKACJA VECTRA</span>
              <div>
                <img src="outline_tablet_black_24dp.png" />
                <a href="#">
                  <span>POBIERZ</span>
                  <span>APLIKACJĘ</span>
                </a>
              </div>
            </div>
            <div className={classes.second_block}>
              <span>INFOLINIA SPRZEDAŻOWA</span>
              <span>ZADZWOŃ LUB WYŚLIJ SMS</span>
              <div>
                <img src="outline_phone_black_24dp.png" />
                <img src="outline_phone_iphone_black_24dp.png" />
                <a href="tel: 601 601 601">601 601 601</a>
              </div>
              <span>(wg stawek operatorów)</span>
            </div>
          </div>
          <div className={classes.third_block}>
            <ul>
              <li>O NAS</li>
              <li>KONTAKT</li>
              <li>KARIERA</li>
              <li>DLA MEDIÓW</li>
            </ul>
            <div>
              <img src="facebook_icon.png" />
              <img src="twitter_icon.png" />
              <img src="youTube_icon.png" />
            </div>
          </div>
        </section>
        <section className={classes.second_section}>
          <span>CENTRUM OBSŁUGI KLIENTA</span>
          <span>ZADZWOŃ</span>
          <div>
            <img src="outline_phone_black_24dp.png" />
            <a href="tel: 800 080 800">800 080 800</a>
          </div>
          <span>Z TELEFONU KOMÓRKOWEGO</span>
          <a href="tel: 58 500 65 00">58 500 65 00</a>
          <span>(wg stawek operatorów)</span>
        </section>
      </footer>
    </main>
  );
};

export default Footer;
