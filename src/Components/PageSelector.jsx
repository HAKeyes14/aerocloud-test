import React from "react";

const PageSelector = ({
  handleLimitChange,
  handlePageClick,
  p,
  limit,
  count
}) => {
  return (
    <section>
      <div>
        {p !== 1 && <button onClick={() => handlePageClick(-1)}>Prev</button>}
        <p>Page: {p}</p>
        {Math.ceil(count / limit) !== p && (
          <button onClick={() => handlePageClick(1)}>Next</button>
        )}
      </div>
      <div>
        <form>
          <label>
            Items per page:{" "}
            <select onChange={handleLimitChange} value={limit}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
        </form>
        <p>
          Showing articles: {(p - 1) * limit + 1} -{" "}
          {p * limit > count ? p * limit - (p * limit - count) : p * limit} of{" "}
          {count}
        </p>
      </div>
    </section>
  );
};

export default PageSelector;
