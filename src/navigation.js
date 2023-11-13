import { getAsset, getTranslatedBlogPermalink, getTranslatedPermalink } from '~/utils/permalinks';
import { getLangFromUrl, useTranslations } from '~/i18n/utils';

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
              href: getTranslatedPermalink('/homes/saas', language),
            },
            {
              text: t('nav.homes.startup'),
              href: getTranslatedPermalink('/homes/startup', language),
            },
            {
              text: t('nav.homes.mobile'),
              href: getTranslatedPermalink('/homes/mobile-app', language),
            },
            {
              text: t('nav.homes.personal'),
              href: getTranslatedPermalink('/homes/personal', language),
            },
          ],
        },
        {
          text: t('nav.pages'),
          links: [
            {
              text: t('nav.product.features'),
              href: getTranslatedPermalink('/#features', language),
            },
            {
              text: t('nav.services'),
              href: getTranslatedPermalink('/services', language),
            },
            {
              text: t('nav.product.pricing'),
              href: getTranslatedPermalink('/pricing', language),
            },
            {
              text: t('nav.company.about'),
              href: getTranslatedPermalink('/about', language),
            },
            {
              text: t('nav.contact'),
              href: getTranslatedPermalink('/contact', language),
            },
            {
              text: t('nav.terms'),
              href: getTranslatedPermalink('/terms', language),
            },
            {
              text: t('nav.privacy'),
              href: getTranslatedPermalink('/privacy', language),
            },
          ],
        },
        {
          text: t('nav.landing'),
          links: [
            {
              text: t('nav.landing.lead'),
              href: getTranslatedPermalink('/landing/lead-generation', language),
            },
            {
              text: t('nav.landing.long'),
              href: getTranslatedPermalink('/landing/sales', language),
            },
            {
              text: t('nav.landing.click'),
              href: getTranslatedPermalink('/landing/click-through', language),
            },
            {
              text: t('nav.landing.product'),
              href: getTranslatedPermalink('/landing/product', language),
            },
            {
              text: t('nav.landing.coming'),
              href: getTranslatedPermalink('/landing/pre-launch', language),
            },
            {
              text: t('nav.landing.subscription'),
              href: getTranslatedPermalink('/landing/subscription', language),
            },
          ],
        },
        {
          text: t('nav.blog'),
          links: [
            {
              text: t('nav.blog.list'),
              href: getTranslatedBlogPermalink(language),
            },
            {
              text: t('nav.blog.article'),
              href: getTranslatedPermalink('get-started-website-with-astro-tailwind-css', language, 'post'),
            },
            {
              text: t('nav.blog.article.mdx'),
              href: getTranslatedPermalink('markdown-elements-demo-post', language, 'post'),
            },
            {
              text: t('nav.blog.category'),
              href: getTranslatedPermalink('tutorials', language, 'category'),
            },
            {
              text: t('nav.blog.tag'),
              href: getTranslatedPermalink('astro', language, 'tag'),
            },
          ],
        },
        {
          text: t('nav.widgets'),
          href: '#',
        },
      ],
      actions: [
        {
          variant: 'primary',
          text: t('nav.download'),
          href: 'https://github.com/jceb/astrouno',
          target: '_blank',
        },
      ],
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
          href: getTranslatedPermalink('/terms', language),
        },
        {
          text: t('nav.privacy'),
          href: getTranslatedPermalink('/privacy', language),
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
