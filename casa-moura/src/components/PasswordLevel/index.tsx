import { useEffect, useState } from "react";

interface PasswordLevelProps {
  password: string;
}

export default function PasswordLevel({ password }: PasswordLevelProps) {
  const [passwordLevel, setPasswordLevel] = useState<
    "Fraca" | "Razoável" | "Forte"
  >("Fraca");

  useEffect(() => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\\/]/.test(password);

    if (password.length < 6) {
      setPasswordLevel("Fraca");
    } else if (
      password.length >= 6 &&
      hasLowerCase &&
      hasUpperCase &&
      hasNumber &&
      hasSpecialChar
    ) {
      setPasswordLevel("Forte");
    } else if (password.length >= 6 && hasLowerCase && hasUpperCase) {
      setPasswordLevel("Razoável");
    }
  }, [password]);

  return (
    <div className="mt-5 mb-10">
      <p className="text-xs font-medium mb-2">Nível da senha</p>
      <div className="flex items-center gap-3">
        <div className="relative h-1 w-40">
          <div
            className={`absolute h-full rounded transition-all
                        ${passwordLevel === "Fraca" && "bg-notify-error"}
                        ${passwordLevel === "Razoável" && "bg-notify-warning"}
                        ${passwordLevel === "Forte" && "bg-notify-success"}
                      `}
            style={{
              width: `${!password.length ? 0 : passwordLevel === "Fraca" ? 20 : passwordLevel === "Razoável" ? 60 : 100}%`,
            }}
          ></div>
          <div className="bg-background-softLight w-full h-full rounded"></div>
        </div>
        <p className="text-xs">{passwordLevel}</p>
      </div>
    </div>
  );
}
