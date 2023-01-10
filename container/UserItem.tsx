import {
    Tr,
    Td,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import MyButton from '../components/ButtonForm'
import { MyFormValue } from './AddUserForm'
import { memo } from 'react'

type UserItemProps = {
    onDelete: (Id: number) => void
}

const UserItem = (
    { _id,
        firstName,
        lastName,
        email,
        salary,
        status,
        onDelete
    }: MyFormValue & UserItemProps) => {

    const deleteItem = (Id: any) => {
        onDelete(Id)
    }

    return (
        <Tr>
            <Td>{firstName}</Td>
            <Td>{lastName}</Td>
            <Td>{email}</Td>
            <Td isNumeric>{salary}</Td>
            <Td>
                <MyButton
                    colorScheme={status === "Active" ? "green" : "red"}
                    size="sm"
                    borderRadius='full'
                >{status}
                </MyButton>
            </Td>
            <Td>
                <DeleteIcon
                    marginRight={8}
                    fontSize={24}
                    cursor="pointer"
                    color="red.600"
                    onClick={() => deleteItem(_id)}
                />
                <EditIcon fontSize={24} cursor="pointer" color="green" />
            </Td>
        </Tr>
    )
}

export default memo(UserItem)