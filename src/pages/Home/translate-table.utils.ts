import { GridLocaleText } from "@mui/x-data-grid";

export const localeText: Partial<GridLocaleText> = {
  MuiTablePagination: {
    labelRowsPerPage: "שורות בעמוד",
    labelDisplayedRows: ({ from, to, count }) => {
      return `מתוך ${count} ${from}-${to} `;
    },
  },
  noRowsLabel: "אין נתונים להצגה",
  errorOverlayDefaultLabel: "אירעה שגיאה בטעינת הנתונים",
  filterPanelColumns: "עמודות",
  filterOperatorContains: "מכיל",
  filterOperatorEquals: "שווה",
  filterOperatorAfter: "אחרי",
  filterOperatorBefore: "לפני",
  filterOperatorEndsWith: "מסתיים ב",
  filterOperatorIsEmpty: "ריק",
  filterOperatorIsNotEmpty: "לא ריק",
  filterOperatorIsAnyOf: "אחד מ",
  filterOperatorStartsWith: "מתחיל ב",
  columnHeaderFiltersLabel: "סינון",
  columnMenuShowColumns: "הצג עמודות",
  columnMenuHideColumn: "הסתר עמודה",
  columnMenuFilter: "סינון",
  columnMenuSortAsc: "מיין לפי סדר עולה",
  columnMenuSortDesc: "מיין לפי סדר יורד",
  columnMenuUnsort: "בטל סדר",
  columnsPanelShowAllButton: "הצג הכל",
  columnsPanelHideAllButton: "הסתר הכל",
  columnsPanelTextFieldLabel: "חיפוש עמודה",
  columnsPanelTextFieldPlaceholder: "כותרת עמודה",
  filterPanelOperators: "פעולות",
  filterPanelInputLabel: "ערך",
  filterPanelInputPlaceholder: "ערך לסינון",
};
