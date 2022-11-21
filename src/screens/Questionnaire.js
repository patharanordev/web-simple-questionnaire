import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { questions } from '../constants'

const shuffle = (arr) => {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const Question = ({ qid, qIndex, question, answer, choices, onClick }) => (
  <Card key={`card-${qid}`} sx={{ maxWidth: 345, marginBottom: 2 }}>
    <CardContent key={`card-content-${qid}`}>
      <Typography key={`question-${qid}`} gutterBottom variant="h5" component="div">
        {`${qIndex+1}. ${question} ?`}
      </Typography>
      <Grid key={`grid-container-${qid}`} container spacing={2}>
        {
          choices.map((choice, cIndex) => (
            <Grid key={`choice-grid-${cIndex}-${qid}`} item xs={6}>
              <Button 
                key={`choice-label-${cIndex}-${qid}`} 
                variant='contained' 
                onClick={(e) => onClick({ qid, answer, choice })}
              >
                {choice}
              </Button>
            </Grid>
          ))
        }
      </Grid>
    </CardContent>
  </Card>
)

class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info:{},
      questions: []
    }
  }

  componentDidMount() {
    const shuffleQuestions = shuffle(questions)
    shuffleQuestions.map((q) => q.choices = shuffle(q.choices))

    this.setState({ questions:shuffleQuestions })
  }

  record(data) {
    const { info } = this.state
    info[data.qid] = String(data.answer) === String(data.choice) ? 1 : 0
    this.setState({ info })
  }

  render() {
    const { questions } = this.state
    return (
      <div>
        <h1>Questionnaire</h1>
        
        {
          questions.map((q, qIndex) => (
            <Question 
              qid={q.qid}
              qIndex={qIndex}
              question={q.question}
              answer={q.answer}
              choices={q.choices}
              onClick={(data) => this.record(data)}
            />
          ))
        }
        
        <Button variant='contained'>
          <NavLink to='/leaderboard'>Finish</NavLink>
        </Button>
      </div>
    );
  }
}
 
export default Questionnaire;