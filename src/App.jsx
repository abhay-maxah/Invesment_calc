import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 3333,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return { ...prevState, [inputIdentifier]: newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
