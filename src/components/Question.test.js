import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from './Question';

test('renders question and 4-choices', async () => {
  const qIndex = 0
  const question = { 
    qid:'qid1', 
    question:'Question#1', 
    answer:'1', 
    choices: [1, 2, 3, 4] 
  }

  render(<Question 
    key={`quiz-${qIndex}`}
    qid={question.qid}
    qIndex={qIndex}
    question={question.question}
    answer={question.answer}
    choices={question.choices}
    onClick={(data) => {

    }}
  />);
  const questionElement = screen.getByText(`${qIndex+1}. ${question.question} ?`);
  const choiceElements = await screen.findAllByRole('button')
  expect(questionElement).toBeInTheDocument();
  expect(choiceElements).toHaveLength(4);
});
