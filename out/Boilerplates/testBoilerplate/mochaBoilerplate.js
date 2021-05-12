"use strict";
const mochaString = `const mocha = require('mocha');
const assert = require('assert')
const fs = require('fs');


describe('Check if boilerplate is properly created', () => {
  describe('Checks if all directories are created', () => {
    // PAGES
    it('checks if pages directory exists in root', () => {
      assert.ok(fs.existsSync('./pages'))
    })

    it('checks if api directory exists within pages directory', () => {
      assert.ok(fs.existsSync('./pages/api'))
    })

    it('checks if auth directory exists within api directory', () => {
      assert.ok(fs.existsSync('./pages/api/auth'))
    })

    it('checks if checkout directory exists within api directory', () => {
      assert.ok(fs.existsSync('./pages/api/checkout'))
    })
    // PRISMA
    it('checks if prisma directory exists in root', () => {
      assert.ok(fs.existsSync('./prisma'))
    })

    it('checks if migrations directory exists within prisma directory', () => {
      assert.ok(fs.existsSync('./prisma/migrations'))
    })
    // SERVER
    it('checks if server directory exists in root', () => {
      assert.ok(fs.existsSync('./server'))
    })
    // STYLES
    it('checks if styles directory exists in root', () => {
      assert.ok(fs.existsSync('./styles'))
    })
  })

  describe('Checks if all files are created', () => {
    // ROOT
    it('checks if .env file exists in root', () => {
      assert.ok(fs.existsSync('./.env'))
    })

    it('checks if package-lock.json file exists in root', () => {
      assert.ok(fs.existsSync('./package-lock.json'))
    })

    it('checks if package.json file exists in root', () => {
      assert.ok(fs.existsSync('./package.json'))
    })

    it('checks if package.json file exists in root', () => {
      assert.ok(fs.existsSync('./package.json'))
    })

    // PAGES
    it('checks if _app.js file exists in pages directory', () => {
      assert.ok(fs.existsSync('./pages/_app.js'))
    })

    it('checks if checkout.js file exists in pages directory', () => {
      assert.ok(fs.existsSync('./pages/checkout.js'))
    })

    it('checks if index.js file exists in pages directory', () => {
      assert.ok(fs.existsSync('./pages/index.js'))
    })

    it('checks if signup.js file exists in pages directory', () => {
      assert.ok(fs.existsSync('./pages/signup.js'))
    })

    it('checks if success.js file exists in pages directory', () => {
      assert.ok(fs.existsSync('./pages/success.js'))
    })

    // PAGES/API/AUTH
    it('checks if [...nextauth].js file exists in auth directory', () => {
      assert.ok(fs.existsSync('./pages/api/auth/[...nextauth].js'))
    })
    // PAGES/API/CHECKOUT
    it('checks if session.js file exists in checkout directory', () => {
      assert.ok(fs.existsSync('./pages/api/checkout/session.js'))
    })

    // PRISMA
    it('checks if dev.db file exists in prisma directory', () => {
      assert.ok(fs.existsSync('./prisma/dev.db'))
    })

    it('checks if schema.prisma file exists in prisma directory', () => {
      assert.ok(fs.existsSync('./prisma/schema.prisma'))
    })

    // SERVER
    it('checks if context.ts file exists in server directory', () => {
      assert.ok(fs.existsSync('./server/context.ts'))
    })

    it('checks if prismaGraphql file exists in server directory', () => {
      assert.ok(fs.existsSync('./server/prismaGraphql.ts'))
    })

    it('checks if server file exists in server directory', () => {
      assert.ok(fs.existsSync('./server/server.ts'))
    })

    // STYLES
    it('checks if global.css file exists in styles directory', () => {
      assert.ok(fs.existsSync('./styles/global.css'))
    })
  })
})
`;
module.exports = mochaString;
//# sourceMappingURL=mochaBoilerplate.js.map