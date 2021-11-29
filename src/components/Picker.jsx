import { Select } from './Select';

export const Picker = ({currentHead, onHeadChange, currentMiddle, onMiddleChange, currentBottom, onBottomChange, currentShoes, onShoesChange}) =>
{ 
  const headOptions = [ 'bird', 'dog', 'horse' ];
  const headValues = ['🐧', '🐶', '🐴']
  const middleOptions = [ 'casual', 'fancy', 'comfort' ];
  const middleValues = ['👚', '🦺', '🎽']
  const bottomOptions = [ 'irl', 'zoom' ];
  const bottomValues = ['👖', '🩲']
  const shoesOptions = [ 'summer', 'winter', 'zoom' ];
  const shoesValues = ['🛼', '👢', '🩰']

  return (
    <div>
      <Select placeholder='head' options={headOptions} values={headValues} current={currentHead} onChange={onHeadChange}/>
      <Select placeholder='middle' options={middleOptions} values={middleValues} current={currentMiddle} onChange={onMiddleChange}/>
      <Select placeholder='bottom' options={bottomOptions} values={bottomValues} current={currentBottom} onChange={onBottomChange}/>
      <Select placeholder='shoes' options={shoesOptions} values={shoesValues} current={currentShoes} onChange={onShoesChange}/>
    </div>
  )
}
