import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import Button from '@components/common/Button/index';
import cn from '@utils/cn';

export const OptionButtonVariants = cva('bg-light-gray', {
  variants: {
    isSelected: {
      default: 'text-dark-ash-blue',
      select: 'text-blue border-solid border-blue border-[2px]',
    },
    size: {
      small: 'w-[150px]',
      full: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'small',
  },
});

interface OptionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof OptionButtonVariants> {
  content: string;
  isSelected: 'default' | 'select';
  size: 'small' | 'full';
}

export default function OptionButton({
  content,
  isSelected,
  size,
  ...props
}: OptionButtonProps) {
  return (
    <Button
      {...props}
      className={cn(OptionButtonVariants({ isSelected, size }))}
    >
      {content}
    </Button>
  );
}
