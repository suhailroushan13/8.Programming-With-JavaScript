function box() {
    return {
        a: 1,
        b: 2,
        get: () => {
            console.log("Hello");
           

        },
         c: () => {
             console.log("Bye");

         }
    }
}
box().c();