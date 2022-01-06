import React from "react";
import "./Footer.css";
import covidout from "../images/covidout.png";

function Footer() {
    return (
        <div>
            <p>For those with COVID-19 without access to monoclonal antibody or antiviral therapies, consider volunteering for a clinical research study testing existing medicines (FDA-approved for other conditions) which have a known safety track record.  Study medicines are couriered to your home same day or overnight. Go to <a href="https://covidout.umn.edu/">CovidOut.com</a> for more information.</p>
            <br />
            <a href="https://covidout.umn.edu/"><img src={covidout} className="logo"/></a>
            <p>For more information on how risk factors are used in Minnesota to allocate scarce resources, please see <a href="https://www.health.state.mn.us/diseases/coronavirus/hcp/mabethical.pdf">Ethical Framework for Allocation of Monoclonal Antibodies during the COVID-19 Pandemic</a></p>
            <div className="references">
                <p><strong>Supporting Literature:</strong>
                <br />
                Bierle DM, Ganesh R, Tulledge-Scheitel S, Hanson SN, Arndt LL, Wilker CG, Razonable RR. Monoclonal Antibody Treatment of Breakthrough COVID-19 in Fully Vaccinated Individuals with High-Risk Comorbidities. J Infect Dis. 2021 Nov 16:jiab570. <a href="https://doi.org/10.1093/infdis/jiab570">https://doi.org/10.1093/infdis/jiab570</a>
                <br />
                </p>
            </div>
            <br />
            <br />
            <p>Site created by <a href="https://med.umn.edu/bio/idim-faculty/matthew-pullen">Matthew Pullen MD</a></p>
        
        </div>
    )
}

export default Footer;