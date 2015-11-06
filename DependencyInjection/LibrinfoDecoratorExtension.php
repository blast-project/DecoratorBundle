<?php

namespace Librinfo\DecoratorBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\Yaml\Yaml;
use Librinfo\CoreBundle\DependencyInjection\DefaultParameters;

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

        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yml');
        
        $configSonataAdmin = Yaml::parse(
            file_get_contents(__DIR__ . '/../Resources/config/bundles/sonata_admin.yml')
        );

        DefaultParameters::getInstance($container)
            ->defineDefaultConfiguration(
                $configSonataAdmin['default']
            );

//        $loader->load('decorator.yml');

//        $configSonataAdmin = Yaml::parse(
//            file_get_contents(__DIR__ . '/../Resources/config/bundles/decorator.yml')
//        );
//
//        DefaultParameters::getInstance($container)
//            ->defineDefaultConfiguration(
//                $configSonataAdmin['default']
//            );
    }
}
