// Single source of truth for publications. Add new entries here; the Research page lists
// them all and the home page shows the one with the newest year.
export interface Publication {
  authors: string[];
  year: number;
  title: string;
  venue: string;
  article: string;
  doi: string;
}

export const publications: Publication[] = [
  {
    authors: ['Shojaeianforoud, F.', 'Venezie, A. M.', 'Rubio, J. E.', 'Reifman, J.', 'Coats, B.', 'Monson, K. L.'],
    year: 2025,
    title: 'TBI-induced vessel softening increases brain susceptibility to injury with repeated head trauma',
    venue: 'Journal of the Mechanical Behavior of Biomedical Materials',
    article: '107287',
    doi: '10.1016/j.jmbbm.2025.107287',
  },
];

export const latestPublication = [...publications].sort((a, b) => b.year - a.year)[0];
