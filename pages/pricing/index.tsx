import { Inter } from '@next/font/google';
import Link from 'next/link';
import { MainLayouts } from '../../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] })

export default function PrincingPage() {
  return (
    <MainLayouts>
        <h1>Pricing Page</h1>

        <h1 className={ 'title '}>
          Ir a <Link href="/">home</Link>
        </h1>

        <p className={ 'description' }>
          Get started by editing{' '}
          <code className={ 'code' }>pages/pricing/index.jsx</code>
        </p>
    </MainLayouts>
  )
}
