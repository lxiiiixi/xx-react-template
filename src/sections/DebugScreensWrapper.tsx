import React from "react";

export default function DebugScreensWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={process.env.NODE_ENV === "development" ? "debug-screens" : ""}
    >
      {children}
    </div>
  );
}
