import { Select } from './Select';

export const Picker = ({currentHead, onHeadChange, currentMiddle, onMiddleChange, currentBottom, onBottomChange, currentShoes, onShoesChange}) =>
{ 
  const headOptions = [ 'bird', 'dog', 'horse' ];
  const headValues = [1, 2, 3]
  const middleOptions = [ 'casual', 'fancy', 'comfort' ];
  const middleValues = [1, 2, 3]
  const bottomOptions = [ 'irl', 'zoom' ];
  const bottomValues = [1, 2, 3]
  const shoesOptions = [ 'summer', 'winter', 'zoom' ];
  const shoesValues = [1, 2, 3]

  return (
    <div>
      <Select placeholder='head' options={headOptions} values={headValues} current={currentHead} onChange={onHeadChange}/>
      <Select placeholder='middle' options={middleOptions} values={middleValues} current={currentMiddle} onChange={onMiddleChange}/>
      <Select placeholder='bottom' options={bottomOptions} values={bottomValues} current={currentBottom} onChange={onBottomChange}/>
      <Select placeholder='shoes' options={shoesOptions} values={shoesValues} current={currentShoes} onChange={onShoesChange}/>
    </div>
  )
}
