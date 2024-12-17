/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Colorado School of Mines',
    position: 'Undergraduate Researcher',
    startDate: '2024-08-19',
    summary: 'DESCRIPTION',
    highlights: [
      'wow i did things',
      'and more things',
    ],
  },
  {
    name: 'Red Rocks Community College',
    position: 'Math Tutor',
    startDate: '2024-08-19',
    summary: 'DESCRIPTION',
    highlights: [
      'wow i did things',
      'and more things',
    ],
  },
  {
    name: 'DBGB LLC',
    position: 'Co-Founder',
    startDate: '2024-08-19',
    summary: 'DESCRIPTION',
    highlights: [
      'wow i did things',
      'and more things',
    ],
  },
];

export default work;
