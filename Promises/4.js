function box() {

    return {
        a: 1,
        b: 2,
        get: () => {
            console.log("Hello");

        }
    }

}
var hello = {
    get: () => {
        console.log("I am Last");

    }

}
box().get();
hello.get();