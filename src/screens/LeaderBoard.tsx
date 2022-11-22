
import * as React from 'react';
import SummaryRow from '../components/SummaryRow';
import { connect } from 'react-redux'

import type { Players, PlayInfo } from '../interfaces'

type Props = {
  players?: Players
}

type State = {}

class LeaderBoard extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const { players } = this.props
    return (
      <div style={{ width:'100%', height:600, overflow:'scroll' }}>
        <h1>Leader Board</h1>

        {
          players && players.infos 
          ? players.infos.map((info:PlayInfo, index:number) => {
              return (
                <SummaryRow 
                  index={index}
                  info={info}
                />
              )
            })
          : null
        }
      </div>
    );
  }
}
 

const mapStateToProps = (state:any) => state
export default connect(mapStateToProps)(LeaderBoard);