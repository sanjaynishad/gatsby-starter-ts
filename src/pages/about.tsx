import { AppHtmlHead } from '@/components/AppHtmlHead';
import { About } from '@/components/home/About';
import { PageHeader } from '@/components/PageHeader';

export function Head() {
  return <AppHtmlHead title="About"></AppHtmlHead>;
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <About />
    </>
  );
}
