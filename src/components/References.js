import "./References.css";

export default function References() {
    const referencesData = [
        {
            name: "ISO 3166 – Country Codes",
            link: "https://www.iso.org/iso-3166-country-codes.html",
        },
        {
            name: "Norden.org – About Åland",
            link: "https://www.norden.org/en/information/about-aland",
        },
        {
            name: "Norden.org – Facts about Denmark",
            link: "https://www.norden.org/en/information/facts-about-denmark",
        },
        {
            name: "Norden.org – Facts about Finland",
            link: "https://www.norden.org/en/information/facts-about-finland",
        },
        {
            name: "Norden.org – Facts about Greenland",
            link: "https://www.norden.org/en/information/facts-about-greenland",
        },
        {
            name: "Norden.org – Facts about Iceland",
            link: "https://www.norden.org/en/information/facts-about-iceland",
        },
        {
            name: "Norden.org – Facts about Norway",
            link: "https://www.norden.org/en/information/facts-about-norway",
        },
        {
            name: "Norden.org – Facts about Sweden",
            link: "https://www.norden.org/en/information/facts-about-sweden",
        },
        {
            name: "Norden.org – Facts about the Faroe Islands",
            link: "https://www.norden.org/en/information/facts-about-faroe-islands",
        },
        {
            name: "Norden.org – Facts about the Nordic countries",
            link: "https://www.norden.org/en/information/facts-about-nordic-countries",
        },
        {
            name: "Norden.org – Nature, climate and the environment in the Nordic Region",
            link: "https://www.norden.org/en/information/nature-climate-and-environment-nordic-region",
        },
        {
            name: "Norden.org – Social policy and welfare",
            link: "https://www.norden.org/en/information/social-policy-and-welfare",
        },
    ];

    return (
        <section className="content-section" id="references">
            <h2>References</h2>

            <p>The content in this page is taken from the following sources:</p>

            <ul>
                {referencesData.map((reference, index) =>
                    <li key={index}>
                        <a
                            href={reference.link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {reference.name}
                        </a>
                    </li>
                )}
            </ul>
        </section>
    )
}