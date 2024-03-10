interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  size : 'small' | 'full'
}

function Button({content, isSelected, size, onClick}: ButtonProps){
  return(
    <button type="button" className={`default-button bg-light-gray ${isSelected ? 'text-blue border-solid border-blue border-[2px]' : 'text-dark-ash-blue'} ${size === 'small' && 'w-[150px]'}` } onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;
