export const navLinks = ['Architectural Reference', 'Expertise', 'Contact'];

export const navIdMap = { 'Architectural Reference': 'architectural-reference', Expertise: 'expertise' };

export const toId = (link) => navIdMap[link] || link.toLowerCase();
