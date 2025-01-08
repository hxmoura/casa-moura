import { Icon } from "@iconify/react/dist/iconify.js";
import {
  useCallback,
  useState,
  useMemo,
  ComponentType,
  useRef,
  useEffect,
} from "react";
import { CardFlag } from "../types/payment";
import {
  MPBinChangeEvent,
  MPChangeEvent,
  MPValidityChangeEvent,
} from "../types/mp";

interface InputCardProps {
  label?: string;
  InputComponent: ComponentType<any>;
  onValidityChange: (evt: MPValidityChangeEvent) => void;
  error: string;
  placeholder?: string;
  onChange: (evt: MPChangeEvent) => void;
  onBinChange?: (evt: MPBinChangeEvent) => void;
  cardFlag?: CardFlag;
}

export default function InputCard({
  label,
  InputComponent,
  onValidityChange,
  error,
  placeholder,
  onChange,
  onBinChange,
  cardFlag,
}: InputCardProps) {
  const [focus, setFocus] = useState(false);

  const onValidityChangeRef = useRef(onValidityChange);
  const onChangeRef = useRef(onChange);
  const onBinChangeRef = useRef(onBinChange);

  useEffect(() => {
    onValidityChangeRef.current = onValidityChange;
    onChangeRef.current = onChange;
    onBinChangeRef.current = onBinChange;
  }, [onValidityChange, onChange, onBinChange]);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleValidityChange = useCallback((evt: MPValidityChangeEvent) => {
    onValidityChangeRef.current(evt);
  }, []);

  const handleChange = useCallback((evt: MPChangeEvent) => {
    onChangeRef.current(evt);
  }, []);

  const handleBinChange = useCallback((evt: MPBinChangeEvent) => {
    if (onBinChangeRef.current) {
      onBinChangeRef.current(evt);
    }
  }, []);

  const style = useMemo(() => {
    return {
      fontSize: "12px",
      padding: "8px",
      height: "40px",
      color: "#3E3E3E",
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-xs font-medium">{label}</label>

      <div
        className={`w-full h-10 border border-background-softLight rounded bg-white ${focus && "border-notify-info"} ${error && "border-notify-error"} flex`}
      >
        {cardFlag && (
          <div className="flex items-center justify-center p-2 w-full max-w-10 border-r cursor-default">
            {cardFlag === "noFlag" ? (
              <Icon
                icon="heroicons:credit-card-16-solid"
                className="min-w-full min-h-full text-text-light"
              />
            ) : (
              <Icon icon={cardFlag} className="min-w-full min-h-full" />
            )}
          </div>
        )}
        <div className="w-full overflow-hidden">
          <InputComponent
            onBlur={handleBlur}
            onFocus={handleFocus}
            onValidityChange={handleValidityChange}
            onChange={handleChange}
            onBinChange={onBinChange ? handleBinChange : null}
            style={style}
            placeholder={placeholder}
          />
        </div>
      </div>
      <span className="text-notify-error text-xs">{error}</span>
    </div>
  );
}
