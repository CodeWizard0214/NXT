const SwipeButton = ({ icon, className, onClick }) => (
  <button
    onClick={onClick}
    className={`flex h-10 w-10 items-center justify-center rounded-full bg-black/30 opacity-90 backdrop-blur ${
      className || ''
    }`}
    style={{
      boxShadow:
        'inset 0px 0.535004px 21.4001px rgba(227, 222, 255, 0.02), inset 0px 20.8651px 29.9602px -19.2601px rgba(255, 255, 255, 0.02)'
    }}>
    {icon}
  </button>
);

export default SwipeButton;
