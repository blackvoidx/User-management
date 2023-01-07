import { Flex, Stack, Button } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import RadioInput from "./RadioInput"
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
                    <UserInput type="text" name="firstName" label='First name' />
                    <UserInput type="text" name="lastName" label='Last name' />
                    <UserInput type="email" name="email" label='Email' />
                    <UserInput type="datetime-local" name="birthdayDate" label='Birthday date' />
                    <UserInput type="text" name="salary" label='Salary' />
                    <RadioInput name="status" />
                    <Stack width="full" paddingX="4">
                        <Button type="submit" width="300px" marginTop="4" colorScheme='whatsapp'>Add User</Button>
                    </Stack>
                </Flex >
            </Form>
        </Formik>
    )
}

export default AddUserForm