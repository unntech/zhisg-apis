<?php

$data = isset($_GET['q']) ? $_GET['q'] : $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'];

//prarm
$level = 'L';// 纠错级别：L、M、Q、H
$style = isset($_GET['style']) ? strtolower($_GET['style']) : 'png';
$size = isset($_GET['size']) ? $_GET['size'] : 10;
$margin = isset($_GET['margin']) ? $_GET['margin'] : 1;
$saveAndPrint = true;// true直接输出屏幕  false 保存到文件中
$back_color = 0xFFFFFF;//白色底色
$fore_color = 0x000000;//黑色二维码色 若传参数要hexdec处理，如 $fore_color = str_replace('#','0x',$fore_color); $fore_color = hexdec('0xCCCCCC');

// 可在 include/phpqrcode.php 文件中修改以下配置
// define('QR_FIND_BEST_MASK', true); // true 每次生成码都会变换掩码 ， false 时只要内容不变，生成图案不变
// define('QR_PNG_MAXIMUM_SIZE', 1024);//生成最大图片尺寸，若要更大的尺寸，可以自己修改，根据自身需求和服务器性能决定


switch ($style) {
    case 'svg':
        qrCode::svg($data, $size, $margin, $level, $saveAndPrint, false, $back_color, $fore_color);
        break;
    case 'eps':
        qrCode::eps($data, $size, $margin, $level, $saveAndPrint, false, $back_color, $fore_color);
        break;
    case 'text':
        $text = qrCode::text($data, $size, $margin, $level, false);
        echo json_encode($text);
        break;
    default:
        qrCode::png($data, $size, $margin, $level, $saveAndPrint, false, $back_color, $fore_color);
}

class qrCode {

    /**
     * 生成二维码
     * @param $text 数据; $size 尺寸; $margin边距; $level = 'L';// 纠错级别：L、M、Q、H $saveandprint = true;// true直接输出屏幕  false 保存到文件中 $outfile 为false直接输出至屏幕;
     * $back_color = 0xFFFFFF;//白色底色 $fore_color = 0x000000;//黑色二维码色 若传参数要hexdec处理，如 $fore_color = str_replace('#','0x',$fore_color); $fore_color = hexdec('0xCCCCCC');
     */
    public static function png($text, $size = 10, $margin = 1, $level = 'L', $saveandprint=true, $outfile = false, $back_color = 0xFFFFFF, $fore_color = 0x000000)
    {
        require_once 'php/phpqrcode.php';

        \LitePhpLib\QRcode::png($text, $outfile, $level, $size, $margin, $saveandprint, $back_color, $fore_color);

    }

    public static function svg($text, $size = 10, $margin = 1, $level = 'L', $saveandprint=true, $outfile = false, $back_color = 0xFFFFFF, $fore_color = 0x000000)
    {
        require_once 'php/phpqrcode.php';

        \LitePhpLib\QRcode::svg($text, $outfile, $level, $size, $margin, $saveandprint, $back_color, $fore_color);
    }

    public static function eps($text, $size = 10, $margin = 1, $level = 'L', $saveandprint=true, $outfile = false, $back_color = 0xFFFFFF, $fore_color = 0x000000)
    {
        require_once 'php/phpqrcode.php';

        \LitePhpLib\QRcode::eps($text, $outfile, $level, $size, $margin, $saveandprint, $back_color, $fore_color);
    }

    public static function text($text, $size = 10, $margin = 1, $level = 'L', $outfile = false)
    {
        require_once 'php/phpqrcode.php';
        
        return \LitePhpLib\QRcode::text($text, $outfile, $level, $size, $margin);
    }

}