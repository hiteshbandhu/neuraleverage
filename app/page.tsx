import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-red-600">neuraleverage</h1>
      </header>
      <div className='mx-32 justify-center'>
        <section className="mb-8 text-center">
          <p className="text-lg">
            ai startup teams invest significant time and resources poring over research papers to uncover new techniques. it's a tedious and often mundane task. at neuraleverage, we automate this process for you. we believe your valuable time should be focused on driving innovation and progress.
          </p>
        </section>
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">our mission</h2>
          <p className="mt-2 text-lg">
            our mission is to simplify the discovery, categorization, and application of research papers for ai startups. we're here to support your journey of creating cutting-edge technologies while we handle the groundwork.
          </p>
        </section>
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">connect with us</h2>
          <p className="mt-2 text-lg">
            follow us on <a href="https://x.com/neuraleverage" className="text-blue-400 hover:underline">twitter</a> and subscribe to our <a href="https://neuraleverage.beehiiv.com/" className="text-blue-400 hover:underline">newsletter</a>.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold">about : hitesh bandhu</h2>
          <p className="mt-2 text-lg">
            connect with hitesh bandhu on <a href="https://x.com/_hiteshbandhu" className="text-blue-400 hover:underline">twitter</a> and visit his <a href="https://hiteshbandhu.xyz" className="text-blue-400 hover:underline">website</a>.
          </p>
        </section>
      </div>
      <footer className="mt-8 text-center">
        <p className="text-lg">with ❤️ by neuraleverage</p>
      </footer>
    </div>
  );
};

export default HomePage;
