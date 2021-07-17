import { Redirect } from "react-router-dom";

export default function RedireccinarLanding() {
  return <Redirect to={{ pathname: "/" }} />;
}
