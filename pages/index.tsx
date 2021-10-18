//Components
import TypingContainer from 'components/organisms/TypingContainer/TypingContainer';
import { WordsProvider } from 'context/WordsContext';

const Home: React.FC = () => {
    return (
        <>
            <WordsProvider>
                <TypingContainer />
            </WordsProvider>
        </>
    );
};

export default Home;
