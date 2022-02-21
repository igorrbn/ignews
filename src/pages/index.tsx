import Head from 'next/head';

import styles from './home.module.scss';

import Image from "next/image";

import avatar from "../../../public/images/avatar.svg";


export default function Home() {
  return (
    <>
    <Head>
       <title>Home | ig.news</title>
     </Head>    
     
     <main className={styles.contentContainer}>
       <section className={styles.hero}>
         <span>👏 Hey, welcome</span>
         <h1>News about the <span>React</span>world.</h1>
         <p>
           Get acess to all publications <br />
           <span>for $9.99 month</span>
         </p>
       </section>

       <Image src={avatar} alt="Girl Codding" />
     </main>
    </>
  )
}    
    
