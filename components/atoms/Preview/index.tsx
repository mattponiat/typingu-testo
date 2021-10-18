import React, { useContext } from 'react';
import { WordsContext } from 'context/WordsContext';

const Preview: React.FC = () => {
    const [words] = useContext(WordsContext);

    return (
        <>
            {words.map((elem) => (
                <span key={elem}>{elem}</span>
            ))}
        </>
    );
};

export default Preview;
