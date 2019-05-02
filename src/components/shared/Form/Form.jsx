import React from 'react';
import propTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

const FormField = props => {
  const { form } = props;
  return (
    <div>
      <Form unstackable>
        <Form.Group widths={2}>
          {form.map(formInput => (
            <Form.Input
              key={formInput.label}
              label={formInput.label}
              placeholder={formInput.placeholder}
              type={formInput.type}
            />
          ))}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

FormField.propTypes = {
  form: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default FormField;
