# Infinity Jump
This is very simple browser game - infinite jumper like Doodle Jump.
The objective is to get as high up as you can by jumping on platforms that disappear as they leave thebottom of the screen.
Falling is a death sentence. :smiling_imp:

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm lint` | Run Es Lint and find error and warnings code style in scr directoty for js files|
| `npm lint:write` | Run Es Lint and try fix errors |
| `npm prettier` | Run code formatting according to the established rules |
| `npm test` | Run testing js code |
| `pre-add` & `pre-commit` | Use husky git hook and run prettier, lint:write and test, when you add new git commit |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you should be able to open `http://mycoolserver.com/index.html` and play your game.
