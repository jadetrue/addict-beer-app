import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import Card from "./Card.tsx";

export default {
    title: "Components/Card",
    component: Card,
} as Meta;

const Template: Story = (args) => <Card />;

export const Default = Template.bind({});
Default.args = {};
