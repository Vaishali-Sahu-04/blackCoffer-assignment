import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>
        End Year:
        <input type="text" name="end_year" value={filters.end_year} onChange={handleChange} />
      </label>
      <label>
        Topic:
        <input type="text" name="topic" value={filters.topic} onChange={handleChange} />
      </label>
      <label>
        Sector:
        <input type="text" name="sector" value={filters.sector} onChange={handleChange} />
      </label>
      <label>
        Region:
        <input type="text" name="region" value={filters.region} onChange={handleChange} />
      </label>
      <label>
        PEST:
        <input type="text" name="pestle" value={filters.pestle} onChange={handleChange} />
      </label>
      <label>
        Source:
        <input type="text" name="source" value={filters.source} onChange={handleChange} />
      </label>
      <label>
        SWOT:
        <input type="text" name="swot" value={filters.swot} onChange={handleChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={filters.country} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={filters.city} onChange={handleChange} />
      </label>
      <button type="button" onClick={() => setFilters({})}>Reset</button>
    </div>
  );
};

export default Filters;
