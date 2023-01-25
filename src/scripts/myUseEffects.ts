import { useEffect } from 'react';


export const useInputEffect = (
  input: string,
  inputRef: React.RefObject<HTMLInputElement>,
  compareNumbers: (value1: number, value2: number) => void,
  randomNumbers: number[]
  ) => {
  useEffect(() => {
    input.length > 0 && compareNumbers(Number(inputRef.current?.value[input.length-1]), randomNumbers[input.length-1]);
  }, [input]);
}

  
export const useLevelEffect = (
    gameStatus: number,
    level: number,
    setgameStatus: (value: number) => void
  ) => {
  useEffect(() => {
    gameStatus > 0 && setgameStatus(1);
  }, [level]);
}