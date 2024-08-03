import { getMenu } from 'lib/shopify';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const { COMPANY_NAME, SITE_NAME } = process.env;

const SOCIAL: { icon: any; href: string }[] = [
  { icon: FaInstagram, href: 'https://www.instagram.com' },
  { icon: FaFacebook, href: 'https://www.facebook.com' },
  { icon: FaTiktok, href: 'https://www.tiktok.com' }
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = 'P&P Inc.' || COMPANY_NAME || SITE_NAME ;

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} Todos los derechos reservados.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p className="flex gap-2">
            {SOCIAL.map((social) => {
              return (
                <a key={social.href} href={social.href}>
                  {social.icon()}
                </a>
              );
            })}
          </p>
          <p className="md:ml-auto">
            <a href="https://google.com" className="text-black dark:text-white">
              Created by ?
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
