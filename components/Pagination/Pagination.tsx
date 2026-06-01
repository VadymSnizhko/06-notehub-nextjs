import css from './Pagination.module.css'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";
//import ReactPaginate from 'react-paginate';

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
      <a
        data-disabled={currentPage === 1}
        onClick={() =>{
          if (currentPage === 1) return
          onPageChange(currentPage - 1)
        }
        }
      >
        <FaChevronLeft size={18}/>
      </a>
        </li>
        <li><a>{currentPage}</a></li>
        <li><a> ...</a></li>
        <li><a>{totalPages}</a></li>
        <li><a
        data-disabled={currentPage === totalPages}
        onClick={() => {
          if (currentPage === totalPages) return
          onPageChange(currentPage + 1)
        }
          
        }
      >
        <FaChevronRight size={18} />
      </a></li>
      </ul>

      
    </div>
  );
};

export default Pagination;