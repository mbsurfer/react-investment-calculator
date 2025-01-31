import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({inputs}) {

    const results = calculateInvestmentResults(inputs);

    return <div id="result">
        <table width="100%">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {
                results.map(row => {
                    const investedCapital = inputs.initialInvestment + (row.annualInvestment * row.year);
                    return (<tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.valueEndOfYear - investedCapital)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>)
                })
            }
            </tbody>
        </table>
    </div>
}