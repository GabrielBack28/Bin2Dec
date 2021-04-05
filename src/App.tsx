import React, { useEffect, useState } from "react";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  const [binary, setBinary] = useState<string>('');
  const [decimal, setDecimal] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (binary === '') {
      setButtonDisabled(true);
      return;
    }
    if (binary.match(/^[0-1]+$/g) === null) {
      setErrorMessage('Enter either 0 or 1');
      setButtonDisabled(true);
      return;
    }

    setErrorMessage('');
    setButtonDisabled(false);
  }, [binary]);

  const onFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const reversedBinaryText = binary
      .split('')
      .map(Number)
      .reverse()

    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )

    setDecimal(result)
  }


  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <form
        onSubmit={onFormSubmit}
        className="border border-gray-700 p-10 rounded-xl"
      >
        <p className="mb-8 font-bold text-xl text-center">Binary to Decimal Converter</p>
        <div className="flex flex-row gap-5">
          <Input
            value={binary}
            onChange={(event) => setBinary(event.target.value)}
            label="Binary Input"
            max={8}
          />
          <Button
            label="Convert"
            type="submit"
            disabled={buttonDisabled}
          />
        </div>
        <div className="h-10">
          <p className="text-red-500">{errorMessage}</p>
        </div>
        <Input
          value={decimal}
          label="Decimal Output"
          disabled
        />
      </form>
    </div>
  );
}

export default App;
