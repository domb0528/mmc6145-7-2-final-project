import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { gettargetCalories } from '../../util/mealPlaning'
import styles from '../../styles/targetCalories.module.css'

export async function getServerSideProps({params: {id}}) {

  const targetCaloriesInfo = await gettargetCalories(id)

  return { props:{gettargetCalories} }
}

export default function gettargetCalories({gettargetCalories}) {
  return (
    <>
      <Head>
        <title>{gettargetCalories ? gettargetCalories.title : 'targetCalories Not Found'}</title>
        <meta name="description" content={gettargetCalories ? 'targetCalories info for ' + targetCaloriesInfo.title : 'targetCalories Not Found Page'} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍴</text></svg>"/>
      </Head>


      {gettargetCalories ? <targetCalories {...gettargetCalories} /> : <targetCaloriesError />}

      <Link className={styles.return} href="/search">Return to Search</Link>
    </>
  )
}

function gettargetCalories({
  id,
  title,
  imageType,
  readyInMinutes,
  servings,
  sourceUrl,
}) {
  return (
    <main className={styles.container}>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <Image src={imageType} alt={title} className={styles.gettargetCaloriesImg}/>
      <div className={styles.notes}>
        <p>Time to Make: {readyInMinutes}min</p>
      </div>
      <div className={styles.infoGroup}>
        <div className={styles.description}>
          <h2>Servings {servings}</h2>
          <div dangerouslySetInnerHTML={{__html: summary.replace(/(href=")[\w-/:\.]+-([\d]+)/g, "$1" + '/winePairing/' + "$2")}}></div>
        </div>
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {extendedIngredients.map((ing, i) => <li key={i}>{ing.original}</li>)}
          </ul>
        </div>
      </div>
      <h2>Steps</h2>
      <div className={styles.instructions} dangerouslySetInnerHTML={{sourceUrl}}></div>
    </main>
  )
}

function gettargetCalories() {
  return (
    <h1 className={styles.notFound}>WinePairing Not Found!</h1>
  )
}