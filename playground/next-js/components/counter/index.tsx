import React, { useEffect } from "react";
import { OPERATORS } from "./consts";

// Może to jakiś kierunek?
// abstract class TState<T> {
//   public _value: T;

//   constructor() {
//     this._value = '' as unknown as T;
//   }

//   get value(): T {
//     return this.value;
//   }

//   set value(value: T | ((prevValue: T) => T)) {}
// }

const Counter = ({
  initialValue = 0,
}) => {
  let $inputValues: State<{ operator: string, value: number }> = {
    operator: '++',
    value: 1,
  };

  let $counter: State<number | bigint> = initialValue;

  const handleInputChange = (
    { target: { name, value } }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    // TODO: Handle such case:
    // $inputValues[name] = value;

    $inputValues = (prevValue) => ({
      ...prevValue,
      [name]: value,
    });
  };

  const handleOperatorChange = () => {
    const { operator } = $inputValues;
    const value = +$inputValues.value;

    switch (operator) {
      case OPERATORS[0]:
        $counter++;
        break;
      case OPERATORS[1]:
        $counter--;
        break;
      case OPERATORS[2]:
        $counter += value;
        break;
      case OPERATORS[3]:
        $counter -= value;
        break;
      case OPERATORS[4]:
        $counter *= value;
        break;
      case OPERATORS[5]:
        $counter /= value;
        break;
      case OPERATORS[6]:
        $counter **= value;
        break;
      case OPERATORS[7]:
        $counter %= value;
        break;
      case OPERATORS[8]:
        $counter &= value;
        break;
      case OPERATORS[9]:
        $counter |= value;
        break;
      case OPERATORS[10]:
        $counter ^= value;
        break;
      default:
        $counter = value;
    }
  };

  const setCounterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    $counter = event.target.value;
  }

  const resetCounter = () => {
    $counter = initialValue;
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
      <label>
        <span>Counter:</span>
        <input
          name="counter"
          type="text"
          value={$counter}
          onChange={setCounterValue}
        />
      </label>
      <label>
        <span>Operator:</span>
        <select
          name="operator"
          value={$inputValues.operator}
          onChange={handleInputChange}
        >
          {OPERATORS.map((operator) => (
            <option key={operator} value={operator}>
              {operator}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Operator value:</span>
        <input
          name="value"
          value={$inputValues.value}
          onChange={handleInputChange}
        />
      </label>
      <button name="calculate" type="button" onClick={handleOperatorChange}>
        Calculate
      </button>
      <button name="reset" type="button" onClick={resetCounter}>
        Reset
      </button>
    </form>
  );
}

export default Counter;
