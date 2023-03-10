type DisplayProps = {
  value: string;
}

function Display({value}: DisplayProps) {
  return (
    <div className="display">
      <p className="display__value">{value}</p>
    </div>
  )
}

export default Display;