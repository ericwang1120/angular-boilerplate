[![Build Status](https://travis-ci.org/ericwang1120/angular-boilerplate.svg)](https://travis-ci.org/ericwang1120/angular-boilerplate)
[![GitHub version](https://badge.fury.io/gh/ericwang1120%2Fangular-boilerplate.svg)](https://badge.fury.io/gh/ericwang1120%2Fangular-boilerplate)


### About
The boilerplate is based on [Angular Starter](https://github.com/AngularClass/angular-starter). 

### External Functionalities

External libraries are provided:

- [flexbox grid](https://github.com/kristoferjoseph/flexboxgrid)
- [angular material](https://material.angular.io/)
- [font-awesome](http://fontawesome.io/)
- [ngrx](https://github.com/ngrx/platform)
- Generators written in [plop](https://github.com/amwmedia/plop)


### How to use

1. 
```
git clone https://github.com/ericwang1120/angular-boilerplate.git
```

2. 
```
cd angular-boilerplate
```

3. 
``` 
npm install
``` 
or  
``` 
yarn install 
```  

4. 
```
npm run start
```

### Generators
run ```npm run generate``` then select what you need.  

- container-with-ngrx: generate a container(page) module, and import ngrx module. You can choose to create the ngrx module or not.

- container-only: generate a container(page) module without ngrx module.

- ngrx-only: generate a ngrx module

- stateless-component: generate a stateless component
