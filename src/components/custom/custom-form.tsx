import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { Button } from "./block-render";
import { PolicyAgreement } from "./policy-agreement";

export const CustomForm = () => {
  console.log("render");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "M",
    bio: "",
    agreeLicence: false,
    agreePolicy: false,
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

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {JSON.stringify(formData, null, 2)}
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="sex">Gender</label>
          <select
            name="gender"
            defaultValue={formData.gender || "M"}
            id="gender"
            autoFocus
            value={formData.gender}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          >
            <option value="M">Masculin</option>
            <option value="F">Feminine</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="sex">Gender</label>
          <textarea
            name="bio"
            defaultValue={formData.bio}
            id="bio"
            autoFocus
            value={formData.bio}
            onChange={handleChange}
            className="px-3 py-2.5 border border-gray-200 shadow shadow-gray-100"
          />
        </div>

        <PolicyAgreement
          name="agreePolicy"
          label="Agree Policy"
          checked={formData.agreePolicy}
          onChange={handleChange}
        />
        <PolicyAgreement
          name="agreeLicence"
          label="Agree Licence"
          checked={formData.agreeLicence}
          onChange={handleChange}
        />
        <Button handleClick={handleClick}>Submit</Button>
      </form>
    </div>
  );
};
