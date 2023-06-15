"use strict";

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  "@adonisjs/framework/providers/AppProvider",
  "@adonisjs/auth/providers/AuthProvider",
  "@adonisjs/bodyparser/providers/BodyParserProvider",
  "@adonisjs/cors/providers/CorsProvider",
  "@adonisjs/lucid/providers/LucidProvider",
  "@adonisjs/validator/providers/ValidatorProvider",
  "@adonisjs/drive/providers/DriveProvider",
  "@adonisjs/mail/providers/MailProvider",
  "@adonisjs/framework/providers/ViewProvider",
  "adonis-queue-pro/providers/QueueProvider"

];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = ["@adonisjs/lucid/providers/MigrationsProvider", "adonis-queue-pro/providers/CommandProvider"];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  Queue: 'Adonis/Addons/Queue',
};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [
  'Adonis/Commands/Queue:Init',
  'Adonis/Commands/Queue:Job',
  'Adonis/Commands/Queue:Work',
];


module.exports = { providers, aceProviders, aliases, commands };
