import Banner from '@/components/home/banner';
import { Welcome } from '../welcome/welcome';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Home' }];
}

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
    </>
  );
}
