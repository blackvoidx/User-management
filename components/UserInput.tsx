import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { Field, FieldProps } from "formik"

interface InputProps<T> {
    label: T,
    name: T,
    type: T
}

const UserInput = (props: InputProps<string>) => {
    return (
        <Field name={props.name}>
            {({ field, form }: FieldProps) => (
                <FormControl
                    width="400px"
                    id={props.name}
                    isInvalid={!!form.errors[props.name] && !!form.touched[props.name]}
                >
                    <FormLabel>{props.label}</FormLabel>
                    <Input size='lg' type={props.type} {...field} />
                    {/* <FormHelperText>Email not valid</FormHelperText> */}
                </FormControl>
            )}
        </Field>
    )
}

export default UserInput