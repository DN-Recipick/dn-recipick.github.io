import { type InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex-column gap-2 my-2">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          style={{ outlineColor: 'var(--color-primary)' }}
          className={clsx(
            'px-3 py-2 border focus:outline-2 focus:border-transparent focus:outline-offset-0',
            error ? 'border-[var(--color-danger)]' : 'border-gray-300',
            className,
          )}
          {...props}
        />
        {<p className="danger">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
