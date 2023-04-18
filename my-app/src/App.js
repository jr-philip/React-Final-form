import { Form, Field } from 'react-final-form'
import './App.css';

function App() {
  const onSubmit = (e) => {
    debugger
  };

  const validate = (e) => {
    //debugger
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className='field'>
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
