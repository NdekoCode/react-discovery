import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{ text: string; onClick: () => void }>;

const Button: FunctionComponent<Props> = ({ text, onClick }) => {
  return (
    <button
      className="px-3 py-1.5 m-0.5 text-sm rounded bg-gray-300 text-dark"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
