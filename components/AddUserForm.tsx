import { Flex, RadioGroup, Radio, Stack, Button } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import UserInput from "./UserInput"

interface MyFormValue {
    firstName: string,
    lastName: string,
    email: string,
    salary: string,
    birthdayDate: string,
    status: "Active" | "InActive"
}

const AddUserForm = () => {
    const initialValues: MyFormValue = {
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
        birthdayDate: "",
        status: "Active"
    }

    return (
        <Formik initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
            }}>
            <Form>
                <Flex
                    marginTop="16"
                    flexWrap='wrap'
                    justifyContent="space-around"
                    alignItems="center"
                    gap="4"
                >
                    <UserInput name="firstName" label='First name' />
                    <UserInput name="lastName" label='Last name' />
                    <UserInput name="email" label='Email' />
                    <UserInput name="birthdayDate" label='Birthday date' />
                    <UserInput name="salary" label='Salary' />
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
                        <Button type="submit" width="300px" marginTop="4" colorScheme='whatsapp'>Add User</Button>
                    </Stack>
                </Flex >
            </Form>
        </Formik>
    )
}

export default AddUserForm