import type { App, Theme } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import type {
  ArcticBeardBeardFrontmatter,
  BeardItem,
  SidebarItem,
  PostItem,
} from "../shared/index.js";
import { pageToPostItem } from "./utils.js";

const __dirname = getDirname(import.meta.url);

const writeBeardItems = async (app: App) => {
  let beardItems: BeardItem[] = [];
  for (const page of app.pages) {
    if (page.path.includes("/beards/") && page.path.endsWith(".html")) {
      const frontmatter = page.frontmatter as ArcticBeardBeardFrontmatter;
      beardItems.push({
        path: page.path,
        frontmatter,
      });
    }
  }
  await app.writeTemp(
    "beards.js",
    `export const beardItems = ${JSON.stringify(beardItems)}`
  );
};

const writeSidebarItems = async (app: App) => {
  let sidebarItems: SidebarItem[] = [
    { path: "/blog/", text: "BLOG" },
    { path: "/beards/", text: "BEARDS" },
  ];
  await app.writeTemp(
    "sidebar.js",
    `export const sidebarItems = ${JSON.stringify(sidebarItems)}`
  );
};

const writePostItems = async (app: App) => {
  let postItems: PostItem[] = [];
  for (const page of app.pages) {
    const postItem = pageToPostItem(page);
    if (postItem) {
      postItems.push(postItem);
    }
  }
  await app.writeTemp(
    "posts.js",
    `export const postItems = ${JSON.stringify(postItems)}`
  );
};

const convertAssetLinks = async (app: App) => {
  for (let i = 0; i < app.pages.length; i++) {
    const page = app.pages[i];
    console.log(page.content);
    app.pages[i].content = "HAHA";
  }
  for (const page of app.pages) {
  }
};

export const arcticBeardTheme = (options: any): Theme => {
  return (app) => {
    return {
      name: "arctic-beard-theme",
      clientConfigFile: path.resolve(__dirname, "../client/client.ts"),
      templateBuild: path.resolve(__dirname, "../client/templates/build.html"),
      async onInitialized(app) {
        await convertAssetLinks(app);
      },
      async onPrepared(app) {
        await writeBeardItems(app);
        await writeSidebarItems(app);
        await writePostItems(app);
      },
    };
  };
};
