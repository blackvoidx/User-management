import { memo } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { useGetUsersQuery } from '../app/api/userApi'
import UserItem from './UserItem'
import BackdropModal from '../components/Modal'
import { useDisclosure } from '@chakra-ui/react'
import { useAppDispatch } from '../app/hook'
import { userAction } from '../app/slice/userSlice'

const UserList = () => {
    const { isLoading, data } = useGetUsersQuery()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useAppDispatch()

    const deleteHandler = (Id: string) => {
        dispatch(userAction.setId(Id))
        onOpen()
    }

    if (isLoading) return <h2>is Loading...</h2>

    return (
        <>
            <BackdropModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
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
                            <UserItem key={user._id} {...user} onDelete={deleteHandler} />
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
        </>
    )
}

export default memo(UserList)