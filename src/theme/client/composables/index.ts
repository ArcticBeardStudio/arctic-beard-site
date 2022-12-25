import type { BeardItem, PostItem, SidebarItem } from "../../shared/index.js";
import { beardItems } from "@temp/beards";
import { sidebarItems } from "@temp/sidebar";
import { postItems } from "@temp/posts";

export const useBeardItems = (): BeardItem[] => {
  return beardItems;
};

export const useSidebarItems = (): SidebarItem[] => {
  return sidebarItems;
};

export const usePostItems = (): PostItem[] => {
  return postItems;
};
