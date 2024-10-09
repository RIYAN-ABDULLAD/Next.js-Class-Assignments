import Link from "next/link"
import page from "./page.module.css"

const HomePage =()=>{
  return(
    <div>
      <h1 className={page.main}>This is HomePage </h1>
      <ul>
        <li><Link href="./about" target="blank">About</Link></li>
        <li><Link href="./contact" target="blank">Contact</Link></li>
        <li><Link href="./service" target="blank">Service</Link></li>
      </ul>
    </div>
  )
}
export default HomePage