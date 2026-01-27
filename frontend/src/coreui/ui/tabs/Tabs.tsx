import { tabsWrapper, tabsList, tabBase, tabStates } from "./tabs.styles";

type TabItem = {
  id: string;
  label: string;
  disabled?: boolean;
};

type TabsProps = {
  items: TabItem[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
};

export function Tabs({ items, value, onChange, className }: TabsProps) {
  const activeId = value ?? items[0]?.id;

  return (
    <div className={`${tabsWrapper} ${className ?? ""}`}>
      <div role="tablist" className={tabsList}>
        {items.map((tab) => {
          const isActive = tab.id === activeId;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && onChange?.(tab.id)}
              className={[
                tabBase,
                tab.disabled ? tabStates.disabled : isActive ? tabStates.active : tabStates.default,
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
