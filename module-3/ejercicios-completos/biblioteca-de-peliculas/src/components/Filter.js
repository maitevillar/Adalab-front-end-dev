import React from 'react';

const Filter = (props) => {
  const updateCheckbox = () => {
    props.handleCheckbox()
  } 
console.log(props)

console.log(props)
  return (
    <form className="filter">
      <input type="text"
             placeholder= ' Introduce the title'
             name="searcher"
             id="input-form"
             onChange={props.handleInputValue}
      />
      
      <button > search </button>

      <label htmlFor="status">Running</label>
      <input onChange={updateCheckbox} type="checkbox" id="status" name="status" value="Status" checked={props.isRunning}/>
    </form>

  )
}

export default Filter;