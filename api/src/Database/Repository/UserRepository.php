<?php

namespace Dudematthew\GmFestival\Database\Repository;

use Dudematthew\GmFestival\Database\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends EntityRepository {
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager) {
        $this->entityManager = $entityManager;
        parent::__construct($entityManager, $entityManager->getClassMetadata(User::class));
    }

    // Example method to create a new user
    public function create(User $user): User {
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $user;
    }

    // Example method to update an existing user
    public function update(User $user): User {
        $this->entityManager->flush();
        return $user;
    }

    // Example method to remove a user
    public function remove(User $user): void {
        $this->entityManager->remove($user);
        $this->entityManager->flush();
    }

    // Example method to find a user by ID
    public function find($id, $lockMode = null, $lockVersion = null): ?User {
        return $this->entityManager->find(User::class, $id, $lockMode, $lockVersion);
    }

}
