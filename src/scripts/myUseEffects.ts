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


export const useGameStatusEffect = (
  gameStatus: number,
  level: number,
  setScore: (value: number) => void,
  setInput: (value: string) => void,
  setSecondsLeft: (value: number) => void,
  setRandomNumbers: (value: number[]) => void,
  setgameStatus: (value: number) => void,
  generateRandomArray: (value: number) => number[]
  ) => {
  useEffect(() => {
    if (gameStatus == 1 || gameStatus == 2) {
      setScore(0);
      setInput('');
      setSecondsLeft(10 + Math.floor(level * 0.1));
      if (gameStatus == 1) {setRandomNumbers(generateRandomArray(3+level));}
      setgameStatus(0);
    }
  }, [gameStatus]);
}


export const useTimerEffect = (
  secondsLeft: number,
  setSecondsLeft: (value: number) => void
) => {
useEffect(() => {
  if (secondsLeft > 0) {
    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }
}, [secondsLeft]);
}