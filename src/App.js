import './App.css';
import Card from "./UI/Card";
import CalculationForm from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Card>
        <h1>COVID-19 Monoclonal Antibody Therapy and Risk of Hospitalization</h1>
      </Card>
      <Card>
        <CalculationForm />
      </Card>
      <Card>
        <Footer />
      </Card>

    </div>
  );
}

export default App;
