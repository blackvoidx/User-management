import { Flex } from "@chakra-ui/react"
import UserInput from "./UserInput"

const AddUserForm = () => {
    return (
        <Flex
            marginTop="16"
            flexWrap='wrap'
            justifyContent="center"
            alignItems="center"
            gap="4"
        >
            <UserInput lable='First name' size='lg' type='text' />
            <UserInput lable='Last name' size='lg' type='text' />
            <UserInput lable='Email' size='lg' type='email' />
            <UserInput lable='Birthday date' size='lg' type='text' />
            <UserInput lable='Salary' size='lg' type='text' />
        </Flex>
    )
}

export default AddUserForm