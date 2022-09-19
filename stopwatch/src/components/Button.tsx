import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  handleClick: () => void;
  customClass: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.handleClick}
      className={`rounded-full transition-opacity flex justify-center items-center text-white font-semibold ${props.customClass}`}
    >
      {props.children}
    </button>
  );
}
