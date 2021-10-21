//Components
import TypingContainer from "components/organisms/TypingContainer";
import { WordsProvider } from "context/WordsContext";
//GlobalStyle
import { GlobalStyle } from "components/globalStyle/globalStyle";

const Home: React.FC = () => {
  return (
    <>
      <WordsProvider>
        <TypingContainer />
      </WordsProvider>
      <GlobalStyle />
    </>
  );
};

export default Home;
