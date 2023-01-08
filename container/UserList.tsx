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

const UserList = () => {
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
                    <Tr>
                        <Td>Mohammad</Td>
                        <Td>Yousefvand</Td>
                        <Td>mmd@gmail.com</Td>
                        <Td isNumeric>23000</Td>
                        <Td>
                            <MyButton
                                colorScheme='green'
                                size="sm"
                                borderRadius='full'
                            >Active
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
                    <Tr>
                        <Td>Mohammad</Td>
                        <Td>Yousefvand</Td>
                        <Td>mmd@gmail.com</Td>
                        <Td isNumeric>23000</Td>
                        <Td>
                            <MyButton
                                colorScheme='green'
                                size="sm"
                                borderRadius='full'
                            >Active
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
                    <Tr>
                        <Td>Mohammad</Td>
                        <Td>Yousefvand</Td>
                        <Td>mmd@gmail.com</Td>
                        <Td isNumeric>23000</Td>
                        <Td>
                            <MyButton
                                colorScheme='red'
                                size="sm"
                                borderRadius='full'
                            >InActive
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

export default UserList