import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
        <p>OOPS!! SOMETHING WENT WRONG</p>
        <p>Error Details - {err.status} : {err.statusText}</p>
    </div>
  )
}

export default Error;