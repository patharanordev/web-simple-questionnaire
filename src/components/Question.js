import * as React from 'react';
import { 
  Card,
  CardContent,
  Typography,
  Button, 
  Grid 
} from '@mui/material';

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

export default Question

Question.displayName = 'Question'