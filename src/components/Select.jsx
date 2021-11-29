
export const Select = ({placeholder, options, values, current, onChange}) =>
{
  return (
    <select value={current} onChange={({ target: { value } }) => onChange(+value)}>
      <option value=''>{placeholder}</option>
      {options.map((option, i) => <option value={values[i]} key={values[i]}>{option}</option>)}
    </select>
  )
}
