import React from "react";

const FAQ = () => {
  return (
    <div className="container" id="faq">
      <h2 className="text-center text-2xl font-bold">FAQ</h2>
      <div className="max-w-xl mx-auto py-8">
        <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg px-6 rounded-lg transition-all">
          <summary className="py-2 px-4 rounded-lg text-sm leading-6 text-slate-900 font-semibold select-none">
            How often does the talk show come ?
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600">
            <p>Sexual purity is a talkshow that comes up once every year.</p>
          </div>
        </details>
        <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg transition-all">
          <summary className="py-2 px-4 rounded-lg text-sm leading-6 text-slate-900 font-semibold select-none">
            Is it a physical or virtual
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600">
            <p>
              The program is hosted at Owode Ajegunle Parish of the Watchman
              Catholic Charismatic Renewal Movement and is also live streamed on
              facebook.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
