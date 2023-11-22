import Link from "next/link";
import StudentInof from "./StudentInof";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306:Web Development 2 - Assignments</h1>
      <StudentInof/>
      <Link href="week2">week2</Link>
      <Link href="week3">week3</Link>
      <Link href="week4">week4</Link>
      <Link href="week5">week5</Link>
      <Link href="week6">week6</Link>
      <Link href="week7">week7</Link>
      <Link href="week8">week8</Link>
    </main>
    
      
  )
}
