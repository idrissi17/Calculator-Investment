import React from "react";

function UserInputs({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="text"
            value={userInput.initialInvestment}
            required
            onChange={(e) =>
              handleChange("initialInvestment", Number(e.target.value))
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="text"
            value={userInput.annualInvestment}
            required
            onChange={(e) =>
              handleChange("annualInvestment", Number(e.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="text"
            value={userInput.expectedReturn}
            required
            onChange={(e) =>
              handleChange("expectedReturn", Number(e.target.value))
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="text"
            value={userInput.duration}
            required
            onChange={(e) => handleChange("duration", Number(e.target.value))}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInputs;
