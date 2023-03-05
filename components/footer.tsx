import { FaLinkedinIn, FaTwitter, FaGithub, FaLink } from 'react-icons/fa';

import { Container } from './common/container';

const Footer = () => {
  const linkIconClasses =
    'text-background-500 hover:text-background-800 dark:text-foreground-500 dark:hover:text-foreground-800 text-3xl';

  return (
    <footer className="pb-4">
      <Container>
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <span className="text-sm sm:text-center">
            © 2023{' '}
            <a href="https://aleromano.com" target="_blank" className="hover:underline">
              Alessandro Romano
            </a>{' '}
            All Rights Reserved.
          </span>
          <div className="flex mb-4 space-x-6 justify-center">
            <a href="https://twitter.com/_aleromano" className={linkIconClasses}>
              <FaTwitter />
            </a>
            <a href="https://github.dev/Axel92Dev" className={linkIconClasses}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alessandroromano92/" className={linkIconClasses}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
