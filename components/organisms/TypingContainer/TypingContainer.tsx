import TextArea from "components/atoms/TextArea";
import Preview from "components/atoms/Preview";
import Button from "components/atoms/Button";
import { WordsContext } from "Context/WordsContext";
import { useWordsAmount } from "Hooks/useWordsAmount";
//JSON
import words from "randomWords.json";

const englishWords = words.english;

const TypingContainer: React.FC = () => {
  const { setWordsAmount } = useWordsAmount();
  return (
    <WordsContext.Provider value={{ english: englishWords }}>
      <Preview />
      <TextArea />
      <Button onClick={() => setWordsAmount(10)}>10</Button>
    </WordsContext.Provider>
  );
};

export default TypingContainer;
