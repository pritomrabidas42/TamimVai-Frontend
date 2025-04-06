import React, { useState } from "react";
import Items from "./Items";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({ itemsPerPage }) => {
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product`,
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
    <div className="container mx-auto px-6 py-16">
      
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-8 gap-2"
        pageClassName="px-3 py-1 border rounded cursor-pointer border-secandari text-primary text-sm font-Monrope font-normal"
        activeClassName="bg-secandari text-white"
        previousClassName="px-3 py-1 border rounded border-secandari text-primary text-sm font-Monrope font-normal cursor-pointer"
        nextClassName="px-3 py-1 border rounded border-secandari text-primary text-sm font-Monrope font-normal cursor-pointer"
      />
    </div>
  );
};

export default PaginatedItems;
