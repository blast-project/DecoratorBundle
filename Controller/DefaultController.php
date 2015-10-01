<?php

namespace Librinfo\DecoratorBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('LibrinfoDecoratorBundle:Default:index.html.twig', array('name' => $name));
    }
}
