<?php

use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;

require_once "vendor/autoload.php";

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$_CONFIG = require 'config.php';

// Create a simple "default" Doctrine ORM configuration for Attributes
$config = ORMSetup::createAttributeMetadataConfiguration(
    paths: array(__DIR__."/src"),
    isDevMode: true,
);

$connection = DriverManager::getConnection(
    array(
        'driver' => 'pdo_mysql',
        'host' => $_CONFIG['db']['host'],
        'port' => $_CONFIG['db']['port'],
        'dbname' => $_CONFIG['db']['database'],
        'user' => $_CONFIG['db']['username'],
        'password' => $_CONFIG['db']['password'],
    ),
    $config,
);

$entityManager = new EntityManager($connection, $config);

