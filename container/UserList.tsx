import { memo } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import MyButton from '../components/ButtonForm'
import { useGetUsersQuery } from '../app/api/userApi'

const UserList = () => {
    const { isLoading, data } = useGetUsersQuery()
    console.log(data)
    if (isLoading) return <h2>is Loading...</h2>

    return (
        <TableContainer width="100%" marginY={4} borderY="1px solid #c9c9c9">
            <Table variant='striped' colorScheme="blackAlpha" size="lg">
                <TableCaption placement="top">Simple user management</TableCaption>
                <Thead>
                    <Tr>
                        <Th>First name</Th>
                        <Th>Last name</Th>
                        <Th>Email</Th>
                        <Th isNumeric>Salary</Th>
                        <Th>status</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map(user => (
                        <Tr key={user._id}>
                            <Td>{user.firstName}</Td>
                            <Td>{user.lastName}</Td>
                            <Td>{user.email}</Td>
                            <Td isNumeric>{user.salary}</Td>
                            <Td>
                                <MyButton
                                    colorScheme={user.status === "Active" ? "green" : "red"}
                                    size="sm"
                                    borderRadius='full'
                                >{user.status}
                                </MyButton>
                            </Td>
                            <Td>
                                <DeleteIcon
                                    marginRight={8}
                                    fontSize={24}
                                    cursor="pointer"
                                    color="red.600"
                                />
                                <EditIcon fontSize={24} cursor="pointer" color="green" />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>First name</Th>
                        <Th>Last name</Th>
                        <Th>Email</Th>
                        <Th isNumeric>Salary</Th>
                        <Th>status</Th>
                        <Th>Action</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default memo(UserList)