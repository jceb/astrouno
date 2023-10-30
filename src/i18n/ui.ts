// Documentation: https://docs.astro.build/en/recipes/i18n/

import { I18N } from '~/utils/config';

/**
 * Use special flags for certain languages.
 */
export const flags = {
  en: 'us',
};

/**
 * Supported languages and their local names.
 */
export const languages = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
};

/**
 * Special text orientation for certain languages.
 */
export const textDirections = {
  de: 'ltr',
  en: 'ltr',
  fr: 'ltr',
};

export const getTextDirection = (language: string) => textDirections[language] || I18N.textDirection;

/**
 * Translation strings.
 */
export const ui = {
  de: {
    'nav.home': 'Home',
    'nav.homes': 'Homes',
    'nav.company.about': 'Über uns',
  },
  en: {
    'blog.back': 'Back to Blog',
    'blog.posts.all': 'View all posts',
    'blog.posts.newer': 'Newer posts',
    'blog.posts.older': 'Older posts',
    'nav.blog': 'Blog',
    'nav.blog.article': 'Article',
    'nav.blog.article.mdx': 'Article (with MDX)',
    'nav.blog.category': 'Category Page',
    'nav.blog.list': 'Blog List',
    'nav.blog.tag': 'Tag Page',
    'nav.company': 'Company',
    'nav.company.about': 'About',
    'nav.company.blog': 'Blog',
    'nav.company.careers': 'Careers',
    'nav.company.contact': 'About',
    'nav.company.inclusion': 'Inclusion',
    'nav.company.press': 'Press',
    'nav.company.shop': 'Shop',
    'nav.company.social': 'Social Impact',
    'nav.contact': 'Contact',
    'nav.download': 'Download',
    'nav.home': 'Home',
    'nav.homes': 'Homes',
    'nav.homes.mobile': 'Mobile App',
    'nav.homes.personal': 'Personal',
    'nav.homes.saas': 'SaaS',
    'nav.homes.startup': 'Startup',
    'nav.landing': 'Landing',
    'nav.landing.click': 'Click-Through',
    'nav.landing.coming': 'Coming Soon or Pre-Launch',
    'nav.landing.lead': 'Lead Generation',
    'nav.landing.long': 'Long-form Sales',
    'nav.landing.product': 'Product Details (or Services)',
    'nav.landing.subscription': 'Subscription',
    'nav.pages': 'Pages',
    'nav.platform': 'Platform',
    'nav.platform.astrowind': 'AstroWind Desktop',
    'nav.platform.atom': 'Atom',
    'nav.platform.developer': 'Developer API',
    'nav.platform.electron': 'Electron',
    'nav.platform.partners': 'Partners',
    'nav.privacy': 'Privacy Policy',
    'nav.product': 'Product',
    'nav.product.customer': 'Customer stories',
    'nav.product.enterprise': 'Enterprise',
    'nav.product.features': 'Features',
    'nav.product.pricing': 'Pricing',
    'nav.product.resources': 'Resources',
    'nav.product.security': 'Security',
    'nav.product.team': 'Team',
    'nav.services': 'Services',
    'nav.support': 'Support',
    'nav.support.community': 'Community Forum',
    'nav.support.docs': 'Docs',
    'nav.support.professional': 'Professional Services',
    'nav.support.skills': 'Skills',
    'nav.support.status': 'Status',
    'nav.terms': 'Terms',
    'nav.widgets': 'Widgets',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
  },
} as const;
