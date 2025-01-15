import { LabelValue } from '@/interfaces/filters';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';

interface DropdownProps {
  name: string;
  selected: LabelValue;
  options: LabelValue[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (o: LabelValue) => void;
}

export default function DropdownRadio({
  name,
  selected,
  options,
  isOpen,
  onOpen,
  onClose,
  onSelect
}: DropdownProps) {
  return (
    <div>
      <button
        type='button'
        className='w-full flex justify-between p-4 border-t'
        onClick={onOpen}
      >
        <p>
          {name}: <span className='text-accent'>{selected.label}</span>
        </p>
        <Icon path={isOpen ? mdiChevronUp : mdiChevronDown} size={1} />
      </button>
      <div
        className={`${
          isOpen ? 'max-h-96 px-4 pb-8 md:pb-4 gap-4' : 'max-h-0'
        } overflow-hidden transition-all duration-300 flex-col`}
      >
        <fieldset>
          {options.map((o) => (
            <div key={o.value}>
              <input
                type='radio'
                id={`${name.toLowerCase()}-${o.value}`}
                name={name.toLowerCase()}
                className='hidden'
                value={o.value}
                checked={selected.value === o.value}
                onChange={() => onSelect(o)}
                onClick={onClose}
              />
              <label
                htmlFor={`${name.toLowerCase()}-${o.value}`}
                className='cursor-pointer hover:text-accent'
              >
                {o.label}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
}
