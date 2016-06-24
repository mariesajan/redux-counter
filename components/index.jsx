import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from '../reducers/counter';

const store= createStore(counter);

const Counter =({
  value,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick= {onIncrement}>
        Increment
      </button>
      <button onClick= {onDecrement}>
        Decrement
      </button>
    </div>
  );
}

Counter.propTypes= {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const render =() => {
    ReactDOM.render(
      <Counter
        value= {store.getState()}
         onIncrement= {()=>
                       store.dispatch({
                           type: 'INCREMENT'
                        })
                      }
         onDecrement= {()=>
                       store.dispatch({
                           type: 'DECREMENT'
                        })
                      }
      />
      , document.getElementById('root')
    );
};

store.subscribe(render);

render();
