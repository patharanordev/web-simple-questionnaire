import * as React from 'react';
import { 
  Card,
  CardContent,
  Typography,
  Button, 
  Grid 
} from '@mui/material';

import { QuestionContent } from '../interfaces'

const Question = (props:QuestionContent) => (
  <Card key={`card-${props.qid}`} sx={{ maxWidth: 800, marginBottom: 2 }}>
    <CardContent key={`card-content-${props.qid}`}>
      <Typography 
        key={`question-${props.qid}`} 
        gutterBottom variant="h5" component="div"
        sx={{ textAlign:'left' }}
      >
        {`${props.qIndex+1}. ${props.question} ?`}
      </Typography>
      <br/>
      <Grid key={`grid-container-${props.qid}`} container spacing={2}>
        {
          props.choices.map((choice, cIndex) => (
            <Grid key={`choice-grid-${cIndex}-${props.qid}`} item xs={6}>
              <Button 
                key={`choice-label-${cIndex}-${props.qid}`} 
                variant='contained' 
                sx={{ width:'100%' }}
                onClick={(e) => props.onClick({ qid:props.qid, answer:props.answer, choice })}
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

export default Question

Question.displayName = 'Question'