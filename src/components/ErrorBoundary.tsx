import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";
import Container from "./Container";

type PropsComp = PropsWithChildren<{
  fallback?: ReactNode;
}>;
type State = {
  hasError: boolean;
  error?: Error;
};
export default class ErrorBoundary extends Component<PropsComp, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };
  constructor(props: PropsComp) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }
  // Capture les erreurs emit par le composant qu'il entoure et les affiche dans la console
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
    this.setState({
      hasError: true,
      error,
    });
  }
  // Met à jour l'état ainsi le rendus affichera la proprieter fallback au  prochain rendus
  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }
  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return <Container>{this.props.fallback}</Container>;
      }
      return (
        <Container>
        <div
          className="p-4 text-sm text-red-600 border border-red-200 rounded-md bg-red-50"
          role="alert"
        >
          <span className="font-bold">Danger</span>{" "}
          {this.state.error?.toString()}
        </div></Container>
      );
    }
    return this.props.children;
  }
}
