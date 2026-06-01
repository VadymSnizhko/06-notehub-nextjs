import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import css from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  
  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className={css.paginationWrapper}> 
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5} 
        marginPagesDisplayed={1} 
        onPageChange={handlePageClick}
        forcePage={currentPage - 1}
        
        previousLabel={<FaChevronLeft size={18} />}
        nextLabel={<FaChevronRight size={18} />}
        breakLabel="..."

        
        containerClassName={css.pagination}
        activeClassName={css.active}

      />
    </div>
  );
};

export default Pagination;