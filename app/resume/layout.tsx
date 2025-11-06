// import "../ui/resume.module.scss";
// import styles from "../ui/resume.module.scss"

import NavBar from "../ui/nav-bar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-3">
      <NavBar currentPath="/resume" />
      <div><h2>Second Row: Resume Page Title</h2></div>
      <div>{children}</div>
    </div>
  )
}
