import './rc-slider.style.css';
import Slider from 'rc-slider';
import { COLORS } from '../../../lib/constants';
import { SetStateAction } from 'react';

interface RangeSliderPropsType {
  value: number | number[];
  setValue: React.Dispatch<SetStateAction<number[]>>;
}

const HeightRangeSlider = ({ value, setValue }: RangeSliderPropsType) => {
  const marks = {
    20: {
      label: '20',
      style: {
        top: 5,
        color: COLORS.Blue30,
        fontSize: 14,
      },
    },
    21: '',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '',
    28: '',
    29: '',
    30: {
      label: '30+',
      style: {
        top: 5,
        color: COLORS.Blue30,
        fontSize: 14,
      },
    },
  };

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Slider
      range
      min={20}
      max={30}
      step={1}
      value={value}
      marks={marks}
      dots={true}
      onChange={handleChange}
      railStyle={{
        height: 4,
        backgroundColor: `${COLORS.Blue10}`,
      }}
      trackStyle={{
        height: 4,
        backgroundColor: `${COLORS.Blue50}`,
      }}
      handleStyle={[
        {
          border: `2px solid ${COLORS.Blue50}`,
          height: 18,
          width: 18,
          marginTop: -8,
          backgroundColor: '#fff',
          opacity: 1,
          boxShadow: 'none',
        },
        {
          border: `2px solid ${COLORS.Blue50}`,
          height: 18,
          width: 18,
          marginTop: -8,
          backgroundColor: '#fff',
          opacity: 1,
          boxShadow: 'none',
        },
      ]}
      dotStyle={{
        backgroundColor: '#fff',

        width: 9,
        height: 9,
      }}
      activeDotStyle={{
        backgroundColor: COLORS.White,
        border: `1px solid ${COLORS.White}`,
        width: 1,
      }}
      allowCross={false}
      pushable={1}
    />
  );
};

export default HeightRangeSlider;
