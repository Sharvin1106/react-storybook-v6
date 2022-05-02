import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

//decorators are basically some decoration wrapping around
//our stories

export default {
  title: "Form/Button",
  component: Button,
  //This is one way of adding decorators
  //decorators: [(story) => <Center>{story()}</Center>],
  //We can also set master args
  args: {
    children: "Button",
  },
};

export const Primary = () => (
  //The second way of adding decorator
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //children: "Primary Args",
};

//We can reuse templates
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  //children: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
