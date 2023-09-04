<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcd952d1164f1281ccdbff6cebf0fd254
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcd952d1164f1281ccdbff6cebf0fd254::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcd952d1164f1281ccdbff6cebf0fd254::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitcd952d1164f1281ccdbff6cebf0fd254::$classMap;

        }, null, ClassLoader::class);
    }
}