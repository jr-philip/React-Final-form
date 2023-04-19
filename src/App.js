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
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <label>First Name</label>
                <Field name="firstName" component="input" placeholder="First Name" />
              </div>

              <div>
                <Field
                  name="bio"
                  render={({ input, meta }) => (
              <div className='field'>
                <label>Bio</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
                )}
              />
              </div>

              <div className='field'>
                <button type='submit'>Submit</button>
              </div>
              
            </form>
          )
        }
        />
      </header>
    </div>
  );
}

export default App;
