import React, { useEffect, useState } from "react";
import Items from "./Items";
import ReactPaginate from "react-paginate";
import { ProductData } from "../../api/Index";
const PaginatedItems = ({ itemsPerPage }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    ProductData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {currentItems &&
          currentItems.map((item) => <Items key={item.id} data={item} />)}
      </div>
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
