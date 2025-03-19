const Quote = ({ text, source }) => {
  return (
    <div className="max-w-lg">
      <p>{text}</p>
      <div className="mt-5 text-xs uppercase text-oslo-gray">{source}</div>
    </div>
  );
};

export default Quote;
