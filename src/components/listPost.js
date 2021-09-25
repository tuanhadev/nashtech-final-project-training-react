import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListPost() {
    const [APIData, setAPIData] = useState([]);
    const [allAPIData, setAllAPIData] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
                setAllAPIData(response.data);
            })
    }, []);

    const onDelete = (id) => {
        const updateAPIData = APIData.filter(item => item.id !== id);
        setAPIData(updateAPIData);
        setAllAPIData(updateAPIData);
    }

    const onSearch = (e) => {
        const inputSearchText = e.target.value;
        const updateAPIData = allAPIData.filter(item => item.title.includes(searchText));
        setSearchText(inputSearchText);
        setAPIData(updateAPIData);
    }

    return (
        <div>
            <Form.Field>
                <input style={{ width: 200, height: 40 }} placeholder='Search by title' value={searchText} onChange={onSearch} />
            </Form.Field>

            <hr />
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>
                                    <Button ><Link to={`/posts/${data.id}`}>View detail</Link></Button>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
