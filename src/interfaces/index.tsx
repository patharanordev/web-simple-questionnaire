interface Players {
  infos: Array<PlayInfo>
}

interface PlayInfo {
  uid: string
  quiz: any
  score: number
}

interface RowContent {
  key?: string
  index: number
  info: PlayInfo
  onClick?: Function
}

interface QuestionInfo {
  qid: string
  question: string
  answer: string|number
  choices: Array<string|number>
  
}

interface QuestionContent {
  key?: string
  qid: string
  qIndex: number
  question: string
  answer: string|number
  choices: Array<string|number>
  onClick: Function
}

interface NavItem {
  label: string
  link: string
  component: object
}

interface SelectedChoice {
  qid: string
  answer: string|number
  choice: string|number
}

export type {
  Players,
  PlayInfo,
  RowContent,
  QuestionInfo,
  QuestionContent,
  NavItem,
  SelectedChoice
}