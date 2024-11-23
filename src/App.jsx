import { useState } from "react";
import Header from "./Components/Header";
import UserInputs from "./Components/UserInputs";
import TableOfResult from "./Components/TableOfResult";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 10,
    expectedReturn: 2,
    duration: 3,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: newValue,
      };
    });
  }

  const inputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} handleChange={handleChange} />
      {!inputValid && (
        <p className="center">Please enter a duration greater than zero </p>
      )}
      {inputValid && <TableOfResult resultValue={userInput} />}
    </>
  );
}

export default App;
