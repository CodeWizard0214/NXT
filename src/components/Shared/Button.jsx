const Button = ({ 'aria-label': ariaLabel, children, size, className }) => {
  return (
    <button
      className={`rounded-full bg-white text-black transition-colors hover:bg-gallery ${
        size === 'small' ? 'px-4 py-2 text-xs' : 'px-6 py-3 font-medium'
      } ${className || ''}`}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
