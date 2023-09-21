import { useRouteError } from "react-router-dom";

export const Error = () => {

    const error = useRouteError() ;
    console.log(error)
    return <div><h2> {error.statusText} </h2>
               <h6>Url Mis MAtctvh</h6></div>
}  ;   