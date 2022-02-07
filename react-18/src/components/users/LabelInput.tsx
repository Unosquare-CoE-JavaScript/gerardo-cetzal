import { InputHTMLAttributes, useId } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

export function LabelInput({ label, value, ...rest }: Props) {
  // useId, Can be used to generate unique ID’s in an SSR-safe way
  const id = useId();
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input id={id} className="form-control" value={value} {...rest} />
    </div>
  );
}
