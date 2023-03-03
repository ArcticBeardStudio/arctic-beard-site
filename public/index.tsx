import { hydrate, prerender as ssr } from "preact-iso";
import "./style/index.scss";
import Header from "./header";

export function App() {
  return (
    <div class="app">
      <Header />
    </div>
  );
}

hydrate(<App />);

export async function prerender(data: any) {
  return await ssr(<App {...data} />);
}
