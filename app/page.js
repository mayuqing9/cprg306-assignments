import Link from "next/link";
import StudentInof from "./StudentInof";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306:Web Development 2 - Assignments</h1>
      <StudentInof/>
      <Link href="week2">week2</Link>
      <Link href="week3">week3</Link>
    </main>
    
      
  )
}
