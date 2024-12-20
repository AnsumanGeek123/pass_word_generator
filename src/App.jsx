import { useState } from "react";

function App() {
  const [length, setLength] = useState(8); // Default password length
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [charsAllowed, setCharsAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // Function to generate a password
  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}<>?";

    let characterPool = letters;
    if (numbersAllowed) characterPool += numbers;
    if (charsAllowed) characterPool += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
        <div className="mb-4">
          <label htmlFor="length" className="block text-gray-700 font-semibold mb-2">
            Password Length
          </label>
          <input
            type="number"
            id="length"
            className="w-full border border-gray-300 rounded-lg p-2"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={numbersAllowed}
              onChange={(e) => setNumbersAllowed(e.target.checked)}
            />
            Include Numbers
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={charsAllowed}
              onChange={(e) => setCharsAllowed(e.target.checked)}
            />
            Include Special Characters
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Generated Password
            </label>
            <div className="bg-gray-200 p-2 rounded-lg text-center text-gray-800 font-mono">
              {password}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
