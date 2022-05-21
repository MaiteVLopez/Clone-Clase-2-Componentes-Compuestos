import { Character } from "features/characters";
import Actions from "./cardActions";

type Props = {
    character:Character
    name: string;
}

export default function Content (props:Props) {
    return(
        <>
            <span>{props.name}</span>
            <Actions character={props.character}/>
        </>
    )
}