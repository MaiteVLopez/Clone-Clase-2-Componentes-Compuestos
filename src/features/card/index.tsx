import { ReactNode } from "react";
import Actions from "./cardActions";
import Content from "./cardContent";
import Picture from "./cardPicture";
import Body from "./cardBody";

type Props ={
    children: ReactNode,
    key:number
}

export default function Card (props:Props)  {
    return(
        <div className={"card"} key={props.key}>
            {props.children}
        </div>
    )
}

Card.Body    = Body;
Card.Content = Content;
Card.Picture = Picture;
Card.Actions = Actions;