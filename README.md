# Family Tree

### Node Version

`node version - v18.16.0`\
`npm version - 9.5.1`

### Install the dependencies

```sh
npm install
```

### Add the sample data to database

```sh
npm run test
```

### Run the sample count queries

```sh
npm run test:run
```

### Create Binary

```sh
npm run create:bin
```

### Run with the binary

```sh
family-tree add person 'Amit Dhakad'
family-tree add person 'Priya Dhakad'
family-tree add person 'KK Dhakad'

family-tree add relationship father
family-tree add relationship son

family-tree connect 'Amit Dhakad' as son of 'KK Dhakad'
family-tree connect 'Priya Dhakad' as daughter of 'KK Dhakad'
```

### Run queries

```sh
family-tree count son of 'KK Dhakad'
# son of KK Dhakad: 1

family-tree count daughter of 'KK Dhakad'
# daughter of KK Dhakad: 1
```

```sh
family-tree father of 'Amit Dhakad'
# father of Amit Dhakad is KK Dhakad

family-tree father of 'Priya Dhakad'
# father of Priya Dhakad is KK Dhakad
```
