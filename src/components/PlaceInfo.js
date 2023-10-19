import "./PlaceInfo.css";

export default function PlaceInfo({props}) {
    return (
        <section className="content-section" id={props.id}>
            <h2>{props.countryOrRegion}</h2>

            <div className="data-group">
                <ul>
                    <li>
                        <strong>Currency: </strong>
                        {props.currency}
                    </li>
                    <li>
                        <strong>National day: </strong>
                        {props.nationalDay}
                    </li>
                    <li>
                        <strong>Official language{props.language.includes(" and ") && "s"}: </strong>
                        {props.language}
                    </li>
                    <li>
                        <strong>Population {props.populationDate}: </strong>
                        {props.population}
                    </li>
                    <li>
                        <strong>Total area: </strong>
                        {props.totalArea}
                    </li>
                    <li>
                        <strong>Highest point: </strong>
                        {props.highestPoint}
                    </li>
                </ul>

                <div className={`${props.id} flag`}>
                    {props.flagClasses.map(flagClass =>
                        <div className={flagClass} key={flagClass}></div>
                    )}
                    <div className="flagpole">
                        <div className="ornament"></div>
                        <div className="base"></div>
                    </div>
                </div>
            </div>

            {props.description.map((paragraph, index) =>
                <p key={index}>
                    {paragraph}
                </p>
            )}
        </section>
    )
}