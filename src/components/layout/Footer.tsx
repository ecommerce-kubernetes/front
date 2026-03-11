interface TabLink {
  name: string;
  url: string;
}

interface TabItemProps {
  title: string;
  items: TabLink[];
}

const TabItem = ({ title, items }: TabItemProps) => {
  return (
    <div className="px-5 flex-1">
      <h1 className="font-semibold text-lg mb-4">{title}</h1>
      <ul className="flex flex-col font-normal gap-2">
        {items.map((item) => (
          <li key={item.name}>
            <a
              className="hover:text-white hover:underline transition-colors duration-150"
              href={item.url}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FOOTER_DATA = [
  {
    title: "Community",
    items: [
      { name: "Github", url: "https://github.com/minsik2434" },
      { name: "Tech Blog", url: "https://velog.io/@minsik2434/posts" },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        name: "Github Repository",
        url: "https://github.com/ecommerce-kubernetes/front",
      },
    ],
  },
  {
    title: "Contact",
    items: [{ name: "Email", url: "mailto:minsik2434@gmail.com" }],
  },
];

export default function Footer() {
  return (
    <footer className="w-full select-none border-t border-gray-200 pt-10 bg-brand-primary">
      <div className="w-full max-w-250 mx-auto mb-10">
        <div className="flex">
          {FOOTER_DATA.map((tab) => (
            <TabItem key={tab.title} title={tab.title} items={tab.items} />
          ))}
        </div>
        <div className="mt-5 flex justify-center items-center">
          <p className="text-lg">Copyright © 2026 BuyNest Project.</p>
        </div>
      </div>
    </footer>
  );
}
