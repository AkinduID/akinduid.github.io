import CommonCard from "../common/CommonCard"

/**
 * ToolboxSection renders a titled card containing a grid of tool/technology
 * icons for a single toolbox category (e.g. "Programming Languages").
 *
 * @param {object} props
 * @param {string} props.title - Category title.
 * @param {Array<{name: string, icon: string}>} props.items - Tools to display in the grid.
 * @returns {JSX.Element}
 */
export default function ToolboxSection({ title, items }) {
  return (
    <CommonCard className="!p-5 !rounded-2xl">
      <h2 className="text-md font-semibold">
        {title}
      </h2>

      <ul className="mt-4 grid grid-cols-3 gap-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center gap-2 text-center"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-12 w-12 shrink-0 object-contain"
              loading="lazy"
            />

            <span className="min-w-0 text-sm font-semibold leading-tight theme-text-secondary">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </CommonCard>
  )
}