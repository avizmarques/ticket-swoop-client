import React from "react";
import { Link } from "react-router-dom";

export default function PageNav(props) {
  const { currentPage, countEvents } = props;

  const nextPage = currentPage ? currentPage + 1 : 2;

  const previousPage =
    currentPage !== 1 ? (currentPage === 2 ? null : currentPage - 1) : null;

  const isLastPage = currentPage === Math.ceil(countEvents / 9);

  return (
    <div className="pageNav">
      {!isLastPage && <Link to={`/eventlist/${nextPage}`}>Next page</Link>}
      {previousPage && (
        <Link to={`/eventlist/${previousPage}`}>Previous page</Link>
      )}
      {currentPage === 2 && <Link to={`/`}>Previous page</Link>}
    </div>
  );
}
