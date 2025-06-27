import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isPending?: boolean;
}

export default function Button({ text, children, isPending, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'text-sm sm:text-basefont-medium transition hover:opacity-85 flex-center gap-2',
        className,
      )}
      disabled={isPending || rest.disabled}
      {...rest}
    >
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {children}
          {text}
        </>
      )}
    </button>
  );
}

//직접 구현 하세요
function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}
