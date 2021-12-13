//Components
import TypingContainer from "components-ui/organisms/TypingContainer";
//Context
import { WordsProvider } from "context/WordsContext";
import { TypingProvider } from "context/TypingCheck";
//GlobalStyle
import { GlobalStyle } from "components-ui/globalStyle/globalStyle";

const Home: React.FC = () => {
  return (
    <>
      <WordsProvider>
        <TypingProvider>
          <TypingContainer />
        </TypingProvider>
      </WordsProvider>
      <GlobalStyle />
    </>
  );
};

export default Home;
