import { AppName } from '@/AppConst';
import { Link } from 'gatsby';

export function Header() {
  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
      <Link to="/">{AppName}</Link>
    </div>
  );
}
