import React from 'react';
import User from './User'

class People extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    return(
      <ul className="people-ul-list">
        <User dataList={this.props.dataList}/>
      </ul>
    )
  }

}

export default People;
