import React from 'react'
import { Formik, Form} from  'formik'
import * as Yup from 'yup'

function FormikContainer(props) {
  const initialValues = {}
  const vaildationSchema = Yup.object({})
  const onSubmit = Values => console.log('Form data', values)
  return (
    <Formik
      initialValues={initialValues}
      vaildationSchema={vaildationSchema}
      onSubmit={onSubmit}
    >
    {formik => (
      <Form>
        <submit type='submit'>
          Submit
        </submit>
      </Form>
    )}
    </Formik>
  )
}

export default FormikContainer;