import Link from "next/link";
import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import { baseURL } from "../../helpers/consts";
import styles from "../../styles/recipe.module.scss";

export default function Recipe({ obj }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={obj.name}>
      {obj.drinks.map((obj) => (
        <div key={obj.idDrink} className={styles.recipe}>
          <div className={styles.imageCont}></div>
          <img src={obj.strDrinkThumb} alt="" />
          <div className={styles.recipeDetails}>
            <div className={styles.recipeDetailsTitle}>
              <h1>{obj.strDrink}</h1>
            </div>
            {/* <div>
              <h4>Category:</h4>
              <p>{obj.strCategory}</p>

              <h4>Glass:</h4>
              <p>{obj.strGlass}</p>

              <h4>Alcoholic:</h4>
              <p>{obj.strAlcoholic}</p>
            </div> */}

            <div className={styles.detailedInfo}>
              <div>
                <h4>Ingredients:</h4>
                <ol>
                  <li>
                    {obj.strIngredient1} {obj.strMeasure1}
                  </li>
                  <li>
                    {obj.strIngredient2} {obj.strMeasure2}
                  </li>
                  <li>
                    {obj.strIngredient3} {obj.strMeasure3}
                  </li>
                  <li>
                    {obj.strIngredient4} {obj.strMeasure4}
                  </li>
                  <li>
                    {obj.strIngredient5} {obj.strMeasure5}
                  </li>
                  <li>
                    {obj.strIngredient6} {obj.strMeasure6}
                  </li>
                  <li>
                    {obj.strIngredient7} {obj.strMeasure7}
                  </li>
                  <li>
                    {obj.strIngredient8} {obj.strMeasure8}
                  </li>
                  <li>
                    {obj.strIngredient9} {obj.strMeasure9}
                  </li>
                  <li>
                    {obj.strIngredient10} {obj.strMeasure10}
                  </li>
                  <li>
                    {obj.strIngredient11} {obj.strMeasure11}
                  </li>
                  <li>
                    {obj.strIngredient12} {obj.strMeasure12}
                  </li>
                  <li>
                    {obj.strIngredient13} {obj.strMeasure13}
                  </li>
                  <li>
                    {obj.strIngredient14} {obj.strMeasure14}
                  </li>
                  <li>
                    {obj.strIngredient15} {obj.strMeasure15}
                  </li>
                </ol>
              </div>

              <div>
                <h4>Instructions:</h4>
                <p>
                  {obj.strInstructions ||
                    obj.strInstructionsIT ||
                    obj.strInstructionsDE ||
                    obj.strInstructionsES ||
                    obj.strInstructionsFR}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const response = await fetch(`${baseURL}lookup.php?i=${params.id}`);
  const obj = await response.json();

  return {
    props: { obj }, // will be passed to the page component as props
  };
}
