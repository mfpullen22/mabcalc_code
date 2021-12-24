import './App.css';
import Card from "./UI/Card";
import CalculationForm from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Card>
        <h1>COVID-19 Monoclonal Antibody Therapy and Risk of Hospitalization</h1>
      </Card>
      <Card>
        <CalculationForm />
      </Card>

    </div>
  );
}

export default App;
