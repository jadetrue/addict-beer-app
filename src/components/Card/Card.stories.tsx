import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import Card, {Props} from "./Card";

export default {
    title: "Components/Card",
    component: Card,
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Beer Name",
    description: "A random beer that was formed long long ago",
};
