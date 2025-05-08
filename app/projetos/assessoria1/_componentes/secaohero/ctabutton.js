"use client";
import Button from "react-bootstrap/Button";

export default function CTAButton() {
  return (
    <Button
      onClick={() => {
        console.log("hello world");
      }}
    >
      Call to action
    </Button>
  );
}
