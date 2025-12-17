import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({ pageCount, setPageCount, forcePage }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        pageCount={pageCount || 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={(event) => {
          setPageCount(event.selected + 1);
        }}
        containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
        previousLabel="Previous"
        nextLabel="Next"
        previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-[#19ab9a] rounded-md cursor-pointer"
        nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-[#19ab9a] rounded-md cursor-pointer"
        activeClassName="font-[700] bg-[#19ab9a] rounded-lg border-none "
        activeLinkClassName="text-white "
        disabledClassName="opacity-50 cursor-not-allowed"
        breakClassName="md:px-4 px-2 py-2 text-sm font-medium "
        pageClassName="mx-1 cursor-pointer"
        pageLinkClassName="w-[42px] h-[36px] border border-[#19ab9a] flex justify-center items-center text-[#19ab9a] rounded-md hover:bg-[#19ab9a] hover:text-[#fff] transition-colors"
        forcePage={forcePage - 1}
      />
    </div>
  );
};

export default PaginationComponent;