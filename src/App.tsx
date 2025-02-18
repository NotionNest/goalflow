/*
 * @Author: goudanyang
 * @Date: 2025-02-14 14:30:01
 * @LastEditors: goudanyang
 * @LastEditTime: 2025-02-14 14:46:59
 * @Description:
 */
import Router from "./routes";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  );
}
export default App;
