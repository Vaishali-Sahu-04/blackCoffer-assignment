import React, { useEffect, useState } from 'react';
import getData from '../services/data';
import BarChart from './BarChart';
import Filters from './Filters';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(currentPage, itemsPerPage, filters);
        setData(response.data);
        setCurrentPage(response.currentPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, filters]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <Filters filters={filters} setFilters={setFilters} />
      {data.length > 0 ? <BarChart data={data} /> : <p>Loading data...</p>}
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
