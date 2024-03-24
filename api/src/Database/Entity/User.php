<?php

namespace Dudematthew\GmFestival\Database\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="Dudematthew\GmFestival\Repository\UserRepository")
 * @ORM\Table(name="users")
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $displayName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $profilePictureLink;

    // Add getters and setters for your properties
}

