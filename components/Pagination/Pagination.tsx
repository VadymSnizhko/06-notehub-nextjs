/*
import css from './Pagination.module.css'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";
//import ReactPaginate from 'react-paginate';

interface PaginationProps {
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
*/
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
    // Обертаємо в такий же контейнер, як у вашому старому проекті
    <div className={css.paginationWrapper}> 
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5} // З вашого старого проекту (показує 5 цифр в центрі)
        marginPagesDisplayed={1} // З вашого старого проекту (1 цифра по краях)
        onPageChange={handlePageClick}
        forcePage={currentPage - 1} // Синхронізація сторінок
        
        // Використовуємо іконки-стрілочки (вони акуратніші за текстові "→" і "←")
        previousLabel={<FaChevronLeft size={18} />}
        nextLabel={<FaChevronRight size={18} />}
        breakLabel="..."

        // Класи для стилізації з вашого CSS-модуля
        containerClassName={css.pagination}
        activeClassName={css.active}
        
        // Додаткові класи (якщо у вашому CSS для них прописані стилі)
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        previousClassName={css.prevItem}
        previousLinkClassName={css.prevLink}
        nextClassName={css.nextItem}
        nextLinkClassName={css.nextLink}
        disabledClassName={css.disabled}
        breakClassName={css.breakItem}
        breakLinkClassName={css.breakLink}
      />
    </div>
  );
};

export default Pagination;