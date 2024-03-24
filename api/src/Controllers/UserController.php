<?php

namespace Dudematthew\GmFestival\Controllers;

class UserController implements ControllerInterface
{
    public function registerRoutes(\Bramus\Router\Router $router)
    {
        $router->get('/user/(\d+)', function($id) {
            echo "User ID: " . htmlentities($id);
        });
    }
}
