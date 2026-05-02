export const navLinks = ['Case Studies', 'Expertise', 'Contact'];

export const navIdMap = { 'Case Studies': 'case-studies', Expertise: 'expertise' };

export const toId = (link) => navIdMap[link] || link.toLowerCase();
