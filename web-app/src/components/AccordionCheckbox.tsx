import { ColorLabelValue, LabelValue } from '@/interfaces/other';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';

interface AccordionProps {
  name: string;
  selected: LabelValue[];
  options: LabelValue[] | ColorLabelValue[];
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

  /**
   * Checks if an option is a ColorOption type or not so the rgb can be used if it is
   *
   * @param option - The option in question
   */
  function isColorOption(
    option: LabelValue | ColorLabelValue
  ): option is ColorLabelValue {
    return (
      (option as ColorLabelValue).red !== undefined &&
      (option as ColorLabelValue).green !== undefined &&
      (option as ColorLabelValue).blue !== undefined
    );
  }

  return (
    <div>
      <button
        type='button'
        className='w-full flex justify-between p-4 border-t border-primary'
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
                className='appearance-none h-4 mr-2 w-4 border border-primary rounded checked:bg-accent checked:border-primary'
                id={`${name.toLowerCase()}-${o.value}`}
                name={`${name.toLowerCase()}`}
                value={o.value}
                checked={selected.some((s) => s.value === o.value)}
                onChange={(e) => onCheckboxChange(o, e.target.checked)}
              />
              <label
                htmlFor={`${name.toLowerCase()}-${o.value}`}
                className='cursor-pointer hover:text-accent flex items-center gap-2'
              >
                {o.label}{' '}
                {isColorOption(o) && (
                  <span
                    className='rounded-full border border-black h-4 w-4 inline-block'
                    style={{
                      background: `${
                        o.value === 'multicolor'
                          ? 'conic-gradient(red, yellow, green, blue, purple)'
                          : `rgb(${o.red}, ${o.green}, ${o.blue})`
                      }`
                    }}
                  />
                )}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
}
