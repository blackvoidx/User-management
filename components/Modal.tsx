import { useState } from 'react'
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

function BackdropModal({ isOpen, onClose }: any) {
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
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
                        <Button colorScheme="red">Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BackdropModal