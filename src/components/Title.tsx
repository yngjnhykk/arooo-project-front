import { Helmet } from 'react-helmet';

interface Props {
  keywords: string;
  description: string;
  title: string;
}

function Title({ keywords, description, title }: Props) {
  return (
    <Helmet>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='' />
      <meta property='og:description' content={description} />

      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary' />
    </Helmet>
  );
}

export default Title;
