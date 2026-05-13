export const navLinks = ['Case Stories', 'Expertise', 'Contact'];

export const navIdMap = { 'Case Stories': 'case-stories', Expertise: 'expertise' };

export const toId = (link) => navIdMap[link] || link.toLowerCase();
