import { useMobileMenuStore } from "@/state/navState";

const Burger = () => {
  const { isOpen, setIsOpen } = useMobileMenuStore();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <button onClick={handleClick}>
      <svg viewBox="0 0 32 32" strokeLinecap="round" height={24} strokeWidth="2">
        {!isOpen ? (
          <>
            <path d="M5 8h22M5 16h22M5 24h22" fill="none" strokeWidth="2" className="stroke-content-200" />
          </>
        ) : (
          <>
            <path d="M5 8h22" fill="none" strokeWidth="2" transform="rotate(45 3.4 14.5) scale(.83567)" className="stroke-content-200" />
            <path d="M5 16h22" fill="none" strokeWidth="2" transform="rotate(-45 17.9 11.5) scale(.83567)" className="stroke-content-200" />
          </>
        )}
        <path
          d="M31.5 4c0-2-1.6-3.5-3.5-3.5H4C2 .5.5 2.1.5 4v24c0 2 1.6 3.5 3.5 3.5h24c2 0 3.5-1.6 3.5-3.5V4Z"
          fill="none"
          strokeLinecap="butt"
          className="stroke-divider-200"
        />
      </svg>
    </button>
  );
};

export default Burger;
