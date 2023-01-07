import { Flex, RadioGroup, Radio, Stack, Button } from "@chakra-ui/react"
import UserInput from "./UserInput"

const AddUserForm = () => {
    return (
        <>
            <Flex
                marginTop="16"
                flexWrap='wrap'
                justifyContent="space-around"
                alignItems="center"
                gap="4"
            >
                <UserInput label='First name' size='lg' type='text' />
                <UserInput label='Last name' size='lg' type='text' />
                <UserInput label='Email' size='lg' type='email' />
                <UserInput label='Birthday date' size='lg' type='text' />
                <UserInput label='Salary' size='lg' type='text' />
                <RadioGroup width="400px" defaultValue='2'>
                    <Stack spacing={8} direction='row' >
                        <Radio colorScheme='green' value='1' size="lg">
                            Active
                        </Radio>
                        <Radio colorScheme='red' value='2' size="lg">
                            InActive
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Stack width="full" paddingX="4">
                    <Button width="300px" marginTop="4" colorScheme='whatsapp'>Add User</Button>
                </Stack>
            </Flex>
        </>
    )
}

export default AddUserForm