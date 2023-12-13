/**
 * @description link-card element
 * @author wangfupeng
 */
import { SlateText } from '@wangeditor/editor';
declare type EmptyText = {
    text: '';
};
export declare type LinkCardElement = {
    type: 'link-card';
    title: string;
    link: string;
    iconImgSrc?: string;
    children: EmptyText[];
};
export declare type LinkElement = {
    type: 'link';
    url: string;
    target?: string;
    children: SlateText[];
};
export {};
