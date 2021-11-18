import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ngPrimeGrid() {
  return (
    <div>
      <DataTable value={[{ code: 'f230fh0g3' }]} responsiveLayout="scroll">
        <Column field="code" header="Code" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="quantity" header="Quantity" />
      </DataTable>
    </div>
  );
}

// const rootElement = document.getElementById('DataGrid');
// ReactDOM.render(<ngPrimeGrid />);
