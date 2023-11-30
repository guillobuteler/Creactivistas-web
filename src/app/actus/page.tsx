"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button";
import ActusDescription from "./actus.description";
import { useActusContext, validEmailExpression } from "./actus.context";
import { useCallback, useEffect, useState } from "react";

const borderColorOk = "border-sky-300";
const borderColorReq = "border-rose-400";
type BorderColor = "border-sky-300" | "border-rose-400";

export default function ActusTest() {
  const { inProgress, setUser, resetTest } = useActusContext();
  const router = useRouter();

  // name
  const [name, setName] = useState("");
  const [borderColorName, setBorderColorName] =
    useState<BorderColor>(borderColorReq);

  // email
  const [email, setEmail] = useState("");
  const [showEmailInvalid, setShowEmailInvalid] = useState(false);
  const [borderColorEmail, setBorderColorEmail] =
    useState<BorderColor>(borderColorReq);

  // email confirmation
  const [email2, setEmail2] = useState("");
  const [showEmail2Invalid, setShowEmail2Invalid] = useState(false);
  const [borderColorEmail2, setBorderColorEmail2] =
    useState<BorderColor>(borderColorReq);

  // everything's ok
  const [requirementsOk, setRequirementsOk] = useState(false);

  useEffect(() => {
    if (borderColorName === borderColorOk && name === "")
      setBorderColorName(borderColorReq);
    if (borderColorName === borderColorReq && name !== "")
      setBorderColorName(borderColorOk);
  }, [name, borderColorName]);

  useEffect(() => {
    if (borderColorEmail === borderColorOk) {
      if (email === "" || showEmailInvalid) setBorderColorEmail(borderColorReq);
    }
    if (borderColorEmail === borderColorReq) {
      if (email !== "" && !showEmailInvalid) setBorderColorEmail(borderColorOk);
    }
  }, [email, borderColorEmail, showEmailInvalid]);

  useEffect(() => {
    if (borderColorEmail2 === borderColorOk) {
      if (email2 === "" || showEmail2Invalid)
        setBorderColorEmail2(borderColorReq);
    }
    if (borderColorEmail2 === borderColorReq) {
      if (email2 !== "" && !showEmail2Invalid)
        setBorderColorEmail2(borderColorOk);
    }
  }, [email2, borderColorEmail2, showEmail2Invalid]);

  useEffect(() => {
    if (
      borderColorName === borderColorOk &&
      borderColorEmail === borderColorOk &&
      borderColorEmail2 === borderColorOk &&
      !showEmailInvalid &&
      !showEmail2Invalid
    )
      setRequirementsOk(true);
    else setRequirementsOk(false);
  }, [
    borderColorName,
    borderColorEmail,
    borderColorEmail2,
    showEmailInvalid,
    showEmail2Invalid,
  ]);

  const handleEmailBlur = useCallback(
    (value: string) => {
      if (!validEmailExpression.test(value)) setShowEmailInvalid(true);
      else if (showEmailInvalid) setShowEmailInvalid(false);
    },
    [showEmailInvalid]
  );

  const handleEmailDuplicateBlur = useCallback(
    (value: string) => {
      if (value !== email) setShowEmail2Invalid(true);
      else if (showEmail2Invalid) setShowEmail2Invalid(false);
    },
    [email, showEmail2Invalid]
  );

  const handleStart = () => {
    setUser({ name, email });
    router.push("/actus/test");
  };

  return (
    <section className="flex flex-col gap-8 pb-16" data-testid="actus">
      <ActusDescription />
      <div className="flex flex-col gap-8 justify-center place-items-center">
        {inProgress ? (
          <>
            <Button
              title="Continuar test"
              onClick={() => router.push("/actus/test")}
              dataTestId="start-mbti"
            />
            <Button
              title="Reset test"
              color="tertiary"
              onClick={() =>
                confirm(
                  "Cualquier valor registrado hasta el momento se perderá. Continuar?"
                ) && resetTest()
              }
            />
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3 w-2/5">
              <input
                className={`border ${borderColorName} p-1 rounded`}
                type="text"
                placeholder="Ingresar nombre completo *"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <div className="flex flex-col place-items-start">
                <input
                  className={`border ${borderColorEmail} p-1 rounded w-full`}
                  type="email"
                  placeholder="Ingresar email *"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  onBlur={({ target }) => handleEmailBlur(target.value)}
                  required
                />
                {showEmailInvalid && (
                  <span className="text-red-500">
                    ^ El email debe ser válido.{" "}
                  </span>
                )}
              </div>
              <div className="flex flex-col place-items-start">
                <input
                  className={`border ${borderColorEmail2} p-1 rounded w-full`}
                  type="email"
                  placeholder="Confirmación de su email *"
                  value={email2}
                  onChange={({ target }) => setEmail2(target.value)}
                  onBlur={({ target }) =>
                    handleEmailDuplicateBlur(target.value)
                  }
                  required
                />
                {showEmail2Invalid && (
                  <span className="text-red-500">
                    ^ El email debe ser válido e idéntico.{" "}
                  </span>
                )}
              </div>
            </div>
            <Button
              title="Empezar test"
              disabled={!requirementsOk}
              onClick={handleStart}
              dataTestId="start-mbti"
            />
          </>
        )}
      </div>
    </section>
  );
}
