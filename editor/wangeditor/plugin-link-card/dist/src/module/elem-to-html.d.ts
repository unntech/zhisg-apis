/**
 * @description elem to html
 * @author wangfupeng
 */
import { SlateElement } from '@wangeditor/editor';
declare function linkCardToHtml(elem: SlateElement, childrenHtml: string): string;
declare const conf: {
    type: string;
    elemToHtml: typeof linkCardToHtml;
};
export default conf;
