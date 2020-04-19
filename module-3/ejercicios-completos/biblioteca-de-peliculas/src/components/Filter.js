import React from 'react';

const Filter = (props) => {

  const updateCheckbox = () => {
    props.handleCheckbox()
  }
console.log(props)
  return (
    <form className="filter">
      <label htmlFor="status">Status</label>
      <input onChange={updateCheckbox} type="checkbox" id="status" name="status" value="Status" checked={props.isRunning}/>
    </form>

  )
}

export default Filter;