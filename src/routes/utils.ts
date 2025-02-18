import { AppRouteObject } from "#/router";

export const menuFilter = (items: AppRouteObject[]) => {
  return items.filter((item) => {
    const show = item.meta?.key;
    if (show && item.children) {
      item.children = menuFilter(item.children);
    }
    return show;
  });
  // .sort(ascend((item) => item.order || Number.POSITIVE_INFINITY));
};
