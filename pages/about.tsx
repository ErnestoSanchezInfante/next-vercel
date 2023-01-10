import { Inter } from '@next/font/google';

import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayouts } from '../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>

        <h1 className={'title'}>
          Ir a <Link href="/">home</Link>
        </h1>

        <p className={ 'description '}>
          Get started by editing{' '}
          <code className={ 'code' }>pages/about.jsx</code>
        </p>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayouts>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayouts>

  )
}
