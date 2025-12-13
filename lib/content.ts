import contentData from '@/data/content.json';

export const getContent = () => contentData;

export const getPageContent = (page: string) => {
  return contentData.pages[page as keyof typeof contentData.pages];
};

export const getPartners = () => contentData.partners;
export const getServices = () => contentData.services;
export const getStats = () => contentData.stats;
export const getHeroContent = () => contentData.hero;