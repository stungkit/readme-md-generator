const yargs = require('yargs')
const generateReadme = require('./cli')

yargs
  .usage('Usage: $0 <command> [options]')
  .command(
    '$0 [template]',
    'Generate README.md from a template',
    command =>
      command.positional('template', {
        desc: 'The name of template you want to use',
        default: 'default'
      }),
    args => generateReadme(args)
  )
  .help()
  .epilog(
    'for more information, find our manual at https://github.com/kefranabg/readme-cli'
  )
  .parse()