import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { useDeleteUserMutation } from '../app/api/userApi'
import { userAction } from '../app/slice/userSlice'
import { memo } from 'react'

function BackdropModal({ isOpen, onClose }: any) {
    const state = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [deleteUser, { isError }] = useDeleteUserMutation()

    const deleteApiRequest = () => {
        deleteUser(state.deleteId) //delete api
        dispatch(userAction.removeDeleteId())
        onClose()
    }
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='90%'
        // backdropBlur='2px'
        />
    )

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <OverlayTwo />
                <ModalContent>
                    <ModalHeader>Delete User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Do you sure to delete this user?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} marginRight={4}>Close</Button>
                        <Button onClick={deleteApiRequest} colorScheme="red">Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(BackdropModal)