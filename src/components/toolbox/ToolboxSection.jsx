import SectionBlock from "../common/SectionBlock"

/**
 * ToolboxSection renders one toolbox category (e.g. "Programming Languages")
 * as a labelled section: each tool or technology is an outlined chip showing
 * its icon and name.
 *
 * @param {object} props
 * @param {string} props.title - Category title.
 * @param {Array<{name: string, icon: string}>} props.items - Tools to display.
 * @returns {JSX.Element}
 */
export default function ToolboxSection({ title, items }) {
  return (
    <SectionBlock title={title}>
      <ul className="flex flex-wrap gap-2 pt-3">
        {items.map((item) => (
          <li key={item.name} className="op-chip !text-xs !font-medium">
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-4 w-4 shrink-0 object-contain"
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </SectionBlock>
  )
}
