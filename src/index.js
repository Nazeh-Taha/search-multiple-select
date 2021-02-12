import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { MultipleSelectReducer } from './state/reducer';


export const ExampleComponent = ({ options = [''], getOptionsData = () => { } }) => {

  const [state, dispatch] = MultipleSelectReducer();


  useEffect(() => {
    // change array of string to array of object
    (() => {
      dispatch({ type: 'createOptions', data: options })
    })()

  }, []);
//send the data to parent component
  useEffect(() => {
    getOptionsData(state.initOptions)
  }, [state.initOptions]);

  return (

    // Component container
    <div className={styles.container}>
      <input type="text" value={state.searchValue} className={styles.searchInput}
        placeholder="Search questions"
        onChange={(e) => dispatch({ type: 'handleChangeSearchValue', value: e.target.value })} />
      {/*---------------------------------------- options Container-------------------------------------------------- */}
      <div className={styles.optionsContainer}>
        {state.searchOptionResult.map(option => (
          //---------------------------------------- option Container--------------------------------------------------
          <div className={styles.optionContainer} style={option.check ? { color: '#807f7f' } : {}}
            onClick={() => {
              dispatch({ type: 'handleClickEvent', id: option.id });
            }}>
            <p>{option.option}</p>
            {option.check ?
              <div> &#10003;</div> :
              <div>&#10011;</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
