import type { Page } from "vuepress";
import type { ArcticBeardPostFrontmatter, PostItem } from "../shared/index.js";

const listToText = (items: string[]): string => {
  items.sort();
  if (items.length == 1) {
    return items[0];
  } else {
    return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
  }
};

export const pageToPostItem = (page: Page): PostItem | null => {
  if (!(page.path.includes("/blog/") && page.path.endsWith(".html"))) {
    return null;
  }

  const frontmatter = page.frontmatter as ArcticBeardPostFrontmatter;
  const authors = frontmatter.author
    ? [frontmatter.author]
    : frontmatter.authors ?? [];
  return {
    path: page.path,
    titleText: frontmatter.title ?? "ERR",
    dateText: frontmatter.date ?? "ERR",
    authorText: listToText(authors),
    descriptionText: frontmatter.description ?? "",
  };
};
