import TextInput, { TextInputProps as DDTextInputProps } from '../TextInput';
import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

// Define Proxy Props for clarity and better reusability
type ProxyControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Required<Pick<ControllerProps<TFieldValues, TName>, 'name'>> &
  Pick<ControllerProps<TFieldValues, TName>, 'rules' | 'shouldUnregister' | 'control' | 'disabled'>;

type ProxyTextInputProps = Pick<
  DDTextInputProps,
  'label' | 'type' | 'error' | 'placeholder' | 'fullWidth' | 'labelClassName' | 'style'
>;

export type FormTextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ProxyControllerProps<TFieldValues, TName> &
  ProxyTextInputProps & {
    className?: string;
  };

// ✅ Refactor functional component for readability and structure
export default function FormTextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  rules,
  shouldUnregister,
  control,
  disabled,
  labelClassName,
  style,
  className,
  ...props
}: FormTextInputProps<TFieldValues, TName>) {
  return (
    <Controller
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      control={control}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <TextInput
          {...props}
          {...field}
          labelClassName={labelClassName}
          style={style}
          className={className}
          value={field.value ?? ''}
          error={fieldState.error?.message || props.error}
        />
      )}
    />
  );
}
