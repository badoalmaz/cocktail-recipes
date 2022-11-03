import Link from "next/link";
import MainContainer from "../components/MainContainer";
import { baseURL } from "../helpers/consts";

import styles from "../styles/categories.module.scss";

const Categories = ({ newDrinks }) => {
  function getRidOfTrash(str) {
    return str.replace("/", "_");
  }

  return (
    <MainContainer keywords={"categories"}>
      <div className={styles.categoriesList}>
        {newDrinks.map((user) => (
          <Link
            key={user.strCategory}
            href={`/categories/${getRidOfTrash(user.strCategory)}`}
          >
            <div className={styles.categoryCard}>
              <span className={styles.middle}>{user.strCategory}</span>
              <img className={styles.image} src={user.img} alt="" width={250} />
            </div>
          </Link>
        ))}
      </div>
    </MainContainer>
  );
};

export default Categories;

export async function getStaticProps() {
  const response = await fetch(`${baseURL}list.php?c=list`);

  const { drinks } = await response.json();

  const newDrinks = drinks?.map((obj) => {
    function renderPictures(str) {
      switch (str) {
        case "Homemade Liqueur":
          return "Liqueur";

        case "Other/Unknown":
          return "coctails";

        case "Shot":
          return "shot of alcohol";

        case "Shake":
          return "milkshake";

        case "Cocoa":
          return "hot chocolate";

        default:
          return str;
      }
    }
    return {
      ...obj,
      img: `https://source.unsplash.com/800x600/?${renderPictures(
        obj.strCategory
      )}`,
    };
  });

  return {
    props: { newDrinks }, // will be passed to the page component as props
  };
}
