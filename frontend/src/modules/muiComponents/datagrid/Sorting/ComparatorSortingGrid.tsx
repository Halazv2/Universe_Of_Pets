import * as React from 'react';
import {
  DataGrid,
  GridColumns,
  GridRowsProp,
  GridSortDirection,
  GridSortModel,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import {randomCreatedDate, randomUpdatedDate} from '@mui/x-data-grid-generator';

const columns: GridColumns = [
  {field: 'name'},
  {field: 'age', type: 'number'},
  {
    field: 'username',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || 'unknown'} - ${params.row.age || 'x'}`,
    sortComparator: (v1, v2, param1, param2) =>
      (param1.api.getCellValue(param1.id, 'age') as number) -
      (param2.api.getCellValue(param2.id, 'age') as number),
    width: 150,
  },
  {field: 'dateCreated', type: 'date', width: 180},
  {field: 'lastLogin', type: 'dateTime', width: 180},
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: 'Sebastien',
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: 'Louise',
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 6,
    name: 'George',
    age: 10,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

export default function ComparatorSortingGrid() {
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'username',
      sort: 'asc' as GridSortDirection,
    },
  ]);
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}
