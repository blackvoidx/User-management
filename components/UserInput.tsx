import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { useField } from "formik"

interface ComponentProps<T> {
    label: string;
    name: string;
}

const UserInput = (props: ComponentProps<string>) => {
    const [field, meta] = useField(props)
    console.log(field, meta)
    return (
        <FormControl width="400px" isInvalid={meta.touched && !!meta.error}>
            <FormLabel>{props.label}</FormLabel>
            <Input size='lg' type='text' {...field} />
            {/* <FormHelperText>Email not valid</FormHelperText> */}
        </FormControl>
    )
}

export default UserInput