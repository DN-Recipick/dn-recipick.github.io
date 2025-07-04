import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Image from '@/components/shared/Image';
import LogoImg from '@/assets/logo.svg';

const Logo = () => {
  return (
    <Link to={ROUTES.HOME} className="flex-center gap-2 rounded-xl hover-opacity">
      <Image src={LogoImg} alt={LogoImg} wrapClassName="w-11 sm:w-12 cursor-pointer" />
      <p
        className="
        text-[1.1rem]
    sm:text-xl font-extrabold text-transparent bg-clip-text 
    bg-gradient-to-r 
    from-[#18644f] via-[#25947a] to-[#36b49a]
    dark:from-[#268f72] dark:via-[#43b99d] dark:to-[#a7f3d0]
  "
      >
        RECIPICK
      </p>
    </Link>
  );
};

export default Logo;
