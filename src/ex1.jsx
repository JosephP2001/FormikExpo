import { Formik, Field } from 'formik';

const Ex1 = () => {
  return (
    <div>
      <h2>Basic Form - Sign Up</h2>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
          await new Promise((r) => setTimeout(r, 500));
          console.log('Basic form values:', values);
        }}
      >
        {({ handleSubmit }) => (
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field 
                id="firstName" 
                name="firstName" 
                placeholder="Jane" 
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field 
                id="lastName" 
                name="lastName" 
                placeholder="Doe" 
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                className="input"
              />
            </div>

            <button onClick={handleSubmit} className="btn">Submit</button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Ex1;