import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Spaces Events 2021</p>
      <p>
        <Link href="/about">Re: This Project</Link>
      </p>
    </footer>
  )
}
