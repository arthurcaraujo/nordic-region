import "./Main.css";
import CountryCodes from "./CountryCodes";
import data from "../data";
import PlaceInfo from "./PlaceInfo";
import References from "./References";

export default function Main() {
    return (
        <main>
            <section className="content-section" id="introduction">
                <h2>Introduction</h2>
                <p>The Nordic Region consists of Denmark, Finland, Iceland, Norway and Sweden, as well as the Faroe Islands, Greenland, and Åland. Its nature is unique – Long coastlines, deep forests, mountains, meadows and river valleys – from the Arctic tundra of the north to the warm, temperate parts of the south. The Gulf Stream may help maintain a mild climate in the Nordic Region, but climate change and encroaching civilization are a threat just as much as anywhere else in the world.</p>
                <p>The region is sparsely populated, comprising huge expanses of unspoiled wilderness. Nordic nature has an abundance of plant life, lakes and rivers teeming with fish, and animals like deer, wild boar and elk. Most cities offer easy and direct access to the wild. Every year, people head to the beach to swim in the sea, pick berries and mushrooms in late summer, ski through white, sparkling landscapes, and walk in the woods to gather the first anemones of spring.</p>
                <p>The Nordic welfare model is often hailed as a model in international forums. Few other countries in the world provide such a good and well-developed financial safety net for their citizens. The idea of equal opportunities for all is all-pervasive in the Nordic countries. In practice, it has resulted in huge efforts to reduce economic inequality.</p>
                <p>The modern Nordic model is characterized by a public sector that provides its citizens with welfare services and a social safety net. Specifically, this includes child benefits, parental leave, health services and hospitals, all of which are free at the point of delivery. The public sector also looks after sick and unemployed people and senior citizens. The basic values underpinning the model are compassion, tolerance, and the conviction that all humans are of equal worth.</p>
            </section>

            {data.map(place =>
                <PlaceInfo
                    key={place.id}
                    props={place}
                />
            )}

            <CountryCodes />
            <References />
        </main>
    )
}