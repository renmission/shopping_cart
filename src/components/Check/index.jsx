/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';

function Check({
  field: { name, value, onChange }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  label,
  className,
  options,
  ...props
}) {
  return (
    <fieldset>
      <div id="checkbox-group">{name}</div>
      <div role="group" aria-labelledby="checkbox-group">
        {options.map(x => (
          <div key={x.id}>
            <Field
              type="checkbox"
              name={name}
              id={x.id}
              //   checked={() => onCheck(value, x.id)}
              checked={value.some(v => v === x.id)}
              //   onChange={() => toggleCheck(name, value, x.id)}
              onChange={() => {
                const index = value.findIndex(v => v === x.id);
                if (index === -1) {
                  setFieldValue(name, [...value, x.id]);
                } else {
                  setFieldValue(name, [
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                  ]);
                }
              }}
            />
            <label htmlFor={x.id}>{x.text}</label>
          </div>
        ))}
      </div>
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-sm font-medium">{errors[name]}</p>
      )}
    </fieldset>
  );
}

export default Check;
