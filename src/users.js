import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = (props) => (
    <List title = "All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <MyUrlField source="website" />
        </Datagrid>
    </List>
);