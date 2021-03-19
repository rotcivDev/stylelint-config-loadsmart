# stylelint-config-loadsmart
A default configuration for Stylelint to be used on all projects that have CSS code in the company (or whoever wants to use it)

## Usage

1. Install stylelint with (preferably as a dev dependency):
```shell
# with yarn
yarn add -D stylelint

# with npmv
npm install stylelint
```

2. Install this config preset (also preferably as a dev dependency):
```shell
# with yarn
yarn add -D @loadsmart/stylelint-config

# with npmv
npm install --save-dev @loadsmart/stylelint-config
```

3. Extend it in your `.stylelintrc.*` file like so:
```json
{
    [...]
    "extends": [..., "@loadsmart/stylelint-config", ...],
    [...]
}
```

Keep in mind that rules that come **last** in the array will have **higher priority** and override the others that came before it.

It is recommended to have this ruleset in the first spot, and project specific rule sets after it (which should be kept to a minimum ideally).

## About this preset

This preset includes a few of the more important presets for stylelint and should be considered the standard for Loadsmart.

This preset includes/extends:

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order)
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

And uses the following plugins:

- [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)

Major shout-outs and thanks to the contributors and maintainers of each of these projects! :celebrate:

For more info, take a look at the default export in the `index.js` file. The config there is pretty self-explanatory.

## Contributing

To contribute, simply [open a PR](https://github.com/loadsmart/stylelint-config-loadsmart/pulls).

For major rule changes that can affect everyone, it is advised to first start an RFC to discuss it.

For issues, report them straight to the github [repo's issues page](https://github.com/loadsmart/stylelint-config-loadsmart/issues)