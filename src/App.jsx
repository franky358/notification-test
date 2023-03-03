import "./App.css";
import FormInput from "./components/FormInput";
import Form from "./components/Form";
import FormSelect from "./components/FormSelect";

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <Form>
          <FormInput name="message" label="Message" />
          <FormSelect name="category" label="Category" />
        </Form>
      </div>
      <div className="logs-container">
        <h1>Logs</h1>
      </div>
    </div>
  );
}

export default App;
