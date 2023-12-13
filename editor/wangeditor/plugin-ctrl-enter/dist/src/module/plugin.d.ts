/**
 * @description plugin
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/editor';
declare function withCtrlEnter<T extends IDomEditor>(editor: T): T;
export default withCtrlEnter;
