import { AppName } from '@/AppConst';
import { Link } from 'gatsby';

export function Header() {
  return (
    <div>
      <Link to="/">{AppName}</Link> &nbsp;
      <Link to="about">About</Link> &nbsp;
      <Link to="contact">Contact</Link>
    </div>
  );
}
