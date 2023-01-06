import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { FC } from "react"

type InputProps = {
    lable: string,
    size: "xs" | "sm" | "md" | "lg",
    type: "text" | "email"
}

const UserInput: FC<InputProps> = (props) => {
    return (
        <FormControl width="500px">
            <FormLabel>{props.lable}</FormLabel>
            <Input type='email' size={props.size} />
            {/* <FormHelperText>Email not valid</FormHelperText> */}
        </FormControl>
    )
}

export default UserInput