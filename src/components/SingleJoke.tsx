import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface UseLocationState {
  state: {
    joke: string;
  }
}

const SingleJoke = () => {
  const { state: { joke } } = useLocation() as UseLocationState;
  const [textCopied, setTextCopied] = useState<boolean>(false);

  const handleClickToCopy = () => {
    navigator.clipboard.writeText(joke);
    setTextCopied(true);
  };
  
  return (
    <div>
      <p>{joke}</p>
      <button onClick={handleClickToCopy}>{!textCopied ? 'Copy text' : 'Copied!'}</button>
    </div>
  )
};

export default SingleJoke;