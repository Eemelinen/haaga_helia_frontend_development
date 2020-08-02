import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function Todotable(props) {

  const { todos, deleteTodo } = props;

  const columns = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Description',
      accessor: 'desc'
    }
  ];
  

  return (
    <div>
      <ReactTable data={todos}
        columns={columns} sortable={true}
        defaultPageSize={10} />
    </div>
  )
}

export default Todotable;