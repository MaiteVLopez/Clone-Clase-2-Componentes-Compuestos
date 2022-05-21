import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { useAppDispatch} from 'store/hooks';
import Character from 'features/characters/characters.types';
import Card from 'features/card';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ rickIDDS }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery( { ids: rickIDDS } );
  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((character:Character) =>(
        <Card key = {character.id}>
          <Card.Picture image = {character.image}/>
          <Card.Body >
            <Card.Content name= {character.name} character= {character}/>
          </Card.Body>
        </Card>  
      ))}
    </div>
  )
};
export default CharactersComponent;
