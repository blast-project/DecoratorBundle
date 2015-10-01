<?php

namespace Librinfo\DecoratorBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class LibrinfoDecoratorExtension extends Extension
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');
        $loader->load('decorator.yml');

        // specialize things for easy deployments about templates/layouts, giving the possibility to personalize stuff in the app/config/config.$
        $templates = $container->getParameter('sonata.admin.configuration.templates');
        $decorator = is_array($container->getParameter('librinfo_decorator')) ? $container->getParameter('librinfo_decorator') : array();
        foreach ( $decorator['templates'] as $key => $change )
        {
            if ( !isset($templates[$key]) || !is_array($change['original']) || !isset($change['modified']) )
                continue;
            if ( in_array($templates[$key], $change['original']) )
                $templates[$key] = $change['modified'];
                
            echo "$key: ".$change['modified'];
        }
        $container->setParameter('sonata.admin.configuration.templates', $templates);
    }
}
