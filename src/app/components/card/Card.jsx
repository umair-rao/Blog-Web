import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>30.09.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nam impedit temporibus rerum iure at veritatis numquam quos ab assumenda minima, earum fuga harum libero voluptate labore ipsa cumque aliquam.</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, deleniti. Deleniti quas adipisci quod repellat? Odio perferendis, porro sint consequatur aliquid magnam? Fugit, excepturi tenetur laboriosam ullam quo dignissimos praesentium.
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card
