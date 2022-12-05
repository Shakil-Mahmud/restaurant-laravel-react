import React from 'react'

function FilterDropdownBtn({selectedCategory, allCategories, handleFilterChange}) {
  return (
    <>
      <select
        name="filter-type"
        className="px-1 border border-gray-300 rounded-md w-24"
        value={selectedCategory}
        onChange={handleFilterChange}
      >
        <option key={0} value={'all'} defaultValue>All</option>
        {allCategories.map((category, index) => (
            <option key={index+1} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default FilterDropdownBtn
