<?php

namespace Dudematthew\GmFestival\Controllers;

class HomeController implements ControllerInterface
{
    public function registerRoutes(\Bramus\Router\Router $router)
    {
        $router->get('/', function() {
            echo 'Hello World!';
        });
    }
}