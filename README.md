# @react-simplifier/babel-plugin
A Babel plugin that makes writing React components concise and fast.

:warning: **WARNING: This project is still in early develop stage! DO NOT use it on production!** :warning:

## How it works?
Let's have a look on an example. This is a simple React component:
```jsx
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>Increment</button>
    </div>
  )
};
```
And here, the same component but with React Simplifier:
```jsx
const Counter = () => {
  const $counter = 0;

  const increment = () => { counter++; }

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>Increment</button>
    </div>
  )
};
```
As you can see, working with this plugin is much easier, because you don't have to import `useState` and use the `useState` getter/setter. You can deal with the component's state as with normal JS variables. Under the hood the React `useState` hook is still used so the compiled code will look like this:
```jsx
import { useState } from 'react';

const Counter = () => {
  const [$counter, ____set$counter] = useState(0);

  const increment = () => ____set$counter((prevValue) => prevValue + 1);

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>Increment</button>
    </div>
  )
};

```
But you don't need to care, because the plugin does it for you. :wink:

## Installation
The plugin is available as an npm package.
```
npm i @react-simplifier/babel-plugin
```
After installation you have to add the plugin to your Babel config file.

```js
module.exports = {
  ...
  plugins: [
    '@react-simplifier/babel-plugin'
  ]
}
```

## Configuration
| Property | Required | Type | Default value | Description |
| -------- | -------- | ---- | ------------- | ----------- |
| `stateVariablePattern` | :x: | `RegExp` | `/^\$\w+/` | Set pattern to recognize React state variables. The default pattern starts with the dollar sign - `$foo` |

## FAQ
### Does the plugin work with class components?
Not yet, we plan to add support for class components in the future - this is one of our priorities.
