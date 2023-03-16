import { AppHtmlHead } from '@/components/AppHtmlHead';
import { Contact } from '@/components/home/Contact';
import { PageHeader } from '@/components/PageHeader';

export function Head() {
  return <AppHtmlHead title="Contact Us"></AppHtmlHead>;
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Contact />
    </>
  );
}
