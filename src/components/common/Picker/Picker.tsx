import { useRef, useEffect, useState } from 'react';
import { S } from './style';
import Text from '../Text';

interface ScrollPickerProps {
  list: string[];
  onSelectedChange?: (selected: string) => void;
  startIndex?: number;
}

const Picker = ({
  list,
  onSelectedChange,
  startIndex = 1,
}: ScrollPickerProps) => {
  console.log(startIndex);
  const SCROLL_DEBOUNCE_TIME = 100;

  const newList = ['', '', ...list, '', ''];
  const ref = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(startIndex);
  console.log(selected);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const ITEM_HEIGHT = 48;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(timerRef.current!);
      if (ref.current.scrollTop <= ITEM_HEIGHT) {
        ref.current.scrollTop = ITEM_HEIGHT;
      }
      timerRef.current = setTimeout(() => {
        const index = Math.round(
          (ref.current!.scrollTop - 48) / ITEM_HEIGHT + 2,
        );
        if (list[index] !== '') {
          setSelected(index);
          itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          if (onSelectedChange) onSelectedChange(newList[index]);
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 48 * startIndex;
    }
  }, []);
  return (
    <S.List ref={ref} onScroll={handleScroll}>
      <S.ListCenter />
      {newList.map((item, index) => (
        <S.ListItem
          key={index}
          isSelected={index === selected}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          {index === selected ? (
            <Text
              typograph={'titleSmall'}
              color={'Red60'}
              style={{ fontWeight: 600 }}
            >
              {item.toString()}
            </Text>
          ) : index === selected - 1 || index === selected + 1 ? (
            <Text
              typograph={'bodyLargeMedium'}
              color={'Blue40'}
              style={{ fontWeight: 500 }}
            >
              {item.toString()}
            </Text>
          ) : (
            <Text
              typograph={'bodyLargeMedium'}
              color={'Blue20'}
              style={{ fontWeight: 400 }}
            >
              {item.toString()}
            </Text>
          )}
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default Picker;
