import * as React from 'react';
import { 
  Card,
  CardContent,
  Typography,
  Button, 
  Grid 
} from '@mui/material';

import { QuestionContent } from '../interfaces'

const STYLE_DEFAULT_CHOICE = { width: '100%', backgroundColor: '#00f', color: '#fff' }
const STYLE_SELECTED_CHOICE = { width: '100%', backgroundColor: '#0f0', color: '#000' }

const Question = (props:QuestionContent) => {
  const [selectedIdx, setSelected] = React.useState(-1)
  const [choiceStyle, setChoiceStyle] = React.useState([])
  const selectStyleByIndex = () => {
    const btnStyles:any = []
    props.choices.map((_, i) => {
      btnStyles.push(selectedIdx==i 
        ? STYLE_SELECTED_CHOICE 
        : STYLE_DEFAULT_CHOICE
      )
    })
    setChoiceStyle(btnStyles)
  }

  // Initial
  React.useEffect(() => selectStyleByIndex(), [props.choices])
  
  // On change
  React.useEffect(() => {
    selectStyleByIndex()
    console.log(`[useEffect] Selected on choice index : ${selectedIdx}`)
  }, [selectedIdx])

  return (
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
                  sx={choiceStyle[cIndex]}
                  onClick={() => {
                    setSelected(cIndex)
                    props.onClick({ 
                      qid:props.qid, 
                      answer:props.answer, 
                      choice 
                    })
                  }}
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
}

export default Question

Question.displayName = 'Question'