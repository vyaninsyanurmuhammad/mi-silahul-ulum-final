'use client'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import React, { ReactNode } from 'react'

export default function ModelAdmin(
  {
    isOpen,
    onOpenChange,
    body,
    footer,
    size = "5xl"
  }: {
    isOpen: boolean,
    onOpenChange: (isOpen: boolean) => void,
    body?: ReactNode,
    footer?: (onClose: () => void) => ReactNode,
    size?: "5xl" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | undefined,
  }
) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom" size={size} scrollBehavior="inside">

        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader> </ModalHeader>
              <ModalBody>
                {
                  body
                }
              </ModalBody>
              <ModalFooter>
                {
                  footer && footer(onClose)
                }
              </ModalFooter>
            </>
          )}
        </ModalContent>

      </Modal>
    </>
  )
}
