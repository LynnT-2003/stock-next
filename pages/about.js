import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <h1>Abput Page</h1>
        <p>About Lynn Thit</p>
      </Head>
    </>
  )
}
