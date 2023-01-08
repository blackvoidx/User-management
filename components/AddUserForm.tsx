import { Flex, Stack, Button } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
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

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Field is required!"),
        lastName: Yup.string().required("Field is required!"),
        email: Yup.string().required("Field is required!").email("Email not valid"),
        salary: Yup.string().required("Field is required!"),
        birthdayDate: Yup.string().required("Field is required!"),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
            }}>
            <Form>
                <Flex
                    marginTop={4}
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
                </Flex >
                <Stack direction={{ base: "column", "md": "row" }} justifyContent="center" spacing={4} marginTop={8}>
                    <Button
                        type="submit"
                        width={{ base: "100%", "md": "300px" }}
                        colorScheme='whatsapp'>
                        Add User
                    </Button>
                    <Button
                        width={{ base: "100%", "md": "200px" }}
                        colorScheme='red'>
                        Cancel
                    </Button>
                </Stack>
            </Form>
        </Formik>
    )
}

export default AddUserForm