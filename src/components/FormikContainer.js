import React from 'react'
import { Formik, Form} from  'formik'
import * as Yup from 'yup'
import FormilControl from './FormilControl'

function FormikContainer(props) {
  const dropdownOptions = [
    { key: 'Select an option', value: ''},
    { key: 'Option 1', value: 'option1'},
    { key: 'Option 2', value: 'option2'},
    { key: 'Option 3', value: 'option3'},
  ]
  const radioOption =[
    { key: 'Option 1', value: 'option1'},
    { key: 'Option 2', value: 'option2'},
    { key: 'Option 3', value: 'option3'},
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: ''
  }
  const vaildationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
  })
  const onSubmit = Values => console.log('Form data', values)
  return (
    <Formik
      initialValues={initialValues}
      vaildationSchema={vaildationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormilControl
            control='input'
            type='email'
            label='Email'
            name='email'
          />
          <FormilControl
            control='text'
            label='Description'
            name='description'
          />
          <FormilControl 
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikContainer 
            control='radio'
            label='Radio Topic'
            name='radioOption'
            options={radioOptions}
          />
          <button type='submit'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer;