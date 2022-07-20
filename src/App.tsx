import React, {useState} from 'react';
import './App.css';
import { Datatable, downloadPDF, ColumnProps } from 'hexa-table'


function App() {

  const data = [
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 'aseasd',
      name: 'pedro thiago joão no barquinho 123',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 2,
      name: 'thiago',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
    {
      id: 3,
      name: 'joao',
      amount: [100,'teste'],
      date: '2022-01-01'
    },
  ]
  const columns: ColumnProps[] = [
    {
      Header: 'First Name',
      accessor: 'name',
      format: "avatar",
      type: "inline",
      export: false,
      sortable: true,
      style: {
        fontSize: "12px"
      }
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      format: 'currency'
    },
    {
      Header: 'Date',
      accessor: 'date',
      format: 'date'
    }
  ];

  const footer = ['','Total','150', '5'];
  const [size, setSize] = useState(10);

  return (
    <>
      <button onClick={() => downloadPDF(data,columns, 'Relatório123', 'newTab', {
        orientation: 'landscape'
      })}>teste</button>
      <Datatable sizes={[10,20,100]} currentSize={size} onChangeSize={(size: any) => setSize(size)} columns={columns} data={data} pageCount={1} currentPage={0} tableFooter={footer} onSelectIds={(ids: any) => console.log(ids)} />
    </>
  )
}

export default App;
