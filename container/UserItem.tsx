import {
    Tr,
    Td,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import MyButton from '../components/ButtonForm'
import { MyFormValue } from './AddUserForm'
import { memo } from 'react'

const UserItem = (
    { _id,
        firstName,
        lastName,
        email,
        salary,
        status
    }: MyFormValue) => {
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
                />
                <EditIcon fontSize={24} cursor="pointer" color="green" />
            </Td>
        </Tr>
    )
}

export default memo(UserItem)