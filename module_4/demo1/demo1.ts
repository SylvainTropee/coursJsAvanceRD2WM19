function hello(lastname: string = "coucou") : any {
    let name: string = "Sylvain";

    let number: number | string | undefined;
    number = "coucou"

    console.log(typeof number)
    return number
}

hello()


