import { TableCell, TableHead, TableContainer,TableRow ,Table, TableBody} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const GetTable = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data)
            setuser(res.data)
        })
  return (
      <div>
          
          <TableContainer>
              <Table border="2">
                  <TableHead>
                  <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Email</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.username}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                                  <TableCell>{val.email}</TableCell>

                              </TableRow>
                          )
                      })}
                          </TableBody>
              </Table>
          </TableContainer>

    </div>
  )
}

export default GetTable