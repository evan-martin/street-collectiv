import { createSelector } from 'reselect';

const selectHighlight = state => state.highlight;

export const selectHighlightSections = createSelector(
  [selectHighlight],
  highlight => highlight.sections
);
