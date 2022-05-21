type Props = {
    image:string;
}

export default function Picture (props:Props) {
    return(
        <div className={"card-image"}>
            <img src={props.image} />
        </div>
    )
}

