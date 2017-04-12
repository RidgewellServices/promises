import hello from './hello';

const sayHello = (message) => {
  console.log(message);
};

const main = () => {
    var args = process.argv;
    if (args[2] && args[2] === '--v' ) {
        console.log('Es6CliSkeleton - version 1.0.0');
    } else {
        hello().then(res => sayHello(res));
    }
};

main();
