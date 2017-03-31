import hello from './hello';

function main() {
    var args = process.argv;
    if (args[2] && args[2] === '--v' ) {
        console.log('Es6CliSkeleton - version 1.0.0');
    } else {
        console.log(hello);
    }
}

main();
