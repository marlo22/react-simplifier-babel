import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../components/counter'
import NestedCounter from '../components/nested-counter'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div id="counter">
          <Counter />
        </div>
        <div id="nestedCounter">
          <NestedCounter />
        </div>
      </main>
    </div>
  )
}

export default Home
