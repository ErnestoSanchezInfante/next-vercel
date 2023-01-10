import { Inter } from '@next/font/google'
import Link from 'next/link';
import { MainLayouts } from '../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayouts>
      <h1>Home Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={ 'description'}>
        Get started by editing{' '}
        <code className={ 'code' }>pages/index.js</code>
      </p>

    </MainLayouts>

  )
}
