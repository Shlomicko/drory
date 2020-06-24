import React from "react"
import { Link } from "gatsby"


class Menu extends React.Component {
  constructor(props) {
    super(props)

    const pages = props.pages.map(page => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title
    }))

    this.items = [
      { to: "/", label: "ראשי" },
      ...pages,
      { to: "/category/", label: "נושאים" },
      { to: "/search/", label: "חיפוש" },
      { to: "/contact/", label: "צור קשר" }
    ]
  }

  getItems() {
    return this.items.map(item => (<li className={"link-button"} key={item.to}><Link to={item.to}>{item.label}</Link></li>))
  }

  render() {
    return (
        <nav>
          <ul className="itemList">
            {
              this.getItems()
            }
          </ul>
        </nav>
    )
  }
}

export default Menu;