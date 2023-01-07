import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { FC } from "react"
import { InputProps } from "@chakra-ui/react"

type InputCustomProps = {
    label: string
}

type InputChakraProps = InputProps & InputCustomProps

const UserInput: FC<InputChakraProps> = (props) => {
    return (
        <FormControl width="400px">
            <FormLabel>{props.label}</FormLabel>
            <Input type='email' size={props.size} />
            {/* <FormHelperText>Email not valid</FormHelperText> */}
        </FormControl>
    )
}

export default UserInput