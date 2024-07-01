export const Button = ({
  className,
  children,
  small,
  outline,
  type = 'button',
  ...props
}: any) => {
  return (
    <button
      className={`${className} relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${
        outline
          ? 'bg-white border-black text-black'
          : 'bg-rose-500 border-rose-500 text-white'
      }
      ${
        small
          ? 'py-1 text-sm font-light border-[1px]'
          : 'py-3 text-base font-semibold border-2'
      }
      `}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};
