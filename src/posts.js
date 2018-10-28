import React from 'react';
import { List, Datagrid, TextField, EmailField, ReferenceField } from 'react-admin';


export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField ladel = "User" source = "userId" reference = "users">
                <TextField source = "name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);