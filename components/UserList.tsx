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
} from '@chakra-ui/react'

const UserList = () => {
    return (
        <TableContainer width="100%" marginTop={4} borderTop="1px solid #c9c9c9">
            <Table variant='striped' colorScheme="blackAlpha" size="lg">
                <TableCaption>Simple user management</TableCaption>
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
                        <Td>Active</Td>
                    </Tr>
                    <Tr>
                        <Td>Mohammad</Td>
                        <Td>Yousefvand</Td>
                        <Td>mmd@gmail.com</Td>
                        <Td isNumeric>23000</Td>
                        <Td>Active</Td>
                    </Tr>
                    <Tr>
                        <Td>Mohammad</Td>
                        <Td>Yousefvand</Td>
                        <Td>mmd@gmail.com</Td>
                        <Td isNumeric>23000</Td>
                        <Td>InActive</Td>
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