import { Inter } from '@next/font/google';
import Link from 'next/link';
import { MainLayouts } from '../../components/layouts/MainLayouts';

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayouts>
        <h1>Contact Page</h1>

        <h1 className={ 'title '}>
          Ir a <Link href="/">home</Link>
        </h1>

        <p className={ 'description' }>
          Get started by editing{' '}
          <code className={ 'code' }>pages/contact.jsx</code>
        </p>
    </MainLayouts>
  )
}
