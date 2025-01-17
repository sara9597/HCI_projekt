import React from "react"
import { navs as navTabs } from "../../constants/const"
import styles from "./style.module.css"
import { Link } from "gatsby"

//const navTabs = ["HOME", "MUSICIANS", "BLOG", "CONTACT", "JOIN"]

const NavigationBar = ({ activeTab, useThisStyle }) => (
  <nav className={styles[useThisStyle || "navigationBar"]}>
    {navTabs.map(({ tab, to }) => (
      <Link to={to} key={to}>
        <li key={tab} className={tab === activeTab ? styles.active : ""}>
          {tab}
        </li>
      </Link>
    ))}
  </nav>
)

export default NavigationBar
