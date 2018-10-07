import engine from '..';
import getRandom from '../utils';

const description = 'What number is missing in this progression?';

const getProgression = (firstElem, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElem + step * i);
  }
  return progression;
};

const gameProgression = () => {
  const generateQuestionAndAnswer = () => {
    const firstElem = getRandom(1, 10);
    const step = getRandom(1, 10);
    const progressionLength = 10;

    const arr = getProgression(firstElem, step, progressionLength);
    const elementForReplace = getRandom(1, progressionLength) - 1;
    const correctAnswer = arr[elementForReplace].toString();

    arr.splice(elementForReplace, 1, '..');
    const question = arr.join(' ');

    return { question, correctAnswer };
  };
  engine(description, generateQuestionAndAnswer);
};

export default gameProgression;
