import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Navbar } from "./Navbar"

export default {
  title: "Testing/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Unlogged = Template.bind({})

Unlogged.args = {
  loggedIn: false,
}

export const Logged = Template.bind({})

Logged.args = {
  loggedIn: true,
}
