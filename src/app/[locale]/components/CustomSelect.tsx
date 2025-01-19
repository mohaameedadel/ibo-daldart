import React from 'react';
import ReactSelect, { GroupBase, Props as ReactSelectProps } from 'react-select';
import { Label } from 'flowbite-react';
import classNames from 'classnames';

export interface SelectV2Props<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends ReactSelectProps<Option, IsMulti, Group> {
  label?: string;
  error?: string | null;
  rounded?: boolean;
  className?: string;
}

function SelectV2<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ label, error, rounded, className, ...props }: SelectV2Props<Option, IsMulti, Group>) {
  const controlStyles = {
    base: classNames(
      rounded
        ? 'rounded-[99px] py-[4px] px-6 border border-[#D0D5DD] text-[#344054] font-normal text-base focus:ring-main-500 focus:border-main-500 block'
        : 'border border-[#96969633] text-gray-900 rounded-[6px] block w-full'
    ),
    focus: 'ring-1 ring-main-500 border-main-500',
    nonFocus: 'border-[#96969633] hover:border-gray-400',
  };

  const placeholderStyles = 'text-[#9CA3AF] p-2.5';
  const selectInputStyles = 'p-2.5';
  const valueContainerStyles = 'px-0.5';
  const singleValueStyles = 'p-2.5';
  const multiValueStyles = 'bg-gray-100 rounded py-0.5 pl-2 pr-1 gap-1.5';
  const multiValueLabelStyles = 'leading-6 py-0.5';
  const multiValueRemoveStyles =
    'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md';
  const indicatorsContainerStyles = 'p-1 gap-1';
  const clearIndicatorStyles = 'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
  const indicatorSeparatorStyles = 'hidden';
  const dropdownIndicatorStyles = 'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
  const menuStyles = 'p-1 mt-2 border border-gray-200 bg-white rounded-lg';
  const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
  const optionStyles = {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: 'bg-gray-100 active:bg-gray-200',
    selected: 'text-gray-500',
  };
  const noOptionsMessageStyles = 'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';

  return (
    <div className={classNames('w-full', className)}>
      {label && (
        <Label className="block mb-2 text-base font-normal text-black dark:text-white" htmlFor={props.id}>
          {label}
        </Label>
      )}

      <ReactSelect
        placeholder={label}
        {...props}
        classNamePrefix="react-select"
        unstyled
        classNames={{
          control: ({ isFocused }) =>
            classNames(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            classNames(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
      />
      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
}

export default SelectV2;
