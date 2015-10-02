# SymfonyLibrinfoDecoratorBundle

A basic decorator for various projects

## Installation

### Prerequiresites

having a working Symfony2 environment

* having created a working Symfony2 app (including your DB and your DB link)
* having composer installed (here in /usr/local/bin/composer, having /usr/local/bin in your path)

Optional:

* having libre-informatique/core-bundle installed, or if not, follow the README instructions of the Core bundle

### Downloading

From your project root directory:

```$ composer require libre-informatique/crm-bundle dev-master```

### The Sonata bundles

Do not forget to configure the SonataAdminBundle. Find examples in the [libre-informatique/crm-bundle](https://github.com/libre-informatique/SymfonyLibrinfoCRMBundle#the-sonata-bundles) documentation.

### The Libre Informatique bundles

Do not forget to configure the LibrinfoCoreBundle. Find examples in the [libre-informatique/core-bundle](https://github.com/libre-informatique/SymfonyLibrinfoCRMBundle#the-libre-informatique-bundles) documentation.

### Finish

Publish the assets :

```$ app/console assets:install --symlink```
