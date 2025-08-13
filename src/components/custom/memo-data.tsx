import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";

import { slowWait } from "@/utils/helpers";

import { Button } from "./block-render";
import { PolicyAgreement } from "./policy-agreement";

export const MemoData = () => {
  console.log("render");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 27,
    isMature: false,
    password: "",
  });
  const handleClick = useCallback(() => {
    console.log("Render submit");
  }, []);
  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const target = e.target;
      const value =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;

      setFormData((prevFromData) => ({
        ...prevFromData,
        [target.name]: value,
      }));
    },
    []
  );
  const hashedPassword = useMemo(
    () => slowWait(formData.age, 1500),
    [formData.age]
  );
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {JSON.stringify(formData, null, 2)}
        <span>Hash password: {hashedPassword}</span>
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoFocus
            value={formData.firstName}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoFocus
            value={formData.lastName}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            autoFocus
            value={formData.age}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          />
        </div>

        <PolicyAgreement
          name="isMature"
          label="Is Mature"
          checked={formData.isMature}
          onChange={handleChange}
        />
        <Button handleClick={handleClick}>Submit</Button>
      </form>
    </div>
  );
};
