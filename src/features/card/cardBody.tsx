import { ReactNode } from "react";

type Props = {
    children : ReactNode;
}

export default function Body (props:Props) {
    return(
        <div className={"card-body"}>
            {props.children}
        </div> 
    )
}