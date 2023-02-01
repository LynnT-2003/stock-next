import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Lynn Thit Page</title>
      <h1>Welcome to my Page sir </h1>
      <p>This is a sample page for Lynn Thit</p>
    </Head>
    </>
  )
}
