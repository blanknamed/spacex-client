import React from 'react';
import { Container } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { LaunchCard } from './LaunchCard';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },

  component: LaunchCard,
  decorators: [(Story) => (
    <BrowserRouter>
      <Container size={350}>
        <Story />
      </Container>
    </BrowserRouter>
  )],
  title: 'shared/LaunchCard',
} as ComponentMeta<typeof LaunchCard>;

const Template: ComponentStory<typeof LaunchCard> = () => (
  <LaunchCard
    title="CRS25"
    link="/test"
    rocketName="Falcon 9"
    image="https://imgur.com/573IfGk.png"
    launchDate="22/06/2022"
    launchSite="LC-39A"
  />
);

export const Primary = Template.bind({
});
