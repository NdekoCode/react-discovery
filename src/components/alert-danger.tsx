import { FallbackProps } from "react-error-boundary";

const AlertDanger = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Danger
      </div>
      <div className="border flex flex-col gap-2 border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{error.toString()}</p>
        <button
          className="bg-red-500 text-white rounded-md w-fit px-4 py-2 cursor-pointer hover:bg-red-700 transition-colors duration-300"
          onClick={resetErrorBoundary}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AlertDanger;
