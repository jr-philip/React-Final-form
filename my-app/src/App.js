
import { Form, Field } from 'react-final-form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field name="firstName" component="input" placeholder="First Name" />
              </div>
              <button type='submit'>Submit</button>
            </Form>
          )
        }
        />
        
        
      </header>
    </div>
  );
}

export default App;
