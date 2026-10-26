import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';

export default function SiteLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
