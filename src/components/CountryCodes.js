import "./CountryCodes.css";

export default function CountryCodes() {
    return (
        <section className="content-section" id="iso-country-codes">
            <h2>ISO Country Codes</h2>

            <table>
                <thead>
                    <tr>
                        <th colSpan="4">ISO 3166</th>
                    </tr>
                    <tr>
                        <th>Country / Region</th>
                        <th>Alpha 2 Code</th>
                        <th>Alpha 3 Code</th>
                        <th>Numeric Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="country-cell">Denmark</th>
                        <td>DK</td>
                        <td>DNK</td>
                        <td>208</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Faroe Islands</th>
                        <td>FO</td>
                        <td>FRO</td>
                        <td>234</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Finland</th>
                        <td>FI</td>
                        <td>FIN</td>
                        <td>246</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Greenland</th>
                        <td>GL</td>
                        <td>GRL</td>
                        <td>304</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Iceland</th>
                        <td>IS</td>
                        <td>ISL</td>
                        <td>352</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Norway</th>
                        <td>NO</td>
                        <td>NOR</td>
                        <td>578</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Sweden</th>
                        <td>SE</td>
                        <td>SWE</td>
                        <td>752</td>
                    </tr>
                    <tr>
                        <th className="country-cell">Åland</th>
                        <td>AX</td>
                        <td>ALA</td>
                        <td>248</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}