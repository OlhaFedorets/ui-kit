import type {Meta, StoryObj} from "@storybook/react";
import {Modal} from "./modal";
import {useState} from "react";
import {Button} from "../button";

const meta = {
    component: Modal,
    tags: ['autodocs'],
    title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: args => {
        const [open, setOpen] = useState(false)

        function handleModalClosed() {
            setOpen(false)
        }

        function handleModalOpened() {
            setOpen(true)
        }

        return (
            <div>
                <span>
                    <Button onClick={handleModalOpened}>Open modal</Button>
                </span>
                <Modal {...args} open={open} onClose={handleModalClosed}/>
            </div>
        )
    },
    args: {
        modalTitle: 'Primary Modal',
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
                consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
                modi molestias odio quas rem voluptatum. Dolores?
            </p>
        ),
        open: false,
    },
}