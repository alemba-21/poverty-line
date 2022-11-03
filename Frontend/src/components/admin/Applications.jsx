import React, {useEffect, useState} from 'react';
import "./UsersData.css"
import {Button, Table } from 'semantic-ui-react'
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

function Applications() { 
    const [dataFromApi, setDataFromApi] = useState([]);
    
    // useEffect Loads data when component is started or loaded
    useEffect(() => {
        axios.get('/users')
        .then((loadData) => setDataFromApi(loadData.data))
    }, [])

    // This will connect with local storage based on the id of each item
    const setData = (id, firstname, lastname, email, cover_letter, attachment) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstname', firstname)
        localStorage.setItem('lastname', lastname)
        localStorage.setItem('email', email)
        localStorage.setItem('cover_letter', cover_letter)
        localStorage.setItem('attachment', attachment)
    }

    const loadData = () => {
        axios.get('/users')
        .then((loadData) => setDataFromApi(loadData.data))
    }
    // This function will delete items based on each item id
    const onDelete = (id) => {
        axios.delete(`/users/${id}`)
            .then(() => {
                loadData();
        })

    }

    return (
    <div>
        <div className='read_container'>              
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First name</Table.HeaderCell>
                        <Table.HeaderCell>Last name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Cover Letter</Table.HeaderCell>
                        <Table.HeaderCell>Attachment</Table.HeaderCell>
                        <Table.HeaderCell >Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* This map function displays loaded data to the actual table on the site */}
                    { dataFromApi.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstname}</Table.Cell>
                                <Table.Cell>{data.lastname}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.cover_letter}</Table.Cell>
                                <Table.Cell>{data.attachment}</Table.Cell>
                                <Table.Cell className='btn-delete-cell'>
                                    <Link to = '/updateuser'>
                                        <Button color='blue' onClick={()=>setData(data.id, data.firstname, data.lastname, data.email, data.cover_letter, data.attachment) } >Update</Button>
                                    </Link>                                        
                                </Table.Cell>
                                <Table.Cell>                                
                                        <Button color='red' onClick={ () => onDelete(data.id) }>Delete</Button>                                        
                                </Table.Cell>                    
                            </Table.Row> 
                        )
                    })}                             
            </Table.Body>
            </Table>
            </div>
            
            <div>
                
            </div>
    </div>
    
  )
}

export default Applications;