/**
 * @description convert link elem to link-card
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/editor';
import { IButtonMenu } from '@wangeditor/editor';
declare class ConvertToLinkCard implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "";
    readonly tag = "button";
    private getSelectedLinkElem;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): Promise<void>;
}
export default ConvertToLinkCard;
