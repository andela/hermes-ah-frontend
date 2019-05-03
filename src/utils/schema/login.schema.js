import Joi from 'joi-browser';

const schema = {
  email: Joi.string()
    .required()
    .email({ minDomainAtoms: 2 })
    .label('Email'),
  password: Joi.string()
    .required()
    .label('Password'),
};

export default schema;
