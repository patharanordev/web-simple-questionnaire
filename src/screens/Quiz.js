import * as React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { recordInfo } from '../store/info/infoSlice'
import Question from '../components/Question'

import { questions } from '../constants'

const shuffle = (arr) => {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

class Quiz extends React.Component {
  constructor(props) {
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
    shuffleQuestions.map((q) => q.choices = shuffle(q.choices))

    this.setState({ info, questions:shuffleQuestions })
  }

  record(data) {
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
        
        <Button variant='contained' onClick={() => this.onFinish()}>
          <NavLink to='/leaderboard'>Finish</NavLink>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recordInfo: (info) => dispatch(recordInfo(info))
  }
}

export default connect(null, mapDispatchToProps)(Quiz)