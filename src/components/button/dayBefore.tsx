interface DayBeforeType{
  content : string;
  isSelected : boolean;
}

function DayBefore({content, isSelected} : DayBeforeType){
  return(
    <div className={`default-button bg-light-gray ${isSelected ? 'text-blue border-solid border-blue border-[2px]' : 'text-dark-ash-blue'}`}>
      {content}
    </div>
  )
}

export default DayBefore;
