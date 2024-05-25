import React from "react";
import Columns from "./Columns";
import Header from "./Header";

function Table() {
  return (
    <>
      <table>
        <thead>
          <Header />
        </thead>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
