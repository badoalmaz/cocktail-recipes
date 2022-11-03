import Link from "next/link";
import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import { baseURL } from "../../helpers/consts";
import styles from "../../styles/category.module.scss";

export default function Category({ obj }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={obj.name}>
      <div className={styles.drinksContainer}>
        {obj.drinks.map((obj) => (
          <Link key={obj.idDrink} href={`/recipes/${obj.idDrink}`}>
            <div className={styles.drink}>
              <img src={obj.strDrinkThumb} alt="" width="250" />
              <span className={styles.text}> {obj.strDrink}</span>
            </div>
          </Link>
        ))}
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);

  function getRidOfTrash(str) {
    return str.replace("_", "/");
  }

  const response = await fetch(
    `${baseURL}filter.php?c=${getRidOfTrash(params.id)}`
  );
  const obj = await response.json();

  return {
    props: { obj }, // will be passed to the page component as props
  };
}
