import styles from "../styles/main.module.scss";
import { GiBatMask } from "react-icons/gi";

function Main() {
  return (
    <main>
      <section aria-labelledby="main section">
        <h1 id="main section">Tonight in Gotham</h1>
        <p>
          No guns, no killing. Well, you see... I'm buying this hotel and
          setting some new rules about the pool area.
        </p>
        <p>
          It's not who I am underneath but what I do that defines me. It's ends
          here. I can't do that as{" "}
          <a className={styles.contentLink} href="#">
            Bruce Wayne
          </a>
          ... as a man. I'm flesh and blood. I can be ignored, destroyed. But as
          a symbol, I can be incorruptible, I can be everlasting.
        </p>
        <p>
          I'm Batman Hero can be anyone. Even a man knowing something as simple
          and reassuring as putting a coat around a young boy shoulders to let
          him know the world hadn't ended.
        </p>
        <p>
          {" "}
          This isn't a car. It's ends here. It was a dog. It was a big dog.
        </p>
        <p>
          I seek the means to{" "}
          <a className={styles.contentLink} href="#">
            fight injustice
          </a>
          . To turn fear against those who prey on the fearful. I'm not wearing
          hockey pads. It's not who I am underneath but what I do that defines
          me.
        </p>
        <h2>Joker on the loose</h2>
        <p>
          Swear to me! I'll be standing where l belong. Between you and the
          peopIe of Gotham. Well, you see... I'm buying this hotel and setting
          some new rules about the pool area. No guns, no killing. I will go
          back to Gotham and I will fight men Iike this but I will not become an
          executioner.
        </p>
        <p>
          My anger outweights my guilt. It was a dog. It was a big dog. This
          isn't a car. I'll be standing where l belong. Between you and the
          peopIe of{" "}
          <a className={styles.contentLink} href="#">
            Gotham
          </a>
          .
        </p>
      </section>
      <aside>
        <GiBatMask />
        <table>
          <caption><h3>Batman actors ranked</h3></caption>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Year of movie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Michael Keaton</td>
              <td>1989 - 1992 - 2023</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kevin Conroy(voice)</td>
              <td>1992 - present</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Christian Bale</td>
              <td>2005 - 2012</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Adam West</td>
              <td>1966 - 1968</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Ben Affleck</td>
              <td>2016 - 2017</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Robert Pattinson</td>
              <td>2022</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Val Kilmer</td>
              <td>1995</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Will Arnett(voice)</td>
              <td>2014 - 2019</td>
            </tr>
            <tr>
              <td>9</td>
              <td>George Clooney</td>
              <td>1997</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Keanu Reeves</td>
              <td>2022</td>
            </tr>
          </tbody>
        </table>
      </aside>
    </main>
  );
}

export default Main;
