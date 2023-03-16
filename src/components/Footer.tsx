import './Footer.css';
import { AppName } from '@/AppConst';

export function Footer() {
  return (
    <div className="footer">
      <div className="container"></div>
      <div className="copyright">
        <div className="container">
          <p>
            Copyright &copy; <a href="#">{AppName}</a>, All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
