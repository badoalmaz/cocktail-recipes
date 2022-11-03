import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <>
      <MainContainer keywords={"Main page"}>
        <div className="mainPage">
          <h1>Coming Soon</h1>
        </div>
      </MainContainer>

      <style jsx>
        {`
          .mainPage {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            font-size: 7vw;
          }
        `}
      </style>
    </>
  );
};

export default Index;
