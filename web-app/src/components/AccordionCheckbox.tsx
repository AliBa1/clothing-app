import { LabelValue } from '@/interfaces/other';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';

interface AccordionProps {
  name: string;
  selected: LabelValue[];
  options: LabelValue[];
  isOpen: boolean;
  onOpen: () => void;
  onChecked: (o: LabelValue) => void;
  onUnchecked: (o: LabelValue) => void;
}

/**
 * Opens an accordion that allows users to select none, one, or many items to add or remove from array
 */
export default function AccordionCheckbox({
  name,
  selected,
  options,
  isOpen,
  onOpen,
  onChecked,
  onUnchecked
}: AccordionProps) {
  /**
   * Runs function to add or remove option from selected
   *
   * @param option - The option that was checked or unchecked
   * @param checked - If checked or unchecked
   */
  function onCheckboxChange(option: LabelValue, checked: boolean) {
    if (checked) {
      onChecked(option);
    } else {
      onUnchecked(option);
    }
  }
  return (
    <div>
      <button
        type='button'
        className='w-full flex justify-between p-4 border-t border-secondary'
        onClick={onOpen}
      >
        <p className='text-nowrap truncate'>
          {name}
          {selected.length > 0 && (
            <span className='text-accent'>
              : {selected.map((s) => s.label).join(', ')}
            </span>
          )}
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
            <div key={o.value} className='flex items-center'>
              <input
                type='checkbox'
                className='appearance-none h-4 mr-2 w-4 border border-secondary rounded checked:bg-accent checked:border-secondary focus:outline-none focus:ring-2 focus:ring-blue-300'
                id={`${name.toLowerCase()}-${o.value}`}
                name={`${name.toLowerCase()}`}
                value={o.value}
                checked={selected.includes(o)}
                onChange={(e) => onCheckboxChange(o, e.target.checked)}
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
