import "../ui/resume.module.scss";
import styles from "../ui/resume.module.scss"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className={styles.resume_page_title}>Row One, Column One</h2>
        </div>
        <div>
          <h2>Row One. Column Two</h2>
        </div>
      </div>
      <div>
        <h2>Row Two with Page Content</h2>
        {children}
      </div>
    </div>
  )
}
