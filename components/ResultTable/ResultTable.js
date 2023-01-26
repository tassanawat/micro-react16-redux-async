import React from 'react';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const ResultTable = (props) => (
  <div className="ResultPaper" style={{marginBottom: '16px'}}>
    <Button className="CounterStoreResult" onClick={props.onStoreResult} raised>
      Store Result
      </Button>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Results</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.storedResult.map(strResult => {
            return (
              <TableRow key={strResult.id}>
                <TableCell>{strResult.val}</TableCell>
                <TableCell>
                  <IconButton onClick={() => props.onDeleteResult(strResult.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default ResultTable;