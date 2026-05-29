import css from './Pagination.module.css'

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div >
      <ul className={css.pagination}>
        <li>
      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Prev
      </button>
        </li>
        <li>{currentPage}</li>
        <li>...</li>
        <li>{totalPages}</li>
        <li><button
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </button></li>
      </ul>

      
    </div>
  );
};

export default Pagination;