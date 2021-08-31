import Card from "../Card/Card";
import classes from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={classes.main_content}>
      <Card
        style={{
          backgroundImage: `url("../first_image.png")`,
          width: `${(100 / 3) * 2}%`,
          height: "300px",
        }}
      >
        <h1>ZYSKAJ WĘCEJ</h1>
        <div>
          <div>
            <img src="mouse_icon.png" />
            <span>+</span>
            <img src="present_icon.png" />
          </div>
          <h1>KUP INTERNET,</h1>
          <div>
            <span>
              A{" "}
              <span>
                HBO<span>GO</span>
              </span>{" "}
              DOSTANIESZ ZA
            </span>
            <span>1zł</span>
          </div>
        </div>
      </Card>
      <Card
        style={{
          backgroundImage: `url("../second-image.png")`,
          width: `${100 / 3}%`,
          height: "300px",
        }}
      >
        <div className={classes.second_section_block_first}>
          <h1>VOD</h1>
          <span>VIDEO NA ŻĄDANIE</span>
        </div>
        <div className={classes.second_section_block_second}>
          <img src="outline_arrow_back_ios_black_24dp.png" />
          <img src="outline_arrow_forward_ios_black_24dp.png" />
        </div>
        <div className={classes.second_section_block_third}>
          <div>
            <h3>Kapitan Ameryka: Zimowy żołnierz</h3>
            <span>
              NOWOŚCI - AKCJA<span> 14,00 zł</span>
            </span>
          </div>
          <div>
            <span>FILM OBEJRZY</span>
            <span>125</span>
            <img src="people_icon.png" />
          </div>
        </div>
      </Card>
      <Card
        style={{
          backgroundColor: "#675190",
          width: `${(100 / 3) * 2}%`,
          height: "300px",
        }}
      >
        <div>
          <h1>STWÓRZ SWÓJ WŁASNY PAKIET</h1>
          <span>TELEWIZJA - INTERNET - TELEFON</span>
        </div>
        <div className={classes.second_block}>
          <div>
            <img src="tv_icon.png" />
            <span>WYBIERZ ULUBIONE KANAŁY TV</span>
          </div>
          <div>
            <img src="purple_mouse_icon.png" />
            <span>WYBIERZ PRĘDKOŚĆ INTERNETU</span>
          </div>
          <div>
            <img src="purple_pone_icon.png" />
            <span>WYBIERZ ILOŚĆ MINUT NA ROZMOWY</span>
          </div>
          <div>
            <img src="wifi_icon.png" />
            <span>WYBIERZ INTERNET MOBILNY</span>
          </div>
        </div>
        <div>
          <button>STWÓRZ PAKIET</button>
          <span>lub wybierz pakiet, przygotowany przez nas</span>
        </div>
      </Card>
      <Card
        style={{
          backgroundImage: `url("../third_image.png")`,
          backgroundPosition: "center 60px",
          width: `${100 / 3}%`,
          height: "300px",
          padding: "0px !important",
        }}
      >
        <div className={classes.four_section_block_one}>
          <h1>TERAZ W TV ONLINE</h1>
          <div>
            <span>TERAZ OGLĄDA</span>
            <span>258</span>
            <img src="people_icon.png" />
          </div>
        </div>
        <div className={classes.four_section_block_two}>
          <img src="outline_arrow_back_ios_black_24dp.png" />
          <img src="play_icon.png" />
          <img src="outline_arrow_forward_ios_black_24dp.png" />
        </div>
        <div className={classes.four_section_block_three}>
          <h3>Anatomia magii</h3>
          <span>DISCOVERY CHANEL</span>
        </div>
      </Card>
      <Card style={{ backgroundColor: "#262626", width: `${100 / 3}%` }}>
        <h1>PAKIET 20 GB LTE</h1>
        <span>PROMOCJA</span>
        <span>Dla tych, którzy nie wyobrażają sobie życia bez internetu:</span>
        <ul>
          <li>oglądaj filmy umieszczone w sieci</li>
          <li>ściągaj duże pliki</li>
          <li>korzystaj z poczty, komunikatora</li>
          <li>sufruj swobodnie</li>
        </ul>
        <div className={classes.fifth_section_block_last}>
          <h3>SWOBODA I MOBILNOŚĆ ZA</h3>
          <span>50zł</span>
        </div>
      </Card>
      <Card
        style={{
          backgroundImage: `url("../gradient_image.png")`,
          width: `${100 / 3}%`,
        }}
      >
        <div className={classes.sixth_section_block_first}>
          <h1>NASZ SUPPORT</h1>
          <span>PROPOZYCJE NASZEGO TV-MANIAKA NA WEEKEND</span>
        </div>
        <div className={classes.sixth_section_block_second}>
          <div>
            <img src="man_image.png" />
          </div>
          <div>
            <div>
              <span>ZOBACZ CO KUBA ZNALAZŁ CIEKAWEGO W TV NA WEEKEND</span>
              <img src="arrow_right.png" />
            </div>
            <div>
              <span>PODYSKUTUJ Z NIM O FILMACH JUŻ W PIĄTEK 15.09.2014</span>
              <img src="message_icon.png" />
            </div>
          </div>
        </div>
        <span className={classes.sixth_section_block_third}>
          Zostań naszym ekspertem i poprowadź przedweekendowy chat z
          użytkownikami
        </span>
      </Card>
      <Card
        style={{
          backgroundColor: "white",
          backgroundImage: `url("../phone_image.png")`,
          backgroundPosition: "top 160px left 80px",
          backgroundSize: "80%",
          width: `${100 / 3}%`,
        }}
      >
        <div className={classes.seventh_section_block_first}>
          <h1>APLIKACJA</h1>
          <span>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesqsdf due, non feilis.
          </span>
        </div>
        <div>
          <img src="android_icon.png" />
          <img src="apple_icon.png" />
          <img src="windows_icon.png" />
        </div>
      </Card>
    </div>
  );
};

export default MainContent;
