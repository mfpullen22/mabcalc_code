import React from "react";

function Result(props) {
    let prob = props.prob;

    return (
        <div>
            <h4>Risk points: {prob}</h4>
            <div>
                <p>For more information on how risk factors are used in Minnesota to allocate scarce resources, please see <a href="https://www.health.state.mn.us/diseases/coronavirus/hcp/mabethical.pdf">Ethical Framework for Allocation of Monoclonal Antibodies during the COVID-19 Pandemic</a></p>
            </div>
        </div>
    )
   /* if (prob === 0) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 1.7%</p>
                <p>No Treatment: 2.1%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.813</p>
                <p>Odds Ratio [95% CI]: 0.809 [0.173 - 3.800]</p>
                <p>Absolute Risk Reduction: 4%</p>
                <p>NNT: 255</p>
            </div>
        );
    } else if (prob === 1) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 0%</p>
                <p>No Treatment: 2.3%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.0</p>
                <p>Odds Ratio [95% CI]: 0.202 [0.010 - 4.200]</p>
                <p>Absolute Risk Reduction: 2.3%</p>
                <p>NNT: 43</p>
            </div>
        );
    } else if (prob === 2) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 2%</p>
                <p>No Treatment: 6.7%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.306</p>
                <p>Odds Ratio [95% CI]: 0.292 [0.032 - 2.700]</p>
                <p>Absolute Risk Reduction: 4.6%</p>
                <p>NNT: 22</p>
            </div>
        );
    } else if (prob === 3) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 3.2%</p>
                <p>No Treatment: 12.3%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.266</p>
                <p>Odds Ratio [95% CI]: 0.241 [0.060 - 0.973]</p>
                <p>Absolute Risk Reduction: 9%</p>
                <p>NNT: 12</p>
            </div>
        );
    } else if (prob === 4) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 0%</p>
                <p>No Treatment: 15.1%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.0</p>
                <p>Odds Ratio [95% CI]: 0.068 [0.125 - 0.028]</p>
                <p>Absolute Risk Reduction: 15.1%</p>
                <p>NNT: 7</p>
            </div>
        );
    } else if (prob === 5) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 4.8%</p>
                <p>No Treatment: 29.2%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.167</p>
                <p>Odds Ratio [95% CI]: 0.125 [0.243 - 0.040]</p>
                <p>Absolute Risk Reduction: 24.3%</p>
                <p>NNT: 5</p>
            </div>
        );
    } else if (prob === 6) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 5.4%</p>
                <p>No Treatment: 19%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.284</p>
                <p>Odds Ratio [95% CI]: 0.243 [0.152 - 0.031]</p>
                <p>Absolute Risk Reduction: 13.5%</p>
                <p>NNT: 8</p>
            </div>
        );
    } else if (prob === 7) {
        return (
            <div>
                <h4>Risk of hospitalization ({prob} risk points):</h4>
                <p>With Monoclonal Antibody: 7.6%</p>
                <p>No Treatment: 35.3%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.218</p>
                <p>Odds Ratio [95% CI]: 0.153 [0.058 - 0.128]</p>
                <p>Absolute Risk Reduction: 27.6%</p>
                <p>NNT: 4</p>
            </div>
        );
    } else if (prob >= 8) {
        return (
            <div>
                <h4>Risk of hospitalization (≥8 risk points):</h4>
                <p>With Monoclonal Antibody: 4.6%</p>
                <p>No Treatment: 45.6%</p>
                <br />
                <h4>Detailed Statistics:</h4>
                <p>Relative Risk: 0.102</p>
                <p>Odds Ratio [95% CI]: 0.058 [0.013 - 0.264]</p>
                <p>Absolute Risk Reduction: 40.9%</p>
                <p>NNT: 3</p>
            </div>
        );
    } */
};

export default Result;