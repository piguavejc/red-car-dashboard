const theme = Object.freeze({
 white: '#f2f2f2',
 gray: '#50577A',
 red: 'rgb(225 29 72)',
 blue: '#3b5998',
 green: '#25D366',

 primary: '#e11d48' /* bg-rose-600 */,
 secondary: '#e2e8f0' /* bg-slate-200 */,
 helper: '#f1f5f9' /* bg-slate-100 */,
 dark: '#334155' /* bg-slate-700 */,
 error: '#9f1239' /* bg-rose-800 */,
 ligth: '#f8fafc' /* bg-slate-50 */,
});

const styles = {
 backgrounds: {
  primary: { background: theme.primary },
  secondary: { background: theme.secondary },
  helper: { background: theme.helper },
 },
 colors: {
  primary: { color: theme.primary },
  secondary: { color: theme.secondary },
  dark: { color: theme.dark },
  ligth: { color: theme.ligth },
  error: { color: theme.error },
 },
};
export { styles, theme };
