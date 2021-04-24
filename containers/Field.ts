import { connect } from 'react-redux';
import { inputChange } from '../store/actions';
import { State } from '../store/reducers';

import Field from '../components/Field/Field';
import { ChangeEvent, Dispatch, KeyboardEventHandler } from 'react';
import { AnyAction } from 'redux';

interface OwnProps {
  id?: string;
  className?: string;
  type?:
    | 'text'
    | 'password'
    | 'select'
    | 'email'
    | 'number'
    | 'checkbox'
    | 'url'
    | 'file'
    | 'textarea';
  label?: string;
  maxLength?: number;
  placeholder?: string;
  name: string;
  value?: string;
  reducerName?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
}

interface StateToProps {
  value?: string;
}

interface DispatchToProps {
  changeValue?: (value: string) => void;
}

const mapStateToProps = (state: State & any, ownProps: OwnProps): StateToProps => {
  if (!ownProps.value) {
    return {
      value: state[ownProps.reducerName ?? 'global'][ownProps.name],
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: OwnProps): DispatchToProps => {
  if (!ownProps.onChange) {
    return {
      changeValue: (value: string) =>
        dispatch(inputChange(ownProps.name, value, ownProps.reducerName)),
    };
  }

  return {};
};

export type FieldPropsFromRedux = StateToProps & DispatchToProps & OwnProps;

export default connect(mapStateToProps, mapDispatchToProps)(Field);
