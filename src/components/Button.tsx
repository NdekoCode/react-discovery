import { FunctionComponent, MouseEvent, PropsWithChildren, memo } from "react";

type Props = PropsWithChildren<{
  onClick: (value?: null | MouseEvent<HTMLButtonElement> | undefined) => void;
}>;

const Button: FunctionComponent<Props> = memo(({ onClick, children }) => {
  return (
    <button
      className="px-3 py-1.5 m-0.5 text-sm rounded bg-gray-300 text-dark"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
export default Button;
