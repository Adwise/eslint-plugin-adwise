# Adwise Eslint Plugin / Configuration
This is the Eslint configuration used by Adwise internally

## Installing
1. Execute either ```npm i -d @adwise/eslint-plugin-adwise``` or ```yarn install -D @adwise/eslint-plugin-adwise```
2. Create or add the following to your ```.eslintrc``` file:
```
{
    "extends": ["plugin:adwise/recommended"],
    "rules": {}
}    
```


### Configs
| Config      | Used For                   |
|-------------|----------------------------|
| recommended | General Web/JS development |
| typescript  | Typescript projects        |
| react       | React specific rules       |
| vue         | Vue specific rules         |
