export default function DogDisplay({getDogBreeds}) {
    return (
        <div>
          <button onClick={()=> getDogBreeds()}>Get Dog Breeds</button>
        </div>
    )
}