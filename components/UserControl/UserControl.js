import React from 'react';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const UserControl = (props) => (
  <div className="ResultPaper">
    <Button className="CounterStoreResult" onClick={props.onShowUser} raised>
      Show User
    </Button>

    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userList.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar alt="Remy Sharp" src={user.avatar} />
                </TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default UserControl;