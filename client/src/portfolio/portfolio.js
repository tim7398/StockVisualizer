import React from "react";
import Table from "react-bootstrap/Table";

function Portfolio() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Stock Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Number of Share</th>
          <th>Equity</th>
          <th>Avg. Purchase Price</th>
          <th>Gain/Loss</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Palantir</td>
          <td>PLTR</td>
          <td>30.00</td>
          <td>1000</td>
          <td>30,000.00</td>
          <td>30.00</td>
          <td>0.0%</td>
        </tr>
        <tr>
          <td>GameStop</td>
          <td>GME</td>
          <td>16.43</td>
          <td>1000</td>
          <td>16,430</td>
          <td>18.00</td>
          <td>8.1%</td>
        </tr>
        <tr>
          <td>Tuscan Holdings</td>
          <td>THCB</td>
          <td>12.00</td>
          <td>1000</td>
          <td>12,000</td>
          <td>10.00</td>
          <td>20.0%</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Portfolio;
