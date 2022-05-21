import { Character } from "features/characters";
import { FollowingButtonComponent } from "features/following/button";
import { addCharacterToFollowingList, removeCharacterToFollowingList } from "features/following/following.slices";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store/hooks";

type Props = {
    character: Character
}




export default function Actions (props:Props) {

    const followingIds = useAppSelector((state) => state.following.followingIds);
    const dispatch = useDispatch();
    const onToggleFavorite = (character: Character, setFav: boolean) => {
        if (setFav) {
          dispatch(addCharacterToFollowingList(character.id));
        } else {
          dispatch(removeCharacterToFollowingList(character.id));
        }
      };
    return(
        <div> 
        <FollowingButtonComponent
              isFav={followingIds.indexOf(props.character.id) >= 0}
              onToggleFavorite={(setFav) => onToggleFavorite(props.character, setFav)}
            />
            
        </div>
    )
}