import { layouts } from '../../codegen/layouts.codegen';

export function getPageLayout(layoutName: string) {
  return layouts[layoutName] || layouts.default;
}