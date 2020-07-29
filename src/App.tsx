import React, { useContext, useEffect, useState } from 'react';
import { GodContext } from '.';
import './App.css';
import Child from './Child';
import logo from './logo.svg';

type secretKey = string | number
interface SecretInfo {
  secretKey: secretKey,
  age: number,
}
interface IProps {
  message?: string
}
const RenderComponent = () => {
  console.log("We are in the RenderComponent")
  return (
    <></>
  )
}

const secretInfoDefault: SecretInfo = {
  secretKey: 1,
  age: 1,
}

const App = (props: IProps) => {
  const { message } = props
  const [count, setCount] = useState(1);
  const [secretInfo, setSecretInfo] = useState(secretInfoDefault);
  const actualGod = useContext(GodContext)

  console.log(`we are in the mounting ${count}`)

  useEffect(() => {
    console.log(`We are in the useEffect ${count}`)
    console.log(`Our current god is ${actualGod}`)
    setCount(2)
    return () => {
      console.log("We are unmounting component and cleaning the useEffect")
    };
  }, []);

  // By doing that you are unmounting/re-mounting the child component, since you are redefining its function
  const WrapperChild = () => <Child />

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setCount(count + 1)}>INCREMENT STATE FOR RE-RENDER</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RenderComponent />
      </header>
      <WrapperChild />
    </div>
  );
}

export default App;
