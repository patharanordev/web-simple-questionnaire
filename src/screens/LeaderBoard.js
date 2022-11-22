import React from 'react';
import SummaryRow from '../components/SummaryRow';
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const { players } = this.props
    return (
      <div>
        <h1>Leader Board</h1>

        {
          players?.infos?.map((info, index) => {
            return (
              <SummaryRow 
                index={index}
                info={info}
              />
            )
          })
        }
      </div>
    );
  }
}
 

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(LeaderBoard);