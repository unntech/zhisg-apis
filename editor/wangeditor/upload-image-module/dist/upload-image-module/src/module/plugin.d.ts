/**
 * @description editor 插件，重写 editor API
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
declare function withUploadImage<T extends IDomEditor>(editor: T): T;
export default withUploadImage;
