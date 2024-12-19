import React from 'react';
import ListTable from '../component/Read/ListTable'; // Correctly importing ListTable
import AppNavBar from '../component/Common/AppNavBar';

const ReadPage = () => {
  return (
    <div>
      <AppNavBar />
      <ListTable />
    </div>
  );
};

export default ReadPage;
