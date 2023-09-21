import { FunctionComponent } from "react";
import Alert from "./Alert";
type TempStateProps = {
  celcius?: number;
};
const TempState: FunctionComponent<TempStateProps> = ({ celcius = 0 }) => {
  const alertType = celcius >= 100 ? "success" : "danger";
  const message = celcius >= 100 ? "L'eau bout" : "L'eau ne bout pas";
  return <Alert type={alertType} message={message} />;
};
export default TempState;
