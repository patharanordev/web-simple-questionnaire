import * as React from 'react';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { recordInfo } from '../store/info/infoSlice'
import { Dispatch } from 'redux'
import Question from '../components/Question'
import LinkTo from '../components/LinkTo'

import { questions } from '../constants'
import type { 
  PlayInfo, 
  QuestionInfo,
  SelectedChoice
} from '../interfaces'

type Props = {
  recordInfo: Function
}

type State = {
  info: PlayInfo
  questions: Array<QuestionInfo>
}

// To support sorting any data type
const shuffle = (arr:any) => {
  return arr
    .map((value:any) => ({ value, sort: Math.random() }))
    .sort((a:any, b:any) => a.sort - b.sort)
    .map(({ value }:any) => value)
}

class Quiz extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      info: {
        uid: '',
        quiz: {},
        score: 0
      },
      questions: []
    }
  }

  componentDidMount() {
    const { info } = this.state
    const shuffleQuestions = shuffle(questions)

    // Set unique ID to user
    info.uid = nanoid(10)
    // Shuffle question & choices
    shuffleQuestions.map((q:any) => q.choices = shuffle(q.choices))

    this.setState({ info, questions:shuffleQuestions })
  }

  record(data:SelectedChoice) {
    const { info } = this.state
    info.quiz[data.qid] = String(data.answer) === String(data.choice) ? 1 : 0
    info.score += info.quiz[data.qid]
    this.setState({ info })
  }

  onFinish() {
    this.props.recordInfo({ ...this.state.info })
  }

  render() {
    const { info, questions } = this.state
    return (
      <div>
        <h1>{`Hi "${info.uid}", let's start :)`}</h1>
        
        {
          questions.map((q:QuestionInfo, qIndex:number) => (
            <Question 
              key={qIndex}
              qid={q.qid}
              qIndex={qIndex}
              question={q.question}
              answer={q.answer}
              choices={q.choices}
              onClick={(data:SelectedChoice) => this.record(data)}
            />
          ))
        }
        
        <br/>

        <Button style={{ marginBottom:48 }} variant='contained' onClick={() => this.onFinish()}>
          <LinkTo to='/leaderboard' buttonName='Finish' />
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
  return {
    recordInfo: (info:PlayInfo) => dispatch(recordInfo(info))
  }
}

export default connect(null, mapDispatchToProps)(Quiz)