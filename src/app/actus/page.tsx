"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useActusContext, validEmailExpression } from "./actus.context";
import ActusDescription from "./actus.description";
import Button from "@/components/button";
import AwesomeInput from "@/components/awesome.input";

export default function ActusTest() {
  const { inProgress, user, startTest, resetTest } = useActusContext();
  const router = useRouter();

  // name
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  // email
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  // email confirmation
  const [email2, setEmail2] = useState("");
  const [isEmail2Valid, setIsEmail2Valid] = useState(false);
  // are all requirements met?
  const [requirementsOk, setRequirementsOk] = useState(false);

  const validateName = useCallback(
    (value: string) => {
      const condition = value !== "";
      if ((condition && !isNameValid) || (!condition && isNameValid))
        setIsNameValid(condition);
      return condition;
    },
    [isNameValid]
  );

  const validateEmail = useCallback(
    (value: string) => {
      const condition = validEmailExpression.test(value);
      if ((condition && !isEmailValid) || (!condition && isEmailValid))
        setIsEmailValid(condition);
      return condition;
    },
    [isEmailValid]
  );

  const validateEmail2 = useCallback(
    (value: string) => {
      const condition = validEmailExpression.test(value) && value === email;
      if ((condition && !isEmail2Valid) || (!condition && isEmail2Valid))
        setIsEmail2Valid(condition);
      return condition;
    },
    [isEmail2Valid, email]
  );

  const handleStart = () => {
    startTest({ name, email });
    router.push("/actus/test");
  };

  useEffect(() => {
    if (isNameValid && isEmailValid && isEmail2Valid) {
      setRequirementsOk(true);
    }
  }, [isNameValid, isEmailValid, isEmail2Valid]);

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
            <h3 className="text-lg">
              {user.name}
              <span className="pl-3">{`< ${user.email} >`}</span>
            </h3>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3 w-3/5 lg:w-2/5">
              <AwesomeInput
                type="text"
                placeholder="Ingresar nombre completo *"
                value={name}
                onChange={({ target }) => setName(target.value)}
                onBlur={({ target }) => validateName(target.value)}
                valid={isNameValid}
              />
              <AwesomeInput
                type="email"
                placeholder="Ingresa tu email *"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                onBlur={({ target }) => validateEmail(target.value)}
                valid={isEmailValid}
                invalidMessage="^ El email debe ser válido."
              />
              <AwesomeInput
                type="email"
                placeholder="Ingresa tu email *"
                value={email2}
                onChange={({ target }) => {
                  setEmail2(target.value);
                  validateEmail2(target.value);
                }}
                onBlur={({ target }) => validateEmail2(target.value)}
                valid={isEmail2Valid}
                invalidMessage="^ El email debe ser válido e idéntico."
              />
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
