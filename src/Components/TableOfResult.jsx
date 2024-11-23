import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function TableOfResult({ resultValue }) {
  const result = calculateInvestmentResults(resultValue);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  console.log(result);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interestt</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((res) => {
          const totalInterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initialInvestment;
          const totalAmountInvested = res.valueEndOfYear - totalInterest;

          return (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableOfResult;
