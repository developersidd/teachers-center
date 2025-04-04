import type { InputHTMLAttributes } from "react";

const sizes = {
  sm: { box: "w-5 h-5", checkmark: "w-4 h-4 mt-[5px] ml-[3px]" },
  md: { box: "w-7 h-7", checkmark: "w-6 h-6 mt-[6px] ml-[2px]" },
  lg: { box: "w-9 h-9", checkmark: "w-8 h-8 mt-[7px] ml-[1px]" },
} as const;

type Size = keyof typeof sizes;

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: React.ReactNode;
  size?: Size;
};

const Checkbox = ({ size, label, id, ...rest }: CheckboxProps) => {
  const { box, checkmark } = sizes[size! || "md"];

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-start">
        <input
          type="checkbox"
          id={id}
          className={`
            cursor-pointer
            relative peer shrink-0
            appearance-none ${box} border-2 border-black rounded-sm bg-white
            mt-1
            checked:bg-black checked:border-0
            focus:outline-none focus:ring-offset-0 
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
          {...rest}
        />
        <svg
          className={`absolute ${checkmark} hidden peer-checked:block pointer-events-none`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      {label && (
        <label htmlFor={id} className={rest.disabled ? "opacity-50" : ""}>
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  size: "md",
};

export default Checkbox;
