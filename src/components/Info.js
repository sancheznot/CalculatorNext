"use client";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

export const Info = () => {
  return (
    <Popup
      trigger={
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="grid grid-cols-1 rounded-lg overflow-y-scroll bg-gray-400 w-[500px] sm:w-screen h-screen transition-all duration-1000 ease-out place-content-start  place-items-start p-5 ">
          <div className="w-full flex flex-row justify-between items-end  text-2xl gap-3">
            <h1 className="text-2xl mb-3 text-white"> How does It work? </h1>
            <button
              className=" border-2 p-2 rounded-lg  w-10 bg-red-300"
              onClick={close}>
              &times;
            </button>
          </div>
          <div className="w-full grid grid-cols-1 ">
            <div className="w-full">
              <p className="text-white text-sm text-justify p-3">
                1. Familiarize Yourself with the Calculator Interface: Take a
                moment to look at the calculator&#39;s buttons and features.
                You&#39;ll typically see buttons for digits (0-9), arithmetic
                operations (addition, subtraction, multiplication, division),
                equals (=) for calculating results, and other functions (e.g.
                percentage)
              </p>
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>

              <p className="text-white text-sm text-justify p-3">
                2. Entering Numbers: To perform calculations, start by entering
                numbers. You can do this by clicking or tapping the number
                buttons on the calculator&#39;s interface. For example, if you
                want to enter the number 5, press the &quot;5&quot; button.
              </p>
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <p className="text-white text-sm text-justify p-3">
                3. Performing Arithmetic Operations: To perform arithmetic
                operations, use the corresponding buttons on the calculator.
                Here&#39;s how to use common operations: Addition (+): Enter the
                first number, press the + button, enter the second number, and
                then press = to get the result. Subtraction (-): Enter the first
                number, press the - button, enter the second number, and then
                press = to get the result. Multiplication (x): Enter the first
                number, press the &quot;x&quot; (multiplication) button, enter
                the second number, and then press &quot;=&quot; to get the
                result. Division (÷): Enter the first number, press the ÷
                (division) button, enter the second number, and then press
                &quot;=&quot; to get the result.
              </p>
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <p className="text-white text-sm text-justify p-3">
                Clearing or Correcting Entries: 4. If you make a mistake while
                entering numbers or performing calculations, most calculators
                provide a &quot;C&quot; (Clear Entry) button. Pressing this
                button will clear the current entry and allow you to start over.
              </p>
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <p className="text-white text-sm text-justify p-3">
                5. Calculating Results: After entering numbers and arithmetic
                operations, press the &quot;=&quot; (equals) button to calculate
                the result. The result will be displayed on the calculator&#39;s
                screen. and save the result in the history.
              </p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
