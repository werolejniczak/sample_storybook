import React, { useState } from "react";

import { Component, Props } from "./component";

export default {
  title: "Segmented Buttons",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/5HrWfIfrQ04bZ6EcYU35eo/%F0%9F%AA%B5-Components?type=design&node-id=7002%3A7145&mode=design&t=J3otNRG6GL8ZzJJR-1",
    },
  },
};

type ExtendedProps = Props & {};

export const TwoButtons = (args: ExtendedProps) => {
  const [activeSegment, setActiveSegment] = useState(0);

  return (
    <Component {...args}>
      <Component.Segment
        key={1}
        active={activeSegment === 0}
        onClick={() => setActiveSegment(0)}
      >
        Flat fee
      </Component.Segment>
      <Component.Segment
        key={2}
        active={activeSegment === 1}
        onClick={() => setActiveSegment(1)}
      >
        Percentage
      </Component.Segment>
    </Component>
  );
};

export const ThreeButtons = (args: ExtendedProps) => {
  const [activeSegment, setActiveSegment] = useState(1);

  return (
    <Component {...args}>
      <Component.Segment
        key={1}
        active={activeSegment === 0}
        onClick={() => setActiveSegment(0)}
      >
        Single
      </Component.Segment>
      <Component.Segment
        key={2}
        active={activeSegment === 1}
        onClick={() => setActiveSegment(1)}
      >
        Multi
      </Component.Segment>
      <Component.Segment
        key={3}
        active={activeSegment === 2}
        onClick={() => setActiveSegment(2)}
      >
        6-month
      </Component.Segment>
    </Component>
  );
};
