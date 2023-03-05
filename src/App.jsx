import "./App.css";
import FormInput from "./components/FormInput";
import Form from "./components/Form";
import FormSelect from "./components/FormSelect";
import LogsTable from "./components/LogsTable";

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <Form>
          <FormInput name="message" label="Message" />
          <FormSelect name="category" label="Category" />
        </Form>
      </div>
      <LogsTable />
    </div>
  );
}

export default App;
