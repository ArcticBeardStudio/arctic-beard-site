declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const comp: ComponentOptions;
  export default comp;
}

declare module "@temp/beards" {
  import type { BeardItem } from "../shared/index.js";
  export const beardItems: BeardItem[];
}

declare module "@temp/sidebar" {
  import type { SidebarItem } from "../shared/index.js";
  export const sidebarItems: SidebarItem[];
}

declare module "@temp/posts" {
  import type { PostItem } from "../shared/index.js";
  export const postItems: PostItem[];
}
