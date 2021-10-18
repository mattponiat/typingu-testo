import TextArea from 'components/atoms/TextArea';
import Preview from 'components/atoms/Preview';
import Button from 'components/atoms/Button';
import { useWordsAmount } from 'hooks/useWordsAmount';

const TypingContainer: React.FC = () => {
    const { setWordsAmount } = useWordsAmount();
    return (
        <>
            <Preview />
            <TextArea />
            <Button onClick={() => setWordsAmount(10)}>10</Button>
        </>
    );
};

export default TypingContainer;
