import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [introText, setIntroText] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8000/home').then((repsonse) => {
      console.log(repsonse)
      setIntroText(repsonse.data)
    })
  }, [])
  return (
    <div>
      <h1>{introText}</h1>
      <h1>OVO JE TEST ZA GIT</h1>
    </div>
  )
}
