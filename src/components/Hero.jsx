import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/shagunZ", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Synopsis on a click<br className='max-md:hidden' />
        <span className='orange_gradient '> with OPENAI GPT-X</span>
      </h1>
      <h2 className='desc'>
      Streamline your reading experience with Synopser, a powerful open-source article summarizer that condenses lengthy articles into easily understandable and succinct summaries
      </h2>
    </header>
  );
};

export default Hero;