import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Ex3 = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      message: Yup.string().min(10, 'Minimum 10 characters').required('Required')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Send data to backend/controller
        // This is where Formik state is sent to the server
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values) // Formik values sent as JSON
        });
        
        const data = await response.json();
        setApiResponse(data); // Save server response
        resetForm();
        alert('Successfully sent! Check the response below.');
      } catch (error) {
        alert('Error sending: ' + error.message);
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div>
      <h2>Form with API Submission</h2>
      <div className="form">
        <div className="form-group">
          <label htmlFor="api-name">Name:</label>
          <input
            id="api-name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`input ${formik.touched.name && formik.errors.name ? 'error' : ''}`}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="api-email">Email:</label>
          <input
            id="api-email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`input ${formik.touched.email && formik.errors.email ? 'error' : ''}`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows="4"
            className={`input textarea ${formik.touched.message && formik.errors.message ? 'error' : ''}`}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="error-message">{formik.errors.message}</div>
          )}
        </div>

        <button 
          onClick={formik.handleSubmit}
          disabled={formik.isSubmitting}
          className={`btn ${formik.isSubmitting ? 'disabled' : ''}`}
        >
          {formik.isSubmitting ? 'Sending...' : 'Send to API'}
        </button>
      </div>

      {apiResponse && (
        <div className="response-box">
          <h3>Server Response:</h3>
          <pre className="response-content">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Ex3;