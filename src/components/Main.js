import data from "../data";
import PlaceInfo from "./PlaceInfo";

export default function Main() {
    return (
        <main>
            {data.map(place =>
                <PlaceInfo
                    key={place.id}
                    props={place}
                />
            )}
        </main>
    )
}