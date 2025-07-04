export const Header = () => (
  <>
    <div className="text-center">
      <h1 className="uppercase text-4xl font-bold">jonathan raxa</h1>
    </div>
    <div className="text-center mt-4">
      <div className="text-lg text-gray-700">Austin Metropolitan Area, TX</div>
      <div className="mt-2 flex items-center justify-center space-x-2">
        <a href="mailto:jonathanraxa@gmail.com" className="hover:underline">
          Email
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/jonathanraxa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <span>|</span>
        <a
          href="https://github.com/jonathanraxa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  </>
);
