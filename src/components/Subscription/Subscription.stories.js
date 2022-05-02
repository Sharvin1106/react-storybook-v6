import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

//Story within story --> One disadvantage is that we cant make use of args

export default {
  title: "form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
);
