import './App.css';
import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from './ControlledForm';

function App() {
  return (
    <>
      <h1>React Forms</h1>
      <h2>Uncontrolled Form</h2>
      <UncontrolledForm />
      <h2>Controlled Form</h2>
      <ControlledForm />
    </>
  );
}

export default App;
