import React from 'react'
import TextInput from '../TextInput'
import {render} from '../utils/testing'

describe('TextInput', () => {
  it('renders', () => {
    expect(render(<TextInput name='zipcode' />))
      .toEqual(render(<input name='zipcode' type='text' className='form-control' />))
  })

  it('renders small', () => {
    expect(render(<TextInput name='zipcode' size='small' />))
      .toEqual(render(<input name='zipcode' type='text' className='form-control input-sm' />))
  })

  it('renders large', () => {
    expect(render(<TextInput name='zipcode' size='large' />))
      .toEqual(render(<input name='zipcode' type='text' className='form-control input-lg' />))
  })

  it('renders block', () => {
    expect(render(<TextInput name='zipcode' block />))
      .toEqual(render(<input name='zipcode' type='text' className='form-control input-block' />))
  })
})
