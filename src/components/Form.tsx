import {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  forwardRef,
  useRef,
  useState,
} from "react";

const Form: FunctionComponent = () => {
  const [firstName, setFirstName] = useState<string>("John");
  const handleValue = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setFirstName(value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const value: string = form.get("firstName") as string;
    setFirstName(value);
    console.log(form, lastNameInput.current?.value);
  };
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  const input = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="p-2 border border-gray-100 rounded shadow outline-none shadow-gray-50"
          name="firstName"
          defaultValue={firstName}
          onChange={handleValue}
        />
        {firstName}
      </div>
      <InputField
        ref={lastNameInput}
        name="lastName"
        type="text"
        placeholder="Entrer votre nom"
        label="Nom"
      />
      <CheckGenderForward ref={input} />
      <CGUChecked checked={isTermsAccepted} onChecked={setIsTermsAccepted} />
      <button type="submit" disabled={!isTermsAccepted} className="btn">
        Valider
      </button>
    </form>
  );
};
type CheckProps = {
  checked?: boolean;
  onChecked?: Dispatch<SetStateAction<boolean>>;
};
const CGUChecked: FunctionComponent<CheckProps> = ({
  checked = false,
  onChecked,
}) => {
  return (
    <div className="flex items-center gap-1">
      <input
        id="cgu"
        type="checkbox"
        name="cgu"
        checked={checked}
        onChange={(e) => {
          if (onChecked) {
            onChecked(e.target.checked);
          }
        }}
      />
      <label htmlFor="cgu">
        J'accepte les conditions generale d'utilisation
      </label>
    </div>
  );
};

const CheckGender = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="flex items-center gap-1">
      <label htmlFor="gender-f" className="">
        <input type="radio" ref={ref} name="gender" id="gender-f" /> Female
      </label>
      <label htmlFor="gender-m" className="">
        <input type="radio" ref={ref} name="gender" id="gender-m" /> Male
      </label>
    </div>
  );
});

// On typer d'abord la ref puis les props alors que les paramètres sont dans l'autre sens
const CheckGenderForward = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="flex items-center gap-1">
      <label htmlFor="gender-f" className="">
        <input type="radio" ref={ref} name="gender" id="gender-f" /> Female
      </label>
      <label htmlFor="gender-m" className="">
        <input type="radio" ref={ref} name="gender" id="gender-m" /> Male
      </label>
    </div>
  );
});
const InputField = forwardRef<
  HTMLInputElement,
  { type: string; name: string; label: string; placeholder: string }
>(({ name, label, placeholder, type }, ref) => {
  return (
    <div>
      <label
        htmlFor={`input-label-${name}`}
        className="block mb-2 text-sm font-medium "
      >
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        id={`input-label-${name}`}
        className="block w-full px-4 py-3 text-sm transition border border-gray-200 rounded-md outline-none focus:border-blue-500 focus:ring-blue-500 "
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
});
InputField.displayName = "InputField";
CheckGenderForward.displayName = "CheckGenderForward";
export default Form;
