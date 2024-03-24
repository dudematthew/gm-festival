<?php

namespace Dudematthew\GmFestival;

use Bramus\Router\Router as BramusRouter;
use Dudematthew\GmFestival\Controllers\ControllerInterface;
use Dudematthew\GmFestival\Controllers\HomeController;
use Dudematthew\GmFestival\Controllers\UserController;

class Router {
    private $router;

    public function __construct() {
        $this->router = new BramusRouter();
        $this->setup();
    }

    public function setup() {
        // Instantiate controllers
        $controllers = [
            new HomeController(),
            new UserController(),
        ];

        // Register routes from each controller
        foreach ($controllers as $controller) {
            if ($controller instanceof ControllerInterface) {
                $controller->registerRoutes($this->router);
            }
        }

        $this->router->run();
    }

    public function getRouter() {
        return $this->router;
    }
}
