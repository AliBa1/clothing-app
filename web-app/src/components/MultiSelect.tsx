import { LabelValue } from '@/interfaces/other';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect, useRef, useState } from 'react';

interface MultiSelectProps {
  disabledPlaceholder?: string;
  options: LabelValue[];
  selected: LabelValue[];
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MultiSelect({
  disabledPlaceholder = '',
  options,
  selected,
  disabled = false,
  onChange
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        fieldsetRef.current &&
        !fieldsetRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [fieldsetRef]);

  return (
    <div className='text-black relative'>
      <button
        type='button'
        className={`flex justify-between w-full p-2 bg-white disabled:opacity-25 ${
          isOpen ? 'rounded-t' : 'rounded'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <p className='truncate'>
          {/* {selected.length < 1
            ? 'Select'
            : selected.map((s) => s.label).join(', ')} */}

          {disabled
            ? disabledPlaceholder
            : selected.map((s) => s.label).join(', ')}
        </p>
        <Icon
          className='min-w-8'
          path={isOpen ? mdiChevronUp : mdiChevronDown}
          size={1}
        />
      </button>
      {isOpen && (
        <fieldset
          className='absolute z-10 w-full overflow-y-auto max-h-96'
          ref={fieldsetRef}
        >
          {options.map((o) => (
            <label
              key={o.value}
              className='flex gap-2 items-center bg-white opacity-90 p-2 last:rounded-b cursor-pointer md:hover:opacity-100 select-none'
              htmlFor={`${o.value}-option`}
            >
              <input
                type='checkbox'
                className='appearance-none h-4 w-4 border border-black rounded checked:bg-accent'
                id={`${o.value}-option`}
                checked={selected.some((s) => s.value === o.value)}
                value={o.value}
                onChange={onChange}
              />
              {o.label}
            </label>
          ))}
        </fieldset>
      )}
    </div>
  );
}
