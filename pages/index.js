import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Card'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { getData } from '../utils/fetchData'

const Home = () => {
  return (
 <div>
   <HeroSection/>
   <Cards/>
   <Footer/>
 </div>
  )
}
 


export default Home

