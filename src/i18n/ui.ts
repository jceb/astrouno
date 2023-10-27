// Documentation: https://docs.astro.build/en/recipes/i18n/

import { I18N } from "~/utils/config";

export const showDefaultLanguage = I18N?.showDefaultLanguage || false;

/**
  * Use special flags for certain languages.
  */
export const flags = {
  en: "us",
};

/**
  * Supported languages and their local names.
  */
export const languages = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
};

/**
  * Special text orientation for certain languages.
  */
export const textDirections = {
  de: "ltr",
  en: "ltr",
  fr: "ltr",
};

export const defaultLanguage = I18N?.language || "en";
export const defaultTextDirection = I18N?.textDirection || "ltr";

/**
  * Translation strings.
  */
export const ui = {
  de: {
    "nav.home": "Home",
    "nav.homes": "Homes",
    "nav.company.about": "Über uns",
  },
  en: {
    "nav.home": "Home",
    "nav.homes": "Homes",
    "nav.homes.saas": "SaaS",
    "nav.homes.startup": "Startup",
    "nav.homes.mobile": "Mobile App",
    "nav.homes.personal": "Personal",
    "nav.pages": "Pages",
    "nav.services": "Services",
    "nav.landing": "Landing",
    "nav.landing.lead": "Lead Generation",
    "nav.landing.long": "Long-form Sales",
    "nav.landing.click": "Click-Through",
    "nav.landing.product": "Product Details (or Services)",
    "nav.landing.coming": "Coming Soon or Pre-Launch",
    "nav.landing.subscription": "Subscription",
    "nav.blog": "Blog",
    "nav.blog.list": "Blog List",
    "nav.blog.article": "Article",
    "nav.blog.article.mdx": "Article (with MDX)",
    "nav.blog.category": "Category Page",
    "nav.blog.tag": "Tag Page",
    "nav.widgets": "Widgets",
    "nav.download": "Download",
    "nav.product": "Product",
    "nav.product.features": "Features",
    "nav.product.security": "Security",
    "nav.product.team": "Team",
    "nav.product.enterprise": "Enterprise",
    "nav.product.customer": "Customer stories",
    "nav.product.pricing": "Pricing",
    "nav.product.resources": "Resources",
    "nav.platform": "Platform",
    "nav.platform.developer": "Developer API",
    "nav.platform.partners": "Partners",
    "nav.platform.atom": "Atom",
    "nav.platform.electron": "Electron",
    "nav.platform.astrowind": "AstroWind Desktop",
    "nav.support": "Support",
    "nav.support.docs": "Docs",
    "nav.support.community": "Community Forum",
    "nav.support.professional": "Professional Services",
    "nav.support.skills": "Skills",
    "nav.support.status": "Status",
    "nav.company": "Company",
    "nav.company.about": "About",
    "nav.company.contact": "About",
    "nav.company.blog": "Blog",
    "nav.company.careers": "Careers",
    "nav.company.press": "Press",
    "nav.company.inclusion": "Inclusion",
    "nav.company.social": "Social Impact",
    "nav.company.shop": "Shop",
    "nav.terms": "Terms",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy Policy",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
  },
} as const;
