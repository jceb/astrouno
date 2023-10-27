import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';
import { getLangFromUrl, translatePath, useTranslations } from './i18n/utils';

export const getNavigationData = (url) => {
  const { language } = getLangFromUrl(url);
  const t = useTranslations(language);

  return {
    headerData: {
      links: [
        {
          text: t('nav.homes'),
          links: [
            {
              text: t('nav.homes.saas'),
              href: translatePath(getPermalink('/homes/saas'), language),
            },
            {
              text: t('nav.homes.startup'),
              href: translatePath(getPermalink('/homes/startup'), language),
            },
            {
              text: t('nav.homes.mobile'),
              href: translatePath(getPermalink('/homes/mobile-app'), language),
            },
            {
              text: t('nav.homes.personal'),
              href: translatePath(getPermalink('/homes/personal'), language),
            },
          ],
        },
        {
          text: t('nav.pages'),
          links: [
            {
              text: t('nav.product.features'),
              href: translatePath(getPermalink('/#features'), language),
            },
            {
              text: t('nav.services'),
              href: translatePath(getPermalink('/services'), language),
            },
            {
              text: t('nav.product.pricing'),
              href: translatePath(getPermalink('/pricing'), language),
            },
            {
              text: t('nav.company.about'),
              href: translatePath(getPermalink('/about'), language),
            },
            {
              text: t('nav.contact'),
              href: translatePath(getPermalink('/contact'), language),
            },
            {
              text: t('nav.terms'),
              href: translatePath(getPermalink('/terms'), language),
            },
            {
              text: t('nav.privacy'),
              href: translatePath(getPermalink('/privacy'), language),
            },
          ],
        },
        {
          text: t('nav.landing'),
          links: [
            {
              text: t('nav.landing.lead'),
              href: translatePath(
                getPermalink('/landing/lead-generation'),
                language,
              ),
            },
            {
              text: t('nav.landing.long'),
              href: translatePath(getPermalink('/landing/sales'), language),
            },
            {
              text: t('nav.landing.click'),
              href: translatePath(
                getPermalink('/landing/click-through'),
                language,
              ),
            },
            {
              text: t('nav.landing.product'),
              href: translatePath(getPermalink('/landing/product'), language),
            },
            {
              text: t('nav.landing.coming'),
              href: translatePath(
                getPermalink('/landing/pre-launch'),
                language,
              ),
            },
            {
              text: t('nav.landing.subscription'),
              href: translatePath(
                getPermalink('/landing/subscription'),
                language,
              ),
            },
          ],
        },
        {
          text: t('nav.blog'),
          links: [
            {
              text: t('nav.blog.list'),
              href: getBlogPermalink(),
            },
            {
              text: t('nav.blog.article'),
              href: translatePath(
                getPermalink(
                  'get-started-website-with-astro-tailwind-css',
                  'post',
                ),
                language,
              ),
            },
            {
              text: t('nav.blog.article.mdx'),
              href: translatePath(
                getPermalink('markdown-elements-demo-post', 'post'),
                language,
              ),
            },
            {
              text: t('nav.blog.category'),
              href: translatePath(
                getPermalink('tutorials', 'category'),
                language,
              ),
            },
            {
              text: t('nav.blog.tag'),
              href: translatePath(getPermalink('astro', 'tag'), language),
            },
          ],
        },
        {
          text: t('nav.widgets'),
          href: '#',
        },
      ],
      actions: [{
        text: t('nav.download'),
        href: 'https://github.com/onwidget/astrowind',
        target: '_blank',
      }],
    },
    footerData: {
      links: [
        {
          title: t('nav.product'),
          links: [
            { text: t('nav.product.features'), href: '#' },
            { text: t('nav.product.security'), href: '#' },
            { text: t('nav.product.team'), href: '#' },
            { text: t('nav.product.enterprise'), href: '#' },
            { text: t('nav.product.customer stories'), href: '#' },
            { text: t('nav.product.pricing'), href: '#' },
            { text: t('nav.product.resources'), href: '#' },
          ],
        },
        {
          title: t('nav.platform'),
          links: [
            { text: t('nav.platform.developer api'), href: '#' },
            { text: t('nav.platform.partners'), href: '#' },
            { text: t('nav.platform.atom'), href: '#' },
            { text: t('nav.platform.electron'), href: '#' },
            { text: t('nav.platform.astrowind'), href: '#' },
          ],
        },
        {
          title: t('nav.support'),
          links: [
            { text: t('nav.support.docs'), href: '#' },
            { text: t('nav.support.community forum'), href: '#' },
            { text: t('nav.support.professional services'), href: '#' },
            { text: t('nav.support.skills'), href: '#' },
            { text: t('nav.support.status'), href: '#' },
          ],
        },
        {
          title: t('nav.company'),
          links: [
            { text: t('nav.company.about'), href: '#' },
            { text: t('nav.company.blog'), href: '#' },
            { text: t('nav.company.careers'), href: '#' },
            { text: t('nav.company.press'), href: '#' },
            { text: t('nav.company.inclusion'), href: '#' },
            { text: t('nav.company.social'), href: '#' },
            { text: t('nav.company.shop'), href: '#' },
          ],
        },
      ],
      secondaryLinks: [
        {
          text: t('nav.terms'),
          href: translatePath(getPermalink('/terms'), language),
        },
        {
          text: t('nav.privacy'),
          href: translatePath(getPermalink('/privacy'), language),
        },
      ],
      socialLinks: [
        { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
        { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
        { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
        { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
      ],
      footNote: `
      <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
      Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
      `,
    },
  };
};
