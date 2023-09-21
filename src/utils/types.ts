export type AlertType = "success" | "danger" | "infos" | "warning";
export type AlertProps = {
  type: AlertType;
  title: string;
  message: string;
};
