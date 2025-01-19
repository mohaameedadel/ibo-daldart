import React from 'react';
import SelectV2, { SelectV2Props } from './CustomSelect';
import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { GroupBase, CSSObjectWithLabel } from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

type ProxyControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Required<Pick<ControllerProps<TFieldValues, TName>, 'name'>> &
  Pick<ControllerProps<TFieldValues, TName>, 'rules' | 'shouldUnregister' | 'control' | 'disabled'>;

type ProxySelectProps<
  Option = OptionType,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Pick<
  SelectV2Props<Option, IsMulti, Group>,
  | 'label'
  | 'error'
  | 'options'
  | 'isMulti'
  | 'placeholder'
  | 'isLoading'
  | 'isSearchable'
  | 'menuPortalTarget'
  | 'styles'
  | 'rounded'
>;

export type SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  Option = OptionType,
  IsMulti extends boolean = boolean
> = ProxyControllerProps<TFieldValues, TName> & ProxySelectProps<Option, IsMulti> & {
  className?: string;
};

export default function Select<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  Option = OptionType,
  IsMulti extends boolean = boolean
>({
  name,
  rules,
  shouldUnregister,
  control,
  disabled,
  menuPortalTarget = document.body,
  styles = {},
  rounded,
  className,
  ...props
}: SelectProps<TFieldValues, TName, Option, IsMulti>) {
  return (
    <Controller
      {...{ name, rules, shouldUnregister, control, disabled }}
      render={({ field }) => (
        <SelectV2
          placeholder={props.label}
          {...props}
          className={className}
          rounded={rounded}
          options={props.options ?? []}
          onChange={(val) => {
            if (!props.isMulti) {
              field.onChange((val as OptionType)?.value);
            } else {
              field.onChange((val as OptionType[])?.map((o) => o.value));
            }
          }}
          value={
            Array.isArray(props.options)
              ? props.options.find((o) => !('options' in o) && (o as OptionType).value === field.value)
              : undefined
          }
          menuPortalTarget={menuPortalTarget}
          styles={{
            ...styles,
            menuPortal: (base: CSSObjectWithLabel) => ({ ...base, zIndex: 9999 }),
          }}
        />
      )}
    />
  );
}
