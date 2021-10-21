import React from 'react';
import 'react-datasheet/lib/react-datasheet.css';
import ReactDOM from 'react-dom';
import Datasheet from 'react-datasheet';
import MainNavbar from '../layouts/main/MainNavbar';
import '../Styles/app.scss';

export default class BasicSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [
          { readOnly: true, value: '' },
          { value: 'Employee ID', readOnly: true },
          { value: 'First Name', readOnly: true },
          { value: 'Last Name', readOnly: true },
          { value: 'Email', readOnly: true }
        ],
        [
          { readOnly: true, value: 1 },
          { value: 101 },
          { value: 'Alex' },
          { value: 'Page' },
          { value: 'alex@gmail.com' }
        ],
        [
          { readOnly: true, value: 2 },
          { value: 102 },
          { value: 'Bob' },
          { value: 'Williamson' },
          { value: 'bob@gmail.com' }
        ],
        [
          { readOnly: true, value: 3 },
          { value: 103 },
          { value: 'Charles' },
          { value: 'Babbage' },
          { value: 'charles@gmail.com' }
        ],
        [
          { readOnly: true, value: 4 },
          { value: 104 },
          { value: 'David' },
          { value: 'Thomson' },
          { value: 'david@gmail.com' }
        ]
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <MainNavbar />
        </div>
        <div className="rel">
          <div className="sheet-container">
            <Datasheet
              data={this.state.grid}
              valueRenderer={(cell) => cell.value}
              onContextMenu={(e, cell, i, j) => (cell.readOnly ? e.preventDefault() : null)}
              onCellsChanged={(changes) => {
                const grid = this.state.grid.map((row) => [...row]);
                changes.forEach(({ cell, row, col, value }) => {
                  grid[row][col] = { ...grid[row][col], value };
                });
                // this.setState({ grid });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
