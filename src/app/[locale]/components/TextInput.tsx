import classNames from 'classnames';
import React from 'react';
import { useLocale } from 'next-intl';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'date' | 'checkbox' | 'datetime-local';
  error?: string | null;
  fullWidth?: boolean;
  labelClassName?: string;
  className?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { 
      label, 
      type = 'text', 
      error, 
      fullWidth, 
      labelClassName = '', 
      className = '', 
      ...props 
    }, 
    ref
  ) => {
    
    const locale = useLocale(); 
    const isRTL = ['ar', 'he', 'fa', 'ur'].includes(locale); // Adjust based on RTL languages

    return (
      <div className={classNames({ 'w-full': fullWidth })}>
        {label && (
          <label
            htmlFor={props.id}
            className={classNames(
              'text-[18px] md:font-[400] font-[700] block mb-2 text-[#344054]',
              isRTL ? 'text-right' : 'text-left',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <input
          {...props}
          type={type}
          ref={ref}
          className={classNames(
            'rounded-[99px] h-[60px] py-6 px-6 border border-[#D0D5DD] text-[#344054] font-normal text-base focus:ring-main-500 focus:border-main-500 block',
            {
              'w-6 h-6': type === 'checkbox',
              'w-full': type !== 'checkbox'
            },
            className
          )}
        />
        {error && (
          <p className={classNames('text-red-600', isRTL ? 'text-right' : 'text-left')}>
            <small>{error}</small>
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
