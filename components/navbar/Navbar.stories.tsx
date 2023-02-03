import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Navbar } from "./Navbar"

import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs"

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Unlogged = Template.bind({})

Unlogged.args = {
  loggedIn: false,
}

export const Logged = Template.bind({})

Logged.args = {
  loggedIn: true,
}

export default {
  title: "Testing/Navbar",
  component: Navbar,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Navbar>
