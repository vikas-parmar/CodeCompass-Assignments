import React, { useState } from "react";
import Short from "./components/Short";
import Table from "./components/Table";
import { nutritions } from "./constants";
import Pagination from "./components/Pagination";

export function App() {
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   // Slice the data array to get the items for the current page
  const currData = nutritions.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrPage(pageNumber);
  }

  return (
    <main>
      <div className="box">
        <div className="heading">
          <h1>Nutritions</h1>
          <Short />
        </div>
        <Table data={currData} />
        <Pagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage = {currPage}
          totalItems={nutritions.length}
          paginate={paginate}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
        />
      </div>
    </main>
  )
}
