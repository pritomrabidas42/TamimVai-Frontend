import React, { useState } from "react";
import Items from "./Items";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({ itemsPerPage }) => {
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product #${index + 1}`,
    price: `$${(Math.random() * 20 + 5).toFixed(2)}`,
    image: `https://picsum.photos/200?random=${index + 1}`,
  }));
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Paginated Products
      </h1>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-8 gap-2"
        pageClassName="px-3 py-1 border rounded"
        activeClassName="bg-black text-white"
        previousClassName="px-3 py-1 border rounded"
        nextClassName="px-3 py-1 border rounded"
      />
    </div>
  );
};

export default PaginatedItems;
