module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        'number-leading-zero': 'never',
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
                ignoreTypes: [
                    //'tab'
                ]
            }
        ]
    }
};
