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
    console.log(form);
  };
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  const input = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="p-2 border border-gray-100 rounded shadow outline-none shadow-gray-50"
          name="firstName"
          defaultValue={firstName}
        />
        {firstName}
      </div>
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

const CheckGender: FunctionComponent = () => {
  return (
    <div className="flex items-center gap-1">
      <label htmlFor="gender-f" className="">
        <input type="radio" ref={input} name="gender" id="gender-f" /> Female
      </label>
      <label htmlFor="gender-m" className="">
        <input type="radio" ref={input} name="gender" id="gender-m" /> Male
      </label>
    </div>
  );
};

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
CheckGenderForward.displayName = "CheckGenderForward";
export default Form;
