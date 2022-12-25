export interface ArcticBeardPageFrontmatter {
  pageType?: "home" | "beards" | "beard" | "posts" | "post";
}

export interface ArcticBeardBeardFrontmatter
  extends ArcticBeardPageFrontmatter {
  nick?: string;
  name?: string;
  role?: string;
}

export interface ArcticBeardPostFrontmatter extends ArcticBeardPageFrontmatter {
  title?: string;
  date?: string;
  author?: string;
  authors?: string[];
  description?: string;
  img?: string;
}

export interface BeardItem {
  path: string;
  frontmatter: ArcticBeardBeardFrontmatter;
}

export interface SidebarItem {
  path: string;
  text: string;
}

export interface PostItem {
  path: string;
  titleText: string;
  dateText: string;
  authorText: string;
  descriptionText: string;
}
