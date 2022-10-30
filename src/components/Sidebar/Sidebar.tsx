export default function Sidebar(props:{openSidebar: boolean}) {
  return (
    <aside
      className={`top-12 right-0 w-[90vw] md:w-[20vw] bg-blue-900  text-blue-200 fixed  h-full z-40  ease-in-out duration-300 ${
        props.openSidebar ? "translate-x-0 " : "translate-x-full"
      }
        flex flex-col items-center gap-4 pt-4
        `}
    >
      <h3>NavLink</h3>
      <h3>NavLink</h3>
      <h3>NavLink</h3>
      <h3>NavLink</h3>
    </aside>
  );
}
