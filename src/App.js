import { Form, Field } from 'react-final-form'
import './App.css';

function App() {
  const onSubmit = (e) => {
    debugger
  };

  const validate = (e) => {
    const errors = {};

    if(e.bio && e.bio.length < 5){
      errors.bio='To short'
    }

    return errors
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

              <div className='field'>
                 <label>Bio</label>
                <Field
                  name="bio"
                  render={({ input, meta }) => (
              <div>
                <textarea {...input} />
                {meta.touched && meta.error && <div>{meta.error}</div>}
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
