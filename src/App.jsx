import React from 'react'

const App = () => {
  return (
    <>
      <div className="calculator">

        <input type="number" placeholder="0"></input>

        <div class="calculator-buttons">
          <button className="calc-button is-clear">C</button>
          <button className="calc-button is-divide">&divide;</button>

          <button className="calc-button">7</button>
          <button className="calc-button">8</button>
          <button className="calc-button">9</button>
          <button className="calc-button is-times">&times;</button>

          <button className="calc-button">4</button>
          <button className="calc-button">5</button>
          <button className="calc-button">6</button>
          <button className="calc-button is-minus">&minus;</button>

          <button className="calc-button">1</button>
          <button className="calc-button">2</button>
          <button className="calc-button">3</button>
          <button className="calc-button is-plus">&#43;</button>


          <button className="calc-button is-zero">0</button>
          <button className="calc-button is-equals">&#61;</button>
        </div>
      </div>

    </>
  )
}


export default App
