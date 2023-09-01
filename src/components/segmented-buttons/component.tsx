import React, { FC, HTMLProps } from "react";

import { Segment } from "./segment";
import "./styles.css";

export type Props = Omit<HTMLProps<HTMLDivElement>, "as" | "ref"> & {
  "data-testid"?: string;
};
type SegmentedButtons = FC<Props> & {
  Segment: typeof Segment;
};

export const Component: SegmentedButtons = ({ children }) => {
  return <fieldset className="container">{children}</fieldset>;
};

Component.displayName = "SegementedButtons";
Component.Segment = Segment;
