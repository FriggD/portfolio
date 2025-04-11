import Link from "next/link"

interface NavItem {
  name: string
  href: string
}

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

const MainNav = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-gray-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
