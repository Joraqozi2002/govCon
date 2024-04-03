import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};
const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image src="/1024px.png" alt="Sentry" width={60} height={40} />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
