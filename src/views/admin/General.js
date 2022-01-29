import React from "react";

// components

import MyCardTable from "components/MyCards/MyCardTable.js";

export default function General() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MyCardTable title="Companies"/>
        </div>
        <div className="w-full mb-12 px-4">
          <MyCardTable color="dark" />
        </div>
      </div>
    </>
  );
}
