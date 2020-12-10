import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormilControl from './FormikControl'
import FormikControl from './FormikControl'

function FormikContainer(props) {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ]
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ]
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOptions: [],
  }
  const vaildationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
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
          <FormikControl
            control='radio'
            label='Radio Topic'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
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