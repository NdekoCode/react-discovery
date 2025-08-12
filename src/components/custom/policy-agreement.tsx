import { ChangeEvent, FC, useCallback, useId } from "react";

export const PolicyAgreement: FC<{
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
}> = ({ name, checked, label, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="px-3 py-2.5"
      />
    </div>
  );
};
