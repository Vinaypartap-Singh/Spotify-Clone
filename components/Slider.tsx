"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider = ({ value = 1, onChange }: SliderProps) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className="
    relative
    flex items-center select-none touch-none max-w-[100px] w-full h-10
    "
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      area-label="Volume"
    >
      <RadixSlider.Track className="bg-neutral-500 relative grow rounded-full h-[4px]">
        <RadixSlider.Range className="bg-white rounded-full h-full absolute"></RadixSlider.Range>
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
