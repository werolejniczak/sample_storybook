import React, { ReactNode } from "react";

import "./styles.css";

type SegmentProps = {
  active?: boolean;
  "data-testid"?: string;
  onClick: () => void;
  children: ReactNode;
};

export const Segment = ({
  "data-testid": testid,
  onClick,
  active,
  children,
  ...props
}: SegmentProps) => (
  <button
    data-testid={testid}
    className={["segment", active ? "active" : undefined].join(" ")}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Segment.displayName = "SegmentedButtons.Segment";
Segment.defaultProps = {
  "data-testid": "segment",
};
