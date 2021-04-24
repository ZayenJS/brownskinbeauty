import { ChangeEvent, FC } from 'react';

import styles from './Field.module.scss';

import { FieldPropsFromRedux } from '../../containers/Field';

const Field: FC<FieldPropsFromRedux> = ({
  id,
  className = '',
  type = 'text',
  label,
  maxLength,
  placeholder,
  name,
  value,
  onChange,
  changeValue,
}) => {
  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    if (changeValue) {
      return changeValue(event.target.value);
    }

    if (onChange) return onChange(event);
  };

  let input;
  switch (type) {
    case 'textarea':
      input = (
        <>
          <textarea
            name={name}
            maxLength={maxLength}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}></textarea>
          <label htmlFor={id}>{label}</label>
        </>
      );
      break;
    default:
      input = (
        <>
          <input
            autoComplete="off"
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
          />
          <label htmlFor={id}>{label}</label>
        </>
      );
  }

  return <div className={[styles.Base, className].join(' ')}>{input}</div>;
};

export default Field;
