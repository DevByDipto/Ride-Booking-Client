import React from 'react'

import {
  Pagination,
  PaginationContent,
//   PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
interface IPaginationProps {
  totalPages: number;                 
  currentPage: number;                 
  setCurrentPage: (page: number) => void;
}

const PaginationBar = ({totalPages,currentPage,setCurrentPage}:IPaginationProps) => {

    const handlePageChange = (page: number) => {
  setCurrentPage(page)
  // এখানে fetch বা filter logic হবে
}

  return (
    <div className='mt-5 border border-primary-secondary inline-block p-1 rounded-2xl'>{
      totalPages > 1 && <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1: 1)}
          className={`${currentPage == 1 && 'opacity-30'} `}
        />
      </PaginationItem>

      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationItem key={index}>
          <PaginationLink
            href="#"
            isActive={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationNext
          href="#"
         onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1: totalPages)}
          className={`${currentPage == totalPages && 'opacity-30'} `}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
    }</div>
  )
}

export default PaginationBar