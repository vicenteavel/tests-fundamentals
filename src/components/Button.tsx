import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled: boolean;
  onClick: (number: number) => void;
}

export const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: disabled ? "red" : "blue" }} onClick={() => {onClick(10)}}>
      {children}
    </button>
  );
};
