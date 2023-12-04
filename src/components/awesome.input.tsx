import React, { useEffect, useState } from "react";

enum BorderColor {
  neutral = "border-zinc-600",
  valid = "border-sky-300",
  invalid = "border-rose-400",
}

type AwesomeInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  valid: boolean;
  invalidMessage?: string;
};
export default function AwesomeInput({
  valid,
  invalidMessage,
  ...props
}: AwesomeInputProps) {
  const [firstRender, setFirstRender] = useState(true);
  const [borderColor, setBorderColor] = useState<BorderColor>(
    BorderColor.neutral
  );
  const [showAlert, setShowAlert] = useState(false);

  const handleFocusOut = () => {
    setFirstRender(false);
  };

  useEffect(() => {
    if (!valid && firstRender) return;

    if (valid) {
      if ([BorderColor.invalid, BorderColor.neutral].includes(borderColor)) {
        setBorderColor(BorderColor.valid);
        if (invalidMessage && showAlert) setShowAlert(false); // only bother if optional alert message is provided
      }
    } else {
      if ([BorderColor.valid, BorderColor.neutral].includes(borderColor)) {
        setBorderColor(BorderColor.invalid);
        if (invalidMessage && !showAlert) setShowAlert(true); // only bother if optional alert message is provided
      }
    }
  }, [firstRender, borderColor, showAlert, valid, invalidMessage]);

  return (
    <div className="flex flex-col place-items-start">
      <input
        className={`border ${borderColor} p-1 rounded w-full`}
        onBlurCapture={handleFocusOut}
        {...props}
      />
      {showAlert && <span className="text-red-500">{invalidMessage}</span>}
    </div>
  );
}
