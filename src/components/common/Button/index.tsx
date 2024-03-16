import { ButtonHTMLAttributes, Ref, forwardRef } from 'react';

import cn from '@utils/cn';

const Button = (
  {
    children,
    type = 'button',
    className,
    ...props
  }: ButtonHTMLAttributes<HTMLButtonElement>,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={cn(
        'h-[56px] rounded-[8px] flex gap-[8px] items-center justify-center text-white bold-16-2 bg-pop-blue active:bg-primary-300 disabled:bg-middle-blue-gray',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
