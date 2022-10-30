export default function Header(props: {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
}) {
  return (
    <header className="w-full flex h-12 bg-blue-200 justify-between items-center px-3">
      <h3>Movie Gallery App</h3>
      <button
        onClick={() => {
          props.openSidebar
            ? props.setOpenSidebar(false)
            : props.setOpenSidebar(true);
        }}
      >
        {props.openSidebar ? "Close" : "Open"}
      </button>
    </header>
  );
}
